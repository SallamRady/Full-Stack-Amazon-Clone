const fs = require("fs");

/**
 * this method for delete/remove files
 * @param {path} path refer to file path
 */
module.exports = (path) => {
  fs.unlink(path, (err) => {
    if (err) {
      console.log("error in delete image :", err);
      throw err;
    }
  });
};
