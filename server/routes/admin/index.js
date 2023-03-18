const express = require("express");
const router = express.Router();
const productRoutes = require("./product.route");
const categoryRoutes = require("./Category.route");
const ownerRoutes = require("./Owner.route");

router.use(productRoutes);
router.use(categoryRoutes);
router.use(ownerRoutes);

module.exports = router;
