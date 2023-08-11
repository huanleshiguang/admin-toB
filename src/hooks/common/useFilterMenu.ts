import { MenuForm } from 'MenuConfig';

import { MenuType } from '/@/enums/dict';

import { getUserInfo } from '/@/utils/session';

import { sortBy } from '/@/utils';

/**
 * 根据菜单类型过滤对应类型数据
 *
 * @param menuType 菜单类型 0--目录，1--菜单，2--功能
 * @param parentId 菜单所属模块id
 * @returns menuType为 0 时, 返回panrenId 为空数据，menuType 为 1 时, 返回包含对应模块下得菜单数据, menuType 为 2 时返回所有按钮
 */
export function useFilterMenus(menuType: number, parentId = '') {
  const { userPrivies } = getUserInfo() || { userPrivies: [] };
  // 功能按钮
  const buttonList: string[] = [];
  // 模块 / 菜单
  const menuList = ref<MenuForm[]>([]);
  if (menuType <= MenuType.MENU) {
    menuList.value = userPrivies
      .filter((item: MenuForm) => {
        if (menuType === MenuType.MENU) {
          return item.parentId === parentId;
        }
        return item.menuType === menuType;
      })
      .sort(sortBy('sortNo'));
  } else {
    for (let i = 0; i < userPrivies.length; i++) {
      const item = userPrivies[i];
      item.menuType === MenuType.BUTTON && buttonList.push(item.menuCode);
    }
  }
  return {
    menuList: menuList.value,
    buttonList
  };
}
