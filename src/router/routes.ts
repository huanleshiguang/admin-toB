/*
 * @Author: ZhouHao joehall@foxmail.com
 * @Date: 2023-07-11 11:18:06
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-07-12 19:54:50
 * @FilePath: \servious-illness-admin\src\router\routes.ts
 * @Description: 路由配置
 */
import { RouteRecordRaw } from 'vue-router';
import Layout from '/@/layout/index.vue';
export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Login',
    // redirect: '/login',
    component: () => import('/@/views/login.vue')
  },
  {
    path: '/dashboard',
    name: '首页',
    component: () => import('/@/views/dashboard/index.vue')
  },
  {
    path: '/system',
    name: '系统',
    component: Layout,
    redirect: 'noRedirect',
    meta: { title: '系统', icon: 'dashboard' },
    children: [
      {
        path: 'param',
        component: () => import('/@/views/system/param/index.vue'),
        name: 'Param',
        meta: { title: '运行参数', icon: 'dashboard', affix: true, requireAuth: true }
      },
      {
        path: 'users',
        component: () => import('/@/views/system/users/index.vue'),
        name: 'Users',
        meta: { title: '人员管理', icon: 'dashboard', affix: true, requireAuth: true }
      },
      {
        path: 'bunk',
        component: () => import('/@/views/system/bunk/index.vue'),
        name: 'Bunk',
        meta: { title: '床位管理', icon: 'dashboard', affix: true, requireAuth: true }
      },
      {
        path: 'dictionary',
        component: () => import('/@/views/system/dictionary/index.vue'),
        name: 'Dictionary',
        meta: { title: '字典维护', icon: 'dashboard', affix: true, requireAuth: true }
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
