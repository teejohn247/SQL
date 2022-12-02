import { createConnection } from "mysql";

import dotenv from 'dotenv';

dotenv.config();

const {
    PORT,
    HOST,
    USERNAME,
    PASSWORD,
    DATABASE
} = process.env;

const mysqlConnection = createConnection({
    port : PORT,
    host :HOST,
    user: USERNAME,
    password: PASSWORD,
    database: DATABASE,
    multipleStatements: true,
});

mysqlConnection.connect((err) => {
  if (!err) {
    console.log("Connected");
  } else {
    console.log(err);
  }
});

export default mysqlConnection;
