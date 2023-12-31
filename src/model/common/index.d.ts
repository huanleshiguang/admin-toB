declare module 'ICUCommon' {
  /**
   * 二级菜单
   */
  export interface MenuChildren {
    id?: number;
    icon?: string;
    label?: string;
    path?: string;
    permission: string;
    children?: MenuChildren[];
  }

  /**
   * 一级菜单
   */
  export interface MenuList {
    id: number;
    name?: string;
    icon: string;
    label: string;
    path?: string;
    permission: string;
    children?: MenuChildren[];
  }

  /**
   * tab 组件
   */
  export interface TabsComponens {
    id?: string | number;
    label: string;
    component: Component | string;
  }

  /**
   * 下拉组件自定义数据类型
   */
  export interface SelectOption<T = string | number> {
    id?: string | number;
    value: T;
    label: string;
  }
  /**
   * 按钮权限数据
   */
  export interface ButtonAuth {
    [key: string]: SelectOption;
  }
  /**
   * 表格查询通用参数
   */
  export interface TableCommon {
    // 当前页下标
    pageIndex?: number;
    // 每页数据行数
    pageSize?: number;
  }

  /**
   * 路由跳转权限验证
   */
  export interface ErrorRouterParams {
    toPath: string;
    fromPath: string;
  }
}
