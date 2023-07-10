// import type { ModalFunc, ModalFuncProps } from 'ant-design-vue/lib/modal/Modal';

import { ElMessage } from 'element-plus';
import 'element-plus/es/components/message/style/css';
// import { InfoCircleFilled, CheckCircleFilled, CloseCircleFilled } from '@ant-design/icons-vue';

// import { NotificationArgsProps, ConfigProps } from 'ant-design-vue/lib/notification';
// import { isString } from '/@/utils/is';

// export interface NotifyApi {
//   info(config: NotificationArgsProps): void;
//   success(config: NotificationArgsProps): void;
//   error(config: NotificationArgsProps): void;
//   warn(config: NotificationArgsProps): void;
//   warning(config: NotificationArgsProps): void;
//   open(args: NotificationArgsProps): void;
//   close(key: String): void;
//   config(options: ConfigProps): void;
//   destroy(): void;
// }

// export declare type NotificationPlacement = 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';
// export declare type IconType = 'success' | 'info' | 'error' | 'warning';
// export interface ModalOptionsEx extends Omit<ModalFuncProps, 'iconType'> {
//   iconType: 'warning' | 'success' | 'error' | 'info';
// }
// export type ModalOptionsPartial = Partial<ModalOptionsEx> & Pick<ModalOptionsEx, 'content'>;

// interface ConfirmOptions {
//   info: ModalFunc;
//   success: ModalFunc;
//   error: ModalFunc;
//   warn: ModalFunc;
//   warning: ModalFunc;
// }

// function getIcon(iconType: string) {
//   if (iconType === 'warning') {
//     return <InfoCircleFilled class="modal-icon-warning" />;
//   } else if (iconType === 'success') {
//     return <CheckCircleFilled class="modal-icon-success" />;
//   } else if (iconType === 'info') {
//     return <InfoCircleFilled class="modal-icon-info" />;
//   } else {
//     return <CloseCircleFilled class="modal-icon-error" />;
//   }
// }

// function renderContent({ content }: Pick<ModalOptionsEx, 'content'>) {
//   if (isString(content)) {
//     return <div innerHTML={`<div>${content as string}</div>`}></div>;
//   } else {
//     return content;
//   }
// }

/**
 * @description: Create confirmation box
 */
// function createConfirm(options: ModalOptionsEx): ConfirmOptions {
//   const iconType = options.iconType || 'warning';
//   Reflect.deleteProperty(options, 'iconType');
//   const opt: ModalFuncProps = {
//     centered: true,
//     icon: getIcon(iconType),
//     ...options,
//     content: renderContent(options)
//   };
//   return ElMessageBox.confirm(opt) as unknown as ConfirmOptions;
// }

// const getBaseOptions = () => {
//   return {
//     confirmButtonText: '确认'
//   };
// };

// function createModalOptions(options: ModalOptionsPartial, icon: string): ModalOptionsPartial {
//   return {
//     ...getBaseOptions(),
//     ...options,
//     message: renderContent(options),
//     icon: getIcon(icon)
//   };
// }

// function createSuccessModal(options: ModalOptionsPartial) {
//   return ElMessageBox.success(createModalOptions(options, 'success'));
// }

// function createErrorModal(options: ModalOptionsPartial) {
//   return ElMessageBox.error(createModalOptions(options, 'close'));
// }

// function createInfoModal(options: ModalOptionsPartial) {
//   return ElMessageBox.info(createModalOptions(options, 'info'));
// }

// function createWarningModal(options: ModalOptionsPartial) {
//   return ElMessageBox.warning(createModalOptions(options, 'warning'));
// }

// notification.config({
//   placement: 'topRight',
//   duration: 3
// });

/**
 * @description: message
 */
export function useMessage() {
  return {
    createMessage: ElMessage
    // notification: notification as NotifyApi,
    // createConfirm: createConfirm,
    // createSuccessModal,
    // createErrorModal,
    // createInfoModal,
    // createWarningModal
  };
}
