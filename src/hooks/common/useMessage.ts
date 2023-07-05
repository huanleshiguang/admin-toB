import { ElMessageBox, ElMessage } from "element-plus";

/**
 * 消息提示
 * @param msg 提示信息
 * @param type 消息类型
 */
const message = (msg, type) => {
  ElMessage({
    showClose: true,
    message: msg,
    type: type
  });
};
/**
 * 成功提示
 * @param msg 提示信息
 */
const success = (msg) => {
  message(msg, "success");
};
/**
 * 消息提示
 * @param msg 提示信息
 */
const info = (msg) => {
  message(msg, "info");
};
/**
 * 错误提示
 * @param msg 提示信息
 */
const error = (msg) => {
  message(msg, "error");
};

/**
 * 警告提示
 * @param msg 提示信息
 */
const warning = (msg) => {
  message(msg, "warning");
};
interface MessageOptions {
  // 标题
  title?: string;
  // 消息
  msg?: string;
  // 确认回调
  ok?(): void;
  // 确认文案
  okText?: string;
  // 取消回调
  cancel?(): void;
  // 取消文案
  cText?: string;
}
/**
 * alert提示框
 * @param options
 */
const alert = (options: MessageOptions) => {
  let { title, msg, okText } = options;
  const { ok } = options;
  if (!title) {
    title = "提示";
  }
  if (!msg) {
    msg = "错误";
  }
  if (!okText) {
    okText = "确定";
  }
  ElMessageBox.alert(msg, title, {
    confirmButtonText: okText
  }).then(ok ? ok : () => {});
};

/**
 * confirm 提示框
 * @param options
 */
const confirm = (options: MessageOptions) => {
  const { title, msg, ok, okText, cancel, cText } = options;
  ElMessageBox.confirm(msg, title ? title : "提示", {
    confirmButtonText: okText ? okText : "确定",
    cancelButtonText: cText ? cText : "取消"
  })
    .then(ok ? ok : () => {})
    .catch(cancel ? cancel : () => {});
};
export function useMessage() {
  return {
    createMessage: ElMessage,
    success,
    info,
    error,
    warning,
    alert,
    confirm
  };
}
