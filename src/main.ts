import { createApp } from "vue";
import { createPinia } from "pinia";
import { setupAssets } from "./plugins";
import App from "./App.vue";
import router from "./router";

async function setupApp() {
  // import assets: js, css, images, fonts, etc.
  setupAssets();

  const app = createApp(App);

  // setup vue store plugin: pinia.
  // setupStore(app);
  app.use(createPinia());

  // vue custom directives
  // setupDirectives(app);

  // vue custom globalProperties
  // setupGlobalProperties(app);

  // vue router
  // await setupRouter(app);
  app.use(router);

  // mount app
  app.mount("#app");
}

setupApp();

// const app = createApp(App);
// const whiteList = ["/login"];
// const blackList = ["/"];

setupAssets();



// router.beforeEach((to, from, next) => {
//   if (!blackList.includes(to.path) || localStorage.getItem('token')) {
//     next()
//   } else {
//     next('/login')
//   }
// })

// app.mount("#app");
