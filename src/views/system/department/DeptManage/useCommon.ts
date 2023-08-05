import type { FormRules } from 'element-plus';
import * as areaType from 'areaTypeModules';
export function useCommon() {
  const vxeTableLayoutRef = ref();
  const updateRef = ref();
  // 院区列表
  const hospAreaList = ref<areaType.hospAreaInfo[]>([]);
  // 科室列表
  const hospAreaDepList = ref<areaType.resDepInfo[]>([]);
  const loading = ref<boolean>(false)
  /**
 * params: 请求参数
 */
  const params = ref<areaType.fetchDepListParams>({
    AreaId: '',
    DeptType: 0,
    Keyword: '',
  });

  // columnsList: 需要显示的表格字段
  const deptColumnsList = [
    {
      title: '同步ID',
      field: 'syncId',
    },
    {
      title: '科室名称',
      field: 'deptName',
    },
    {
      title: '科室代码',
      field: 'deptCode',
    },
    {
      title: '科室工作地址',
      field: 'deptAddr',
    },
    {
      title: '科室联系电话',
      field: 'deptTel',
    },
  ];
  // 是否重症科室
  const titleMainDept: string = '是否重症科室';
  // 院区名称
  const hospAreaName = ref('');
  // 科室类型
  const deptTypeName = ref('');

  // 科室类型
  const deptTypes = [
    {
      DeptType: 0,
      DeptTypeName: "全部科室"
    },
    {
      DeptType: 1,
      DeptTypeName: "重症科室"
    },
    {
      DeptType: 2,
      DeptTypeName: "非重症科室"
    }
  ]

  /**
   *  同级目录下的update组件：表单 rules
   */
  const rules = reactive<FormRules>({
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
  // form表单
  const deptForm = ref({
    deptName: '',
    bePartOfDeptName: '',
    userName: '',
    loginName: '',
    positionLevelName: '',
    genderName: '',
    phone: '',
    userWorkCode: ''
  });
  return {
    ...toRefs(
      reactive({
        vxeTableLayoutRef,
        updateRef,
        hospAreaList,
        hospAreaDepList,
        loading,
        deptColumnsList,
        hospAreaName,
        titleMainDept,
        deptTypes,
        params,
        rules,
        deptForm,
        deptTypeName
      })
    )
  }
}


