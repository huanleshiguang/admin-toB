import { RouteRecordRaw } from 'vue-router';
import LayoutManage from '/@/layout/index.vue';

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
};

export { systemRouter };
