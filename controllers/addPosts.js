
import mysqlConnection from "../config/database";



const addPosts = async (req, res) => {
    try{

        const sql = `INSERT INTO wp_terms ( term_id, name, slug, term_group ) VALUES (${6}, 'categorized', 'categorized', 1 )`;
        mysqlConnection.query(sql, function (err, result) {
            if (err) {
                res.status(400).json({
                    status: 400,
                    success: false,
                    error: err
                })
            }
            res.status(200).json({
                status: 200,
                success: true,
                data: result
            })
          });

    } catch (error) {
        res.status(500).json({
            status: 500,
            success: false,
            error: error
        })
    }
};

export default addPosts;