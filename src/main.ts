import { createApp } from "vue";
import { createPinia } from "pinia";
import { setupAssets } from "./plugins";
import App from "./App.vue";
// import VueSocketIO from 'vue-socket.io'
// import SocketIO from 'socket.io-client'
import router from "./router";
import 'amfe-flexible'
import { getLocal, GetNowDate } from '@/utils'
import { EnumStorageKey } from "./enum";
import { testIfAuth } from "./service";

const blackList = ["/edit", '/detail'];
const DefaultTitle = 'TOLIE'
// const SocketOptions = {
//   query: {
//     // token: getLocal('token'),
//   },
// }

const store = createPinia();
// const socket = new VueSocketIO({
//   debug: true,
//   connection: SocketIO('http://localhost:3000', SocketOptions), // replace with your server URL
//   vuex: {
//     store,
//     actionPrefix: 'socket/',
//     mutationPrefix: 'socket/',
//   },
// });
const app = createApp(App);

async function setupApp() {
  // import assets: js, css, images, fonts, etc.
  setupAssets();

  // setup vue store plugin: pinia.
  // setupStore(app);
  app.use(store);

  // vue custom directives
  // setupDirectives(app);

  // vue custom globalProperties
  // setupGlobalProperties(app);

  // vue router
  // await setupRouter(app);
  app.use(router);

  // vue-socket.io
  // app.use(socket);

  // 全局引入moment.js的formate方法
  // app.config.globalProperties.$moment = GetNowDate;

  // 路由守卫
  router.beforeEach(async (to, from, next) => {
    // 开始loading
    window.$loadingBar?.start();

    // if (!blackList.includes(to.path) || getLocal(EnumStorageKey.token)) {
    //   next()
    // } else {
    //   next('/login')
    // }

    // 检查是否存在HttpOnly Cookie
    try {
      await testIfAuth(); // 发送一个验证请求到服务器，该请求需要包含HttpOnly Cookie
      next();
    } catch (error) {
      // 如果验证请求失败，重定向到登录页
      next('/login');
    }
  })
  router.afterEach((to, from) => {
    // 结束loading
    window.$loadingBar?.done();
    document.title = to.meta.title || DefaultTitle;
  });

  // mount app
  app.mount("#app");
}

setupApp();

// const app = createApp(App);
// const whiteList = ["/login"];
