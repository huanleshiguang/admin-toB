import { ModulesTree, RoleTree } from '../components';

export function useRoleConfigCommon() {
  // 角色权限 tab 数据
  const roleCardList: ICUCommon.TabsComponens[] = [
    {
      label: '角色配置',
      component: RoleTree
    },
    {
      label: '功能清单',
      component: ModulesTree
    }
  ];

  return {
    roleCardList
  };
}
