/*
 * @Author: ZhouHao joehall@foxmail.com
 * @Date: 2023-07-18 14:33:39
 * @LastEditors: ZhouHao joehall@foxmail.com
 * @LastEditTime: 2023-07-25 15:00:42
 * @FilePath: \servious-illness-admin\src\api\system\types\user.ts
 * @Description: 人员管理模块接口约束
 */


/**
 * 请求参数接口
 */
// 更新院区信息
export interface hospAreaInfo {
  id: string;
  hospAreaName: string;
}
export interface fetchHosptAreaDepUserList {
  AreaId:string
  DeptId: string,
  Keyword?: string;
  PageIndex?: number;
  PageCount?: number
}


/**
 * 响应接口
 */

// 科室信息列表
export interface fetchHospAreaDepList {
  children?: fetchHospAreaDepList[]
  deptCode: string
  deptName: string
  id: string
  isMainDept: Boolean
  parentId: string
}

// 科室人员列表

export interface userInfo {
  deptName:string
  userWorkCode:string
  userName:string
  loginName:string
  positionLevelName:string
  genderName:string
}

export interface resHospAreaDepUserList {
 total:number
 pageData:userInfo[]
 pageIndex:number
 pageCount:number
}