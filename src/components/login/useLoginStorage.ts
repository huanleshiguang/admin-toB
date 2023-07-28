/*
 * @Autor: QMZhao
 * @Date: 2023-07-19 17:54:48
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-07-28 16:24:57
 * @Description:
 * @FilePath: \servious-illness-admin\src\components\login\useLoginStorage.ts
 */
import { LoginResponse, UserLoginForm } from '/@/model/views/login';
import { setUserInfo, removeUserInfo } from '/@/utils/session';

/**
 * 用户登录信息存储
 */
export function useLoginStorage() {
  // 登录表单
  const loginForm = ref<UserLoginForm>({
    loginName: '',
    password: ''
  });
  /**
   * 存储用户信息数据
   *
   * @param resData 用户登录成功信息
   */
  function setUserInfoStorage(resData: LoginResponse) {
    const targetResData: LoginResponse = {
      accountTokenInfo: {},
      userInfo: {},
      userPrivies: [],
      userRoles: []
    };
    const targetData = resData ?? targetResData;
    setUserInfo(JSON.stringify(targetData));
  }

  /**
   * 初始化 storage 和 pinia 数据
   */
  function initStorageData(): void {
    removeUserInfo();
  }

  /**
   * 根据记住用户勾选项填充登录信息
   */
  function setRecordUserName() {
    const userForm = useGetSessionStorage('recordUser').value as UserLoginForm;
    if (userForm && Object.keys(userForm).length) {
      loginForm.value = userForm;
    } else {
      loginForm.value = {
        loginName: 'admin',
        password: '123'
      };
    }
  }

  /**
   * 记住用户名
   *
   * @param isRecrod 是否记住用户名选项
   * @param loginForm 用户账户密码
   */
  function setUserNameStorage(isRecrod: boolean): void {
    isRecrod && useSessionStorage('recordUser', loginForm.value);
  }

  onBeforeMount(() => {
    setRecordUserName();
    initStorageData();
  });

  return {
    ...toRefs(
      reactive({
        loginForm
      })
    ),
    setUserInfoStorage,
    setUserNameStorage
  };
}
