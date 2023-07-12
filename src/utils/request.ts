/*
 * @Author: QMZhao
 * @Description:
 * @Date: 2021-09-10 10:08:11
 * @LastEditTime: 2023-07-12 15:51:46
 * @Reference:
 */
import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
import type { ResponseData } from '/@/types/axios';
import { useResponseErrorData } from '/@/hooks/common/useAxios';
import { useErrorResponse } from '/@/hooks/common/useErrorResponse';
import { IErrorResponseData } from '/@/model/common/axiosOption';
import { getToken } from '/@/utils/session';

import { useMessage, useClearParams } from '/@/hooks/common';

const { createMessage } = useMessage();

const service = axios.create({
  baseURL: `${import.meta.env.VITE_BASE_API}`,
  // 30s 请求延时
  timeout: 30000,
  timeoutErrorMessage: `请求超时`,
  // 表示跨域请求时是否需要使用凭证
  withCredentials: false
});

type PartialResponse = DeepPartial<AxiosResponse<IErrorResponseData<null>>>;

const errorResponse: PartialResponse = {
  data: useResponseErrorData(),
  status: -1
};

/**
 * 请求拦截
 */
service.interceptors.request.use(
  (config: any) => {
    config.headers!.Authorization = getToken() ?? '';
    config.data = useClearParams(config.data);
    console.log(config);
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

/**
 * 响应拦截
 */
service.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: AxiosError) => {
    return Promise.reject(error.response);
  }
);

/**
 * 数据处理
 *
 * @param response 响应数据
 * @returns
 */
function useResponse(response: AxiosResponse): ResponseData {
  const { status: reponseStatsus, data: responsedData } = response ?? errorResponse;
  const { code, data, message, success } = responsedData;
  // 正常请求成功时
  if (reponseStatsus === 200) {
    // 接口请求错误时 实际code值与后端约定为准
    if (code !== 200 && !success) {
      createMessage({
        type: 'error',
        duration: 1500,
        message
      });
    }
  } else {
    // 非正常请求时 ex: 404等
    createMessage({
      type: 'error',
      duration: 1500,
      message: useErrorResponse(reponseStatsus, message)
    });
  }
  return data;
}

const request = {
  get: async ({ ...opt }: any): Promise<AxiosRequestConfig> => {
    const { url, data, headers } = opt;
    return await service({
      method: 'GET',
      url,
      params: data,
      headers: headers ?? { 'Content-Type': 'application/x-www-form-urlencoded' }
    }).then(useResponse);
  },
  post: async ({ ...opt }: any): Promise<AxiosRequestConfig> => {
    const { url, data, headers } = opt;
    return await service({
      method: 'POST',
      url,
      data,
      headers: headers ?? {
        'Content-Type': 'application/json'
      }
    }).then(useResponse);
  }
};

export default request;
