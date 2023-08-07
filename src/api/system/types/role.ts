
export interface roleInfo {
  roleCode:string
  roleName:string
  roleDisplayName:string
  sortNo:number
  remark:string
  id:string
  dataStatus:number
}

export interface resRoleInfo{
  total:string
  pageData:roleInfo[]
  pageIndex:string
  pageSize:string
}