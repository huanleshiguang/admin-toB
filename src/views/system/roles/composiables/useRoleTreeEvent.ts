/*
 * @Autor: QMZhao
 * @Date: 2023-07-28 17:31:10
 * @LastEditTime: 2023-07-29 15:05:10
 * @Description: 权限事件
 */
import { useRoleConfigTreeParams } from '/@/store/system/role';

export function useRoleTreeEvent({ ...arg }) {
  const { createMessage, createConfirm } = useMessage();
  const { setRoleConfigTreeParams } = useRoleConfigTreeParams();

  const { roleFormTitle, roleFormDialogRef, rolesTableRef, moduleConfigDrawer } = arg;

  // 角色配置表单
  const roleFormData = ref<RoleConfig.RoleForm>({
    id: '',
    // 角色代码
    roleCode: '',
    // 角色名称
    roleName: '',
    roleDisplayName: '',
    sort: 0,
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
      // 角色代码
      roleCode: '',
      // 角色名称
      roleName: '',
      roleDisplayName: '',
      sort: 0,
      // 描述
      remark: ''
    };
    roleFormDialogRef.value?.onOpenRoleFormDialog();
  }

  /**
   * 修改角色
   *
   * @param node 角色节点信息
   * @param data 角色信息
   */
  function onEditRoleTree(data: Iobj): void {
    roleFormTitle.value = `修改${data.roleName}`;
    const { id, roleDisplayName, roleCode, roleName, sortNo, remark } = data;
    roleFormData.value = Object.assign(roleFormData.value, {
      id,
      roleDisplayName,
      roleCode,
      roleName,
      sortNo,
      remark
    });
    roleFormDialogRef.value?.onOpenRoleFormDialog();
  }

  /**
   * 提交表单
   *
   * @param requestStatus 提交结果状态
   */
  function onSubmitRoleForm(requestStatus: boolean) {
    // 请求成功关闭弹窗重载表格
    if (requestStatus) {
      roleFormDialogRef.value?.onCloseRoleFormDialog();
      rolesTableRef.value!.refresh();
    }
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
   * 分配权限
   *
   * @param data 角色信息
   */
  function onConfigAuth(data: Iobj): void {
    const { id, roleName } = data;
    const params: RoleConfig.RolePrivsParams = {
      objType: '0',
      objId: id
    };
    setRoleConfigTreeParams(params);
    moduleConfigDrawer.value.visiable = true;
    moduleConfigDrawer.value.title = roleName;
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
      createMessage.success('删除成功!');
      rolesTableRef.value!.refresh();
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
    roleFormData,
    onAddRoleTree,
    onEditRoleTree,
    onDeleteRole,
    onConfigAuth,
    onSubmitRoleForm,
    handleNodeClick
  };
}
