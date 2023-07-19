/*
 * @Autor: QMZhao
 * @Date: 2023-07-03 09:49:52
 * @LastEditors:
 * @LastEditTime: 2023-07-19 17:19:25
 * @Description: 错误相应操作
 * @FilePath: \servious-illness-admin\src\hooks\request\useErrorResponse.ts
 */
import { jumpToLogin } from './useBackToLogin';

/**
 * 根据错误状态码显示错误提示信息
 *
 * @param status error code
 * @param message 响应错误消息
 * @returns error message
 */
export function useErrorResponse(status: number, message?: string) {
  const errorMap = new Map<number, string>([
    [200, `${message}`],
    [400, `错误请求`],
    [401, `请重新登录`],
    [403, `服务器拒绝访问`],
    [404, `无服务器请求`],
    [405, `服务器未允许的请求方法`],
    [408, `服务器繁忙`],
    [500, `服务器错误`],
    [501, `无网络`],
    [502, `网络错误`],
    [503, `服务不可用`],
    [504, `网络信号弱`],
    [505, `不支持的请求`]
  ]);
  if (status === 401) {
    jumpToLogin();
  }
  return errorMap.get(status) ?? `连接错误`;
}
