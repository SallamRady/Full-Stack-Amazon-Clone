import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import ProductDetails from "../pages/ProductDetails.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { name: "homePage", path: "/", component: HomePage },
    { name: "productDetails", path: "/product/:id", component: ProductDetails },
  ],
});

export default router;
