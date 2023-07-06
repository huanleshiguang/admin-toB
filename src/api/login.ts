/*
 * @Autor: QMZhao
 * @Date: 2021-09-16 23:02:02
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-08-15 14:56:29
 * @Description:
 * @FilePath: /vue-vite-template/src/api/login.ts
 */
import { defHttp } from "/@/utils/axios";

export const testApi = async () => {
  return defHttp.get({ url: "/Organization/OrgManage/GetOrgAreaInfos" });
};
