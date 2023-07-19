import { LoginResponse } from '/@/model/views/login';

/**
 * 登录数据存储
 * 
 * @param resData 登录成功后数据
 * @returns 
 */
export function useLoginStorage() {
  /**
   * 初始化存储数据
   */
  function initStorage(resData: LoginResponse) {
    useSessionStorage('userInfo', resData);
  }

  /**
   * 清除 storage 和 pinia 数据
   */
  function clearData(): void {
    sessionStorage.clear();
  }

  onBeforeMount(() => {
    clearData();
  });
  return {
    initStorage
  };
}
