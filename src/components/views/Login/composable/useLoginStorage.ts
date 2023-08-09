/*
 * @Autor: QMZhao
 * @Date: 2023-07-19 17:54:48
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-08-08 15:33:28
 * @Description:
 */
import { LoginResponse, UserLoginForm } from 'login';
import { MenuForm } from 'MenuConfig';
import { setUserInfo, removeUserInfo, removeMenuParentId } from '/@/utils/session';

import { useModules, useMenus, useButtons } from '/@/store/common/useMenus';

/**
 * 用户登录信息存储
 */
export function useLoginStorage() {
  const { setTargetModule } = useModules();
  const { setTargetMenus } = useMenus();
  const { setTargetButton } = useButtons();

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
  function setUserInfoStorage(resData: LoginResponse<MenuForm>) {
    const targetResData: LoginResponse<MenuForm> = {
      accountTokenInfo: {},
      userInfo: {},
      userPrivies: [],
      userRoles: []
    };
    const targetData = resData ?? targetResData;
    setUserInfo(targetData);
    setTargetModule(targetData.userPrivies);
    setTargetButton(targetData.userPrivies);
  }

  /**
   * 初始化 storage 和 pinia 数据
   */
  function initStorageData(): void {
    // 用户登录信息
    removeUserInfo();
    // 模块id
    removeMenuParentId();
    // ICU系统功能·模块
    setTargetModule(null);
    // 全局模块下菜单
    setTargetMenus(null);
    // 全局功能按钮
    setTargetButton(null);
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
