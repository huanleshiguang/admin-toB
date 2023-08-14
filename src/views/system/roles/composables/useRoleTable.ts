/*
 * @Autor: QMZhao
 * @Date: 2023-07-24 13:56:23
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-07-25 14:04:33
 * @Description: 菜单管理树表格数据
 */

export function useRoleTable() {
  const loadTableData = fetchRoleList;
  const columns: VxeColumns[] = [
    {
      title: '角色名称',
      field: 'roleName'
    },
    {
      title: '显示名称',
      field: 'roleDisplayName'
    },
    {
      title: '角色代码',
      field: 'roleCode',
      headerAlign: 'center'
    },
    {
      title: '描述',
      field: 'remark',
      headerAlign: 'center'
    }
  ];

  return {
    columns,
    loadTableData
  };
}
