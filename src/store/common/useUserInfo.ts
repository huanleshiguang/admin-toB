/*
 * @Autor: QMZhao
 * @Date: 2023-08-07 14:16:51
 * @LastEditTime: 2023-08-07 14:39:33
 * @Description: 用户信息
 */
import { getUserInfo } from '/@/utils/session';

export const useUserInfo = defineStore('userInfoStore', () => {
  const { userInfo } = getUserInfo();

  const userInfoData = ref<Iobj | null>(userInfo);

  function setStoreUserInfo(value: null) {
    userInfoData.value = value;
  }
  return { userInfoData, setStoreUserInfo };
});
