import { ErrorResponseData } from '/@/model/common/axiosOption';

export function useResponseErrorData(): ErrorResponseData<null> {
  return {
    code: 1000,
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
