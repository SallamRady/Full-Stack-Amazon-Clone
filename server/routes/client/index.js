const express = require("express");
const router = express.Router();
const CartRouter = require("./Cart.route");
const OrderRouter = require("./Order.route");
const AuthRouter = require('./Auth.route');
const HomeRouter = require('./Home.route');

router.use(AuthRouter);
router.use(CartRouter);
router.use(OrderRouter);
router.use(HomeRouter);

module.exports = router;
