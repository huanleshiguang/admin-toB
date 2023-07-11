export const useUserPermisssion = defineStore('userPermission', () => {
  const autoCode = ['sysMenuTableEdit', 'sysRoleTableDelete', 'sysMenuTableSearch', 'sysMenuTableSync'];

  // rule: 公司+项目+一级菜单+二级菜单+功能
  //       bqicu_sys_userEdit

  const userAuthCodes = ref<string[]>(autoCode);

  function setUserAuths(autoCodes: string[]) {
    userAuthCodes.value = autoCode;
  }
  return {
    userAuthCodes,
    setUserAuths
  };
});
