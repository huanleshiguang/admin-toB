import { VxeColumnProps } from 'vxe-table';

export const columnsList: VxeColumnProps[] = [
  {
    title: '操作名称',
    field: 'operName'
  },
  {
    title: '操作类型',
    field: 'operTypeName'
  },
  {
    title: '操作限制',
    field: 'operLimitName'
  },
  {
    title: '可删除',
    field: 'canDelete'
  },
  {
    title: '数据项',
    field: 'dataItem'
  },
  {
    title: '护理记录格式',
    field: 'nurseRecordFormat'
  },
  {
    title: '护理文书格式',
    field: 'nurseDocFormat'
  }
];
