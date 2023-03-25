const express = require("express");
const router = express.Router();
const check = require("express-validator").check;
const CartController = require("../../controllers/client/Cart.controller");
const isAuthGuard = require("../../guards/IsAuth.guard");

router.post(
  "/addToCart",
  /* Guard our route :) */
  isAuthGuard,
  /* validate incomming data */
  check("userId").exists().notEmpty().withMessage("userId is required!"),
  check("productId").exists().notEmpty().withMessage("productId is required!"),
  /*    handle request method   */
  CartController.addToCart
);

router.post(
  "/decreasedFromCart",
  /* Guard our route :) */
  isAuthGuard,
  /* validate incomming data */
  check("userId").exists().notEmpty().withMessage("userId is required!"),
  check("productId").exists().notEmpty().withMessage("productId is required!"),
  /*    handle request method   */
  CartController.decreaseCartItem
);

router.post(
  "/cart",
  /* Guard our route :) */
  isAuthGuard,
  /* validate incomming data */
  check("userId").exists().notEmpty().withMessage("userId is required!"),
  /*    handle request method   */
  CartController.cart
);

module.exports = router;
