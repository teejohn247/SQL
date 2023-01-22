
import mysqlConnection from "../config/database";



const createUser = async (req, res) => {
    try{


        const { name, email, password } = req.body;

        mysqlConnection.query(
            `SELECT * FROM users WHERE email ="${email}"`,
            (err, results, fields) => {


              if (!err) {

                if(results.length > 0){
                    res.status(400).json({
                        status: 400,
                        success: true,
                        data: "User already exists"
                    })

                    return;
                }else{

                 
        const sql = `INSERT INTO users ( name, email, password ) VALUES ( "${name}", "${email}", "${password}" )`;
        mysqlConnection.query(sql, function (err, result) {
            if (err) {
                res.status(400).json({
                    status: 400,
                    success: false,
                    error: err
                })
                return;
            } else{
                console.log(result)
                res.status(200).json({
                    status: 200,
                    success: true,
                    data: result
                })
            }
        }) 

                }

                

              } else {

                res.status(500).json({
                    status: 500,
                    success: false,
                    error: err
                })

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

export default createUser;