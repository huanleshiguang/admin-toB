/*
 * @Author: QMZhao
 * @Description:
 * @Date: 2021-09-10 17:37:16
 * @LastEditTime: 2023-07-28 14:41:50
 * @Reference:
 */

/**
 * 删除请求参数为空的数据
 *
 * @param queryParams get 请求参数
 * @returns
 */
export function useClearParams(queryParams: Indexable<string | number>) {
  for (const key in queryParams) {
    if (Object.prototype.hasOwnProperty.call(queryParams, key)) {
      const queryItem = queryParams[key];
      if (typeof queryItem === 'string' && queryItem === '') {
        delete queryParams[key];
      }
    }
  }
  return queryParams;
}

/**
 * 格式化session字符串转对象
 * 
 * @param target session存储数据
 * @returns 
 */
export function formatSessionJson(target: string | null): any {
  if (target?.indexOf('{') === 0) {
    return JSON.parse(target);
  }
  return target ?? '';
}
