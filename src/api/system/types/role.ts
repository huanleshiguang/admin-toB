declare module 'roleTypeModules' {
  // 角色信息
export interface roleInfo {
  id: string
  roleCode: string,
  roleName: string,
  roleDisplayName: string,
  sortNo: number,
  remark: string
  dataStatus:number
}

export interface resRoleInfo{
  total:string
  pageData:roleInfo[]
  pageIndex:string
  pageSize:string
}

}
