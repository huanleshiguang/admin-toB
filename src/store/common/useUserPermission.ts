/*
 * @Autor: QMZhao
 * @Date: 2023-07-12 09:45:04
 * @LastEditTime: 2023-08-08 14:21:13
 * @Description: 已弃用
 */

export const useUserPermisssion = defineStore('userPermission', () => {
  const autoCode = ['sysMenuTableEdit', 'sysRoleTableDelete', 'sysMenuTableSearch', 'sysMenuTableSync'];
  // rule: 公司+项目+一级菜单+二级菜单+功能
  //       bqicu_sys_userEdit

  const userAuthCodes = ref<string[]>(autoCode);

  function setUserAuths(autoCodes: string[]): void {
    userAuthCodes.value = autoCode;
  }
  return {
    userAuthCodes,
    setUserAuths
  };
});
