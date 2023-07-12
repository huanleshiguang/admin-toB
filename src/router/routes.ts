/*
 * @Author: ZhouHao joehall@foxmail.com
 * @Date: 2023-07-11 11:18:06
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-07-12 10:30:36
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
    // redirect: '/dashboard',
    component: () => import('/@/views/dashboard/index.vue')
    // children: [
    //   {
    //     path: "dashboard",
    //     component: () => import("/@/views/dashboard/index.vue"),
    //     name: "Dashboard",
    //     meta: { title: "首页", icon: "dashboard", affix: true, requireAuth: true }
    //   }
    // ]
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
      },
      {
        path: 'param',
        component: () => import('/@/views/system/param.vue'),
        name: 'Param',
        meta: { title: '运行参数', icon: 'dashboard', affix: true, requireAuth: true }
      },
      {
        path: 'bunk',
        component: () => import('/@/views/system/bunk.vue'),
        name: 'Bunk',
        meta: { title: '床位管理', icon: 'dashboard', affix: true, requireAuth: true }
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