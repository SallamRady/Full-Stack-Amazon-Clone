const express = require("express");
const router = express.Router();
const categoryController = require("../../controllers/admin/Category.controller");

// route : /admin/create/category - create new Category
router.post("/create/category", categoryController.createCategory);

// route : /admin/categories - create new Category
router.get("/categories", categoryController.getCategories);

// route : /admin/edit/category - edit Category
router.put("/edit/category", categoryController.updateCategory);

// route : /admin/delete/category - delete Category
router.delete("/delete/category", categoryController.deleteCategory);

module.exports = router;
