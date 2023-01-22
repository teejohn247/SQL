
import mysqlConnection from "../config/database";



const specificRequest = async (req, res) => {
    try{

        mysqlConnection.query(
            `SELECT * FROM wp_wpforms_entries WHERE form_id = ${585} AND entry_id = ${req.params.id}`,
            (err, results, fields) => {

              if (!err) {



                var tot=[];

                   results.map((result, index) => {

                    console.log(result.date)

                  let resp = result.fields.replace(/\*/g,"")
                  console.log(resp)
                  let tt = Object.values(JSON.parse(resp))
                  tt.push({
                    name: "date",
                    value:result.date})

                    tt.push({
                        name: "entry_id",
                        value:result.entry_id})

                        tt.push({
                            name: "status",
                            value:result.status})
                    //   tot.push(Object.values(JSON.parse(resp)))
                    const resv = tt.reduce((acc, {name, value, id}) => ({ // obtain the kys from the current object using destructuring assignment
                    ...acc, // merge the current object stored in acc into the current object `{}` we're building
                    // [id]: { 
                        [name]: value
                    // }
                    }), {});

                    tot.push(resv)
    
                })


                res.send(tot);
              } else {
                console.log(err);
              }
            }
        );

    } catch (error) {
        res.status(500).json({
            status: 500,
            success: false,
            error: error
        })
    }
};

export default specificRequest;