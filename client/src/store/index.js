import { createStore } from "vuex";
import dataModule from "./modules/data/index";
import authModule from "./modules/auth/index";
import cartModule from "./modules/cart/index";

const store = createStore({
  modules: {
    data: dataModule,
    auth: authModule,
    cart: cartModule,
  },
});

export default store;
