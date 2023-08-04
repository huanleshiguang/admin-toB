import { VxeTableEvents } from 'vxe-table';
import { resDepInfo } from '/@/api/system/types/area'
export function useEvent({ ...arg }) {
  const { vxeTableLayoutRef, hospAreaList, params, hospAreaName, hospAreaDepList, loading,deptTypeName,deptTypes } = arg
  // 获取初始院区列表
  const loadInitHsopAreaList = async () => {
    const result = await fetchHosptAreaInfo();
    hospAreaList.value = result || [];
    // 默认取第一个院区下的科室
    params.value.AreaId = result[0].id;
    // 为下拉框赋值
    hospAreaName.value = result[0].hospAreaName;
    deptTypeName.value = deptTypes.value[0].deptTypeName;
    // 刷新
    reFresh();
  };
  // 根据院区获取相应科室
  const selectedHospArea = async (AreaId: string) => {
    params.value.AreaId = AreaId;
    const result = await fetchDepList(params.value);
    hospAreaDepList.value = result || [];
  };
  const currentChangeEvent: VxeTableEvents.CurrentChange = (row) => {
    console.log(`行选中事件`, row);
  };
  // 搜索
  const handleSearch = async () => {
    vxeTableLayoutRef.value.refresh(true);
  };
  const handleClear = () => {
    params.value.AreaId = '';
    hospAreaDepList.value = [];
  }
  async function initMethod() {
    const result = await fetchDepList(params.value);
    return {
      total: result.length,
      records: result || []
    };
  };
  // 是否为重症科室
  const switchBeforeChange = (row: resDepInfo) => {
    console.log(row)
    loading.value = true
    return new Promise((resolve) => {
      setTimeout(() => {
        loading.value = false
        ElMessage.success('切换成功')
        return resolve(true)
      }, 1000)
    })
  }
  const handleDeptType = (item) => {
    params.DeptType = item.DeptType;
  }
  // 刷新数据
  const reFresh = () => {
    vxeTableLayoutRef.value.refresh();
  }
  return {
    loadInitHsopAreaList,
    selectedHospArea,
    handleSearch,
    handleClear,
    initMethod,
    switchBeforeChange,
    reFresh,
    currentChangeEvent,
    handleDeptType
  }
}