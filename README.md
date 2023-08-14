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

## 前端编写规范参考

### VUE 文件结构

参考vue官方样例代码的结构，原因详见核心开发人员 [知乎](!https://www.zhihu.com/question/483860485/answer/2097414934) 回答

![vue3 样例代码.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3bd61addc44745acbdd99fe3bd05626d~tplv-k3u1fbpfcp-watermark.image?)
``` vue
<script setup lang="ts">
// 逻辑处理
</script>

<template>
    <!- 模板语法 ->
</template>

<style lang="scss" scoped>
/** 样式 */
</style>
```

### css

尽量采用 [unocss](!https://unocss.dev/config/) 配置，减少项目自定义公共样式类
样式命名: 
- 名称间隔使用-符号
- 类名命名需要语义化，参考下面的示例：
```css  
 .wrap{}                 //外层容器
 .mod-box{}              //模块容器
 .btn-start{}            //开始
 .btn-head-nav1{}        //头部导航链接1
 .btn-news-more{}        //更多新闻
 .btn-play{}             //播放视频
 .btn-lottery{}          //开始抽奖
 .side-nav{}             //侧栏导航
 .side-nav-btn1{}        //侧栏导航-链接1 
 .btn-more{}             //更多
```

### 项目文件结构

文件结构保持就近原则，避免文件过分抽离导致维护成本增加，层级结构尽量保证三层以内。

```sh
├── views                              // view
│   ├── menus                          // 菜单文件
│   │   ├── composable                 // 组合式API
│   │   │   ├──logicA.ts               // 抽象逻辑功能
│   │   │   ├──logicB.ts               // 抽象逻辑功能
│   │   ├── components                 // 功能模块下子组件
│   │   │   ├──ComponentA              // 子组件大驼峰方式命名
│   │   │   │   ├── composable         // 组合式API
│   │   │   │   │   ├──logicA.ts       // 抽象逻辑功能
│   │   │   │   │   ├──logicB.ts       // 抽象逻辑功能
│   │   │   │   ├── index.vue          // 入口文件
│   │   │   ├──ComponentB              // 子组件大驼峰方式命名
│   │   │   ├──index.ts                // 导出文件
│   │   ├── index.vue                  // 入口文件
```

#### 单文件组件文件名的大小写

**单文件组件的文件名以单词大写开头 (PascalCase)**

单词大写开头对于代码编辑器的自动补全最为友好，因为这使得我们在 JS(X) 和模板中引用组件的方式尽可能的一致。

```
    components/
    |- MyComponent.vue

    components/
    |- my-component.vue
```

#### 基础组件名

**应用特定样式和约定的基础组件 (也就是展示类的、无逻辑的或无状态的组件) 应该全部以一个特定的前缀开头，比如 Base、App 或 V。**

```
    components/
    |- BaseButton.vue
    |- BaseTable.vue
    |- BaseIcon.vue

    components/
    |- VButton.vue
    |- VTable.vue
    |- VIcon.vue
```

#### 单例组件名

**只应该拥有单个活跃实例的组件应该以 The 前缀命名，以示其唯一性。**

这不意味着组件只可用于一个单页面，而是每个页面只使用一次。这些组件永远不接受任何 prop，因为它们是为你的应用定制的，而不是它们在你的应用中的上下文。如果你发现有必要添加 prop，那就表明这实际上是一个可复用的组件，只是目前在每个页面里只使用一次。

```
    components/
    |- TheHeading.vue
    |- TheSidebar.vue
```

#### 紧密耦合的组件名

**和父组件紧密耦合的子组件应该以父组件名作为前缀命名。**

如果一个组件只在某个父组件的场景下有意义，这层关系应该体现在其名字上。因为编辑器通常会按字母顺序组织文件，所以这样做可以把相关联的文件排在一起。

```
    components/
    |- TodoList.vue
    |- TodoListItem.vue
    |- TodoListItemButton.vue

    components/
    |- SearchSidebar.vue
    |- SearchSidebarNavigation.vue
```

#### 模板中的组件名大小写

**对于绝大多数项目来说，在单文件组件中组件名应该总是 PascalCase 的**

PascalCase 相比 kebab-case 有一些优势：

- 编辑器可以在模板里自动补全组件名，因为 PascalCase 同样适用于 JavaScript。
- <MyComponent> 视觉上比 <my-component> 更能够和单个单词的 HTML 元素区别开来，因为前者的不同之处有两个大写字母，后者只有一个横线。
- 如果你在模板中使用任何非 Vue 的自定义元素，比如一个 Web Component，PascalCase 确保了你的 Vue 组件在视觉上仍然是易识别的。

```vue
<MyComponent/>
```

### 其他
```javascript
// 事件以 on 开头
function onDeleteRoleItem() {
  ...
}

// ajax 请求以 fetch 开头 避免与全局自动导入方法重名
function fetchListData() {
  ...
}


// 表 boolean，is 开头
const isDialogShow = false


// 表是否存在时，has 开头
const hasPropsInObject = computed(() => {})
```

