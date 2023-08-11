/*
 * @Author: ZhouHao Joehall@foxmail.com
 * @Date: 2023-08-02 20:21:53
 * @LastEditors: ZhouHao joehall@foxmail.com
 * @LastEditTime: 2023-08-07 16:48:14
 * @Descripttion:
 */
import { VxeTableEvents } from 'vxe-table';
import * as areaType from 'areaTypeModules';

export function useEvent({ ...arg }) {
  const { vxeTableLayoutRef, hospAreaList, params, hospAreaName, loading, deptTypeName, deptTypes } = arg;

  // 获取初始院区列表
  const loadInitHsopAreaList = async () => {
    const result = await fetchHosptAreaInfo();
    hospAreaList.value = result || [];
    // 首次进入列表,默认取第一个院区下的所有科室
    initDropDownBox(result[0]);
  };

  /**
   * 初始化下拉框
   * @param result 院区信息列表
   */
  const initDropDownBox = (areaInfo: areaType.hospAreaInfo) => {
    params.value.AreaId = areaInfo.id;
    // 为下拉框赋值
    hospAreaName.value = areaInfo.hospAreaName;
    const selectedDeptType = deptTypes.value.find((deptTypeItem) => {
      return deptTypeItem.DeptType === params.value.DeptType;
    });
    deptTypeName.value = selectedDeptType.DeptTypeName;
    // 初始化params后，更新Table
    reFresh();
  };

  /**
   * 搜索
   */
  const handleSearch = async () => {
    reFresh(true);
  };

  /**
   * 更新Table
   * @param isReturnPageOne 是否回退到第一页
   */
  const reFresh = (isReturnPageOne: Boolean = false) => {
    vxeTableLayoutRef.value.refresh(isReturnPageOne);
  };

  const currentChangeEvent: VxeTableEvents.CurrentChange = (row) => {
    console.log(`行选中事件`, row);
  };

  const handleClear = () => {
    params.value.AreaId = '';
  };

  async function loadTableData({ pageIndex, pageSize }) {
    params.value.PageIndex = pageIndex;
    params.value.PageSize = pageSize;
    const result = await fetchDepList(params.value);
    return {
      total: result.length || 0,
      pageData: result || []
    };
  }

  /**
   * 更改重症科室切换按钮前，判断是否修改成功
   * @param depInfo 当前行：科室信息
   * @returns
   */
  const switchBeforeChange = (depInfo: areaType.resDepInfo) => {
    console.log(depInfo);
    loading.value = true;
    return new Promise((resolve) => {
      setTimeout(() => {
        loading.value = false;
        ElMessage.success('切换成功');
        return resolve(true);
      }, 1000);
    });
  };

  /**
   *  选择科室类型下拉框后的回调
   * @param item 科室类型信息
   */
  const handleDeptType = (item: areaType.deptTypInfo) => {
    params.value.DeptType = item.DeptType;
  };
  return {
    loadInitHsopAreaList,
    handleSearch,
    handleClear,
    loadTableData,
    switchBeforeChange,
    reFresh,
    currentChangeEvent,
    handleDeptType
  };
}
