/*
 * @Autor: QMZhao
 * @Date: 2021-09-08 23:54:23
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-02-09 14:01:07
 * @Description:
 * @FilePath: /vue-vite-template/src/main.ts
 */

import App from "./App.vue";

import "element-plus/dist/index.css";

import router from "/@/router";

import "virtual:svg-icons-register";

import "./permission"; // permission control

import "/@/styles/index.scss";

import "uno.css";

const app = createApp(App);

app.use(createPinia()).use(router).mount("#app");
