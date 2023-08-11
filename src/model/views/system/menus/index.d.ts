/*
 * @Autor: QMZhao
 * @Date: 2023-07-24 14:02:37
 * @LastEditTime: 2023-08-11 14:32:39
 * @Description: 菜单管理
 */

/**
 * 菜单管理
 */
declare module 'MenuConfig' {
  /**
   * 菜单表单
   */
  export interface MenuForm {
    id?: string;
    // 上级id
    parentId?: string;
    // 菜单类型
    menuType: number;
    // 菜单code
    menuCode: string;
    // 菜单名称
    menuName: string;
    // 菜单图标
    menuIcon?: string;
    // 路由地址
    routeAddr?: string;
    // 是否缓存
    isCache?: boolean;
    // 数据状态
    dataStatus?: number;
    // 排序
    sortNo?: number;
    // 描述
    remark?: string;
  }
  /**
   * 删除菜单项请求参数
   */
  export interface DeleteMenu {
    menuId: string;
  }
}
