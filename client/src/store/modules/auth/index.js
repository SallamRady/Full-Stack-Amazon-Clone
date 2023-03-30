import actions from "./actions";
import mutations from "./mutations";
import getters from "./getters";

export default {
  state() {
    return {
      token: null,
      email: null,
      isLoggedIn: false,
    };
  },
  getters,
  mutations,
  actions,
};
