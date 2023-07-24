
import type { FormRules } from 'element-plus';
import type { hospAreaInfo, fetchHospAreaDepList, fetchHosptAreaDepUserList } from '/@/api/system/types/user';
/**
 * columnsList: 需要显示的表格字段
 */
export const columnsList = [
  {
    title: '科室',
    field: 'deptName',
  },
  {
    title: '工号',
    field: 'userWorkCode',
  },
  {
    title: '用户名',
    field: 'userName',
  },
  {
    title: '登录名',
    field: 'loginName',
  },
  {
    title: '类型',
    field: 'positionLevelName',
  },
  {
    title: '性别',
    field: 'genderName',
  }
];

//是否勾选重症科室
export const isCheckedMainDept = ref<Boolean>(false);

/**
 * 定义需要传给公共组件<common-tree-select />的字段（用于tree展示）
 */
export const transmitProps = {
  label: 'deptName',
  deptCode: 'deptCode',
  isMainDept: 'isMainDept',
  children: 'children'
};
/**
 * params;请求参数
 */
export const params = ref<fetchHosptAreaDepUserList>({
  AreaId: '',
  DeptId: '',
  Keyword: '',
  PageIndex: 1,
  PageCount: 20
});
/**
 *  update组件： rules
 */
export const rules = reactive<FormRules>({
  deptName: [
    {
      required: true,
      message: '请输入科室!',
      trigger: 'change'
    },
  ],
  bePartOfDeptName: [
    {
      required: true,
      message: '请输入所属科室！',
      trigger: 'change'
    }
  ],
  userName: [
    {
      required: true,
      message: '请输入姓名！',
      trigger: 'change'
    }
  ],
  loginName: [
    {
      required: true,
      message: '请输入登录名！',
      trigger: 'change'
    }
  ],
  type: [
    {
      required: true,
      message: '请选择用户类型！',
      trigger: 'change'
    }
  ]
});


