import request from "/@/utils/request";

export const apiGetHosptAreaInfo = () => request.get({ url: '/Organization/OrgManage/GetOrgAreaInfos' })
