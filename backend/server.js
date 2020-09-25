const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const db = require("./database.js").con;
require("dotenv").config();

app.use(cors());

//We put "/" at the top, to allow access without authorization key
app.get("/", (req, res) => {
  return res.status(200).json({ error: "Successfull request to backend" });
});

// parse application/json
app.use(bodyParser.json());

//Middleware to check api key
app.use(function (req, res, next) {
  if (!req.headers.authorization) {
    return res.status(403).json({ error: "No credentials sent!" });
  }
  if (req.headers.authorization !== process.env.API_KEY) {
    return res.status(403).json({ error: "Invalid credentials" });
  }
  next();
});

//Usershit

app.post("/login", (req, res) => {
  db.query(
    `SELECT * FROM users WHERE email = '${req.body.email}' AND password = '${req.body.password}'`,
    (err, result) => {
      if (err) res.sendStatus(500);
      if (result.length) {
        res.json({ status: "success", user: result });
      } else if (result.length === 0) {
        res.json({ status: "error", error: "invalid login" });
      } else {
        res.sendStatus(500);
      }
    }
  );
});

app.post("/register", (req, res) => {
  db.query(
    `INSERT INTO users(email, password) VALUES ('${req.body.email}', '${req.body.password}');`,
    (err, result) => {
      if (err) {
        res.json({ status: "error", error: "Email taken" });
      } else {
        res.json({ status: "success" });
      }
    }
  );
});

//add product
app.post("/addProduct", (req, res) => {
  //Check if user is admin
  db.query(
    `INSERT INTO products(name, description, price, picture) VALUES ('${req.body.name}' , '${req.body.description}', '${req.body.price}', '${req.body.picture}')`,
    (err) => {
      console.log(err);
    }
  );
  res.sendStatus(200);
});

//Get products
app.get("/getProducts", (req, res) => {
  db.query(`SELECT * FROM products`, (err, result) => {
    if (result) {
      res.send(result);
    } else if (err) {
      res.status(500).json({ error: err });
    }
  });
});

app.listen(process.env.APP_PORT ?? 8000, () => {
  console.log(`Example app listening on port ${process.env.APP_PORT ?? 8000}!`);
});
