/*
 * @Author: QMZhao
 * @Date: 2020-12-18 15:07:06
 * @LastEditTime: 2021-09-03 13:09:42
 * @Description: 存储 session
 * @FilePath: /vue-pc/src/utils/session.ts
 */

// App
const menuKey = "menu";
export const getMenuData = () => window.sessionStorage.getItem(menuKey);
export const setMenuData = (menu: string) => window.sessionStorage.setItem(menuKey, menu);
export const removeMenuData = () => window.sessionStorage.removeItem(menuKey);

// Token
const tokenKey = "token";
export const getToken = () => window.sessionStorage.getItem(tokenKey);
export const setToken = (token: string) => {
  window.sessionStorage.setItem(tokenKey, token);
};
export const removeToken = () => window.sessionStorage.removeItem(tokenKey);

// permission
const permissionKey = "permission";
export const getRolePermission = () => window.sessionStorage.getItem(permissionKey);
export const setRolePermission = (role: string[]) => window.sessionStorage.setItem(permissionKey, JSON.stringify(role));
export const removeRolePermission = () => window.sessionStorage.removeItem(permissionKey);

// Users
const userKey = "userInfo";
export const getUserInfo = () => window.sessionStorage.getItem(userKey);
export const setUserInfo = (info: string) => {
  window.sessionStorage.setItem(userKey, info);
};
export const removeUserInfo = () => {
  window.sessionStorage.removeItem(userKey);
};
