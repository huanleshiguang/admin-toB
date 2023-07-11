/*
 * @Author: QMZhao
 * @Date: 2020-12-30 09:49:48
 * @LastEditTime: 2023-02-17 09:56:54
 * @LastEditors: Please set LastEditors
 * @Description: 路由配置
 * @FilePath: /vue-vite-template/src/router/index.ts
 */
import type { App } from 'vue';
import { createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw } from 'vue-router';

import Layout from '/@/layout/index.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('/@/views/login.vue')
  },
  {
    path: '/',
    name: '首页',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('/@/views/dashboard/index.vue'),
        name: 'Dashboard',
        meta: { title: '首页', icon: 'dashboard', affix: true, requireAuth: true }
      }
    ]
  },
  {
    path: '/system',
    name: '系统',
    component: Layout,
    redirect: 'noRedirect',
    meta: { title: '系统', icon: 'dashboard' },
    children: [
      {
        path: 'menu',
        component: () => import('/@/views/system/menu.vue'),
        name: 'Menu',
        meta: { title: '菜单', icon: 'dashboard', affix: true, requireAuth: true }
      },
      {
        path: 'role',
        component: () => import('/@/views/system/role.vue'),
        name: 'Role',
        meta: { title: '角色', icon: 'dashboard', affix: true, requireAuth: true }
      }
    ]
  },
  {
    path: '/error',
    name: '错误',
    component: Layout,
    redirect: '/error',
    children: [
      {
        path: '404',
        component: () => import('/@/views/error/404.vue'),
        name: '404',
        meta: { title: '404', icon: 'dashboard', affix: true, requireAuth: true }
      }
    ]
  }
];

export const router = createRouter({
  history: createWebHashHistory(),
  // history: createWebHistory(),
  // history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  // 是否应该禁止尾部斜杠。默认为false
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 })
});

// 路由注册
export function setupRouter(app: App<Element>) {
  app.use(router);
}
