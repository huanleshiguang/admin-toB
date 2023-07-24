/*
 * @Author: ZhouHao joehall@foxmail.com
 * @Date: 2023-07-13 15:36:33
 * @LastEditors: ZhouHao joehall@foxmail.com
 * @LastEditTime: 2023-07-24 13:58:19
 * @FilePath: \servious-illness-admin\src\api\system\user.ts
 * @Description: 人员管理界面 相关接口
 */
import request from "/@/utils/request";
import * as Users from "./types/user";

const commonUrl = '/Organization'
// 统一接口管理
enum API {
  FETCH_HOSPT_AREA_INFO_URL = `${commonUrl}/OrgManage/GetOrgAreaInfos`,
  UPDATE_HOSPT_AREA_INFO = `${commonUrl}/OrgManage/UpdateOrgAreaInfo`,
  DELETE_HOSPT_AREA_INFO = `${commonUrl}/OrgManage/DeleteOrgAreaInfo`,
  FETCH_FEATURE_LIST = `${commonUrl}/RoleManage/GetOrgMenuTrees`,
  FETCH_HOSPT_AREA__DEP_INFO_URL = `${commonUrl}/OrgManage/GetOrgDeptTrees`,
  FETCH_HOSPAREADEP_USER_URL = `${commonUrl}/OrgManage/GetDeptUserInfo`,
}

// 获取院区信息
export const fetchHosptAreaInfo = ():Promise<Users.hospAreaInfo[]> => request.get({ url: API.FETCH_HOSPT_AREA_INFO_URL })

// 更新院区信息
export const updateHosptAreaInfo = (data: Users.hospAreaInfo) => request.post({ url: API.UPDATE_HOSPT_AREA_INFO, data })

// 删除院区信息
export const deleteHosptAreaInfo = (areaId: string) => request.post({ url: `${API.DELETE_HOSPT_AREA_INFO}?areaId=${areaId}` })

// 获取院区科室信息
export const fetchHosptAreaDepList = (areaId: string):Promise<Users.fetchHospAreaDepList[]> => request.get({ url: `${API.FETCH_HOSPT_AREA__DEP_INFO_URL}?areaId=${areaId}` })

// 获取科室人员信息
export const fetchHosptAreaDepUserList = ({
  AreaId,
  DeptId,
  Keyword,
  PageIndex,
  PageCount,
}:Users.fetchHosptAreaDepUserList) :Promise<Users.resHospAreaDepUserList> => 
request.get({ url: `${API.FETCH_HOSPAREADEP_USER_URL}?AreaId=${AreaId}&DeptId=${DeptId}&Keyword=${Keyword}&PageIndex=${PageIndex}&PageCount=${PageCount}`})

// 获取功能菜单
export const fetchFeatureList = () => request.get({ url: API.FETCH_FEATURE_LIST })
