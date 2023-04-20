
import mysqlConnection from "../config/database";



const user = async (req, res) => {
    try{

        const { email } = req.params;

        mysqlConnection.query(
            `SELECT * FROM users WHERE email ="${email}"`,
            (err, results, fields) => {

              if (!err) {

                if(results.length > 0){
                    res.status(200).json({
                        status: 200,
                        success: true,
                        data: results
                    })
                }else{

                    res.status(400).json({
                        status: 400,
                        success: false,
                        data: "Invalid Token"
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

export default user;