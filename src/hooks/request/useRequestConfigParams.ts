import { LoginResponse } from 'login';
import { RequestConfigParams } from '/@/types/axios';
import { getUserInfo } from '/@/utils/session';

/**
 * 请求携带参数
 *
 * @returns token, userId, tenantId, hospitalArea, clientSide
 */
export function useConfigParams(): RequestConfigParams {
  const userInfo = getUserInfo();
  const envParams = import.meta.env;
  const targetResData: LoginResponse = {
    accountTokenInfo: {},
    userInfo: {},
    userPrivies: [],
    userRoles: []
  };
  const formatUserInfo: LoginResponse = userInfo || targetResData;
  const { accountTokenInfo } = formatUserInfo;
  const token = accountTokenInfo?.jwtAuth?.accessToken ?? '';
  const userId = accountTokenInfo?.accountInfo?.userId ?? '';
  const tenantId = '';
  // 设备运行医院
  const hospitalArea = envParams.VITE_BASE_Hospital_Area ?? '';
  // 系统运行环境
  const clientSide = envParams.VITE_BASE_Client_Side ?? '';
  return {
    token: token ? `Bearer ${token}` : '',
    userId,
    tenantId,
    hospitalArea,
    clientSide
  };
}
