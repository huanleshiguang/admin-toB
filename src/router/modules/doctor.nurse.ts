import { RouteRecordRaw } from 'vue-router';
import LayoutFront from '/@/layout/front/index.vue';
export const doctorNurse: Array<RouteRecordRaw> = [
  {
    path: '/doctorNurse/berth',
    name: 'doctorNurseBerth',
    component: LayoutFront,
    redirect: '/doctorNurse/berth/index',
    meta: { title: '医生工作站', icon: 'dashboard'},
    children: [
      {
        path: '/doctorNurse/berth/index',
        component: () => import('/@/views/doctorNurse/berth/index.vue'),
        name: 'doctorNurseBerthIndex',
        meta: { title: '医生工作站-床位管理', icon: 'dashboard', affix: true,requireAuth: true,showSideBar:false }
      }
    ]
  },
  {
    path: '/doctorNurse/care',
    name: 'doctorNurseCare',
    component: LayoutFront,
    redirect: '/doctorNurse/care/index',
    meta: { title: '医生工作站', icon: 'dashboard'},
    children: [
      {
        path: '/doctorNurse/care/index',
        component: () => import('/@/views/doctorNurse/care/index.vue'),
        name: 'doctorNurseCareIndex',
        meta: { title: '医生工作站-诊疗护理', icon: 'dashboard', affix: true,requireAuth: true }
      }
    ]
  }
];
