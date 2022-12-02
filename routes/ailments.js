const express = require("express");

import addPosts from "../controllers/addPosts";
import fetchPosts from "../controllers/fetchPosts";

const router = express.Router();

router.get('/', fetchPosts);
router.post('/addPost', addPosts);


// Router.get("/", (req, res) => {
//   mysqlConnection.query(
//     "SELECT * FROM wp_posts",
//     (err, results, fields) => {
//       if (!err) {
//         res.send(results);
//       } else {
//         console.log(err);
//       }
//     }
//   );
// });

// Router.post("/", (req, res) => {
//   let qb = req.body;
//   const sql =
//     "SET @ID = ?;SET @Name = ?;SET @Position = ?;SET @Team = ?;SET @OpposingTeam = ?;SET @JodySmith = ?;SET @EricMoody = ?;SET @JohnFerguson = ?;SET @FantasyData = ?; CALL Add_or_Update_QB(@ID, @Name, @Position, @Team, @OpposingTeam, @JodySmith, @EricMoody, @JohnFerguson, @FantasyData);";
//   mysqlConnection.query(
//     sql,
//     [
//       qb.ID,
//       qb.Name,
//       qb.Position,
//       qb.Team,
//       qb.OpposingTeam,
//       qb.JodySmith,
//       qb.EricMoody,
//       qb.JohnFerguson,
//       qb.FantasyData,
//     ],
//     (err, results, fields) => {
//       if (!err) {
//         results.forEach((element) => {
//           if (element.constructor === Array) res.send(element);
//         });
//       } else {
//         console.log(err);
//       }
//     }
//   );
// });

// Router.post("/add", (req, res) => {
//   let qb = req.body;
//   const sql = `INSERT INTO wp_terms ( term_id, name, slug, term_group ) VALUES (${3}, 'categorized', 'categorized', 1 )`;
//     // "SET @ID = ?;SET @Name = ?;SET @Position = ?;SET @Team = ?;SET @OpposingTeam = ?;SET @JodySmith = ?;SET @EricMoody = ?;SET @JohnFerguson = ?;SET @FantasyData = ?; CALL Add_or_Upda;
//     mysqlConnection.query(sql, function (err, result) {
//       if (err) throw err;
//       console.log("1 record inserted");
//     });
// });
// });

// Router.delete("/:id", (req, res) => {
//   mysqlConnection.query(
//     "DELETE FROM quarterback_rankings WHERE ID= ? ",
//     [req.params.id],
//     (err, results, fields) => {
//       if (!err) {
//         res.send("The selected quarterback has been successfully deleted.");
//       } else {
//         console.log(err);
//       }
//     }
//   );
// });

export default router;