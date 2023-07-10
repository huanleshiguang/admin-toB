/*
 * @Autor: QMZhao
 * @Date: 2021-09-16 23:02:02
 * @LastEditors: QMZhao zhao971462054@163.com
 * @LastEditTime: 2023-07-10 15:56:04
 * @Description:
 * @FilePath: /vue-vite-template/src/api/login.ts
 */
import defHttp from '/@/utils/request';

export const testApi = () => {
  return defHttp.get({ url: '/Organization/OrgManage/GetOrgAreaInfos' });
};
