/*
 * @Author: ZhouHao joehall@foxmail.com
 * @Date: 2023-07-11 11:18:06
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-07-12 19:54:50
 * @FilePath: \servious-illness-admin\src\router\routes.ts
 * @Description: 路由配置
 */
import { RouteRecordRaw } from 'vue-router';
import LayoutManage from '/@/layout/manage/index.vue';
import { doctorNurse } from './modules/doctor.nurse';
import { systemRouter } from './modules/system';
export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Login',
    component: () => import('/@/views/login.vue')
  },
  {
    path: '/dashboard',
    name: '首页',
    component: () => import('/@/views/dashboard/index.vue')
  },
  // 系统设置
  systemRouter,
  ...doctorNurse,
  {
    path: '/error',
    name: '错误',
    component: LayoutManage,
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
