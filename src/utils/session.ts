/*
 * @Author: QMZhao
 * @Date: 2020-12-18 15:07:06
 * @LastEditTime: 2023-08-07 17:21:40
 * @Description: 存储 session
 */

import { LoginResponse } from 'login';

import { formatSessionJson } from '/@/hooks/common';

// 用户详情
const userKey = 'userInfo';
export const getUserInfo = () => formatSessionJson(sessionStorage.getItem(userKey));
export const setUserInfo = (info: LoginResponse) => {
  sessionStorage.setItem(userKey, JSON.stringify(info));
};
export const removeUserInfo = () => {
  sessionStorage.removeItem(userKey);
};

// 模块下菜单
const menuParentId = 'menuParentId';
export const getMenuParentId = () => formatSessionJson(sessionStorage.getItem(menuParentId));
export const setMenuParentId = (parentId: string) => {
  sessionStorage.setItem(menuParentId, parentId);
};
export const removeMenuParentId = () => {
  sessionStorage.removeItem(menuParentId);
};
