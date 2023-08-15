declare module 'areaTypeModules' {
  // 院区信息
  export interface hospAreaInfo {
    hospId: string;
    hospAreaCode: string;
    id: string;
    hospAreaName: string;
    dataStatus: number;
  }

  // 更新院区信息 form类型
  interface hospAreaFormType {
    hospAreaCode: string;
    hospAreaName: string;
  }

  // 获取科室 params
  export interface fetchDepListParams {
    AreaId?: string;
    DeptType?: number;
    Keyword?: string;
  }
  // 科室信息列表
  export interface resDepInfo {
    children?: resDepInfo[];
    deptCode: string;
    deptName: string;
    id: string;
    isMainDept: Boolean;
    parentId: string;
    deptTel: string | null;
    deptAddr: string | null;
    dataStatus: number;
  }

  // 院区科室信息组合树
  export interface resHospAreaDepTree {
    id: string;
    parentId: null | string;
    hospAreaid: null | string;
    areaDeptName: string;
    type: string;
    disabled: boolean;
    children: resHospAreaDepTree[];
  }

  // 科室类型
  export interface deptTypInfo {
    DeptType: number;
    DeptTypeName: string;
  }
}
