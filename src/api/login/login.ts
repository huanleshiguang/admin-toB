/*
 * @Autor: QMZhao
 * @Date: 2021-09-16 23:02:02
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-07-19 15:11:04
 * @Description: 登录接口
 * @FilePath: \servious-illness-admin\src\api\login.ts
 */
import defHttp from '/@/utils/request';

enum loginPath {
  // login = '/Organization/UserManage/OrgUserLogin111'
  login = '/Organization/UserManage/OrgUserLogin'
}

/**
 * 登录
 *
 * @param data 请求参数
 * @returns
 */
export const fetchLogin = <T>(data: T) => defHttp.post({ url: loginPath.login, data });
