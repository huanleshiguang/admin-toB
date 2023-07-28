import { ConfigRole, ConfigUsers } from '../components';
import { useRoleConfigTreeParams } from '/@/store/system/role';

export function useRoleCommon() {
  const { setRoleConfigTreeParams } = useRoleConfigTreeParams();

  // tab组件
  const roleTabs: ICUCommon.TabsComponens[] = [
    {
      label: '角色权限管理  ',
      component: ConfigRole
    },
    {
      label: '人员权限管理',
      component: ConfigUsers
    }
  ];

  /**
   * 清除权限 pinia 缓存
   */
  function cleanRoleStore() {
    setRoleConfigTreeParams(null);
  }

  onBeforeUnmount(() => {
    cleanRoleStore();
  });

  return {
    roleTabs
  };
}
