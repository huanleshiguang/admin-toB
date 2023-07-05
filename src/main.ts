/*
 * @Autor: QMZhao
 * @Date: 2021-09-08 23:54:23
 * @LastEditors: QMZhao zhao971462054@163.com
 * @LastEditTime: 2023-07-05 18:34:08
 * @Description:
 * @FilePath: /vue-vite-template/src/main.ts
 */

import App from "./App.vue";

import "ant-design-vue/dist/antd.css";

import router from "/@/router";

import "virtual:svg-icons-register";

import "./permission"; // permission control

import "/@/styles/index.scss";

import "uno.css";

const app = createApp(App);

app.use(createPinia()).use(router).mount("#app");
