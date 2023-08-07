/*
 * @Autor: QMZhao
 * @Date: 2023-07-24 14:55:25
 * @LastEditTime: 2023-08-01 11:18:21
 * @Description: 菜单管理
 */
import defHttp from '/@/utils/request';

const common = '/Organization/';

enum MENUURL {
  ORG_MENU_LIST = `${common}PrivsManage/GetOrgMenuLists`,
  ORG_MENU_TREES = `${common}PrivsManage/GetOrgMenuTrees`,
  ORG_MENU_EDIT = `${common}PrivsManage/SaveOrgMenuInfo`,
  ORG_MENU_DELETE = `${common}PrivsManage/DeleteOrgMenuInfo`
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

/**
 * 更新菜单信息
 */
export function fetchEditMenu<T>(data: T) {
  return defHttp.post({ url: MENUURL.ORG_MENU_EDIT, data });
}


/**
 * 删除菜单信息
 */
export function fetchDelteMenu<T>(data: T) {
  return defHttp.post({ url: MENUURL.ORG_MENU_DELETE, params: data });
}
