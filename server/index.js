/*****************     import Modules      *********************/
const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");

/******   create our express server application.  **************/
const app = express();

/*****************   Server Configration   *********************/
const port = process.env.PORT || 3000;

/***************   Routes  **********************/
app.get("/", (req, res) => res.json("Hello in Amazon Clone!"));

/******   Listen to incomming requests  **************/
mongoose
  .connect(process.env.DB_URL,{useNewUrlParser:true,useUnifiedTopology:true})
  .then(() => {
    console.log("Connected Successfully :)");
    app.listen(port, () =>
      console.log(`Example app listening on port ${port}!`)
    );
  })
  .catch((err) => {
    console.log("Error in DB Connection:", err);
  });
