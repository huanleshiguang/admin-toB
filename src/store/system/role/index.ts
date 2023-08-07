/**
 * 角色 / 人员权限功能清单
 */
import { RolePrivsParams } from 'RoleConfig';

export const useRoleConfigTreeParams = defineStore('roleConfigTreeParams', () => {
  const treeParams = ref<RolePrivsParams | null>(null);
  function setRoleConfigTreeParams(data: RolePrivsParams | null) {
    treeParams.value = data;
  }
  return { treeParams, setRoleConfigTreeParams };
});
