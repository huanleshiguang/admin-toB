import { ErrorResponseData } from '/@/model/common/axiosOption';

export function useResponseErrorData(): ErrorResponseData<null> {
  return {
    code: 1000,
    message: `请求错误`,
    data: null
  };
}
