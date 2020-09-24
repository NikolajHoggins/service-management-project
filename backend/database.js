const mysql = require("mysql2");
require("dotenv").config();

const con = mysql.createConnection({
  host: process.env.DB_HOST ?? "localhost",
  user: process.env.DB_USER ?? "user",
  password: process.env.DB_PASSWORD ?? "pass",
  database: process.env.DB_NAME ?? "db",
});

con.connect(function (err) {
  if (err) throw err;

  console.log("Connected!");
});

con.query(
  "CREATE TABLE admins(id int AUTO_INCREMENT PRIMARY KEY, email varchar(255) NOT NULL, password varchar(255) NOT NULL);",
  (err) => {
    if (err) console.log("ERROR: \n", err);
  }
);

module.exports.con = con;
