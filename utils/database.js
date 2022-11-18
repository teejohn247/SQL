const mysql = require("mysql");

const mysqlConnection = mysql.createConnection({
  host: '',
  user: '',
  password: '',
  database: '',
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
