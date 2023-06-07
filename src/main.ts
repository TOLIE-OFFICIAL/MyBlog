import { createApp } from "vue";
import { createPinia } from "pinia";
import { setupAssets } from "./plugins";
import App from "./App.vue";
// import VueSocketIO from 'vue-socket.io'
// import SocketIO from 'socket.io-client'
import router from "./router";
import 'amfe-flexible'
import { GetNowDate } from '@/utils'

const blackList = ["/edit",'/detail'];
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
  router.beforeEach((to, from, next) => {
    // 开始loading
    window.$loadingBar?.start();

    if (!blackList.includes(to.path) || localStorage.getItem('token')) {
      next()
    } else {
      next('/login')
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
