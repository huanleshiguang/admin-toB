/*
 * @Author: ZhouHao joehall@foxmail.com
 * @Date: 2023-07-13 15:36:33
 * @LastEditors: ZhouHao joehall@foxmail.com
 * @LastEditTime: 2023-07-29 18:07:35
 * @FilePath: \servious-illness-admin\src\api\system\user.ts
 * @Description: 人员管理界面 相关接口
 */
import request from "/@/utils/request";
import * as Users from "./types/user";

const commonUrl = '/Organization'
// 统一接口管理
enum USERAPI {
  FETCH_HOSPT_AREA_INFO_URL = `${commonUrl}/OrgManage/GetOrgAreaInfos`,
  UPDATE_HOSPT_AREA_INFO = `${commonUrl}/OrgManage/UpdateOrgAreaInfo`,
  DELETE_HOSPT_AREA_INFO = `${commonUrl}/OrgManage/DeleteOrgAreaInfo`,
  FETCH_FEATURE_LIST = `${commonUrl}/RoleManage/GetOrgMenuTrees`,
  FETCH__DEP_INFO_URL = `${commonUrl}/OrgManage/GetOrgDeptTrees`,
  FETCH_HOSPAREADEP_USER_URL = `${commonUrl}/UserManage/GetDeptUserInfo`,
  FETCH_HOSPAREA_DEP_TREE_URL = `${commonUrl}/OrgManage/GetOrgAreaDeptTree`,
  FETCH_ROLE_LIST_URL = `${commonUrl}/RoleManage/GetOrgRoleLists`,
  DELETE_ROLE_INFO_URL = `${commonUrl}/UserManage/DeleteUserInfo`
}
// 获取院区信息
export const fetchHosptAreaInfo = (): Promise<Users.hospAreaInfo[]> => request.get({ url: USERAPI.FETCH_HOSPT_AREA_INFO_URL })

// 更新院区信息
export const updateHosptAreaInfo = (data: Users.hospAreaInfo) => request.post({ url: USERAPI.UPDATE_HOSPT_AREA_INFO, data })

// 删除院区信息
export const deleteHosptAreaInfo = (areaId: string) => request.post({ url: `${USERAPI.DELETE_HOSPT_AREA_INFO}?areaId=${areaId}` })

// 获取科室信息
export const fetchDepList = (areaId: string): Promise<Users.resDepList[]> => request.get({ url: `${USERAPI.FETCH__DEP_INFO_URL}?areaId=${areaId}` })

// 获取院区科室组合树
export const fetchHospAreaDepTree = (): Promise<Users.resHospAreaDepTree[]> => request.get({ url: USERAPI.FETCH_HOSPAREA_DEP_TREE_URL })

// 获取科室人员信息
export const fetchHosptAreaDepUserList = (data: Users.resHosptAreaDepUserList): Promise<Users.resHospAreaDepUserList> =>
  request.get({ url: USERAPI.FETCH_HOSPAREADEP_USER_URL, data })

// 保存用户信息
export const updateUserInfo = (data: Users.hospAreaInfo) => request.post({ url: USERAPI.UPDATE_HOSPT_AREA_INFO, data })

// 删除用户信息
export const deleteUserInfo = (userId: string) => request.post({ url: USERAPI.UPDATE_HOSPT_AREA_INFO, data: { userId } })



// 获取功能菜单
export const fetchFeatureList = () => request.get({ url: USERAPI.FETCH_FEATURE_LIST })
