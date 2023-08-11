/*
 * @Autor: QMZhao
 * @Date: 2023-07-24 14:55:25
 * @LastEditTime: 2023-08-01 11:18:21
 * @Description: 菜单管理
 */
import defHttp from '/@/utils/request';
import { ApiBranch, ApiController } from '/@/enums/dict';

enum MENUURL {
  ORG_MENU_LIST = `${ApiBranch.ORGANIZATION}${ApiController.PRIVS_MANAGE}GetOrgMenuLists`,
  ORG_MENU_TREES = `${ApiBranch.ORGANIZATION}${ApiController.PRIVS_MANAGE}GetOrgMenuTrees`,
  ORG_MENU_EDIT = `${ApiBranch.ORGANIZATION}${ApiController.PRIVS_MANAGE}SaveOrgMenuInfo`,
  ORG_MENU_DELETE = `${ApiBranch.ORGANIZATION}${ApiController.PRIVS_MANAGE}DeleteOrgMenuInfo`
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
