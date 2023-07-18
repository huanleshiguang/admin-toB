/*
 * @Autor: QMZhao
 * @Date: 2023-07-18 10:47:40
 * @LastEditors:
 * @LastEditTime: 2023-07-18 11:41:21
 * @Description:
 * @FilePath: \servious-illness-admin\src\views\dashboard\composition\useCommon.ts
 */
export function useDashboardCommon() {
  const menuList = ref<Iobj[]>([
    {
      id: 1,
      icon: 'doctor',
      name: '医护工作站',
      url: '/system/param'
    },
    {
      id: 2,
      icon: 'manage',
      name: '医生工作站',
      url: '/doctorNurse/berth/index'
    },
    {
      id: 3,
      icon: 'statistics',
      name: '统计查询',
      url: '/system/menu'
    },
    {
      id: 4,
      icon: 'setup',
      name: '系统配置',
      url: '/system/menu'
    }
  ]);
  const notificationList = ref<Iobj[]>([
    {
      id: 1,
      title: '1、增加医嘱输入计算'
    },
    {
      id: 2,
      title: '2、增加护理评分模板'
    },
    {
      id: 3,
      title: '3、增加打印配置项'
    }
  ]);
  const supportList = ref<Iobj[]>([
    {
      id: 1,
      title: '1、信息科： 孙xx13913913900'
    },
    {
      id: 2,
      title: '2、飞救实施：李xx13681209999'
    }
  ]);
  return {
    ...toRefs(
      reactive({
        menuList,
        notificationList,
        supportList
      })
    )
  };
}
