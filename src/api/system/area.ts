/*
 * @Author: ZhouHao joehall@foxmail.com
 * @Date: 2023-08-01 15:42:54
 * @LastEditors: ZhouHao joehall@foxmail.com
 * @LastEditTime: 2023-08-02 10:09:28
 * @FilePath: \servious-illness-admin\src\api\system\area.ts
 * @Description: 
 */
import request from "/@/utils/request";
import * as Area from "areaTypeModules"

const commonUrl = '/Organization'
// 统一接口管理
enum AREAAPI {
  FETCH_HOSPT_AREA_INFO_URL = `${commonUrl}/OrgManage/GetOrgAreaInfos`,
  UPDATE_HOSPT_AREA_INFO = `${commonUrl}/OrgManage/SaveOrgAreaInfo`,
  DELETE_HOSPT_AREA_INFO = `${commonUrl}/OrgManage/DeleteOrgAreaInfo`,
  FETCH__DEP_INFO_URL = `${commonUrl}/OrgManage/GetOrgDeptTrees`,
  FETCH_HOSPAREA_DEP_TREE_URL = `${commonUrl}/OrgManage/GetOrgAreaDeptTree`,
}

// 获取院区信息
export const fetchHosptAreaInfo = (): Promise<Area.hospAreaInfo[]> => request.get({ url: AREAAPI.FETCH_HOSPT_AREA_INFO_URL })

// 更新院区信息
export const updateHosptAreaInfo = (data: Area.hospAreaInfo) => request.post({ url: AREAAPI.UPDATE_HOSPT_AREA_INFO, data })

// 删除院区信息
export const deleteHosptAreaInfo = (areaId: string) => request.post({ url: `${AREAAPI.DELETE_HOSPT_AREA_INFO}?areaId=${areaId}` })

// 获取院区科室组合树
export const fetchHospAreaDepTree = (): Promise<Area.resHospAreaDepTree[]> => request.get({ url: AREAAPI.FETCH_HOSPAREA_DEP_TREE_URL })

// 获取科室信息
export const fetchDepList = (data: Area.fetchDepListParams): Promise<Area.resDepInfo[]> => request.get({ url: `${AREAAPI.FETCH__DEP_INFO_URL}`, data })