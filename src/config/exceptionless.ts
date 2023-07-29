import { getUserInfo } from '/@/utils/session';

/**
 * 错误日志上报信息
 *
 */
export function useExceptionless() {
  // 日志系统key
  const apiKey = 'QudsSpeRSCXn7Vphhzr4xKIz5bo7WcezX1Dlijar';
  // 服务器地址
  const serverUrl = import.meta.env.VITE_ERROR_LOG_API;
  const targetUserInfo = getUserInfo() || { userInfo: {} };
  const { userInfo } = targetUserInfo || { userName: '', userWorkNo: '' };
  const { userWorkNo, userName } = userInfo;
  return {
    userWorkNo,
    userName,
    apiKey,
    serverUrl
  };
}
