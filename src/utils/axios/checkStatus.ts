import type { ErrorMessageMode } from "/@/types/axios";
import { ErrorMsg } from "/@/enums/httpEnum";
import { useMessage } from "/@/hooks/common/useMessage";
const { createMessage, createErrorModal } = useMessage();
const error = createMessage.error!;
export function checkStatus(status: number, msg: string, errorMessageMode: ErrorMessageMode = "message"): void {
  let errMessage = "";

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
    if (errorMessageMode === "modal") {
      createErrorModal({ title: "错误提示", content: errMessage });
    } else if (errorMessageMode === "message") {
      error({ content: errMessage, key: `global_error_message_status_${status}` });
    }
  }
}
