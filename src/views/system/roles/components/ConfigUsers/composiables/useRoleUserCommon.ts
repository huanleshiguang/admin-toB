import { ModulesTree, UserList } from '../components';

export function useRoleUserCommon() {
  // 角色权限 tab 数据
  const roleCardList: ICUCommon.TabsComponens[] = [
    {
      label: '人员配置',
      component: UserList
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
