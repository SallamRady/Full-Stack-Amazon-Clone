const validationResult = require("express-validator").validationResult;
const User = require("../../models/User.model");
const Product = require("../../models/Product.model");

/**
 * title:addToCart
 * description:Add Product to Cart
 * Method:POST
 */
module.exports.addToCart = (req, res, next) => {
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
    let { productId } = req.body;
    let { userId } = req.body; //temporary
    Product.findById(productId).then((product) => {
      if (!product) {
        let response = {
          status: "Error",
          msg: "There is no product with this Id",
        };
        res.status(404).json(response);
      } else {
        User.findById(userId).then((user) => {
          if (user) {
            user
              .addToCart(productId)
              .then((result) => {
                let response = {
                  status: "Success",
                  msg: "Product added to cart successfully.",
                  result: result,
                };
                res.status(200).json(response);
              })
              .catch((err) => {
                let response = {
                  status: "Error",
                  msg: err.message,
                  error: err,
                };
                res.status(500).json(response);
              });
          } else {
            let response = {
              status: "Error",
              msg: "UnAuthorized",
            };
            res.status(401).json(response);
          }
        });
      }
    });
  }
};

/**
 * title:decreaseCartItem
 * description:decrease CartItem from Product
 * Method:POST
 */
module.exports.decreaseCartItem = (req, res, next) => {
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
    let { productId } = req.body;
    let { userId } = req.body; //temporary
    Product.findById(productId).then((product) => {
      if (!product) {
        let response = {
          status: "Error",
          msg: "There is no product with this Id",
        };
        res.status(404).json(response);
      } else {
        User.findById(userId).then((user) => {
          if (user) {
            user
              .decreaseCartItem(productId)
              .then((result) => {
                let response = {
                  status: "Success",
                  msg: "Cart Item deceased successfully.",
                  result: result,
                };
                console.log("arrived :)");
                res.status(200).json(response);
              })
              .catch((err) => {
                let response = {
                  status: "Error",
                  msg: err.message,
                  error: err,
                };
                res.status(500).json(response);
              });
          } else {
            let response = {
              status: "Error",
              msg: "UnAuthorized",
            };
            res.status(401).json(response);
          }
        });
      }
    });
  }
};

module.exports.cart = (req, res, next) => {
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
    let { userId } = req.body; //temporary
    User.findById(userId)
      .then((user) => {
        if (user) {
          let response = {
            status: "Success",
            msg: "user data include cart data fetched successfully",
            user: user,
          };
          res.status(200).json(response);
        } else {
          let response = {
            status: "Error",
            msg: "UnAuthorized",
          };
          res.status(401).json(response);
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

/**
 * title:deleteCartItem
 * description:delete CartItem from Product
 * Method:POST
 */
module.exports.deleteCartItem = (req, res, next) => {
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
    let { productId } = req.body;
    let { userId } = req.body; //temporary
    Product.findById(productId).then((product) => {
      if (!product) {
        let response = {
          status: "Error",
          msg: "There is no product with this Id",
        };
        res.status(404).json(response);
      } else {
        User.findById(userId).then((user) => {
          if (user) {
            user
              .deleteCartItem(productId)
              .then((result) => {
                let response = {
                  status: "Success",
                  msg: "Cart Item deleted successfully.",
                  result: result,
                };
                console.log("arrived :)");
                res.status(200).json(response);
              })
              .catch((err) => {
                let response = {
                  status: "Error",
                  msg: err.message,
                  error: err,
                };
                res.status(500).json(response);
              });
          } else {
            let response = {
              status: "Error",
              msg: "UnAuthorized",
            };
            res.status(401).json(response);
          }
        });
      }
    });
  }
};
