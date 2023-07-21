/*
 * @Author: ZhouHao joehall@foxmail.com
 * @Date: 2023-07-13 15:36:33
 * @LastEditors: ZhouHao joehall@foxmail.com
 * @LastEditTime: 2023-07-21 10:59:02
 * @FilePath: \servious-illness-admin\src\api\system\user.ts
 * @Description: 人员管理界面 相关接口
 */
import request from "/@/utils/request";
import * as Users from "./types/user";

// 统一接口管理
enum API {
  GET_HOSPT_AREA_INFO_URL = '/Organization/OrgManage/GetOrgAreaInfos',
  UPDATE_HOSPT_AREA_INFO = '/Organization/OrgManage/UpdateOrgAreaInfo',
  DELETE_HOSPT_AREA_INFO = '/Organization/OrgManage/DeleteOrgAreaInfo',
  GET_FEATURE_LIST = '/Organization/RoleManage/GetOrgMenuTrees',
  GET_HOSPT_AREA__DEP_INFO_URL = '/Organization/OrgManage/GetOrgDeptTrees',
}

// 获取院区信息
export const apiFetchHosptAreaInfo = () => request.get({ url: API.GET_HOSPT_AREA_INFO_URL })

// 更新院区信息
export const apiUpdateHosptAreaInfo = (data:Users.updateHospAreaInfo) => request.post({ url: API.UPDATE_HOSPT_AREA_INFO, data })

// 删除院区信息
export const apiDeleteHosptAreaInfo = (areaId: string) => request.post({ url: `${API.DELETE_HOSPT_AREA_INFO}?areaId=${areaId}` })

// 获取院区科室信息
export const apiFetchHosptAreaDepList = (areaId: string) => request.get({ url: `${API.GET_HOSPT_AREA__DEP_INFO_URL}?areaId=${areaId}` })

// 获取功能菜单
export const apiFetchFeatureList = () => request.get({ url: API.GET_FEATURE_LIST })