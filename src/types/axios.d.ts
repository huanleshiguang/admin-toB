/*
 * @Author: QMZhao zhao971462054@163.com
 * @Date: 2023-07-05 18:18:46
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-08-02 14:38:06
 * @FilePath: \servious-illness-admin\src\types\axios.d.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// export type ErrorMessageMode = "none" | "modal" | "message" | undefined;
// export type SuccessMessageMode = ErrorMessageMode;
import { LocationQueryRaw, RouteParamsRaw } from 'vue-router';
export interface RequestOptions {
  // 将请求参数拼接到url
  joinParamsToUrl?: boolean;
  // 格式化请求参数时间
  formatDate?: boolean;
  // 是否处理请求结果
  isTransformResponse?: boolean;
  // 是否返回本地响应头,需要获取响应头时使用此属性
  isReturnNativeResponse?: boolean;
  // Whether to join url
  joinPrefix?: boolean;
  // 接口地址，如果保留为空，则使用默认值
  apiUrl?: string;
  // 请求拼接路径
  urlPrefix?: string;
  // 错误消息提示类型
  // errorMessageMode?: ErrorMessageMode;
  // 成功消息提示类型
  successMessageMode?: SuccessMessageMode;
  // 是否添加时间戳
  joinTime?: boolean;
  ignoreCancelToken?: boolean;
  //是否在标头中发送令牌
  withToken?: boolean;
}

declare interface ResponseData<T = any> {
  code: number;
  success: boolean;
  message: string;
  data: T;
}
declare interface Result<T = any> {
  code: number;
  type: 'success' | 'error' | 'warning';
  message: string;
  data: T;
}
// get请求BaseParam
declare interface BaseParams {
  // 当前页
  pageIndex: number;
  // 分页条数
  pageSize: number;
  // 搜索条件
  [key: string]: any;
}

// 分页请求返回DTO
declare interface PageResult<T = any[]> {
  pageSize: number;
  pageData: T;
  pageIndex: number;
  total: number;
}

// 文件上传参数:multipart/form-data: upload file
export interface UploadFileParams {
  // 其他参数
  data?: Recordable;
  // 文件参数接口字段名
  name?: string;
  // 文件
  file: File | Blob;
  // 文件名
  filename?: string;
  [key: string]: any;
}
//文件返回参数
export interface UploadFileCallBack {
  // 成功回调方法
  success?: any;
  // 是否返回响应头,需要获取响应头时使用此属性
  isReturnResponse?: boolean;
}

/**
 * 请求公共参数
 */
export interface RequestConfigParams {
  token: string;
  userId: string;
  tenantId: string;
  // 设备运行医院
  hospitalArea: string;
  // 系统运行设备
  clientSide: string;
}

/**
 * 页面路由数据
 */
export interface ErrorPathOption {
  path: string;
  params: RouteParamsRaw;
  query: LocationQueryRaw;
}
