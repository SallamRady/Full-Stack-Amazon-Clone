import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import ProductDetails from "../pages/ProductDetails.vue";
import SignIn from "../pages/SignIn.vue";
import SignUp from "../pages/SignUp.vue";
import TheCart from "../pages/TheCart.vue";
import TheOrders from "../pages/TheOrders.vue";
import CheckoutError from "../pages/CheckoutError.vue";
import CheckOut from "../pages/CheckOut.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { name: "homePage", path: "/", component: HomePage },
    { name: "signin", path: "/signin", component: SignIn },
    { name: "signup", path: "/signup", component: SignUp },
    { name: "cart", path: "/cart", component: TheCart },
    { name: "orders", path: "/orders", component: TheOrders },
    { name: "checkout", path: "/checkout", component: CheckOut },
    {
      name: "checkout_success",
      path: "/checkout/success",
      redirect: "/orders",
    },
    {
      name: "checkout_cancel",
      path: "/checkout/cancel",
      component: CheckoutError,
    },
    { name: "productDetails", path: "/product/:id", component: ProductDetails },
  ],
});

export default router;
