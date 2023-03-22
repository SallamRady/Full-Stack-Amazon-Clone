const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: Schema.Types.String,
    required: true,
  },
  email: {
    type: Schema.Types.String,
    unique: true,
    required: true,
  },
  password: {
    type: Schema.Types.String,
    required: true,
  },
  address: {
    type: Schema.Types.ObjectId,
    ref: "Address",
  },
  cart: {
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
  },
});

userSchema.methods.addToCart = function (id) {
  let idx = this.cart.items.findIndex((item) => item.productId == id);

  if (idx >= 0) {
    this.cart.items[idx].quantity++;
  } else {
    this.cart.items.push({
      productId: id,
      quantity: 1,
    });
  }
  return this.save();
};

userSchema.methods.decreaseCartItem = function (id) {
  let idx = this.cart.items.findIndex((item) => item.productId == id);

  if (idx >= 0) {
    this.cart.items[idx].quantity--;
    if (this.cart.items[idx].quantity == 0) {
      return this.deleteCartItem(id);
    }
  }
  return this.save();
};

userSchema.methods.deleteCartItem = function (id) {
  this.cart.items = this.cart.items.filter((item) => item.productId != id);
  return this.save();
};

module.exports = mongoose.model("User", userSchema);
