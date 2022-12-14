
import mysqlConnection from "../config/database";



const fetchquestions = async (req, res) => {
    try{


        

        mysqlConnection.query(
            `SELECT wp_questions.question_id, wp_questions.question, question_options.options, question_options.option_type
            FROM wp_questions INNER JOIN question_options ON wp_questions.question_id=question_options.question_id`,
            (err, results, fields) => {
              if (!err) {
                res.status(200).json({
                    status: 200,
                    success: true,
                    data: results
                })
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

export default fetchquestions;





