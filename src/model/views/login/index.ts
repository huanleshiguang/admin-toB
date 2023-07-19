/*
 * @Author: QMZhao
 * @Description:
 * @Date: 2021-09-22 08:47:36
 * @LastEditTime: 2023-07-19 17:58:17
 * @Reference:
 */

// 用户登录信息
export interface UserLoginForm {
  loginName: string;
  password: number | string;
}

// 用户个人信息
export interface UserInfo {
  username: string;
}

/**
 * 登录响应信息
 */
export interface LoginResponse {
  userInfo: Iobj[];
  accountTokenInfo: Iobj[];
  userRoles: Iobj[];
  userPrivies: Iobj[];
}
