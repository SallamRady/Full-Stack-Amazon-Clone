const express = require("express");
const router = express.Router();
const check = require("express-validator").check;
const OrderController = require("../../controllers/client/Order.controller");

router.post(
  "/orders",
  /* validate incomming data */
  check("userId").exists().notEmpty().withMessage("userId is required!"),
  /*    handle request method   */
  OrderController.orders
);

router.post(
    "/checkout",
    /* validate incomming data */
    check("userId").exists().notEmpty().withMessage("userId is required!"),
    /*    handle request method   */
    OrderController.checkout
  );

module.exports = router;
