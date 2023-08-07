/*
 * @Author: ZhouHao joehall@foxmail.com
 * @Date: 2023-08-07 09:34:14
 * @LastEditors: ZhouHao joehall@foxmail.com
 * @LastEditTime: 2023-08-07 09:43:55
 * @FilePath: \servious-illness-admin\src\api\system\types\user.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
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



