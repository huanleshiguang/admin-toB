/*
 * @Author: ZhouHao joehall@foxmail.com
 * @Date: 2023-07-13 15:36:33
 * @LastEditors: ZhouHao joehall@foxmail.com
 * @LastEditTime: 2023-07-17 18:24:27
 * @FilePath: \servious-illness-admin\src\api\system\user.ts
 * @Description:
 */
import request from "/@/utils/request";



// 获取院区信息
export const apiGetHosptAreaInfo = () => request.get({ url: '/Organization/OrgManage/GetOrgAreaInfos' })

// 更新院区信息
export const apiUpdateHosptAreaInfo = (data) => request.post({ url: '/Organization/OrgManage/UpdateOrgAreaInfo', data })

// 删除院区信息
export const apiDeleteHosptAreaInfo = ( areaId )=> request.post({url:`/Organization/OrgManage/DeleteOrgAreaInfo?areaId=${areaId}`})