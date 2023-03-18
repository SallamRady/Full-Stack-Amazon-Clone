const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productSchema = new Schema({
  Category: {
    type: Schema.Types.ObjectId,
    ref: "Category",
  },
  Owner: {
    type: Schema.Types.ObjectId,
    ref: "Owner",
  },
  title: Schema.Types.String,
  description: Schema.Types.String,
  price: Schema.Types.Number,
  stockQuantity: Schema.Types.Number,
  rating: [Schema.Types.Number],
});

module.exports = mongoose.model("Product", productSchema);
