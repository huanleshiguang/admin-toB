/**
 * 角色 / 人员权限功能清单
 */
export const useRoleConfigTreeParams = defineStore('roleConfigTreeParams', () => {
  const treeParams = ref<RoleConfig.RolePrivsParams | null>(null);
  function setRoleConfigTreeParams(data: RoleConfig.RolePrivsParams | null) {
    treeParams.value = data;
  }
  return { treeParams, setRoleConfigTreeParams };
});
