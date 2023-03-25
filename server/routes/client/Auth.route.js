const express = require("express");
const router = express.Router();
const check = require("express-validator").check;
const AuthController = require("../../controllers/client/Auth.controller");

router.post(
  "/signup",
  /* validate incomming data */
  check("name").exists().notEmpty().withMessage("name is required!"),
  check("email").isEmail().withMessage("Email is invalid"),
  check("password")
    .exists()
    .notEmpty()
    .isLength({ min: 6 })
    .withMessage("password contain at least 6 chars."),
  check("confirmPassword").custom((value, { req }) => {
    if (value === req.body.password) return true;
    throw new Error("Password confirmation does not match password");
  }),
  check("country").exists().notEmpty().withMessage("country is required!"),
  check("state").exists().notEmpty().withMessage("state is required!"),
  check("city").exists().notEmpty().withMessage("city is required!"),
  check("street").exists().notEmpty().withMessage("street is required!"),
  check("postalCode")
    .exists()
    .notEmpty()
    .isNumeric()
    .withMessage("postalCode is required and must be numeric!"),
  /*    handle request method   */
  AuthController.signup
);

router.post(
  "/signin",
  /* validate incomming data */
  check("email").isEmail().withMessage("Email is invalid"),
  check("password").exists().notEmpty().withMessage("password is required!"),
  /*    handle request method   */
  AuthController.signin
);

module.exports = router;
