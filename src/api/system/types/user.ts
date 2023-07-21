/*
 * @Author: ZhouHao joehall@foxmail.com
 * @Date: 2023-07-18 14:33:39
 * @LastEditors: ZhouHao joehall@foxmail.com
 * @LastEditTime: 2023-07-21 20:01:09
 * @FilePath: \servious-illness-admin\src\api\system\types\user.ts
 * @Description: 人员管理模块接口约束
 */


/**
 * 请求参数接口
 */
// 更新院区信息
export interface updateHospAreaInfo {
  id: string,
  hospAreaCode: string;
  hospAreaName: string;
}
export interface fetchHosptAreaDepUserList {
  DeptId?: string,
  Keyword?: string;
  PageIndex?: number;
  PageCount?: number
}


/**
 * 响应接口
 */
// 获取科室信息列表
export interface fetchHospAreaDepList {
  children?: fetchHospAreaDepList[]
  deptCode: string
  deptName: string
  id: string
  isMainDept: Boolean
  parentId: string
}
