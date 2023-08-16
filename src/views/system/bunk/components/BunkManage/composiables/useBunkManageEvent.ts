import { VxeTableEvents } from 'vxe-table';
import areaType from 'areaTypeModules';
interface argsType {
  updateRef: Ref<any>;
  treeSelectRef: Ref<any>;
  bunkManageTableRef: Ref<any>;
  hospAreaList: Ref<areaType.hospAreaInfo[]>;
  hospAreaDepList: Ref<areaType.resDepInfo[]>;
  params: Ref<any>;
}
export function useBunkManageEvent(args: argsType) {
  const { createMessage } = useMessage();
  const { updateRef, treeSelectRef, bunkManageTableRef, hospAreaList, hospAreaDepList, params } = args;

  /**
   * 新增
   */
  const addRow = () => {
    updateRef.value.open();
  };

  /**
   * 编辑
   * @param row 床位信息
   */
  const editRow = (row: areaType.hospAreaInfo) => {
    updateRef.value.open(row);
  };

  /**
   * 删除
   * @param row 床位信息
   */
  const deleteRow = async (row: areaType.hospAreaInfo) => {
    const result = await deleteUserInfo(row.id);
    console.log(result);
    if (result) {
      reFresh();
    }
  };

  /**
   * 查询
   */
  const handleSearch = () => {
    reFresh(true);
  };

  /**
   * 更新Table
   * @param isReturnPageOne - 是否回退到第一页
   */
  const reFresh = (isReturnPageOne: Boolean = false) => {
    bunkManageTableRef.value.refresh(isReturnPageOne);
  };

  const handleClear = () => {
    treeSelectRef.value.tempData = '';
    params.value.AreaId = '';
    params.value.DeptId = '';
    hospAreaDepList.value = [];
  };

  const currentChangeEvent: VxeTableEvents.CurrentChange = (row) => {
    console.log(`行选中事件`, row);
  };
  async function loadBunkTableList(params) {
    console.log(params, 'params');
    const { PageSize } = params;
    return {
      total: 100,
      pageData: [...new Array(PageSize)].map((_, index) => {
        return { id: index, srial: 'adad', name: '张三', value: '1', desc: '12414' };
      })
    };
  }
  const loadHospAreaList = async () => {
    const result = await fetchHosptAreaInfo();
    hospAreaList.value = result || [];
  };
  /**
   * 根据院区获取相应科室
   * @param AreaId 院区ID
   */
  const selectedHospArea = async (AreaId: string) => {
    try {
      params.value.AreaId = AreaId;
      const result = await fetchDepList(params.value);
      hospAreaDepList.value = result;
    } catch (error) {
      if (error instanceof Error) throw (error.cause, 'catch捕获');
      else {
        createMessage.error('获取科室信息出现未知错误');
      }
    }
  };
  const handleNodeClick = (DeptId: string) => {
    params.value.DeptId = DeptId;
  };

  return {
    handleSearch,
    currentChangeEvent,
    loadBunkTableList,
    loadHospAreaList,
    selectedHospArea,
    handleNodeClick,
    addRow,
    editRow,
    deleteRow,
    handleClear,
    reFresh
  };
}
