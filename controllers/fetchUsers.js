
import mysqlConnection from "../config/database";



const fetchUsers = async (req, res) => {
    try{
        mysqlConnection.query(
            `SELECT * FROM wp_wpforms_entries WHERE form_id = ${531}`,
            (err, results, fields) => {
              if (!err) {
                var tot= []

                results.map((result, index) => {
                  let resp = result.fields.replace(/\*/g,"")
                  let tt = Object.values(JSON.parse(resp))
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

export default fetchUsers;