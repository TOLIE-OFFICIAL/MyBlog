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

        // 发布/更新完成
        {
          path: "/published",
          name: "published",
          meta: {
            title: "发布成功",
            activePage: "published"
          },
          component: () => import("@/views/SystemView/Appreciation/index.vue")
        },
        // 后台管理页面
        {
          path: "/create",
          name: "create",
          meta: {
            title: "创作者页面",
            activePage: "create"
          },
          component: () => import("@/components/CreateSpace/index.vue"),
          children: [{
            path: "/create/article",
            name: "article",
            meta: {
              title: "文章管理",
              activePage: "article"
            },
            component: () => import("@/components/CreateSpace/ArticleManager/index.vue"),
          }]
        },

      ]
    },
    // 不带轮播图页面
    {
      path: "/noCarousel",
      name: "noCarousel",
      component: () => import("@/views/CommonView/NoCarousel.vue"),
      children: [
        // 在线聊天
        {
          path: "/chat",
          name: "chat",
          meta: {
            title: "友链",
            activePage: "chat"
          },
          component: () => import("@/components/ChatBox/index.vue"),
        },
        // 个人主页
        {
          path: "/info",
          name: "info",
          meta: {
            title: "个人主页",
            activePage: "info"
          },
          component: () => import("@/components/Info/index.vue"),
        },
        // 新建blog
        {
          path: "/new",
          name: "new",
          meta: {
            title: "新建",
            activePage: "new"
          },
          component: () => import("@/components/Edit/index.vue")
        },
        // 编辑blog
        {
          path: "/edit",
          name: "edit",
          meta: {
            title: "写文章",
            activePage: "edit"
          },
          component: () => import("@/components/Edit/index.vue")
        },
      ]
    },
    // 带轮播图页面
    {
      path: "/withCarousel",
      name: "withCarousel",
      component: () => import("@/views/CommonView/WithCarousel.vue"),
      children: [
        // 文章详情
        {
          path: "/detail",
          name: "detail",
          meta: {
            title: "博客内容",
            activePage: "detail"
          },
          component: () => import("@/components/Details/index.vue"),
        },
        // 归档
        {
          path: "/achieves",
          name: "achieves",
          meta: {
            title: "归档",
            activePage: "achieves"
          },
          component: () => import("@/components/Achieves/index.vue"),
        },
        // 友人帐
        {
          path: "/links",
          name: "links",
          meta: {
            title: "友链",
            activePage: "links"
          },
          component: () => import("@/components/Links/index.vue"),
        },
        // 标签页
        {
          path: "/tags",
          name: "tags",
          meta: {
            title: "标签墙",
            activePage: "tags"
          },
          component: () => import("@/components/Tags/index.vue"),
        },
      ],
    },
    // 登录页
    {
      path: "/login",
      name: "login",
      meta: {
        title: "登录",
        activePage: "login"
      },
      component: () => import("@/views/Login.vue")
    },
    // 匹配无效路径的路由
    {
      name: "not-found-page",
      path: "/:pathMatch(.*)*",
      component: () => import("@/views/SystemView/NotFound/index.vue"),
      meta: {
        title: "未找到",
        singleLayout: "blank",
        activePage: "blank"
      },
    },
  ]
},
);

export default router;
