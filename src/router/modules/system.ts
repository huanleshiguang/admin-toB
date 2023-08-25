/*
 * @Autor: QMZhao
 * @Date: 2023-07-18 12:03:08
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-07-29 15:32:31
 * @Description:系统设置
 * @FilePath: \servious-illness-admin\src\router\modules\system.ts
 */
import { RouteRecordRaw } from 'vue-router';
import LayoutManage from '/@/layout/manage/index.vue';

const systemRouter: RouteRecordRaw = {
  path: '/system',
  name: '系统',
  component: LayoutManage,
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
      path: 'menus',
      component: () => import('/@/views/system/menus/index.vue'),
      name: 'Menus',
      meta: { title: '菜单管理', icon: 'dashboard', affix: true, requireAuth: true }
    },
    {
      path: 'roles',
      component: () => import('/@/views/system/roles/index.vue'),
      name: 'Roles',
      meta: { title: '角色管理', icon: 'dashboard', affix: true, requireAuth: true }
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
    },
    {
      path: 'serviceConfig',
      component: () => import('/@/views/system/serviceConfig/index.vue'),
      name: 'ServiceConfig',
      meta: { title: '业务配置', icon: 'dashboard', affix: true, requireAuth: true }
    },
    {
      path: 'department',
      component: () => import('/@/views/system/department/index.vue'),
      name: 'Department',
      meta: { title: '科室管理', icon: 'dashboard', affix: true, requireAuth: true }
    }
  ]
};

export { systemRouter };
