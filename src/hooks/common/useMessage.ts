// import type { ModalFunc, ModalFuncProps } from 'ant-design-vue/lib/modal/Modal';

import { MessageBoxInputData } from 'element-plus';
import { ElMessageBoxOptions } from 'element-plus/es/components/message-box/src/message-box.type';
interface ConfirmOptions {
  message: ElMessageBoxOptions['message'];
  title: ElMessageBoxOptions['title'];
  type: ElMessageBoxOptions['type'];
  confirmButtonText: ElMessageBoxOptions['confirmButtonText'];
  cancelButtonText: ElMessageBoxOptions['cancelButtonText'];
}

/**
 * 消息弹窗盒子
 *
 * @param message 消息正文内容
 * @param type 消息类型，用于图标显示
 * @param options 消息按钮文本等参数配置
 * @returns confirm instance
 */
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
