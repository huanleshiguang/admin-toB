/*
 * @Author: ZhouHao joehall@foxmail.com
 * @Date: 2023-08-07 09:34:14
 * @LastEditors: ZhouHao joehall@foxmail.com
 * @LastEditTime: 2023-08-21 15:05:21
 * @FilePath: \servious-illness-admin\src\api\system\types\user.ts
 * @Description:
 */

declare module 'userTypeModules' {
  export interface fetchUserList {
    AreaId: string;
    DeptId: string;
    Keyword: string;
    PageIndex?: number;
    PageSize?: number;
  }

  // form表单字段
  export interface userForm {
    id: string;
    deptId: string;
    deptIds: [];
    userName: string;
    userIdNo: string;
    positionLevelName: string;
    positionLevelCode: string;
    genderName: string;
    genderCode: string;
    userTel: string;
    userWorkNo: string;
    idCategoryCode: string;
    idCategoryName: string;
    userRoleIds: [];
  }

  /**
   * 响应参数接口
   */

  // 用户信息
  export interface userInfo extends userForm {
    id: string;
    syncId?: null | string;
    deptName?: string;
    genderCode: string;
  }

  // 返回的科室人员信息接口
  export interface resUserList {
    total: number;
    pageData: userInfo[];
    pageIndex: number;
    pageSize: number;
  }

  // 返回的字典信息
  export interface resDictInfo {
    rangeName: string;
    rangeEnName: string | null;
    rangeValue: string;
    remark: string | null;
    dictId: string;
  }
}
