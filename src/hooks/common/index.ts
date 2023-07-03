/*
 * @Author: QMZhao
 * @Description:
 * @Date: 2021-09-10 17:37:16
 * @LastEditTime: 2023-02-09 17:40:35
 * @Reference:
 */
import { ElMessage } from "element-plus";

/**
 * simple-message
 */
export function useMessage() {
  return {
    createMessage: ElMessage
  };
}

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
      if (typeof queryItem === "string" && queryItem === "") {
        delete queryParams[key];
      }
    }
  }
  return queryParams;
}
