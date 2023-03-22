const express = require("express");
const router = express.Router();
const CartRouter = require("./Cart.route");
const OrderRouter = require("./Order.route");

router.use(CartRouter);
router.use(OrderRouter);

module.exports = router;
