const express = require("express");
const router = express.Router();
const productRoutes = require("./product.route");
const categoryRoutes = require("./Category.route");
const ownerRoutes = require("./Owner.route");
const isAuthGuard = require("../../guards/IsAuth.guard");

router.use(isAuthGuard, productRoutes);
router.use(isAuthGuard, categoryRoutes);
router.use(isAuthGuard, ownerRoutes);

module.exports = router;
