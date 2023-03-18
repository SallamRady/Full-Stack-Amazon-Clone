const express = require("express");
const router = express.Router();
const productController = require("../../controllers/admin/Product.controller");

// route : /admin/create/product - create new Product
router.post("/create/product",productController.createProduct);

// route : /admin/products - fetch Products
router.get("/products",productController.getProducts);

// route : /admin/edit/product - edit Product
router.put("/edit/product",productController.updateProduct);

// route : /admin/delete/product - delete Product
router.delete("/delete/product",productController.deleteProduct);

module.exports = router;
