/*
 * @Autor: QMZhao
 * @Date: 2023-07-18 10:47:40
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-08-08 09:57:32
 * @Description:
 */

import { useModules } from '/@/store/common/useMenus';

export function useDashboardCommon() {
  const { targetModules } = storeToRefs(useModules());
  // 更新通知
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
  // 系统支持人员
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

  // 用户目录模块
  const menuList = computed(() => targetModules.value);

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
