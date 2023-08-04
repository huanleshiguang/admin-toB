/*
 * @Autor: QMZhao
 * @Date: 2023-08-02 11:21:27
 * @LastEditTime: 2023-08-02 18:58:29
 * @Description: 错误上报数据格式化
 */
import { Exceptionless } from '@exceptionless/vue';
import { AxiosResponse, AxiosError } from 'axios';
import { ResponseData, ErrorPathOption } from '/@/types/axios';

import { router } from '/@/router';

import { ICUWebResError } from '/@/utils/error';

/**
 * 请求正常接口报错格式
 *
 * @param {AxiosResponse} response 请求主体
 * @returns 正常响应请求时报错主体
 */
function responseErrorWrapper(response: AxiosResponse<ResponseData>) {
  const { data, config } = response;
  const { code, message } = data;
  return {
    status: code,
    config,
    message
  };
}

/**
 * 当前错误页参数
 *
 * @returns
 */
function errorPathWrapper() {
  const { path, params, query } = router.currentRoute.value;
  const routerOptions: ErrorPathOption = { path, params, query };
  return {
    routerOptions
  };
}

/**
 * http错误、响应正常后端逻辑错误上报格式化
 *
 * @param response 请求响应主体
 * @param isError 是否错误请求时 默认 false
 */
export function useExceptionLess(response: AxiosResponse | AxiosError, isError = false): void {
  let error: any = {};
  const { routerOptions } = errorPathWrapper();
  if (isError) {
    error = response;
  } else {
    error = responseErrorWrapper(response as AxiosResponse);
  }
  Exceptionless.submitException(new ICUWebResError({ ...error, routerOptions }));
}
