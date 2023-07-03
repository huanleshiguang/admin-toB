/*
 * @Autor: QMZhao
 * @Date: 2021-09-16 23:02:02
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-08-15 14:56:29
 * @Description:
 * @FilePath: /vue-vite-template/src/api/login.ts
 */
import request from "/@/utils/request";

export async function login<T>(data: T) {
  return request.post(`api/xxx`, data);
}
