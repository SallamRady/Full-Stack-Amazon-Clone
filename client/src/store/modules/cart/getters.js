export default {
  cart(state) {
    return state.items;
  },
  cartQuantity(state) {
    return state.totalQuantity;
  },
  totalAmount(state) {
    return state.totalMount;
  },
};
