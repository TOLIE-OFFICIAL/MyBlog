import { createRouter, createWebHistory } from "vue-router";
import main from "@/views/Main.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "index",
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
          path: "/edit",
          name: "edit",
          meta: {
            title: "编辑",
          },
          component: () => import("@/components/Edit/index.vue")
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
              path: "/achieves",
              name: "achieves",
              meta: {
                title: "归档",
              },
              component: () => import("@/components/Achieves/index.vue"),
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
