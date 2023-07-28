/*
 * @Autor: QMZhao
 * @Date: 2023-07-24 13:56:23
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-07-25 14:04:33
 * @Description: 菜单管理树表格数据
 * @FilePath: \servious-illness-admin\src\views\system\menus\composiables\useMenuTable.ts
 */
import { menuTypeNameWrapper } from '/@/utils/dict';

export function useMenuTable() {
  const loadTableData = fetchOrgMenuList;
  const columns: VxeColumns[] = [
    {
      title: '菜单代码',
      field: 'menuCode',
      headerAlign: 'center',
      minWidth: '150px',
      treeNode: true
    },
    {
      title: '菜单名称',
      field: 'menuName'
    },
    {
      title: '菜单类型',
      field: 'menuType',
      headerAlign: 'center',
      formatter: ({ row }) => {
        return menuTypeNameWrapper(row.menuType);
      }
    },
    {
      title: '菜单图标',
      field: 'menuIcon',
      headerAlign: 'center'
    },
    {
      title: '路由地址',
      field: 'routeAddr',
      headerAlign: 'center'
    }
  ];

  const treeConfig = { transform: true, rowField: 'id', parentField: 'parentId' };

  return {
    ...toRefs(
      reactive({
        columns,
        treeConfig,
        loadTableData
      })
    )
  };
}
