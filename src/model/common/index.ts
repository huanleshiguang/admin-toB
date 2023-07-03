// 二级菜单
export interface ImenuChildren {
  id?: number;
  icon?: string;
  label?: string;
  path?: string;
  permission: string;
  children?: ImenuChildren[];
}

// 一级菜单
export interface ImenuList {
  id: number;
  name?: string;
  icon: string;
  label: string;
  path?: string;
  permission: string;
  children?: ImenuChildren[];
}
