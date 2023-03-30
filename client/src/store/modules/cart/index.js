import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

export default {
  state() {
    return {
      items: [],
      totalQuantity: 0,
      totalMount: 0,
    };
  },
  getters,
  actions,
  mutations,
};
