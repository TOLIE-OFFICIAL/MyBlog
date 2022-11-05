import { defineStore } from "pinia";
import { Names } from "./Store-nameSpace";
// import { useCountStore } from './modules/count'
// import { useUserStore } from './modules/user'
// export default createPinia()
// export { useCountStore, useUserStore }
// import { getLogo } from "@/api";
export const useMainStore = defineStore(Names.Main, {
  state: () => {
    return {
      logo: 1,
      menuBgFlag: 1,
    };
  },
  // 类似于computed 可以帮我们修饰我们的值
  getters: {},
  // 可以异步操作 或 同步提交state
  actions: {
    // getLogo() {},
    async saveImg() {
      // let img = new Image(),
      //   canvas = document.createElement("canvas"),
      //   ctx = canvas.getContext("2d"),
      //   src = "https://s2.loli.net/2022/10/19/f5vjiHKwVDTpX7U.png"; // insert image url here

      // img.crossOrigin = "Anonymous";

      // img.onload = function () {
      //   canvas.width = img.width;
      //   canvas.height = img.height;
      //   ctx?.drawImage(img, 0, 0);
      //   localStorage.setItem(key, canvas.toDataURL("image/png"));
      // };
      // img.src = src;
      // // make sure the load event fires for cached images too
      // if (img.complete || img.complete === undefined) {
      //   img.src = "";
      //   img.src = src;
      // }
      // console.log(111);

      // await getLogo().then((data) => {
      //   console.log(data);
      // });
    },
  },
});
