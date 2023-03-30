const User = require("../../models/User.model");
const Address = require("../../models/Address.model");
const validationResult = require("express-validator").validationResult;
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { response } = require("express");

module.exports.signup = (req, res, next) => {
  // check incomming data is valid?
  let errors = validationResult(req).array();
  if (errors.length > 0) {
    let response = {
      status: "Validation Errors",
      errors: errors,
    };
    return res.status(403).json(response);
  } else {
    //data is valid.
    let { name, email, password, country, state, city, postalCode, street } =
      req.body;
    let addressId;
    let address = new Address({
      country,
      state,
      city,
      street,
      postalCode,
    });

    address
      .save()
      .then((_address) => {
        addressId = _address._id;
        bcrypt
          .hash(password, 12)
          .then((hashedPassword) => {
            let user = new User({
              name,
              email,
              password: hashedPassword,
              address: addressId,
              cart: { items: [] },
            });

            user
              .save()
              .then((result) => {
                let response = {
                  status: "Success",
                  msg: "Sign Up done successfully.",
                  result: result,
                };
                return res.status(200).json(response);
              })
              .catch((err) => {
                let response = {
                  status: "Error",
                  msg: err.message,
                  error: err,
                };
                return res.status(500).json(response);
              });
          })
          .catch((err) => {
            let response = {
              status: "Error",
              msg: err.message,
              error: err,
            };
            return res.status(500).json(response);
          });
      })
      .catch((err) => {
        let response = {
          status: "Error",
          msg: err.message,
          error: err,
        };
        return res.status(500).json(response);
      });
  }
};

module.exports.signin = (req, res, next) => {
  // check incomming data is valid?
  let errors = validationResult(req).array();

  if (errors.length > 0) {
    let response = {
      status: "Validation Errors",
      errors: errors,
    };
    return res.status(403).json(response);
  } else {
    //data is valid.
    let { email, password } = req.body;
    User.findOne({ email: email })
      .then((user) => {
        if (!user) {
          let response = {
            status: "Error",
            msg: "Invalid email or password.",
          };
          return res.status(401).json(response);
        } else {
          bcrypt.compare(password, user.password).then((isMatch) => {
            if (!isMatch) {
              let response = {
                status: "Error",
                msg: "Invalid email or password.",
              };
              return res.status(401).json(response);
            } else {
              let token = jwt.sign({ ...user }, "somesecret101");
              return res.status(200).json({ token });
            }
          });
        }
      })
      .catch((err) => {
        let response = {
          status: "Error",
          msg: err.message,
          error: err,
        };
        return res.status(500).json(response);
      });
  }
};

module.exports.logout = (req, res, next) => {
  // check incomming data is valid?
  let errors = validationResult(req).array();

  if (errors.length > 0) {
    let response = {
      status: "Validation Errors",
      errors: errors,
    };
    return res.status(403).json(response);
  } else {
    //data is valid.
    let { userId } = req.body;
    User.findById(userId)
      .then((user) => {
        if (!user) {
          let response = {
            status: "Error",
            msg: "Invalid email or password.",
          };
          return res.status(401).json(response);
        } else {
          user.cart.items = [];
          user.save().then((result) => {
            let response = {
              status: "Success",
              msg: "User Logged out successfully.",
              result: result,
            };
            return res.status(200).json(response);
          });
        }
      })
      .catch((err) => {
        let response = {
          status: "Error",
          msg: err.message,
          error: err,
        };
        return res.status(500).json(response);
      });
  }
};
