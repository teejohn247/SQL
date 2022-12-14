
import mysqlConnection from "../config/database";



const fetchCategories = async (req, res) => {
    try{

        mysqlConnection.query(
            "SELECT * FROM wp_sickness_categories",
            (err, results, fields) => {
              if (!err) {
                res.send(results);
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

export default fetchCategories;