/*
 * @Author: QMZhao
 * @Description:
 * @Date: 2021-09-10 10:08:11
 * @LastEditTime: 2023-07-22 17:36:22
 * @Reference:
 */
import axios, { AxiosResponse, AxiosError } from 'axios';
// import type { ResponseData } from '/@/types/axios';
// import { Exceptionless } from '@exceptionless/vue';
import { ErrorResponseData } from '/@/model/common/axiosOption';

import { useResponseErrorData } from '/@/hooks/request/useAxios';
import { useErrorResponse } from '/@/hooks/request/useErrorResponse';
import { useConfigParams } from '/@/hooks/request/useRequestConfigParams';
import { useClearParams } from '/@/hooks/common';

type PartialResponse = DeepPartial<AxiosResponse<ErrorResponseData<null>>>;

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
    if (reponseStatsus === 200) {
      // 接口请求错误时 实际code值与后端约定为准
      if (code !== 200 && !success) {
        createMessage({
          type: 'error',
          duration: 1500,
          message
        });
        reject(responsedData);
      }
      resolve(data);
    }
  });
}

const request = {
  get: async <T>({ ...opt }: any): Promise<T> => {
    const { url, data, headers } = opt;
    return await service({
      method: 'GET',
      url,
      params: data,
      headers: headers ?? { 'Content-Type': 'application/json' }
    }).then(useResponse);
  },
  post: async <T>({ ...opt }: any): Promise<T> => {
    const { url, data, headers } = opt;
    // const client = exceptionlessClient;

    return await service({
      method: 'POST',
      url,
      data,
      headers: headers ?? {
        'Content-Type': 'application/json'
      }
    })
      .then(useResponse)
      .catch((error) => {
        throw new Error(`重症项目报错上传: ${error}`);
      });
  }
};

export default request;
