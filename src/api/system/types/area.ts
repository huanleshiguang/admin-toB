/**
 * 请求参数接口
 */
// 院区信息
export interface hospAreaInfo {
  hospId:string
  hospAreaCode:string
  id: string  
  hospAreaName: string
  dataStatus:number
}


// 获取科室 params
export interface fetchDepListParams {
  AreaId: string
  DeptType: number
  Keyword: string
}
// 科室信息列表
export interface resDepInfo {
  children?: resDepInfo[]
  deptCode: string
  deptName: string
  id: string
  isMainDept: Boolean
  parentId: string
  deptTel: string | null
  deptAddr: string | null
  dataStatus: number
}

// 院区科室信息树
export interface resHospAreaDepTree {
  id: string
  parentId: null | string,
  hospAreaid: null | string,
  areaDeptName: string,
  type: string,
  disabled: boolean,
  children: resHospAreaDepTree[]
}