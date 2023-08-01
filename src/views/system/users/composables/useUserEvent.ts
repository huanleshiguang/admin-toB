/*
 * @Author: ZhouHao joehall@foxmail.com
 * @Date: 2023-07-31 17:11:43
 * @LastEditors: ZhouHao joehall@foxmail.com
 * @LastEditTime: 2023-08-01 11:31:21
 * @FilePath: \servious-illness-admin\src\views\system\users\composables\useUserEvent.ts
 * @Description: 
 */
import type { userInfo } from '/@/api/system/types/user';
import { VxeTableEvents } from 'vxe-table';
const { createMessage } = useMessage();
export function useUserEvent({ ...arg }) {
  const { vxeTableLayoutRef, treeSelectRef, updateRef, hospAreaList, hospAreaDepList, params } = arg

  /**
   * 新增
   */
  const addUser = () => {
    updateRef.value.open();
  };

  /**
   * 编辑
   * @param row 用户信息
   */
  const editRow = (row: userInfo) => {
    updateRef.value.open(row);
  };

  /**
   * 删除
   * @param row - 用户信息
   */
  const deleteRow = async (row: userInfo) => {
    await deleteUserInfo(row.id) ? reFresh() : createMessage.error('删除用户失败')
  }

  /**
   * 加载初始院区列表
   * @returns 
   */
  const loadInitHsopAreaList = async () => {
    const result = await fetchHosptAreaInfo();
    hospAreaList.value = result || [];
  };

  /**
   * 根据院区ID加载相应科室
   * @param AreaId 院区Id
   */
  const selectedHospArea = async (AreaId: string) => {
    params.value.AreaId = AreaId;
    const result = await fetchDepList(AreaId);
    hospAreaDepList.value = result || [];
  };

  /**
   * 处理树节点点击...
   * @param DeptId 科室id
   */
  const handleNodeClick = (DeptId: string) => {
    params.value.DeptId = DeptId;
  };

  /**
   * 
   * @param row 列表当前行
   */
  const currentChangeEvent: VxeTableEvents.CurrentChange = (row) => {
    console.log(`行选中事件`, row);
  };

  /**
   * 搜索
   */
  const handleSearch = async () => {
    vxeTableLayoutRef.value.refresh(true);
  };

  /**
   * 清除
   */
  const handleClear = () => {
    treeSelectRef.value.tempData = '';
    params.value.AreaId = '';
    params.value.DeptId = '';
    hospAreaDepList.value = [];
  }

  /**
   * 
   * @returns 数据总数,数据列表
   */
  async function initMethod() {
    try {
      const result = await fetchHosptAreaDepUserList(params.value);
      const { pageData: records, total } = result || {};
      return {
        total,
        records
      };
    } catch (error) {
      createMessage.error('获取人员信息出现未知错误!');
    }
  };

  /**
   * 
   * @param is1PageIndex 是否回退到第一页
   */
  const reFresh = (is1PageIndex: Boolean = false) => {
    vxeTableLayoutRef.value.refresh(is1PageIndex);
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