/*
 * @Author: QMZhao
 * @Description:
 * @Date: 2022-08-15 18:25:34
 * @LastEditTime: 2023-02-13 16:24:03
 * @Reference:
 */

// 用户token
export const useUserLoginToken = defineStore("userToken", () => {
  const token = ref("");
  function setUserToken(tokenMsg: string) {
    token.value = tokenMsg;
  }
  return { token, setUserToken };
});

// 用户登录信息
export const useUserLoginInfo = defineStore("userLoginInfo", () => {
  const userInfo = ref<Iobj>({});
  function setUserInfo(userResInfo: Iobj) {
    userInfo.value = userResInfo;
  }
  return { userInfo, setUserInfo };
});