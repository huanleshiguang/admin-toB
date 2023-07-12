/*
 * @Author: QMZhao
 * @Description:
 * @Date: 2023-02-11 15:51:21
 * @LastEditTime: 2023-07-11 14:33:25
 * @Reference:
 */
import { ImenuList } from '/@/model/common';

export const useNavMenuList = defineStore('navMenuList', () => {
  const navMenuList = ref<Array<ImenuList>>([
    {
      id: 1000,
      label: '首页',
      icon: 'menu_mangement',
      permission: 'system_menu',
      path: '/dashboard'
    },
    {
      id: 100232,
      label: '字典维护',
      icon: 'menu_mangement',
      permission: 'system_menu',
      path: '/system/dictionary'
    },
    {
      id: 2000,
      label: '系统',
      icon: 'system',
      path: '/system',
      permission: 'system',
      children: [
        {
          id: 2001,
          icon: 'store',
          label: '菜单管理',
          permission: 'system_store',
          path: '/system/menu'
        },
        {
          id: 1004,
          label: '角色管理',
          icon: 'role',
          permission: 'system_role',
          path: '/system/role'
        },
        {
          id: 1005,
          label: '运行参数',
          icon: 'param',
          permission: 'system_role',
          path: '/system/param'
        },
        {
          id: 1006,
          label: '床位管理',
          icon: 'role',
          permission: 'system_role',
          path: '/system/bunk'
        }
      ]
    }
  ]);
  function setNavMenuList(menuList: Array<ImenuList>) {
    navMenuList.value = menuList;
  }
  return { navMenuList, setNavMenuList };
});
