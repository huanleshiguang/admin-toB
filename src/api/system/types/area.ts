// 获取科室 params
export interface fetchDepListParams {
  AreaId:string
  DeptType:number
  Keyword:string
}
// 科室信息列表
export interface resDepInfo {
  children?: resDepInfo[]
  deptCode: string
  deptName: string
  id: string
  isMainDept: Boolean
  parentId: string
  deptTel:string | null
  deptAddr:string|null
  dataStatus:number
}