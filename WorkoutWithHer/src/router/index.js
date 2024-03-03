import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: () => import("../pages/Landing.vue"),
    },
    {
      path: "/log-in",
      component: () => import("../pages/LogIn.vue"),
    },
    {
      path: "/sign-up",
      component: () => import("../pages/SignUp.vue"),
    },
    {
      path: "/team",
      component: () => import("../pages/Team.vue"),
    },
  ],
});

export default router;

