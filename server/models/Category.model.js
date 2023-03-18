const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const categorySchema = new Schema({
  title: {
    type:Schema.Types.String,
    required:true,
    unique:true
  }
});

module.exports = mongoose.model("Category", categorySchema);
