/*
 * @Autor: QMZhao
 * @Date: 2023-08-15 14:17:59
 * @LastEditTime: 2023-08-16 18:42:54
 * @Description: 路由配置
 */
import type { App } from 'vue';
import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router';
import { routes } from './routes';

export const router = createRouter({
  history:
    import.meta.env.VITE_ROUTER_HISTORY === 'hash'
      ? createWebHashHistory(import.meta.env.VITE_BASE_PATH)
      : createWebHistory(import.meta.env.VITE_BASE_PATH),
  routes,
  // 是否应该禁止尾部斜杠。默认为false
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 })
});

// 路由注册
export function setupRouter(app: App<Element>) {
  app.use(router);
}
