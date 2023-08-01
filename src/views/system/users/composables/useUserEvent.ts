import type { userInfo } from '/@/api/system/types/user';
import { VxeTableEvents } from 'vxe-table';
export function useUserEvent({ ...arg }) {
  const { vxeTableLayoutRef, treeSelectRef, updateRef, hospAreaList, hospAreaDepList, params } = arg
  // 新增用户
  const addUser = () => {
    updateRef.value.open();
  };
  const editRow = (row: userInfo) => {
    updateRef.value.open(row);
  };
  const deleteRow = async (row: userInfo) => {
    const result = await deleteUserInfo(row.id);
    console.log(result);
    if (result) {
      reFresh()
    }
  }
  // 获取初始院区列表
  const loadInitHsopAreaList = async () => {
    try {
      const result = await fetchHosptAreaInfo();
      hospAreaList.value = result;
    } catch (error) {
      if (error instanceof Error)
        throw (error.cause, 'catch捕获');
      else
        ElMessage({
          type: 'error',
          message: '获取院区信息出现未知错误'
        });
    }
  };
  // 根据院区获取相应科室
  const selectedHospArea = async (AreaId: string) => {
    try {
      params.value.AreaId = AreaId;
      const result = await fetchDepList(AreaId);
      hospAreaDepList.value = result;
    } catch (error) {
      if (error instanceof Error)
        throw (error.cause, 'catch捕获');
      else {
        ElMessage({
          type: 'error',
          message: '获取科室信息出现未知错误'
        })
      }
    }
  };
  const handleNodeClick = (DeptId: string) => {
    params.value.DeptId = DeptId;
  };
  const currentChangeEvent: VxeTableEvents.CurrentChange = (row) => {
    console.log(`行选中事件`, row);
  };
  // 搜索
  const handleSearch = async () => {
    vxeTableLayoutRef.value.refresh(true);
  };
  const handleClear = () => {
    treeSelectRef.value.tempData = '';
    params.value.AreaId = '';
    params.value.DeptId = '';
    hospAreaDepList.value = [];
  }
  async function initMethod() {
    try {
      const result = await fetchHosptAreaDepUserList(params.value);
      const { pageData: records, total } = result || {};
      return {
        total,
        records
      };
    } catch (error) {
      if (error instanceof Error)
        throw (error.cause, 'catch捕获')
      else {
        console.log(error);
        ElMessage({
          type: 'error',
          message: '获取人员信息出现未知错误'
        })
      }
    }
  };
  const reFresh = () => {
    vxeTableLayoutRef.value.refresh();
  }
  return {
    addUser,
    editRow,
    deleteRow,
    loadInitHsopAreaList,
    selectedHospArea,
    handleNodeClick,
    currentChangeEvent,
    handleSearch,
    handleClear,
    initMethod,
    reFresh
  }
}