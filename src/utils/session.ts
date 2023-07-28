/*
 * @Author: QMZhao
 * @Date: 2020-12-18 15:07:06
 * @LastEditTime: 2023-07-28 16:02:45
 * @Description: 存储 session
 * @FilePath: \servious-illness-admin\src\utils\session.ts
 */

import { formatSessionJson } from '/@/hooks/common';

// // Users
const userKey = 'userInfo';
export const getUserInfo = () => formatSessionJson(sessionStorage.getItem(userKey));
export const setUserInfo = (info: string) => {
  sessionStorage.setItem(userKey, info);
};
export const removeUserInfo = () => {
  sessionStorage.removeItem(userKey);
};
