import { VxeColumnProps } from 'vxe-table';

export const pipingColumnsList: VxeColumnProps[] = [
  {
    title: '管路',
    field: 'dictCode'
  },
  {
    title: '有效期',
    field: 'dictName'
  },
  {
    title: '类型',
    field: 'dictEnName'
  },
  {
    title: '关联部位',
    field: 'dictEnAbbr'
  }
];

export const pipingOperateColumnsList: VxeColumnProps[] = [
  {
    title: '管路操作',
    field: 'dictName'
  },
  {
    title: '操作限制',
    field: 'rangeName'
  },
  {
    title: '操作可删除',
    field: 'rangeEnName'
  },
  {
    title: '数据项',
    field: 'rangeValue'
  }
];

export const dataItemColumnsList: VxeColumnProps[] = [
  {
    title: '数据项',
    field: 'dictName'
  },
  {
    title: '类型',
    field: 'rangeName'
  },
  {
    title: '有无值域',
    field: 'rangeEnName'
  },
  {
    title: '出/入量',
    field: 'rangeValue'
  }
];
export const dataRangeColumnsList: VxeColumnProps[] = [
  {
    title: '数据项',
    field: 'dictName'
  },
  {
    title: '值域(中文)',
    field: 'rangeName'
  },
  {
    title: '值域(中文)',
    field: 'rangeEnName'
  },
  {
    title: '描述',
    field: 'rangeValue'
  }
];
