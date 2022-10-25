import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import "./assets/main.css";
const app = createApp(App);
const whiteList = ['/login'];
app.use(createPinia());
app.use(router);
router.beforeEach((to, from, next) => {
    if (whiteList.includes(to.path) || localStorage.getItem('token')) {
        next();
    }
    else {
        next('/login');
    }
    // next()
});
app.mount("#app");
