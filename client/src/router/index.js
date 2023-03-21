import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import ProductDetails from "../pages/ProductDetails.vue";
import SignIn from "../pages/SignIn.vue";
import SignUp from "../pages/SignUp.vue";
import TheCart from "../pages/TheCart.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { name: "homePage", path: "/", component: HomePage },
    { name: "signin", path: "/signin", component: SignIn },
    { name: "signup", path: "/signup", component: SignUp },
    { name: "cart", path: "/cart", component: TheCart },
    { name: "productDetails", path: "/product/:id", component: ProductDetails },
  ],
});

export default router;
