/*
 * @Autor: QMZhao
 * @Date: 2023-07-06 15:17:49
 * @LastEditTime: 2023-08-11 14:45:29
 * @Description:
 */
export enum EnvBasePath {
  'devlopment' = '',
  'production' = '/',
  'staging' = '/pc'
}

/**
 * 服务端端口
 */
export enum ApiBranch {
  ORGANIZATION = '/Organization/',
  BASEDATA = '/BaseData/'
}

/**
 * 服务端模块
 */
export enum ApiController {
  USER_MANAGE = 'UserManage/',
  Role_MANAGE = 'RoleManage/',
  DICT_MANAGE = 'DictManage/',
  ORG_MANAGE = 'OrgManage/',
  PRIVS_MANAGE = 'PrivsManage/'
}

/**
 * 角色菜单类型
 */
export enum MenuType {
  // 模块
  MODULE,
  // 菜单
  MENU,
  // 功能菜单
  BUTTON
}
