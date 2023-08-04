/*
 * @Autor: QMZhao
 * @Date: 2023-07-26 10:28:47
 * @LastEditTime: 2023-07-29 16:14:47
 * @Description: 功能清单树事件
 */
// import type TreeStore from 'element-plus/es/components/tree/src/model/tree-store';

import { RolePrivsParams, RoleSaveParams } from 'RoleConfig';

export function useModuleTreeEvent({ ...arg }) {
  const { createMessage } = useMessage();
  const { moduleTreeRef, isCheckStrictily, roleFormEmits } = arg;
  const isSaveLoading = ref(false);

  /**
   * 保存功能模块
   *
   * @param treeParams 角色 / 人员权限树数据 从 useRoleConfigTreeParams 获取
   */
  function onSaveRoleModules(treeParams: RolePrivsParams | null) {
    const checkedKeys = moduleTreeRef.value!.getCheckedKeys() as string[];
    const halfCheckedKeys = moduleTreeRef.value!.getHalfCheckedKeys() as string[];
    const targetTreeParams = treeParams ?? { objType: '', objId: '' };
    const params: RoleSaveParams = { ...targetTreeParams, menuIds: [...checkedKeys, ...halfCheckedKeys] };
    loadSaveModules(params);
  }

  /**
   * 保存角色 / 人员配置权限
   *
   */
  async function loadSaveModules(params: RoleSaveParams) {
    isSaveLoading.value = true;
    try {
      await fetchSaveRolePrivs(params);
      createMessage.success('保存成功!');
      isSaveLoading.value = false;
      roleFormEmits('update:moduleConfigVisiable', false);
    } catch (error) {
      isSaveLoading.value = false;
    }
  }

  /**
   * 点击节点复选框之后触发事件
   * mark: 在显示复选框的情况下，勾选节点时遵循父子不互相关联的做法
   */
  function onCheckedModuleTree(): void {
    isCheckStrictily.value = false;
  }

  return {
    onSaveRoleModules,
    onCheckedModuleTree,
    ...toRefs(
      reactive({
        isSaveLoading,
        moduleTreeRef
      })
    )
  };
}
