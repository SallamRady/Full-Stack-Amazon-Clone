const Category = require("../../models/Category.model");

/**
 * title:createCategory
 * description:[C]RUD-Create Category
 * Method:POST
 */
module.exports.createCategory = (req, res, next) => {
  let category = new Category();
  category.title = req.body.title;

  category
    .save()
    .then((cat) => {
      let response = {
        status: "Success",
        msg: "new Category created successfully.",
        category: cat,
      };
      res.status(201).json(response);
    })
    .catch((err) => {
      let response = {
        status: "Error",
        msg: err.message,
        error: err,
      };
      res.status(500).json(response);
    });
};

/**
 * title:getCategories
 * description:C[R]UD-fetch Categories
 * Method:GET
 */
module.exports.getCategories = (req, res, next) => {
  Category.find()
    .then((categories) => {
      let response = {
        status: "Success",
        msg: "Categories fetched successfully.",
        categories: categories,
      };
      res.status(200).json(response);
    })
    .catch((err) => {
      let response = {
        status: "Error",
        msg: err.message,
        error: err,
      };
      res.status(500).json(response);
    });
};

/**
 * title:editCategory
 * description:CR[U]D-Edit Category
 * Method:PUT
 */
module.exports.updateCategory = (req, res, next) => {
  let { id } = req.body;
  Category.findById(id)
    .then((category) => {
      category.title = req.body.title;

      category.save().then((cat) => {
        let response = {
          status: "Success",
          msg: "Category updated successfully.",
          category: cat,
        };
        res.status(201).json(response);
      });
    })
    .catch((err) => {
      let response = {
        status: "Error",
        msg: err.message,
        error: err,
      };
      res.status(500).json(response);
    });
};

/**
 * title:deleteCategory
 * description:CRU[D]-Delete Category
 * Method:DELETE
 */
module.exports.deleteCategory = (req, res, next) => {
  let { id } = req.body;
  Category.findByIdAndRemove(id)
    .then((cat) => {
      let response = {
        status: "Success",
        msg: "Category deleted successfully.",
        category: cat,
      };
      res.status(200).json(response);
    })
    .catch((err) => {
      let response = {
        status: "Error",
        msg: err.message,
        error: err,
      };
      res.status(500).json(response);
    });
};
