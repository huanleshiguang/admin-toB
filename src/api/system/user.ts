import request from '/@/utils/request'
//获取院区信息
export const apiGethosptAreaInfo = () => request({url:'/Organization/OrgManage/GetOrgAreaInfos'})