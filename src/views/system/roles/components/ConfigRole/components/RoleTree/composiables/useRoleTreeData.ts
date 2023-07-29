/*
 * @Autor: QMZhao
 * @Date: 2023-07-25 09:53:44
 * @LastEditTime: 2023-07-28 14:10:03
 * @Description: 角色权限数据
 */

export function useRoleTreeData() {
  const roleTreeLoading = ref(false);
  // 角色树
  const roleTrees = ref<Iobj[]>([]);
  const defaultProps = {
    children: 'children',
    label: 'roleName'
  };

  /**
   * 权限树
   */
  async function loadRoles() {
    roleTreeLoading.value = true;
    try {
      const response = await fetchRoleList();
      roleTreeLoading.value = false;
      roleTrees.value = response;
    } catch (error) {
      roleTreeLoading.value = false;
    }
  }

  onMounted(() => {
    loadRoles();
  });

  return {
    defaultProps,
    loadRoles,
    ...toRefs(
      reactive({
        roleTreeLoading,
        roleTrees
      })
    )
  };
}
