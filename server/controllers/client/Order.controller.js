const User = require("../../models/User.model");
const Order = require("../../models/Order.model");
const validationResult = require("express-validator").validationResult;

module.exports.orders = (req, res, next) => {
  // check incomming data is valid?
  let errors = validationResult(req).array();
  if (errors.length > 0) {
    let response = {
      status: "Validation Errors",
      errors: errors,
    };
    res.status(403).json(response);
  } else {
    //data is valid.
    let { userId } = req.body;
    User.findById(userId)
      .then((user) => {
        if (!user) {
          let response = {
            status: "Error",
            msg: "UnAuthorized",
          };
          res.status(401).json(response);
        } else {
          Order.find({ userId: userId }).then((orders) => {
            let response = {
              status: "Success",
              msg: "user orders are fetched successfully",
              orders: orders,
            };
            res.status(200).json(response);
          });
        }
      })
      .catch((err) => {
        let response = {
          status: "Error",
          msg: err.message,
          error: err,
        };
        res.status(500).json(response);
      });
  }
};

module.exports.checkout = (req, res, next) => {
  // check incomming data is valid?
  let errors = validationResult(req).array();
  if (errors.length > 0) {
    let response = {
      status: "Validation Errors",
      errors: errors,
    };
    res.status(403).json(response);
  } else {
    //data is valid.
    let { userId } = req.body;
    User.findById(userId)
      .then((user) => {
        if (!user) {
          let response = {
            status: "Error",
            msg: "UnAuthorized",
          };
          res.status(401).json(response);
        } else {
          let order = new Order({
            userId: userId,
            items: user.cart.items,
          });
          order.save().then(() => {
            user.cart.items = [];
            user.save().then((result) => {
              let response = {
                status: "Success",
                msg: "Checkout Operation done successfully",
                result: result,
              };
              res.status(200).json(response);
            });
          });
        }
      })
      .catch((err) => {
        let response = {
          status: "Error",
          msg: err.message,
          error: err,
        };
        res.status(500).json(response);
      });
  }
};
