import type { FormRules } from 'element-plus';
import type {hospAreaInfo, resDepInfo, fetchDepListParams } from '/@/api/system/types/area';
export function useCommon() {
  const vxeTableLayoutRef = ref();
  const updateRef = ref();
  // 院区列表
  const hospAreaList = ref<hospAreaInfo[]>([]);
  // 科室列表
  const hospAreaDepList = ref<resDepInfo[]>([]);
  const loading = ref<boolean>(false)
  /**
 * params: 请求参数
 */
  const params = ref<fetchDepListParams>({
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
  // 院区名称
  const hospAreaName = ref<string>('');
 // 科室类型
 const deptTypeName = ref<string>('');
  // 是否重症科室
  const titleMainDept = '是否重症科室';
  // 科室类型
  const deptTypes = [
    {
      DeptType:0,
      deptTypeName:'全部科室'
    },
    {
      DeptType:1,
      deptTypeName:'重症科室'
    },
    {
      DeptType:2,
      deptTypeName:'非重症科室'
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
  const deptForm = ref<any>({
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


