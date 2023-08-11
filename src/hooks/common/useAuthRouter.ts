/*
 * @Autor: QMZhao
 * @Date: 2023-08-11 11:50:51
 * @LastEditTime: 2023-08-11 17:25:29
 * @Description:
 */
import { NavigationGuardNext } from 'vue-router';

import { LoginResponse } from 'login';
import { MenuForm } from 'MenuConfig';
import { ErrorRouterParams } from 'ICUCommon';

import { MenuType } from '/@/enums/dict';

import { getUserInfo } from '/@/utils/session';

import { useRouterFrom } from '/@/store/common/useRouterFrom';

/**
 * 有 token 时跳转路由验证
 *
 * @param routerParams to.path 和 from.path
 * @param next
 */
export function useAuthRouter(routerParams: ErrorRouterParams, next: NavigationGuardNext): void {
  const { setRouterFromPath } = useRouterFrom();
  const { toPath, fromPath } = routerParams;
  const menus = filterMenus();
  const hasAuth = menus.findIndex((item: MenuForm) => item.routeAddr === toPath);

  // 跳转路由是否为登录角色分配路由, 是则跳转, 否则转到错误页面
  if (hasAuth !== -1) {
    next();
  } else {
    next({
      path: '/error'
    });
    setRouterFromPath(fromPath);
  }
}

/**
 * 过滤菜单
 *
 * @returns 菜单数据
 */
function filterMenus() {
  const userInfoData: LoginResponse<MenuForm> | null = getUserInfo();
  const { userPrivies } = userInfoData || { userPrivies: [] };
  const MENUTYPE = MenuType.MENU;
  const menus = userPrivies
    .filter((item: MenuForm) => item.menuType === MENUTYPE)
    .concat([
      {
        menuName: '首页',
        menuCode: 'dashboard',
        menuType: 1,
        routeAddr: '/dashboard'
      }
    ]);
  return menus;
}
