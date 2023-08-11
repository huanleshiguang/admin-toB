/*
 * @Author: ZhouHao joehall@foxmail.com
 * @Date: 2023-07-31 17:11:43
 * @LastEditors: ZhouHao joehall@foxmail.com
 * @LastEditTime: 2023-08-07 18:27:35
 * @FilePath: \servious-illness-admin\src\views\system\users\composables\useUserEvent.ts
 * @Description:
 */
import userType from 'userTypeModules';
import areaType from 'areaTypeModules';
interface argsType {
  vxeTableLayoutRef: Ref<any>;
  treeSelectRef: Ref<any>;
  updateRef: Ref<any>;
  hospAreaList: Ref<areaType.hospAreaInfo[]>;
  hospAreaDepList: Ref<areaType.resDepInfo[]>;
  params: Ref<any>;
}
export function useUserEvent(args: argsType) {
  const { vxeTableLayoutRef, treeSelectRef, updateRef, hospAreaList, hospAreaDepList, params } = args;
  const { createMessage } = useMessage();

  /**
   * 新增
   */
  const addUser = () => {
    updateRef.value.open();
  };

  /**
   * 编辑
   * @param userInfo - 用户信息
   */
  const editUser = (userInfo: userType.userInfo) => {
    updateRef.value.open(userInfo);
  };

  /**
   * 删除
   * @param userInfo - 用户信息
   */
  const deleteUser = async (userInfo: userType.userInfo) => {
    (await deleteUserInfo(userInfo.id)) ? reFresh() : createMessage.error('删除用户失败');
  };

  /**
   * 搜索
   */
  const handleSearch = async () => {
    reFresh(true);
  };

  /**
   * 更新Table
   * @param isReturnPageOne - 是否回退到第一页
   */
  const reFresh = (isReturnPageOne: Boolean = false) => {
    vxeTableLayoutRef.value.refresh(isReturnPageOne);
  };

  /**
   * index组件挂载后，加载初始院区列表
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
  const currentChangeEvent = (userInfo: userType.userInfo) => {
    console.log(`行选中事件`, userInfo);
  };

  /**
   * 下拉框clear后，请求等参数置空值
   */
  const handleClear = () => {
    treeSelectRef.value.tempData = '';
    params.value.AreaId = '';
    params.value.DeptId = '';
    hospAreaDepList.value = [];
  };

  /**
   * 加载表格数据
   * @returns total:数据总数,pagaData:数据列表
   */
  async function loadTableData({ pageIndex, pageSize }) {
    params.value.PageIndex = pageIndex;
    params.value.PageSize = pageSize;
    try {
      const result = await fetchHosptAreaDepUserList(params.value);
      const { pageData, total } = result || {};
      return {
        total,
        pageData
      };
    } catch (error) {
      createMessage.error('获取人员信息失败!');
    }
  }
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
    loadTableData,
    reFresh
  };
}
