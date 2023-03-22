/*****************     import Modules      *********************/
const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const AdminRoutes = require("./routes/admin/index");
const ClientRoutes = require("./routes/client/index");
const multerConfig = require("./utils/image.uploader");
const User = require("./models/User.model");

/******   create our express server application.  **************/
const app = express();

/*****************   Server Configration   *********************/
const port = process.env.PORT || 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("./images"));
app.use(multerConfig);

/***************   temporary step  **********************/
app.use((req, res, next) => {
  User.findOne()
    .then((_user) => {
      if (!_user) {
        let user = new User({
          name: "Sallam Rady",
          email: "sallam@gmail.com",
          password: "asd",
          address: "641ad9fae94a7412f545e7a2",
          cart: { items: [] },
        });
        return user.save();
      }
      return _user;
    })
    .then((user) => {
      req.user = user;
      next();
    })
    .catch((err) => {
      console.log("error durring register user.", err);
    });
});

/***************   Routes  **********************/
app.get("/", (req, res) => res.json("Hello in Amazon Clone!"));
app.use(ClientRoutes);
app.use("/admin", AdminRoutes);

/******   Listen to incomming requests  **************/
mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected Successfully :)");
    app.listen(port, () =>
      console.log(`Example app listening on port ${port}!`)
    );
  })
  .catch((err) => {
    console.log("Error in DB Connection:", err);
  });
