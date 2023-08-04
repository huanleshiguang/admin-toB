/*
 * @Author: ZhouHao joehall@foxmail.com
 * @Date: 2023-07-31 17:11:43
 * @LastEditors: ZhouHao joehall@foxmail.com
 * @LastEditTime: 2023-08-04 13:40:14
 * @FilePath: \servious-illness-admin\src\views\system\users\composables\useUserEvent.ts
 * @Description: 
 */
import type { userInfo } from '/@/api/system/types/user';
// import { VxeTableEvents } from 'vxe-table';
export function useUserEvent({ ...arg }) {
  const { vxeTableLayoutRef, treeSelectRef, updateRef, hospAreaList, hospAreaDepList, params } = arg
  const { createMessage } = useMessage();
  
  /**
   * 新增
   */
  const addUser = () => {
    updateRef.value.open();
  };

  /**
   * 编辑
   * @param userInfo 用户信息
   */
  const editUser = (userInfo: userInfo) => {
    updateRef.value.open(userInfo);
  };

  /**
   * 删除
   * @param userInfo - 用户信息
   */
  const deleteUser = async (userInfo: userInfo) => {
    await deleteUserInfo(userInfo.id) ? reFresh() : createMessage.error('删除用户失败')
  }

  /**
   * 搜索
   */
  const handleSearch = async () => {
    vxeTableLayoutRef.value.refresh(true);
  };

  /**
   * 更新Table
   * @param isReturnPageOne 是否回退到第一页
   */
  const reFresh = (isReturnPageOne: Boolean = false) => {
    vxeTableLayoutRef.value.refresh(isReturnPageOne);
  }
  
  /**
   * index组件挂载后，加载初始院区列表
   * @returns 
   */
  const loadInitHsopAreaList = async () => {
    const result = await fetchHosptAreaInfo();
    (hospAreaList).value = result || [];
  };

  /**
   * 根据院区ID加载相应科室
   * @param AreaId 院区Id
   */
  const selectedHospArea = async (AreaId: string) => {
    params.value.AreaId = AreaId;
    const result = await fetchDepList(params.value);
    hospAreaDepList.value = result || [];
  };

  /**
   * 处理下拉框节点点击...
   * @param DeptId 科室id
   */
  const handleNodeClick = (DeptId: string) => {
    params.value.DeptId = DeptId;
  };

  /**
   * 
   * @param userInfo 列表当前行用户
   */
  const currentChangeEvent = (userInfo: userInfo) => {
    console.log(`行选中事件`, userInfo);
  };

  /**
   * clear后，请求参数置空值
   */
  const handleClear = () => {
    treeSelectRef.value.tempData = '';
    params.value.AreaId = '';
    params.value.DeptId = '';
    hospAreaDepList.value = [];
  }

  /**
   * 
   * @returns total:数据总数,records:数据列表
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
  return {
    addUser,
    editUser,
    deleteUser,
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