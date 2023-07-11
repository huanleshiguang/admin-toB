/*
 * @Author: QMZhao
 * @Date: 2020-12-30 09:49:48
 * @LastEditTime: 2023-07-11 11:23:11
 * @LastEditors: ZhouHao joehall@foxmail.com
 * @Description: 路由配置 
 * @FilePath: /vue-vite-template/src/router/index.ts
 */
import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";
import { routes } from './routes'


const router = createRouter({
  history: createWebHashHistory(),
  // history: createWebHistory(),
  // history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
