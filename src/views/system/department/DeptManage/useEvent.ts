/*
 * @Author: ZhouHao Joehall@foxmail.com
 * @Date: 2023-08-02 20:21:53
 * @LastEditors: ZhouHao Joehall@foxmail.com
 * @LastEditTime: 2023-08-05 14:48:07
 * @Descripttion: 
 */
import { VxeTableEvents } from 'vxe-table';
import * as areaType from 'areaTypeModules';

export function useEvent({ ...arg }) {
  const { vxeTableLayoutRef, hospAreaList, params, hospAreaName, hospAreaDepList, loading, deptTypeName, deptTypes } = arg
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

  /**
   * 根据院区获取相应科室
   * @param AreaId 院区ID
   */
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
  async function initMethod({ pageIndex, pageSize }) {
    params.value.PageIndex = pageIndex
    params.value.PageSize = pageSize
    const result = await fetchDepList(params.value);
    return {
      total: result.length,
      records: result || []
    };
  };
  /**
   * 更改重症科室字段前的回调
   * @param depInfo 当前行科室信息 
   * @returns 
   */
  const switchBeforeChange = (depInfo: areaType.resDepInfo) => {
    console.log(depInfo)
    loading.value = true
    return new Promise((resolve) => {
      setTimeout(() => {
        loading.value = false
        ElMessage.success('切换成功')
        return resolve(true)
      }, 1000)
    })
  }
  /**   
   *  选择科室类型下拉框后的回调
   * @param item 科室类型信息
   */
  const handleDeptType = (item: areaType.deptTypInfo) => {
    params.value.DeptType = item.DeptType;
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