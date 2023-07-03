import { IErrorResponseData } from "/@/model/common/axiosOption";

export function useResponseErrorData(): IErrorResponseData<null> {
  return {
    code: 1000,
    message: `请求错误`,
    data: null
  };
}
