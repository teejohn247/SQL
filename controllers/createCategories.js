
import mysqlConnection from "../config/database";



const createCategories = async (req, res) => {
    try{


        const { category_name } = req.body;

        const sql = `INSERT INTO wp_sickness_categories ( category_name ) VALUES ( "${category_name}" )`;
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

    } catch (error) {
        res.status(500).json({
            status: 500,
            success: false,
            error: error
        })
    }
};

export default createCategories;