/*
 * @Author: QMZhao
 * @Description:
 * @Date: 2023-02-11 15:51:21
 * @LastEditTime: 2023-02-17 15:23:33
 * @Reference:
 */
import { ImenuList } from "/@/model/common";

export const useNavMenuList = defineStore("navMenuList", () => {
  const navMenuList = ref<Array<ImenuList>>([
    {
      id: 1000,
      label: "首页",
      icon: "menu_mangement",
      permission: "system_menu",
      path: "/dashboard"
    },
    {
      id: 2000,
      label: "系统",
      icon: "system",
      path: "/system",
      permission: "system",
      children: [
        {
          id: 2001,
          icon: "store",
          label: "菜单管理",
          permission: "system_store",
          path: "/system/menu"
        },
        {
          id: 1004,
          label: "角色管理",
          icon: "role",
          permission: "system_role",
          path: "/system/role"
        }
      ]
    }
  ]);
  function setNavMenuList(menuList: Array<ImenuList>) {
    navMenuList.value = menuList;
  }
  return { navMenuList, setNavMenuList };
});