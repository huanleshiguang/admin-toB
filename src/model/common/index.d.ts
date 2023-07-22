declare namespace ICUCommon {
  // 二级菜单
  export interface MenuChildren {
    id?: number;
    icon?: string;
    label?: string;
    path?: string;
    permission: string;
    children?: MenuChildren[];
  }

  // 一级菜单
  export interface MenuList {
    id: number;
    name?: string;
    icon: string;
    label: string;
    path?: string;
    permission: string;
    children?: MenuChildren[];
  }

  // tab 组件
  export interface TabsComponens {
    id?: string | number;
    label: string;
    component: Component;
  }
}
