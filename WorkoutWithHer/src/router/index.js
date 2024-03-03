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
    {
      path: "/feed",
      component: () => import("../pages/Feed.vue"),
    },
    {
      path: "/profile",
      component: () => import("../pages/Profile.vue"),
    },
  ],
});

export default router;

