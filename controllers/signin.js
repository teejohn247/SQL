
import mysqlConnection from "../config/database";



const signin = async (req, res) => {
    try{

        const { email, password } = req.body;

        mysqlConnection.query(
            `SELECT * FROM users WHERE email = "${email}" AND password = "${password}"`,
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
                        data: "Incorrect email or password"
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

export default signin;