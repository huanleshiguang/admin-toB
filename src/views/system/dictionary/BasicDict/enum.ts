import { VxeColumnProps } from 'vxe-table';

export const columnsList: VxeColumnProps[] = [
  {
    title: '编码',
    field: 'dictCode'
  },
  {
    title: '名称',
    field: 'dictName'
  },
  {
    title: '英文名称',
    field: 'dictEnName'
  },
  {
    title: '缩略名',
    field: 'dictEnAbbr'
  },
  {
    title: '描述',
    field: 'remark',
    width: '400'
  }
];

export const childColumnsList: VxeColumnProps[] = [
  {
    title: '字典',
    field: 'dictCode'
  },
  {
    title: '值域值(中文)',
    field: 'rangeName'
  },
  {
    title: '值域项(英文)',
    field: 'rangeEnName'
  },
  {
    title: '取值',
    field: 'rangeValue'
  },
  {
    title: '描述',
    field: 'remark'
  }
];
