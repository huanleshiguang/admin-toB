/*
 * @Author: ZhouHao joehall@foxmail.com
 * @Date: 2023-07-13 15:36:33
 * @LastEditors: ZhouHao Joehall@foxmail.com
 * @LastEditTime: 2023-08-04 23:55:17
 * @FilePath: \servious-illness-admin\src\api\system\user.ts
 * @Description: 人员管理界面 相关接口
 */
import request from '/@/utils/request';
// import * as Users from './types/user';
import * as userType from 'userTypeModules';

const commonUrl = '/Organization';
// 统一接口管理
enum USERAPI {
  FETCH_HOSPT_AREA_INFO_URL = `${commonUrl}/OrgManage/GetOrgAreaInfos`,
  UPDATE_HOSPT_AREA_INFO = `${commonUrl}/OrgManage/SaveOrgAreaInfo`,
  DELETE_HOSPT_AREA_INFO = `${commonUrl}/OrgManage/DeleteOrgAreaInfo`,
  FETCH_FEATURE_LIST = `${commonUrl}/RoleManage/GetOrgMenuTrees`,
  FETCH__DEP_INFO_URL = `${commonUrl}/OrgManage/GetOrgDeptTrees`,
  FETCH_HOSPAREADEP_USER_URL = `${commonUrl}/UserManage/GetDeptUserInfo`,
  FETCH_HOSPAREA_DEP_TREE_URL = `${commonUrl}/OrgManage/GetOrgAreaDeptTree`,
  FETCH_ROLE_LIST_URL = `${commonUrl}/RoleManage/GetOrgRoleLists`,
  DELETE_ROLE_INFO_URL = `${commonUrl}/UserManage/DeleteUserInfo`
}

// 获取科室人员信息
export const fetchHosptAreaDepUserList = (data: userType.fetchUserList): Promise<userType.resUserList> =>
  request.get({ url: USERAPI.FETCH_HOSPAREADEP_USER_URL, data });

// 保存用户信息
export const updateUserInfo = (data: userType.userInfo) => request.post({ url: USERAPI.UPDATE_HOSPT_AREA_INFO, data });

// 删除用户信息
export const deleteUserInfo = (userId: string) =>
  request.post({ url: USERAPI.UPDATE_HOSPT_AREA_INFO, data: { userId } });

// 获取功能菜单
export const fetchFeatureList = () => request.get({ url: USERAPI.FETCH_FEATURE_LIST });
