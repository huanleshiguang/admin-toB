import { useRoleConfigTreeParams } from '/@/store/system/role';

export function useUserEvent() {
  const { setRoleConfigTreeParams } = useRoleConfigTreeParams();

  const currentUserId = ref('');
  /**
   * 院区选择事件
   */
  function onChangeHospital(
    userSearchForm: RoleConfig.DepartmentUser,
    loadDepartmentData: (areaId: string) => Promise<void>
  ) {
    loadDepartmentData(userSearchForm.AreaId ?? '');
    userSearchForm.DeptId = '';
  }

  /**
   * 科室选择事件
   */
  function onChanageDepartment(
    userSearchForm: RoleConfig.DepartmentUser,
    loadUserData: (params: RoleConfig.DepartmentUser) => Promise<void>
  ) {
    loadUserData(userSearchForm);
  }

  // 用户列表点击事件
  function onCurrentUserItem(item: Iobj): void {
    const { id } = item;
    const params: RoleConfig.RolePrivsParams = {
      objType: '1',
      objId: id
    };
    if (currentUserId.value === id) {
      currentUserId.value = '';
      setRoleConfigTreeParams(null);
    } else {
      currentUserId.value = item.id;
      setRoleConfigTreeParams(params);
    }
  }

  return {
    onChangeHospital,
    onChanageDepartment,
    onCurrentUserItem,
    ...toRefs(
      reactive({
        currentUserId
      })
    )
  };
}
