const mysql = require("mysql");

const mysqlConnection = mysql.createConnection({
  host: '67.225.141.109',
  user: 'jdrecyc3_wp215',
  password: '3T(SC(]4po.5Qd[7',
  database: 'jdrecyc3_wp215',
  multipleStatements: true,
});

mysqlConnection.connect((err) => {
  if (!err) {
    console.log("Connected");
  } else {
    console.log(err);
  }
});

module.exports = mysqlConnection;
