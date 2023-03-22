const Product = require("../../models/Product.model");
const deleteFile = require("../../utils/image.cleaner");
const path = require("path");
const validationResult = require("express-validator").validationResult;

/**
 * title:createProduct
 * description:[C]RUD-CreateProduct
 * Method:POST
 */
module.exports.createProduct = (req, res, next) => {
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
    let product = new Product();
    product.title = req.body.title;
    product.description = req.body.description;
    product.Owner = req.body.ownerID;
    product.Category = req.body.categoryID;
    product.stockQuantity = +req.body.stockQuantity;
    product.price = +req.body.price;
    if (req.file) product.photo = req.file.path;

    product
      .save()
      .then((pro) => {
        let response = {
          status: "Success",
          msg: "new Product created successfully.",
          product: pro,
        };
        res.status(201).json(response);
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

/**
 * title:editProducts
 * description:CR[U]D-Edit Product
 * Method:PUT
 */
module.exports.updateProduct = (req, res, next) => {
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
    let { id } = req.body;
    Product.findById(id)
      .then((product) => {
        product.title = req.body.title;
        product.description = req.body.description;
        product.Owner = req.body.ownerID;
        product.Category = req.body.categoryID;
        product.stockQuantity = +req.body.stockQuantity;
        product.price = +req.body.price;
        if (req.file) {
          if (product.photo) {
            deleteFile(path.join(__dirname, "..", "..", product.photo));
          }
          product.photo = req.file.path;
        }
        product.save().then((pro) => {
          let response = {
            status: "Success",
            msg: "Product updated successfully.",
            product: pro,
          };
          res.status(201).json(response);
        });
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
 * title:deleteProducts
 * description:CRU[D]-Delete Product
 * Method:DELETE
 */
module.exports.deleteProduct = (req, res, next) => {
  // check incomming data is valid?
  let errors = validationResult(req).array();
  if (errors.length > 0) {
    let response = {
      status: "Validation Errors",
      errors: errors,
    };
    res.status(403).json(response);
  } else {
    let { id } = req.body;
    Product.findByIdAndRemove(id)
      .then((pro) => {
        if (pro.photo) {
          deleteFile(path.join(__dirname, "..", "..", pro.photo));
        }
        let response = {
          status: "Success",
          msg: "Product deleted successfully.",
          product: pro,
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
