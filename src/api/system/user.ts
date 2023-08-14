/*
 * @Author: ZhouHao joehall@foxmail.com
 * @Date: 2023-07-13 15:36:33
 * @LastEditors: ZhouHao joehall@foxmail.com
 * @LastEditTime: 2023-08-11 15:53:51
 * @FilePath: \servious-illness-admin\src\api\system\user.ts
 * @Description: 人员管理界面 相关接口
 */
import request from '/@/utils/request';
// import * as Users from './types/user';
import * as userType from 'userTypeModules';

import { ApiBranch, ApiController } from '/@/enums/dict';

// 统一接口管理
enum USERAPI {
  SAVE_USERINFO = `${ApiBranch.ORGANIZATION}${ApiController.ORG_MANAGE}SaveOrgUserInfo`,
  DELETE_USERINFO = `${ApiBranch.ORGANIZATION}${ApiController.USER_MANAGE}DeleteUserInfo`,
  FETCH_FEATURE_LIST = `${ApiBranch.ORGANIZATION}${ApiController.Role_MANAGE}GetOrgMenuTrees`,
  FETCH_HOSPAREADEP_USER_URL = `${ApiBranch.ORGANIZATION}${ApiController.USER_MANAGE}GetDeptUserInfo`
}

// 获取科室人员信息
export const fetchHosptAreaDepUserList = (data: userType.fetchUserList): Promise<userType.resUserList> =>
  request.get({ url: USERAPI.FETCH_HOSPAREADEP_USER_URL, data });

// 保存用户信息
export const updateUserInfo = (data: userType.userInfo) => request.post({ url: USERAPI.SAVE_USERINFO, data });

// 删除用户信息
export const deleteUserInfo = (userId: string) => request.post({ url: USERAPI.DELETE_USERINFO, data: { userId } });

// 获取功能菜单
export const fetchFeatureList = () => request.get({ url: USERAPI.FETCH_FEATURE_LIST });
