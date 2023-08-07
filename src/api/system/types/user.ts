/*
 * @Author: ZhouHao joehall@foxmail.com
 * @Date: 2023-07-18 14:33:39
 * @LastEditors: ZhouHao joehall@foxmail.com
 * @LastEditTime: 2023-08-04 18:22:16
 * @FilePath: \servious-illness-admin\src\api\system\types\user.ts
 * @Description: 人员管理模块接口约束
 */

export interface fetchHosptAreaDepUserList {
  AreaId?: string
  DeptId?: string
  Keyword?: string;
}

/**
 * 响应参数接口
 */

// 用户信息
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

// 返回的科室人员信息接口
export interface resHospAreaDepUserList {
  total: number
  pageData: userInfo[]
  pageIndex: number
  pageSize: number
}



// 角色信息
export interface resRoleInfo {
  id: string
  roleCode: string,
  roleName: string,
  roleDisplayName: string,
  sortNo: number,
  remark: string
}