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
  photo: Schema.Types.String,
  rating: [Schema.Types.Number],
});
productSchema.index({ title: "text" });
module.exports = mongoose.model("Product", productSchema);
