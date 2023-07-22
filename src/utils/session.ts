/*
 * @Author: QMZhao
 * @Date: 2020-12-18 15:07:06
 * @LastEditTime: 2023-07-22 18:02:30
 * @Description: 存储 session
 * @FilePath: \servious-illness-admin\src\utils\session.ts
 */

// App
const menuKey = 'menu';
export const getMenuData = () => window.sessionStorage.getItem(menuKey);
export const setMenuData = (menu: string) => window.sessionStorage.setItem(menuKey, menu);
export const removeMenuData = () => window.sessionStorage.removeItem(menuKey);



// // Users
const userKey = 'userInfo';
export const getUserInfo = () => window.sessionStorage.getItem(userKey);
export const setUserInfo = (info: string) => {
  window.sessionStorage.setItem(userKey, info);
};
export const removeUserInfo = () => {
  window.sessionStorage.removeItem(userKey);
};
