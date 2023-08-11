/*
 * @Author: QMZhao
 * @Description:
 * @Date: 2021-09-22 08:47:36
 * @LastEditTime: 2023-08-08 15:30:16
 * @Reference:
 */

declare module 'login' {
  // 用户登录信息
  export interface UserLoginForm {
    loginName: string;
    password: number | string;
  }

  // 用户个人信息
  export interface UserInfo {
    username: string;
    accountInfoId: string;
  }

  /**
   * 登录响应信息
   */
  export interface LoginResponse<T = any> {
    userInfo: Iobj;
    accountTokenInfo: Iobj;
    userRoles: Iobj[];
    userPrivies: T[];
  }

  /**
   * 登出参数
   */
  export interface Logout {
    accountInfoId: string;
  }
}
