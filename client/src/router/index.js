import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [{ name: "homePage", path: "/" }],
});

export default router;
