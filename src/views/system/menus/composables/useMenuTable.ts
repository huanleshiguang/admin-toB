/*
 * @Autor: QMZhao
 * @Date: 2023-07-24 13:56:23
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-08-01 11:28:55
 * @Description: 菜单管理树表格数据
 */
import { menuTypeNameWrapper } from '/@/utils/dict';

export function useMenuTable() {
  const loadTableData = fetchOrgMenuList;
  const columns: VxeColumns[] = [
    {
      title: '菜单代码',
      field: 'menuCode',
      headerAlign: 'center',
      minWidth: 300,
      treeNode: true,
      fixed: 'left'
    },
    {
      title: '菜单名称',
      field: 'menuName',
      width: '150'
    },
    {
      title: '菜单类型',
      field: 'menuType',
      headerAlign: 'center',
      width: '120',
      formatter: ({ row }) => {
        return menuTypeNameWrapper(row.menuType);
      }
    },
    {
      title: '菜单图标',
      field: 'menuIcon',
      headerAlign: 'center',
      width: '120'
    },
    {
      title: '路由地址',
      field: 'routeAddr',
      headerAlign: 'center',
      width: '240'
    },
    {
      title: '是否缓存',
      field: 'isCache',
      headerAlign: 'center',
      width: '120',
      formatter: ({ row }) => {
        return row.isCache ? '是' : '否';
      }
    },
    {
      title: '描述',
      field: 'remark',
      headerAlign: 'center',
      width: '240'
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
