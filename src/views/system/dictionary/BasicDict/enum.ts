import { VxeColumnProps } from 'vxe-table';

export const columnsList: VxeColumnProps[] = [
  {
    title: '分类编码',
    field: 'categoryCode',
    headerAlign: 'left',
    align: 'left',
    width: '200',
    treeNode: true
  },
  {
    title: '名称',
    field: 'categoryName'
  },
  {
    title: '内部编码',
    width: '150',
    field: 'categoryInternalCode'
  },
  {
    title: '英文名称',
    field: 'categoryEnName'
  },
  {
    title: '缩略名',
    field: 'categoryEnAbbr'
  },
  {
    title: '描述',
    field: 'remark'
  }
];
