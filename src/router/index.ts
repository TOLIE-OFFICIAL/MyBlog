import { createRouter, createWebHistory } from "vue-router";
import main from "@/views/Main.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "main",
      component: main,
      children: [
        {
          path: "",
          name: "home",
          meta: {
            title: "主页",
          },
          component: () => import("@/components/Home/index.vue"),
        },
        {
          path: "/pages",
          name: "pages",
          component: () => import("@/views/Pages.vue"),
          children: [
            {
              path: "/detail",
              name: "detail",
              component: () => import("@/components/Details/index.vue"),
            },
            {
              path: "/archives",
              name: "archives",
              meta: {
                title: "归档",
              },
              component: () => import("@/components/Archives/index.vue"),
            },
            {
              path: "/links",
              name: "links",
              meta: {
                title: "友链",
              },
              component: () => import("@/components/Links/index.vue"),
            },
            {
              path: "/tags",
              name: "tags",
              meta: {
                title: "标签墙",
              },
              component: () => import("@/components/Tags/index.vue"),
            },
          ],
        },

      ]
    },

    {
      path: "/login",
      name: "login",
      component: () => import("@/views/Login.vue")
    },
    {
      path: "/edit",
      name: "edit",
      component: () => import("@/components/Edit/index.vue")
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
  //  
  // }

);

export default router;
