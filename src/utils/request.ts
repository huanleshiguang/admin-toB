/*
 * @Autor: QMZhao
 * @Date: 2023-07-14 09:57:52
 * @LastEditTime: 2023-08-03 13:48:56
 * @Description: http 请求
 */
import axios, { AxiosResponse, AxiosError } from 'axios';
import { ResponseData } from '/@/types/axios';
// import { Exceptionless } from '@exceptionless/vue';

import { useResponseErrorData, useReqeustHeaderType } from '/@/hooks/request/useAxios';
import { useErrorResponse } from '/@/hooks/request/useErrorResponse';
import { useConfigParams } from '/@/hooks/request/useRequestConfigParams';
import { useExceptionLess } from '/@/hooks/request/useExceptionless';
import { useClearParams } from '/@/hooks/common';

import { cloneDeep } from 'lodash-es';

type PartialResponse = DeepPartial<AxiosResponse<ResponseData<null>>>;

const { createMessage } = useMessage();

const service = axios.create({
  baseURL: `${import.meta.env.VITE_BASE_API}`,
  // 10s 请求延时
  timeout: 10000,
  timeoutErrorMessage: `请求超时`,
  // 表示跨域请求时是否需要使用凭证
  withCredentials: false
});

const errorResponse: PartialResponse = {
  data: useResponseErrorData(),
  status: -1
};

/**
 * 请求拦截
 */
service.interceptors.request.use(
  (config: any) => {
    const { token, userId, tenantId, hospitalArea, clientSide } = useConfigParams();
    config.headers!.Authorization = token;
    // 请求公共参数，每次请求都携带
    config.headers!['User-Id'] = userId;
    config.headers!['Tenant-Id'] = tenantId;
    config.headers!['Hospital-Area'] = hospitalArea;
    config.headers!['Client-Side'] = clientSide;
    config.data = useClearParams(config.data);
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
    const errorRes = error.response as unknown as any;
    createMessage({
      type: 'error',
      duration: 1500,
      message: useErrorResponse(errorRes?.status ?? 0)
    });
    useExceptionLess(error, true);
    return Promise.reject(error.response);
  }
);

/**
 * 数据处理
 *
 * @param response 响应数据
 * @returns
 */
function useResponse<T = any>(response: AxiosResponse): Promise<T> {
  const { status: reponseStatsus, data: responsedData } = response ?? errorResponse;
  const { code, data, message, success } = responsedData;
  return new Promise((resolve, reject) => {
    // 正常请求成功时
    if (reponseStatsus !== 200) reject(responsedData);
    // 接口请求错误时 实际code值与后端约定为准
    if (code !== 200 && !success) {
      createMessage({
        type: 'error',
        duration: 1500,
        message
      });
      useExceptionLess(response);
      reject(responsedData);
    } else {
      resolve(cloneDeep(data));
    }
  });
}

const request = {
  get: async <T = any>({ ...opt }: any): Promise<T> => {
    const { url, data, headers } = opt;
    return await service({
      method: 'GET',
      url,
      params: data,
      headers: headers ?? { 'Content-Type': 'application/json' }
    }).then(useResponse);
  },
  post: async <T = any>({ ...opt }: any): Promise<T> => {
    const { url, data: bodayData, params, headers, requestType } = opt;
    const signHeaders = { ...headers, ...{ 'Content-Type': `application/${useReqeustHeaderType(requestType)}` } };
    return await service({
      method: 'POST',
      url,
      params,
      data: bodayData,
      headers: signHeaders
    }).then(useResponse);
  }
};

export default request;
