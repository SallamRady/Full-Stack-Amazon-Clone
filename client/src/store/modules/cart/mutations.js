export default {
  addToCart(state, payload) {
    let { product } = payload;
    console.log("state", state);
    let idx = state.items.findIndex((item) => item._id == product._id);
    if (idx >= 0) {
      state.items[idx].quantity++;
    } else {
      product = { ...product, quantity: 1 };
      state.items.push(product);
    }
    state.totalQuantity++;
    state.totalMount += product.price;
  },
  decreaseFromCart(state, payload) {
    let { product } = payload;
    let idx = state.items.findIndex((item) => item._id == product._id);
    if (idx >= 0) {
      state.items[idx].quantity--;
      state.totalMount -= product.price;
      if (state.items[idx].quantity == 0) {
        state.items.splice(idx, 1);
      }
    }
    state.totalQuantity--;
  },
  deleteCartItem(state, payload) {
    let { product } = payload;
    let idx = state.items.findIndex((item) => item._id == product._id);
    if (idx >= 0) {
      state.totalQuantity -= state.items[idx].quantity;
      state.totalMount -= product.price * state.items[idx].quantity;
      state.items.splice(idx, 1);
    }
  },
};
