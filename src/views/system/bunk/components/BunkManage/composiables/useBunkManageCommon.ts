import areaType from 'areaTypeModules';

export function useBunkManageCommon() {
  const updateRef = ref();
  const treeSelectRef = ref();
  const bunkManageTableRef = ref();
  const hospArea = ref('');
  const type = ref('');
  const hospAreaList = ref<areaType.hospAreaInfo[]>([]);
  const hospAreaDepList = ref<areaType.resDepInfo[]>([]);

  const columnsList = [
    {
      title: '所属院区',
      field: 'name'
    },
    {
      title: '所属科室',
      field: 'value'
    },
    {
      title: '编号',
      field: 'desc'
    },
    {
      title: '名称',
      field: 'desc'
    },
    {
      title: '类型',
      field: 'desc'
    }
  ];

  // 床位管理请求参数
  const params = ref({
    AreaId: '',
    DeptId: '',
    Keyword: '',
    PageIndex: 1,
    PageSize: 20
  });

  // 定义需要传给公共组件<common-tree-select />的字段（用于tree展示）
  const transmitProps = {
    label: 'deptName',
    deptCode: 'deptCode',
    isMainDept: 'isMainDept',
    children: 'children'
  };

  return {
    ...toRefs(
      reactive({
        updateRef,
        treeSelectRef,
        bunkManageTableRef,
        hospArea,
        type,
        hospAreaList,
        hospAreaDepList,
        columnsList,
        params,
        transmitProps
      })
    )
  };
}
