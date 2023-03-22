const express = require("express");
const router = express.Router();
const check = require("express-validator").check;
const CartController = require("../../controllers/client/Cart.controller");

router.post(
  "/addToCart",
  /* validate incomming data */
  check("userId").exists().notEmpty().withMessage("userId is required!"),
  check("productId").exists().notEmpty().withMessage("productId is required!"),
  /*    handle request method   */
  CartController.addToCart
);

router.post(
  "/decreasedFromCart",
  /* validate incomming data */
  check("userId").exists().notEmpty().withMessage("userId is required!"),
  check("productId").exists().notEmpty().withMessage("productId is required!"),
  /*    handle request method   */
  CartController.decreaseCartItem
);

router.post(
  "/cart",
  /* validate incomming data */
  check("userId").exists().notEmpty().withMessage("userId is required!"),
  /*    handle request method   */
  CartController.cart
);

module.exports = router;
