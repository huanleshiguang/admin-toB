/*
 * @Author: ZhouHao joehall@foxmail.com
 * @Date: 2023-07-18 14:33:39
 * @LastEditors: ZhouHao Joehall@foxmail.com
 * @LastEditTime: 2023-08-04 23:48:48
 * @FilePath: \servious-illness-admin\src\api\system\types\user.ts
 * @Description: 人员管理模块接口约束
 */

declare module "userTypeModules" {
  export interface fetchUserList {
    AreaId: string
    DeptId: string,
    Keyword?: string;
    PageIndex?: number;
    PageSize?: number
  }
  
  // form表单字段
  export interface userForm {
    deptId: string
    deptIds: []
    userName: string
    userIdNo: string
    positionLevelName: string
    genderName: string
    userTel: string
    userWorkNo: string
    userRoleIds: []
  }
  
  /**
   * 响应参数接口
   */
  
  // 用户信息
  export interface userInfo extends userForm {
    id: string
    syncId: null | string
    deptName: string
    positionLevelCode: null | string
    genderCode: string
  }
  
  // 返回的科室人员信息接口
  export interface resUserList {
    total: number
    pageData: userInfo[]
    pageIndex: number
    pageSize: number
  }
  
}



