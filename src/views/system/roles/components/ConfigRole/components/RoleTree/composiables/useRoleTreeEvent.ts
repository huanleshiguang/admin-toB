import { useRoleConfigTreeParams } from '/@/store/system/role';

export function useRoleTreeEvent(loadRoleData: () => Promise<void>) {
  const { createMessage, createConfirm } = useMessage();
  const { setRoleConfigTreeParams } = useRoleConfigTreeParams();
  // const roleFormVisiable = ref(false);
  const roleFormTitle = ref('');

  const roleFormDialogRef = ref();
  // 配置表单请求接口
  const loadSaveRole = fetchSaveRole;

  // 角色配置表单
  const roleFormData = ref<RoleConfig.RoleForm>({
    id: '',
    // 角色代码
    roleCode: '',
    // 角色名称
    roleName: '',
    // 描述
    remark: ''
  });

  /**
   * 新增角色
   */
  function onAddRoleTree(): void {
    // roleFormVisiable.value = true;
    roleFormTitle.value = `添加角色`;
    roleFormData.value = {
      id: '',
      // 角色类型：0--目录，1--角色
      roleType: 1,
      // 角色代码
      roleCode: '',
      // 角色名称
      roleName: '',
      group: '',
      // 描述
      remark: ''
    };
    roleFormDialogRef.value?.open();
  }

  /**
   * 修改角色
   *
   * @param node 角色节点信息
   * @param data 角色信息
   */
  function onEditRoleTree(data: Iobj): void {
    roleFormTitle.value = `修改${data.roleName}`;
    const { id, roleType, roleCode, roleName, group, remark } = data;
    roleFormData.value = Object.assign(roleFormData.value, {
      id,
      roleType,
      roleCode,
      roleName,
      group,
      remark
    });
    console.log('roleFormData.value-->', roleFormData.value);
    roleFormDialogRef.value?.open();
  }

  /**
   * 提交表单
   */
  async function onSubmitRoleForm() {
    console.log(roleFormData.value);
    // const result = await formRef.value.validate();
    // if (result) {
    //   const { id } = form;
    //   try {
    //     const result = await updateBaseDictValue(form);
    //     console.log(result);

    //     createMessage.success(`${id ? '编辑' : '新增'}成功`);
    //     close();
    //   } catch (e) {
    //     createMessage.error(e || `${id ? '编辑' : '新增'}失败`);
    //   }
    // }
  }

  /**
   * 删除角色事件
   *
   * @param data 角色信息
   */
  function onDeleteRole(data: Iobj): void {
    const { id, roleName } = data;
    createConfirm(`是否删除${roleName}`, 'warning').then(() => loadDeleteRole(id));
  }

  /**
   * 删除角色请求
   *
   * @param roleId 角色id
   */
  async function loadDeleteRole(roleId: number) {
    const params = {
      roleId
    };
    try {
      await fetchDeleteRole(params);
      createMessage('删除成功!');
      loadRoleData();
    } catch (error) {}
  }

  /**
   * 树节点点击事件
   *
   * @param data tree节点数据
   */
  function handleNodeClick(data: Iobj): void {
    const { id } = data;
    const params: RoleConfig.RolePrivsParams = {
      objType: '0',
      objId: id
    };
    setRoleConfigTreeParams(params);
  }

  return {
    roleFormTitle,
    roleFormDialogRef,
    roleFormData,
    loadSaveRole,
    onAddRoleTree,
    onEditRoleTree,
    onDeleteRole,
    onSubmitRoleForm,
    handleNodeClick
  };
}
