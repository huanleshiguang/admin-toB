/*
 * @Autor: QMZhao
 * @Date: 2023-07-24 19:26:48
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-07-29 09:47:30
 * @Description: 权限管理
 * @FilePath: \servious-illness-admin\src\api\system\role.ts
 */
import defHttp from '/@/utils/request';
import * as ROLE from './types/role'
const common = '/Organization/';

enum ROLEURL {
  ROLE_TREE = `${common}RoleManage/GetOrgRoleTrees`,
  ROLE_LIST = `${common}RoleManage/GetOrgRoleLists`,
  SAVE_ROLE = `${common}RoleManage/SaveOrgRoleInfo`,
  DELETE_ROLE = `${common}RoleManage/DeleteOrgRoleInfo`,
  ROLE_PRIVS = `${common}PrivsManage/GetOrgRolePrivs`,
  SAVE_ROLE_PRIVS = `${common}PrivsManage/SavePrivsInfo`
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
export function fetchRoleList():Promise<ROLE.resRoleInfo> {
  return defHttp.get({ url: ROLEURL.ROLE_LIST });
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
