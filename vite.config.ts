import { fileURLToPath, URL } from "node:url";

import path from 'path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// import autoprefixer from 'autoprefixer';
// import postCssPxToRem from 'postcss-pxtorem';

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
      "/poem": {
        target: "https://api.xygeng.cn/one",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/poem/, ""),
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
    // ElementPlus({
    //   // options
    // }),

    Components({
      dts: "src/typings/components.d.ts",
      resolvers: [
        // 自动注册图标组件
        IconsResolver({
          // 自动注册图标组件 how to use: <i-ep-location />
          enabledCollections: ["ep", "mdi"], // 'ep'是element图标集在https://iconify.design/ 里的集合名, 如果你引入或`使用了其他图标集, 需要在此把其集合名写上
        }),

        // 自动导入 Element Plus 组件
        ElementPlusResolver({
          importStyle: 'sass',
        }),
      ],

    }),

    Icons({
      autoInstall: true,
    }),

    // Inspect(),
  ],
})