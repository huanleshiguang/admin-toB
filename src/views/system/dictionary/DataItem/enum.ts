import { VxeColumnProps } from 'vxe-table';

export const columnsList: VxeColumnProps[] = [
  {
    title: '字典项(中文)',
    field: 'itemName',
    headerAlign: 'left',
    align: 'left',
    width: '200',
    treeNode: true
  },
  {
    title: '内部编码',
    width: '150',
    field: 'itemInternalCode'
  },
  {
    title: '字典项(英文)',
    field: 'itemEnName'
  },
  {
    title: '取值',
    field: 'itemValue'
  },
  {
    title: '排序号',
    field: 'sortNo'
  },
  {
    title: '版本',
    field: 'itemVersion'
  },
  {
    title: '描述',
    field: 'remark'
  }
];
