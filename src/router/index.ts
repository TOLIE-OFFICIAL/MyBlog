import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "",
      name: "home",
      component: () => import("@/components/Home/index.vue"),
    },
    {
      path: "/pages",
      name: "pages",
      component: () => import("@/views/Other.vue"),
      children: [
        {
          path: "/detail",
          name: "detail",
          component: () => import("@/components/Details/index.vue"),
        },
        {
          path: "/archives",
          name: "archives",
          component: () => import("@/components/Archives/index.vue"),
        },
        {
          path: "/links",
          name: "links",
          component: () => import("@/components/Links/index.vue"),
        },
        {
          path: "/tags",
          name: "tags",
          component: () => import("@/components/Tags/index.vue"),
        },
      ],
    },
  ]
},
  // {
  //   path: "/admin",
  //   name: "admin",
  //   component: () => import("@/views/Admin.vue"),
  //   children: []
  // },
  // {
  //   path: "/login",
  //   name: "login",
  //   component: () => import("@/views/Login.vue")
  // }

);

export default router;
