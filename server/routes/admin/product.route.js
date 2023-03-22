const express = require("express");
const router = express.Router();
const check = require("express-validator").check;
const productController = require("../../controllers/admin/Product.controller");

// route : /admin/create/product - create new Product
router.post(
  "/create/product",
  /* validate incomming data */
  check("title").notEmpty().withMessage("Title is required!"),
  check("description").notEmpty().withMessage("Description is required!"),
  check("stockQuantity").isNumeric().withMessage("Value must be Numeric"),
  check("price").isNumeric().withMessage("Value must be Numeric"),
  check("ownerID").exists().withMessage("ownerID is required"),
  check("categoryID").exists().withMessage("categoryID is required"),
  /*    handle request method   */
  productController.createProduct
);

// route : /admin/products - fetch Products
router.get("/products", productController.getProducts);

// route : /admin/edit/product - edit Product
router.put(
  "/edit/product",
  /* validate incomming data */
  check("id").exists().notEmpty().withMessage("Id is required"),
  check("title").notEmpty().withMessage("Title is required!"),
  check("description").notEmpty().withMessage("Description is required!"),
  check("stockQuantity").isNumeric().withMessage("Value must be Numeric"),
  check("price").isNumeric().withMessage("Value must be Numeric"),
  check("ownerID").exists().withMessage("ownerID is required"),
  check("categoryID").exists().withMessage("categoryID is required"),
  /*    handle request method   */
  productController.updateProduct
);

// route : /admin/delete/product - delete Product
router.delete(
  "/delete/product",
  /* validate incomming data */
  check("id").exists().notEmpty().withMessage("Id is required"),
  productController.deleteProduct
);

module.exports = router;
