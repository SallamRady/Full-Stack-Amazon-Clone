const express = require("express");
const router = express.Router();
const check = require("express-validator").check;
const OrderController = require("../../controllers/client/Order.controller");
const isAuthGuard = require("../../guards/IsAuth.guard");

router.post(
  "/orders",
  /* Guard our route :) */
  isAuthGuard,
  /* validate incomming data */
  check("userId").exists().notEmpty().withMessage("userId is required!"),
  /*    handle request method   */
  OrderController.orders
);

router.post(
  "/checkout",
  /* Guard our route :) */
  isAuthGuard,
  /* validate incomming data */
  check("userId").exists().notEmpty().withMessage("userId is required!"),
  /*    handle request method   */
  OrderController.checkout
);

module.exports = router;
