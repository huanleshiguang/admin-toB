/*
 * @Author: ZhouHao joehall@foxmail.com
 * @Date: 2023-07-11 11:18:06
 * @LastEditors: ZhouHao joehall@foxmail.com
 * @LastEditTime: 2023-07-12 19:26:21
 * @FilePath: \servious-illness-admin\src\router\routes.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { RouteRecordRaw } from 'vue-router';
import Layout from '/@/layout/index.vue';
export const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'Login',
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
        component: () => import('/@/views/system/users/architecture/index.vue'),
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
        path: "menu",
        component: () => import("/@/views/system/menu.vue"),
        name: "Menu",
        meta: { title: "菜单", icon: "dashboard", affix: true, requireAuth: true }
      },
      {
        path: "role",
        component: () => import("/@/views/system/role.vue"),
        name: "Role",
        meta: { title: "角色", icon: "dashboard", affix: true, requireAuth: true }
      },
      {
        path: "param",
        component: () => import("/@/views/system/param/index.vue"),
        name: "Param",
        meta: { title: "运行参数", icon: "dashboard", affix: true, requireAuth: true }
      },
      {
        path: "bunk",
        component: () => import("/@/views/system/bunk/index.vue"),
        name: "Bunk",
        meta: { title: "床位管理", icon: "dashboard", affix: true, requireAuth: true }
      },
      {
        path: "personnel",
        component: () => import("/@/views/system/personnel/index.vue"),
        name: "Personnel",
        meta: { title: "人员管理", icon: "dashboard", affix: true, requireAuth: true }
      }
    ]
  },
  {
    path: "/error",
    name: "错误",
    component: Layout,
    redirect: "/error",
    children: [
      {
        path: "404",
        component: () => import("/@/views/error/404.vue"),
        name: "404",
        meta: { title: "404", icon: "dashboard", affix: true, requireAuth: true }
      }
    ]
  }
];
