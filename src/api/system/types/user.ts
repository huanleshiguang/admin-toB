/*
 * @Author: ZhouHao joehall@foxmail.com
 * @Date: 2023-07-18 14:33:39
 * @LastEditors: ZhouHao joehall@foxmail.com
 * @LastEditTime: 2023-07-20 10:27:48
 * @FilePath: \servious-illness-admin\src\api\system\types\user.ts
 * @Description: 人员管理模块接口约束
 */
export interface updateHospAreaInfo {
  id: string,
  hospAreaCode: string;
  hospAreaName: string;
}

// 获取科室信息列表
export interface getHospAreaDepList {
  children?: getHospAreaDepList[]
  deptCode: string
  deptName: string
  id: string
  isMainDept: Boolean
  parentId: string
}