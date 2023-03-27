const Category = require("../../models/Category.model");
const Product = require("../../models/Product.model");
const validationResult = require("express-validator").validationResult;

/**
 * title:getCategories
 * description:C[R]UD-fetch Categories
 * Method:GET
 */
module.exports.getCategories = (req, res, next) => {
  Category.find()
    .then((categories) => {
      let response = {
        status: "Success",
        msg: "Categories fetched successfully.",
        categories: categories,
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
};

/**
 * title:getProducts
 * description:C[R]UD-fetch Products
 * Method:GET
 */
module.exports.getProducts = (req, res, next) => {
  Product.find()
    .then((products) => {
      let response = {
        status: "Success",
        msg: "Products fetched successfully.",
        products: products,
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
};

module.exports.search = (req, res, next) => {
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
    let { searchQuery, categoryId } = req.body;
    Product.find({ $text: { $search: searchQuery }, Category: categoryId })
      .then((products) => {
        let response = {
          status: "Success",
          msg: "Products fetched successfully.",
          products: products,
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
  }
};

module.exports.productDetails = (req, res, next) => {
  let { id } = req.params;

  Product.findById(id)
    .then((product) => {
      let response = {
        status: "Success",
        msg: "Product fetched successfully",
        product: product,
      };
      res.json(response);
    })
    .catch((err) => {
      let response = {
        status: "Error",
        msg: err.message,
        error: err,
      };
      res.status(500).json(response);
    });
};
