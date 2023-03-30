const User = require("../../models/User.model");
const Order = require("../../models/Order.model");
const validationResult = require("express-validator").validationResult;
const Stripe = require("stripe");
const stripe = Stripe(
  "sk_test_51Klc7QIx0ZhOngyzxhAZMfF6pR3ey9pI4sit2KlGwUOw7jB6gg9k2u5mIfnSaNRFYswaxby5F4ktD9rWcPd43ZEf00BspazeIt"
);

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
          let totalSum = 0,
            products;
          user.populate("cart.items.productId").then((response) => {
            products = response.cart.items;
            products.forEach((pro) => {
              totalSum += pro.productId.price * pro.quantity;
            });
            stripe.checkout.sessions
              .create({
                payment_method_types: ["card"],
                line_items: products.map((pro) => {
                  return {
                    name: pro.productId.title,
                    description: pro.productId.description,
                    amount: pro.productId.price,
                    quantity: pro.quantity,
                    currency: "usd",
                  };
                }),
                success_url: "http://localhost:8080/#/checkout/success",
                cancel_url: "http://localhost:8080/#/checkout/cancel",
              })
              .then((session) => {
                let response = {
                  status: "Success",
                  msg: "Checkout Operation done successfully",
                  sessionId: session.id,
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
