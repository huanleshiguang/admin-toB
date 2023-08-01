import request from "/@/utils/request";
import * as Area from './types/area'

const commonUrl = '/Organization'
// 统一接口管理
enum DEPTAPI {
  FETCH__DEP_INFO_URL = `${commonUrl}/OrgManage/GetOrgDeptTrees`,

}

// 获取科室信息
export const fetchDepList = (data: Area.fetchDepList): Promise<Area.resDepInfo[]> => request.get({ url: `${DEPTAPI.FETCH__DEP_INFO_URL}`,data })