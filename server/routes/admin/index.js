const express = require("express");
const router = express.Router();
const productRoutes = require("./product.route");
const categoryRoutes = require("./Category.route");

router.use(productRoutes);
router.use(categoryRoutes);

module.exports = router;
