import { LoginResponse, UserLoginForm } from '/@/model/views/login';

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
  function setUserInfo(resData: LoginResponse) {
    const targetResData: LoginResponse = {
      accountTokenInfo: {},
      userInfo: {},
      userPrivies: [],
      userRoles: []
    };
    useSessionStorage('userInfo', resData ?? targetResData);
  }

  /**
   * 初始化 storage 和 pinia 数据
   */
  function initStorageData(): void {
    useGetSessionStorage('userInfo').value = null;
  }

  /**
   * 根据记住用户勾选项填充登录信息
   */
  function setRecordUserName() {
    const userForm = useGetSessionStorage('recordUser').value;
    if (userForm) {
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
  function setUserName(isRecrod: boolean): void {
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
    setUserInfo,
    setUserName
  };
}
