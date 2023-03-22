const express = require("express");
const router = express.Router();
const check = require("express-validator").check;
const categoryController = require("../../controllers/admin/Category.controller");

// route : /admin/create/category - create new Category
router.post(
  "/create/category",
  /* validate incomming data */
  check("title").notEmpty().withMessage("Title is required!"),
  /*    handle request method   */
  categoryController.createCategory
);

// route : /admin/categories - create new Category
router.get("/categories", categoryController.getCategories);

// route : /admin/edit/category - edit Category
router.put(
  "/edit/category",
  /* validate incomming data */
  check("id").exists().notEmpty().withMessage("id is required!"),
  check("title").notEmpty().withMessage("Title is required!"),
  /*    handle request method   */
  categoryController.updateCategory
);

// route : /admin/delete/category - delete Category
router.delete(
  "/delete/category",
  /* validate incomming data */
  check("id").exists().notEmpty().withMessage("id is required!"),
  /*    handle request method   */
  categoryController.deleteCategory
);

module.exports = router;
