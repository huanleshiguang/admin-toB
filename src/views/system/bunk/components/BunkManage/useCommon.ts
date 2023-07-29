import type { resHosptAreaDepUserList } from '/@/api/system/types/user';

export const columnsList = [
  {
    title: '设置',
    field: 'name',
  },
  {
    title: '配置值',
    field: 'value',
    width: '40%'
  },
  {
    title: '描述',
    field: 'desc',
    width: '40%'
  }
];

/**
 * params:请求参数
 */
export const params = ref<resHosptAreaDepUserList>({
  AreaId: '',
  DeptId: '',
  Keyword: '',
  PageIndex: 1,
  PageSize: 20
});

// 定义需要传给公共组件<common-tree-select />的字段（用于tree展示）
export const transmitProps = {
  label: 'deptName',
  deptCode: 'deptCode',
  isMainDept: 'isMainDept',
  children: 'children'
};