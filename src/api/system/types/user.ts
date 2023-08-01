/*
 * @Author: ZhouHao joehall@foxmail.com
 * @Date: 2023-07-18 14:33:39
 * @LastEditors: ZhouHao joehall@foxmail.com
 * @LastEditTime: 2023-07-31 09:32:33
 * @FilePath: \servious-illness-admin\src\api\system\types\user.ts
 * @Description: 人员管理模块接口约束
 */


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
export interface resHosptAreaDepUserList {
  AreaId: string
  DeptId: string,
  Keyword?: string;
  PageIndex?: number;
  PageSize?: number
}


/**
 * 响应参数接口
 */



// 科室人员列表
export interface userInfo {
  id: string
  syncId: null | string
  deptId: string
  deptName: string
  userWorkNo: string
  deptIds: string[]
  userName: string
  positionLevelCode: null | string
  positionLevelName: string
  genderCode: string
  genderName: string
  userTel: null | string
  userIdNo: null | string
  userRoleIds: string[]
}

// 科室人员信息
export interface resHospAreaDepUserList {
  total: number
  pageData: userInfo[]
  pageIndex: number
  pageSize: number
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

//角色信息
export interface resRoleInfo {
  id: string
  roleCode: string,
  roleName: string,
  roleDisplayName: string,
  sortNo: number,
  remark: string
}