
import mysqlConnection from "../config/database";



const updateStatus = async (req, res) => {
    try{

        const { entry_id, status} = req.body;

        mysqlConnection.query(
            `UPDATE wp_wpforms_entries SET status="${status}" WHERE form_id = ${585} AND entry_id= ${entry_id}`,
            (err, results, fields) => {

                console.log(results)

              if (!err) {

                    res.status(200).json({
                        status: 200,
                        success: true,
                        data: results
                    })
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

export default updateStatus;