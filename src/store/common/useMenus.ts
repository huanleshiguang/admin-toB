import { MenuForm } from 'MenuConfig';
import { useFilterMenus } from '/@/hooks/common/useFilterMenu';
import { getMenuParentId } from '/@/utils/session';
import { sortBy } from '/@/utils';

/**
 * 系统模块
 */
export const useModules = defineStore('modules', () => {
  // 1 -- 目录类型
  const MENUTYPE = 0;
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
  // 1 -- 菜单类型
  const MENUTYPE = 1;
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
  // 1 -- 功能按钮类型
  const MENUTYPE = 2;
  const { buttonList } = useFilterMenus(MENUTYPE);

  const targeButtons = ref<string[] | null>(buttonList);

  function setTargetButton(btns: null | MenuForm[]) {
    const buttons: string[] = [];
    if (btns === null) {
      targeButtons.value = null;
    }
    btns &&
      btns.map((item: MenuForm) => {
        item.menuType === 2 && buttons.push(item.menuCode);
      });
    targeButtons.value = buttons;
  }

  return { targeButtons, setTargetButton };
});
