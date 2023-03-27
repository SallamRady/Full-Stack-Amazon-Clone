export default {
  setCategories(state, payload) {
    state.categories = payload.data;
    console.log("state.categories", state.categories);
  },
};
