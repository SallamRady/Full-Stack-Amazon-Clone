const express = require("express");
const router = express.Router();
const HomeController = require("../../controllers/client/Home.controller");
const check = require("express-validator").check;

router.get("/categories", HomeController.getCategories);

router.get("/products", HomeController.getProducts);

router.post(
  "/search",
  check("searchQuery")
    .exists()
    .notEmpty()
    .withMessage("searchQuery is required!"),
  check("categoryId")
    .exists()
    .notEmpty()
    .withMessage("categoryId is required!"),
  HomeController.search
);

module.exports = router;
