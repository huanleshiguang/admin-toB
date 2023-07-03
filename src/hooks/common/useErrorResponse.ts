/*
 * @Author: QMZhao
 * @Description:
 * @Date: 2021-09-15 14:16:13
 * @LastEditTime: 2021-09-22 09:23:01
 * @Reference:
 */
import { useRouter } from "vue-router";

export function useErrorResponse(status: number, message: string) {
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
  if (status === 403) {
    useRouter().push({
      path: "/"
    });
  }
  return errorMap.get(status) ?? `连接错误`;
}
