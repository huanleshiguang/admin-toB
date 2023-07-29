/*
 * @Author: QMZhao
 * @Description:
 * @Date: 2023-02-11 15:51:21
 * @LastEditTime: 2023-07-26 10:10:39
 * @Reference:
 */
export const useNavMenuList = defineStore('navMenuList', () => {
  const navMenuList = ref<Array<ICUCommon.MenuList>>([
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
      id: 1002,
      label: '菜单管理',
      icon: 'patient',
      permission: 'system_user',
      path: '/system/menus'
    },
    {
      id: 1002,
      label: '权限管理',
      icon: 'patient',
      permission: 'system_user',
      path: '/system/roles'
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
    },
    {
      id: 1005,
      label: '科室管理',
      icon: 'kc',
      permission: 'system_menu',
      path: '/system/department'
    }
  ]);
  function setNavMenuList(menuList: Array<ICUCommon.MenuList>) {
    navMenuList.value = menuList;
  }

  const leftBar = reactive({
    showSideBar: false
  });

  function setShowSideBar(data: boolean) {
    leftBar.showSideBar = data;
  }

  return { navMenuList, setNavMenuList, leftBar, setShowSideBar };
});
