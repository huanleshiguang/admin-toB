// import type { ModalFunc, ModalFuncProps } from 'ant-design-vue/lib/modal/Modal';

import { ElMessage, ElMessageBox, MessageBoxInputData } from 'element-plus';
// import 'element-plus/es/components/message/style/css';
import { ElMessageBoxOptions } from 'element-plus/es/components/message-box/src/message-box.type';
interface ConfirmOptions {
  message: ElMessageBoxOptions['message'];
  title: ElMessageBoxOptions['title'];
  type: ElMessageBoxOptions['type'];
  confirmButtonText: ElMessageBoxOptions['confirmButtonText'];
  cancelButtonText: ElMessageBoxOptions['cancelButtonText'];
}

const confirm = async (
  message: ConfirmOptions['message'],
  type: ConfirmOptions['type'],
  options?: ConfirmOptions
): Promise<(MessageBoxInputData & 'confirm') | (MessageBoxInputData & 'close') | (MessageBoxInputData & 'cancel')> => {
  const { title = '提示', confirmButtonText = '确认', cancelButtonText = '取消' } = options || {};
  return await ElMessageBox.confirm(message, title, {
    confirmButtonText,
    cancelButtonText,
    type
  });
};

/**
 * @description: message
 */
export function useMessage() {
  return {
    createMessage: ElMessage,
    createConfirm: confirm
  };
}
