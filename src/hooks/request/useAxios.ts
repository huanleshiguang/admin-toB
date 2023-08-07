import { ResponseData } from '/@/types/axios';

/**
 * 请求响应默认参数
 */
export function useResponseErrorData(): ResponseData<null> {
  return {
    code: 1000,
    success: false,
    message: `请求错误`,
    data: null
  };
}

/**
 * 设置请求头类型
 *
 * @param type 请求类型
 * @returns
 */
export function useReqeustHeaderType(type = 'json'): string {
  const requestHeaderMap = new Map([
    ['json', 'json'],
    ['form', 'x-www-form-urlencoded']
  ]);
  return requestHeaderMap.get(type) ?? 'json';
}
