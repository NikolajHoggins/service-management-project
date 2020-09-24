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

app.listen(process.env.APP_PORT ?? 8000, () => {
  console.log(`Example app listening on port ${process.env.APP_PORT ?? 8000}!`);
});
