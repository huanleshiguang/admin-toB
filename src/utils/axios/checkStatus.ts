/*
 * @Author: QMZhao zhao971462054@163.com
 * @Date: 2023-07-06 15:17:49
 * @LastEditors: QMZhao zhao971462054@163.com
 * @LastEditTime: 2023-07-07 18:37:48
 * @FilePath: \servious-illness-admin\src\utils\axios\checkStatus.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// import type { ErrorMessageMode } from "/@/types/axios";
import { ErrorMsg } from '/@/enums/httpEnum';
// import { useMessage } from '/@/hooks/common/useMessage';
// const { createMessage } = useMessage();
// const error = createMessage.error!;
export function checkStatus(status: number, msg: string): void {
  let errMessage = '';

  switch (status) {
    case 400:
      errMessage = `${msg}`;
      break;
    // 401: Not logged in
    // Jump to the login page if not logged in, and carry the path of the current page
    // Return to the current page after successful login. This step needs to be operated on the login page.
    case 401:
      // userStore.setToken(undefined);
      errMessage = msg || ErrorMsg.ERR_MSG_401;
      break;
    case 403:
      errMessage = ErrorMsg.ERR_MSG_403;
      break;
    // 404请求不存在
    case 404:
      errMessage = ErrorMsg.ERR_MSG_404;
      break;
    case 405:
      errMessage = ErrorMsg.ERR_MSG_405;
      break;
    case 408:
      errMessage = ErrorMsg.ERR_MSG_408;
      break;
    case 500:
      errMessage = ErrorMsg.ERR_MSG_500;
      break;
    case 501:
      errMessage = ErrorMsg.ERR_MSG_501;
      break;
    case 502:
      errMessage = ErrorMsg.ERR_MSG_502;
      break;
    case 503:
      errMessage = ErrorMsg.ERR_MSG_503;
      break;
    case 504:
      errMessage = ErrorMsg.ERR_MSG_504;
      break;
    case 505:
      errMessage = ErrorMsg.ERR_MSG_505;
      break;
    default:
  }

  if (errMessage) {
    // error(errMessage);
  }
}
