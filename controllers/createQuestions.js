
import mysqlConnection from "../config/database";



const createQuestions = async (req, res) => {
    try{


        const { category_id, question, options, options_type } = req.body;

        let category;

         await mysqlConnection.query(
            `SELECT * FROM wp_sickness_categories WHERE id = ${category_id}`,
            (err, results, fields) => {
              if (!err) {
                category = results[0].category_name
              } else {
                res.status(400).json({
                    status: 400,
                    success: false,
                    error: err
                })

              }
            }
        );

        const sql = `INSERT INTO wp_questions ( category_id, question) VALUES ( ${category_id}, "${question}" )`;
        mysqlConnection.query(sql, function (err, result) {
            console.log('err')
            if (err) {
                res.status(400).json({
                    status: 400,
                    success: false,
                    error: err
                })
                return;
            } else{

                let all_options = []

                options.map((option, index) => {
                    all_options.push([result.insertId, option, options_type])
                })

              


                let que = `INSERT INTO question_options (question_id, options, option_type) VALUES ? `;
               
                mysqlConnection.query(que, [all_options], function (err, result) {
                    if (err) {
                        res.status(400).json({
                            status: 400,
                            success: false,
                            error: err
                        })
                        return;
                } else{
                    res.status(200).json({
                        status: 200,
                        success: true,
                        data: result
                    })
                }
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

export default createQuestions;