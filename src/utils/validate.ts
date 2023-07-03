/*
 * @Author: QMZhao
 * @Date: 2020-08-24 16:55:42
 * @LastEditTime: 2021-03-11 17:11:08
 * @LastEditors: Please set LastEditors
 * @Description: 表单验证
 * @FilePath: /vue-pc/src/utils/validate.ts
 */
import { isMobile, isEmail, isIdcard } from "./index";

// 手机号码验证
export const validataMobile = (rule: any, value: string, callback: any) => {
  if (!rule) return;
  if (isMobile(value)) {
    callback();
  } else {
    callback(new Error("电话号码格式有误"));
  }
};
// 手机号码验证不必须输入
export const validataMobiles = (rule: any, value: string, callback: any) => {
  if (!rule) return;
  if (isMobile(value)) {
    callback();
  } else {
    callback(new Error("电话号码格式有误"));
  }
};
// 邮箱验证
export const validataEmail = (rule: any, value: string, callback: any) => {
  if (!rule) return;
  if (isEmail(value)) {
    callback();
  } else {
    callback(new Error("邮箱格式有误"));
  }
};
// 身份证验证
export const validataIdcard = (rule: any, value: string, callback: any) => {
  if (!rule) return;
  if (isIdcard(value)) {
    callback();
  } else {
    callback(new Error("身份证格式有误"));
  }
};

/**
 * @param {string} path
 * @returns {Boolean}
 */
export const isExternal = (path: string) => {
  return /^(https?:|mailto:|tel:)/.test(path);
};
