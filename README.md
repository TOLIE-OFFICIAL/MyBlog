# 个人博客项目

## 技术栈
vue3全家桶 + vite + element-plus + mongoDb + momentJS + loash + animate.css

### 目录结构
```tree
clover-admin
|-- .devcontainer               // vscode远程开发配置
|   |-- devcontainer.json
|   |-- Dockerfile
|-- .husky                      // git commit提交钩子
|-- .vscode                     // vscode插件、设置、代码片段
|   |-- clover.code-snippets    // 代码片段
|   |-- extensions.json         // 插件
|   |-- setting.json            // 设置
|-- build                       // 构建的相关配置和插件
|   |-- config
|   |-- plugins                 // vite插件
|   |   |-- compress.ts         // 代码压缩
|   |   |-- html.ts             // html（注入变量、压缩代码）
|   |   |-- mock.ts             // mock插件
|   |   |-- unplugin.ts         // vue宏增强、自动导入、注册注册声明、Icon封装、UI组件
|   |   |-- visualizer.ts       // 打包依赖分析
|   |-- utils
|-- cypress                     // e2e测试框架
|-- doc                         // 文档相关
|-- docker                      // docker配置
|   |-- .dockerignore
|   |-- Dockerfile
|   |-- nginx.conf
|-- mock                        // mock服务
|-- public
|-- src
|   |-- assets                  // 静态资源
|   |   |-- animation           // lottie动画资源
|   |   |-- svg-icon            // 本地svg图标
|   |-- components              // 全局组件(自动导入)
|   |   |--business             // 业务相关组件
|   |   |--common               // 公共组件(常用组件)
|   |   |--custom               // 自定义组件
|   |-- composables             // 组合式函数
|   |-- config                  // 全局静态配置
|   |-- constants               // 全局常量
|   |-- directives              // vue指令
|   |-- enum                    // TS枚举
|   |-- hooks                   // 组合式的函数hooks(内部状态)
|   |-- layout                  // 布局组件
|   |-- plugins                 // 插件
|   |-- router                  // vue路由
|   |   |-- guard
|   |   |-- helper
|   |   |-- modules
|   |   |-- routes
|   |-- sdk                     // 三方sdk
|   |-- service                 // 网络请求
|   |   |-- api
|   |   |-- request
|   |-- stores                  // pinia状态管理
|   |-- styles                  // 全局样式
|   |   |-- css
|   |   |-- less
|   |   |-- scss
|   |-- typings                 // TS类型声明
|   |   |-- api.d.ts            // 接口相关的类型声明
|   |   |-- auto-import.d.ts
|   |   |-- business.d.ts       // 业务相关的类型声明
|   |   |-- components.d.ts
|   |   |-- env.d.ts            // 项目级、vite相关配置
|   |   |-- expose.d.ts         // vue组件导出类型
|   |   |-- global.d.ts         // 全局类型
|   |   |-- package.d.ts        // 包类型
|   |   |-- route.d.ts          // 路由类型
|   |   |-- router.d.ts         // 路由类型
|   |   |-- system.d.ts         // 系统类型
|   |   |-- vue.d.ts            // vue相关类型
|   |-- utils                   // 工具函数
|   |   |-- auth
|   |   |-- common
|   |   |-- crypto
|   |   |-- filters
|   |   |-- router
|   |   |-- service
|   |   |-- storage
|   |-- views                   // 页面
|   |-- App.vue                 // vue文件入口
|   |-- globalProperties.ts     // vue全局变量
|   |-- main.ts                 // 项目入口文件
|-- .editorconfig               // 统一编辑器配置
|-- .env                        // 通用环境配置
|-- .env.config.ts              // 请求环境的配置
|-- .env.development            // 开发环境配置
|-- .env.production             // 生产环境配置
|-- .eslintignore               // 配置哪些文件忽略eslint检查
|-- .eslintrc-auto-import.json  // auto-import插件的eslint生成文件
|-- .eslintrc.cjs               // eslint配置文件
|-- .gitattributes              // git配置
|-- .gitignore                  // 配置git记录时哪些文件忽略
|-- .npmignore                  // 可忽略
|-- .npmrc                      // npm配置
|-- .prettierrc.json            // prettier代码格式化插件配置
|-- commitlint.config.js        // commitlint提交规范插件配置
|-- commitlint.config.ts        // commitlint提交规范插件配置
|-- cypress.config.ts           // e2e测试框架配置
|-- index.html
|-- LICENSE
|-- package.json
|-- pnpm-lock.yaml
|-- README.md
|-- tsconfig.app.json
|-- tsconfig.config.json
|-- tsconfig.json               // TS配置
|-- tsconfig.vitest.json
|-- uno.config.ts               // unocss配置
|-- vite.config.ts              // vite配置
|-- vitest.config.ts            // vitest配置
```