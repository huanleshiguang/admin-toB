/*
 * @Autor: QMZhao
 * @Date: 2023-07-06 15:17:49
 * @LastEditTime: 2023-08-17 15:11:26
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
  PRIVS_MANAGE = 'PrivsManage/',
  BUSINESS_CONFIG = 'BusinessConfig/'
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

/**
 * 字典请求 code
 */
export const DictParams = {
  // 基础字典
  BaseDict: {
    // 班次
    base_bc: 'base_bc',
    // 性别
    base_xb: 'base_xb',
    // 客户端未知
    base_khdwz: 'base_khdwz',
    // 终端类型
    base_zdlx: 'base_zdlx',
    // 床位类型
    base_cwlx: 'base_cwlx',
    // 设备厂商
    base_sbcs: 'base_sbcs',
    // 设备类型
    base_sblx: 'base_sblx',
    // 护理频次
    base_hlpc: 'base_hlpc',
    // 单位
    base_dw: 'base_dw',
    // 体重
    base_tz: 'base_tz',
    // 颜色
    base_ys: 'base_ys',
    base_zwlb: 'base_zwlb'
  },
  // 业务字典
  BusinessDict: {}
};
