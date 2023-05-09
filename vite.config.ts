import { fileURLToPath, URL } from "node:url";

import path from 'path' //// 模块 ""path"" 只能在使用 "esModuleInterop" 标志时进行默认导入
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import ElementPlus from 'unplugin-element-plus/vite'
import { FileSystemIconLoader } from "unplugin-icons/loaders";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";

// import autoprefixer from 'autoprefixer'
// import postCssPxToRem from 'postcss-pxtorem';

/** 本地svg图标集合名称 */
const localIconPath = path.resolve(process.cwd()) + `/src/assets/svg-icon`;
const collectionName = "local";
const pathSrc = path.resolve(__dirname, 'src')


export default defineConfig({
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    proxy: {
      "/api": {
        target: "http://127.0.0.1:3000",
        // target: "https://www.fastmock.site/mock/a6b857873f4bfc85e89a177bccc4b87f/api",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
      // "/poem": {
      //   target: "https://api.xygeng.cn/one",
      //   changeOrigin: true,
      //   rewrite: (path) => path.replace(/^\/poem/, ""),
      // },
      "/img": {
        target: "https://sm.ms/api/v2",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/img/, ""),
      },
    },
  },
  plugins: [
    Vue(),
    AutoImport({
      // targets to transform
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/, /\.vue\?vue/, // .vue
      ],
      // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
      // 自动导入 Vue-router,pinia 相关函数
      imports: ['vue', 'vue-router', "pinia"],
      dts: "src/typings/auto-import.d.ts", // 生成 `auto-import.d.ts` 全局声明
      // 自动导入 Element Plus 相关函数，如：ElMessage, ElMessageBox... (带样式)
      resolvers: [
        ElementPlusResolver(),

        // 自动导入图标组件
        IconsResolver({
          prefix: 'Icon',
        }),
      ],
    }),
    // // 按需引入element-plus样式
    ElementPlus({}),

    Components({
      dts: "src/typings/components.d.ts",
      resolvers: [
        // 自动注册图标组件
        IconsResolver({
          // 自动注册图标组件 how to use: <i-ep-location />
          enabledCollections: ["ep", "mdi", "simple-icons"], // 'ep'是element图标集在https://iconify.design/ 里的集合名, 如果你引入或`使用了其他图标集, 需要在此把其集合名写上
          // 本地svg图标集合
          customCollections: [collectionName],
          // componentPrefix: "icon", // 与element-plus的prefix配置冲突(本地图标使用: <i-local-iconName />)U+
        }),

        // 自动导入 Element Plus 组件
        ElementPlusResolver({
          importStyle: 'sass',
        }),
      ],

    }),
    // see: https://github.com/antfu/unplugin-icons
    Icons({
      // 自动导入图标组件 图标来源: https://iconify.design/
      autoInstall: true,
      // 本地图标
      compiler: "vue3",
      customCollections: {
        [collectionName]: FileSystemIconLoader(localIconPath),
      },
      scale: 1,
      defaultClass: "inline-block",
    }),
    // 封装本地svg图标
    createSvgIconsPlugin({
      iconDirs: [localIconPath],
      symbolId: `icon-local-[dir]-[name]`,
      inject: "body-last",
      customDomId: "__SVG_ICON_LOCAL__",
    }),

    // Inspect(),
  ],
})