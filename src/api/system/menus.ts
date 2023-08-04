/*
 * @Autor: QMZhao
 * @Date: 2023-07-24 14:55:25
 * @LastEditTime: 2023-07-28 16:42:30
 * @Description: 
 */
import defHttp from '/@/utils/request';

const common = '/Organization/';

enum MENUURL {
  ORG_MENU_LIST = `${common}PrivsManage/GetOrgMenuLists`,
  ORG_MENU_TREES = `${common}PrivsManage/GetOrgMenuTrees`
}

/**
 * 获取功能菜单信息（树状结构）
 */
export function fetchOrgMenuTrees() {
  return defHttp.get({ url: MENUURL.ORG_MENU_TREES });
}

/**
 * 获取功能菜单信息（扁平结构）
 */
export function fetchOrgMenuList() {
  return defHttp.get({ url: MENUURL.ORG_MENU_LIST });
}