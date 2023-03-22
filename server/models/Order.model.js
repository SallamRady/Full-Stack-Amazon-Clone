const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  userId: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: true,
  },
  items: [
    {
      productId: {
        type: mongoose.Types.ObjectId,
        ref: "Product",
        required: true,
      },
      quantity: { type: Number },
    },
  ],
});

module.exports = mongoose.model("Order", orderSchema);
