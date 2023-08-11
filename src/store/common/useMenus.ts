/*
 * @Autor: QMZhao
 * @Date: 2023-08-07 17:25:42
 * @LastEditTime: 2023-08-11 14:14:11
 * @Description:
 */
import { MenuForm } from 'MenuConfig';
import { useFilterMenus } from '/@/hooks/common/useFilterMenu';

import { MenuType } from '/@/enums/dict';

import { getMenuParentId } from '/@/utils/session';
import { sortBy } from '/@/utils';

/**
 * 系统模块
 */
export const useModules = defineStore('modules', () => {
  // MENUTYPE: 0 -- 目录类型
  const MENUTYPE = MenuType.MODULE;
  const { menuList } = useFilterMenus(MENUTYPE);
  const targetModules = ref<MenuForm[] | null>(menuList);
  function setTargetModule(value: null | MenuForm[]) {
    if (value) {
      targetModules.value = value.filter((item: MenuForm) => !item.menuType).sort(sortBy('sortNo'));
    } else {
      targetModules.value = value;
    }
  }

  return { targetModules, setTargetModule };
});

/**
 * 模块下菜单
 */
export const useMenus = defineStore('menus', () => {
  // MENUTYPE: 1 -- 菜单类型
  const MENUTYPE = MenuType.MENU;
  const parentId = getMenuParentId();
  const { menuList } = useFilterMenus(MENUTYPE, parentId);
  const targetMenus = ref<MenuForm[] | null>(menuList);
  function setTargetMenus(parentId: null | string) {
    if (parentId) {
      const { menuList } = useFilterMenus(MENUTYPE, parentId);
      targetMenus.value = menuList;
    } else {
      targetMenus.value = null;
    }
  }

  return { targetMenus, setTargetMenus };
});

/**
 * 功能按钮
 */
export const useButtons = defineStore('buttons', () => {
  // MENUTYPE: 2 -- 功能按钮类型
  const MENUTYPE = MenuType.BUTTON;
  const { buttonList } = useFilterMenus(MENUTYPE);

  const targeButtons = ref<string[] | null>(buttonList);

  function setTargetButton(btns: null | MenuForm[]) {
    const buttons: string[] = [];
    if (btns === null) {
      targeButtons.value = null;
    }
    btns &&
      btns.map((item: MenuForm) => {
        item.menuType === MENUTYPE && buttons.push(item.menuCode);
      });
    targeButtons.value = buttons;
  }

  return { targeButtons, setTargetButton };
});
