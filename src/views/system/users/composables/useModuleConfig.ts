import { useRoleConfigTreeParams } from '/@/store/system/role';

import { RolePrivsParams } from 'RoleConfig';

export function useModuleConfigDrawer() {
  const { setRoleConfigTreeParams } = useRoleConfigTreeParams();

  // 功能配置抽屉组件
  const moduleConfigDrawer = ref({
    visiable: false,
    cardTitle: ''
  });

  /**
   * 分配权限
   *
   * @param data 用户信息
   */
  function onConfigAuth(data: Iobj): void {
    const { id, userName } = data;
    const params: RolePrivsParams = {
      objType: '0',
      objId: id
    };
    setRoleConfigTreeParams(params);
    moduleConfigDrawer.value.visiable = true;
    moduleConfigDrawer.value.cardTitle = userName;
  }
  return {
    onConfigAuth,
    ...toRefs(
      reactive({
        moduleConfigDrawer
      })
    )
  };
}
