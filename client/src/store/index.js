import { createStore } from "vuex";
import dataModule from "./modules/data/index";

const store = createStore({
  modules: {
    data: dataModule,
  },
});

export default store;
