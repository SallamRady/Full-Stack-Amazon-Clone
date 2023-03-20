import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from '../pages/HomePage.vue';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [{ name: "homePage", path: "/",component:HomePage }],
});

export default router;
