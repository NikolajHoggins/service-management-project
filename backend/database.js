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

//Create admin table;
con.query(
  "CREATE TABLE IF NOT EXISTS admins(id int AUTO_INCREMENT PRIMARY KEY, email varchar(255) NOT NULL, password varchar(255) NOT NULL);",
  (err) => {
    if (err) console.log("ERROR: \n", err);
  }
);

//Create customers table;
con.query(
  "CREATE TABLE IF NOT EXISTS customers(id int AUTO_INCREMENT PRIMARY KEY, name varchar(255), email varchar(255) NOT NULL, password varchar(255) NOT NULL, address varchar(255), phone_number varchar(255));",
  (err) => {
    if (err) console.log("ERROR: \n", err);
  }
);

con.query(
  "CREATE TABLE IF NOT EXISTS products(id int AUTO_INCREMENT PRIMARY KEY,name varchar(255),description varchar(255),price double,picture varchar(255));",
  (err) => {
    if (err) console.log("ERROR: \n", err);
  }
);

con.query(
  "CREATE TABLE IF NOT EXISTS orders(id int AUTO_INCREMENT PRIMARY KEY,date varchar(255),customerid int,FOREIGN KEY (customerid) REFERENCES customers(id));",
  (err) => {
    if (err) console.log("ERROR: \n", err);
  }
);

con.query(
  "CREATE TABLE IF NOT EXISTS orderdetails(id int AUTO_INCREMENT PRIMARY KEY,orderid int,productid int,quantity int,FOREIGN KEY (orderid) REFERENCES customers(id),FOREIGN KEY (productid) REFERENCES products(id));",
  (err) => {
    if (err) console.log("ERROR: \n", err);
  }
);

module.exports.con = con;
