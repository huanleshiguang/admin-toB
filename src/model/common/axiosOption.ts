/*
 * @Author: QMZhao
 * @Description:
 * @Date: 2021-09-10 10:32:54
 * @LastEditTime: 2021-09-10 17:29:42
 * @Reference:
 */
export interface ErrorResponseData<T extends any> {
  code: number;
  message: string;
  data: T | null;
}

/**
 * 请求公共参数
 */
export interface RequestConfigParams {
  token: string;
  userId: string;
  tenantId: string;
  // 设备运行医院
  hospitalArea: string;
  // 系统运行设备
  clientSide: string;
}
