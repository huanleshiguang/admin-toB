/*
 * @Autor: QMZhao
 * @Date: 2023-07-24 19:26:48
 * @LastEditors: ZhouHao joehall@foxmail.com
 * @LastEditTime: 2023-08-14 17:02:12
 * @Description: 权限管理
 * @FilePath: \servious-illness-admin\src\api\system\role.ts
 */
import defHttp from '/@/utils/request';
import roleType from 'roleTypeModules';

import { ApiBranch, ApiController } from '/@/enums/dict';

enum ROLEURL {
  ROLE_TREE = `${ApiBranch.ORGANIZATION}${ApiController.Role_MANAGE}GetOrgRoleTrees`,
  ROLE_LIST = `${ApiBranch.ORGANIZATION}${ApiController.Role_MANAGE}GetOrgRoleLists`,
  SAVE_ROLE = `${ApiBranch.ORGANIZATION}${ApiController.Role_MANAGE}SaveOrgRoleInfo`,
  DELETE_ROLE = `${ApiBranch.ORGANIZATION}${ApiController.Role_MANAGE}DeleteOrgRoleInfo`,
  ROLE_PRIVS = `${ApiBranch.ORGANIZATION}${ApiController.PRIVS_MANAGE}GetOrgUserRolePrivs`,
  SAVE_ROLE_PRIVS = `${ApiBranch.ORGANIZATION}${ApiController.PRIVS_MANAGE}SavePrivsInfo`
}

/**
 * 获取角色信息（树状结构）
 */
export function fetchRoleTrees() {
  return defHttp.get({ url: ROLEURL.ROLE_TREE });
}

/**
 * 获取角色信息（扁平结构）
 */
export function fetchRoleList<T>(data: T): Promise<roleType.resRoleInfo> {
  return defHttp.get({ url: ROLEURL.ROLE_LIST, data });
}

/**
 * 新增 / 修改 角色
 */
export function fetchSaveRole<T>(data: T) {
  return defHttp.post({ url: ROLEURL.SAVE_ROLE, data });
}

/**
 * 删除角色
 */
export function fetchDeleteRole<T>(data: T) {
  return defHttp.post({ url: `${ROLEURL.DELETE_ROLE}`, params: data, requestType: 'form' });
}

/**
 * 获取角色权限
 */
export function fetchRolePrivs<T>(data: T) {
  return defHttp.get({ url: `${ROLEURL.ROLE_PRIVS}`, data });
}
/**
 * 更新角色权限
 */
export function fetchSaveRolePrivs<T>(data: T) {
  return defHttp.post({ url: `${ROLEURL.SAVE_ROLE_PRIVS}`, data });
}
