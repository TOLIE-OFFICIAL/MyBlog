import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: () => import("@/views/Pages.vue"),
      children: [
        {
          path: "",
          name: "home",
          component: () => import("@/components/Home/index.vue"),
        },
        {
          path: "/archives",
          name: "archives",
          component: () => import("@/components/Archives/index.vue"),
        },
        {
          path: "/tags",
          name: "tags",
          component: () => import("@/components/Tags/index.vue"),
        },
      ],
      
    },
    {path: "/login",
    component: () => import("@/views/Login.vue"),}
  ],
});

export default router;
