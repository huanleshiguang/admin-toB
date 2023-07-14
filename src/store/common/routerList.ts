/*
 * @Author: QMZhao
 * @Description:
 * @Date: 2023-02-11 15:51:21
 * @LastEditTime: 2023-07-13 18:50:29
 * @Reference:
 */
import { ImenuList } from '/@/model/common';

export const useNavMenuList = defineStore('navMenuList', () => {
  const navMenuList = ref<Array<ImenuList>>([
    {
      id: 1001,
      label: '运行参数',
      icon: 'business',
      permission: 'system_role',
      path: '/system/param'
    },
    {
      id: 1002,
      label: '人员管理',
      icon: 'patient',
      permission: 'system_user',
      path: '/system/users'
    },
    {
      id: 1003,
      label: '床位管理',
      icon: 'kc',
      permission: 'system_role',
      path: '/system/bunk'
    },
    {
      id: 1004,
      label: '字典维护',
      icon: 'data',
      permission: 'system_menu',
      path: '/system/dictionary'
    }
  ]);
  function setNavMenuList(menuList: Array<ImenuList>) {
    navMenuList.value = menuList;
  }
  return { navMenuList, setNavMenuList };
});
