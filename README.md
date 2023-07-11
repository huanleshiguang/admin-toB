# Vue 3 + Typescript + Vite + Element Plus

飞救医疗重症管理后台项目

## 目录结构

```sh
├── build                      // 构建相关
│   ├── script                 // 脚本
│   └── vite                   // vite配置
├── public                     // 入口文件、图标等
├── src                        // 源代码
│   ├── api                    // 所有请求
│   ├── assets                 // 图片 字体等静态资源
│   ├── components             // 全局公用组件
│   ├── composition            // 单文件方法
│   ├── config                 // 全局公用配置项
│   ├── enums                  // 全局公用枚举常量
│   ├── hooks                  // hooks 方法
│   ├── icons                  // svg图标
│   ├── layout                 // 侧边栏等页面布局组件
│   ├── model                  // 类型约束
│   ├── directive              // 全局指令
│   ├── icons                  // 项目所有 svg icons
│   ├── router                 // 路由
│   ├── store                  // 全局状态管理pinia
│   ├── styles                 // 全局样式
│   ├── types                  // 类型文件
│   ├── utils                  // 全局公用方法
│   ├── views                  // view
│   ├── App.vue                // 入口页面
│   ├── main.ts                // 入口 加载组件 初始化等
│   └── permission.ts          // 路由权限管理
├── static                     // 第三方不打包资源
├── .env.development           // 开发环境配置
├── .env.production            // 生产环境配置
├── .env.staging               // 测试环境配置
├── eslintrc.js                // eslint 配置项
├── .eslintrc-auto-import.json // eslint 配置项
├── .gitignore                 // git 忽略项
├── favicon.ico                // favicon图标
├── index.html                 // html模板
├── vite.config.ts             // vite配置文件
└── package.json               // package.json
```

## Git 提交规范参考

- `feat`  增加新的业务功能
- `fix`  修复业务问题/BUG
- `perf`  优化性能
- `style`  更改代码风格, 不影响运行结果
- `refactor`  重构代码
- `revert`  撤销更改
- `test`  测试相关, 不涉及业务代码的更改
- `docs`  文档和注释相关
- `chore`  更新依赖/修改脚手架配置等琐事
- `workflow`  工作流改进
- `ci`  更改 CI 配置文件和脚本
- `types`  类型定义文件更改
- `wip`  开发中
