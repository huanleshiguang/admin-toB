/*
 * @Author: ZhouHao joehall@foxmail.com
 * @Date: 2023-07-31 17:11:43
 * @LastEditors: ZhouHao joehall@foxmail.com
 * @LastEditTime: 2023-08-21 15:55:09
 * @FilePath: \servious-illness-admin\src\views\system\users\composables\useUserEvent.ts
 * @Description:
 */
import userType from 'userTypeModules';
import areaType from 'areaTypeModules';
interface argsType {
  vxeTableLayoutRef: Ref<any>;
  treeSelectRef: Ref<any>;
  userFormDialogRef: Ref<any>;
  hospAreaList: Ref<areaType.hospAreaInfo[]>;
  hospAreaDepList: Ref<areaType.resDepInfo[]>;
  params: Ref<userType.fetchUserList>;
}
export function useUserEvent(args: argsType) {
  const { vxeTableLayoutRef, treeSelectRef, userFormDialogRef, hospAreaList, hospAreaDepList, params } = args;
  const { createMessage, createConfirm } = useMessage();

  /**
   * 新增
   */
  const addUser = () => {
    userFormDialogRef.value.open();
  };

  /**
   * 编辑
   * @param userInfo - 用户信息
   */
  const editUser = (userInfo: userType.userInfo) => {
    userFormDialogRef.value.open(userInfo);
  };

  /**
   * 删除
   * @param userInfo - 用户信息
   */
  const deleteUser = async (userInfo: userType.userInfo) => {
    const { userName = '此用户', id } = userInfo;
    createConfirm(`是否删除'${userName}'?`, 'warning').then(() => loadDeleteUserInfo(id));
  };

  /**
   * 删除用户请求
   * @param id 用户ID
   */
  const loadDeleteUserInfo = async (id: string) => {
    try {
      await deleteUserInfo(id);
      createMessage.success('删除成功!');
      reFresh();
    } catch (error) {
      createMessage.error('删除失败!');
      console.error(error);
    }
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
   * 下拉框 - 根据院区ID加载相应科室
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
   * @param userInfo 列表当前行用户
   */
  const currentChangeEvent = (userInfo: userType.userInfo) => {
    console.log(`行选中事件`, userInfo);
  };

  /**
   * 院区下拉框clear后，请求等参数置空值
   */
  const handleClear = () => {
    treeSelectRef.value.tempData = '';
    params.value.AreaId = '';
    params.value.DeptId = '';
    hospAreaDepList.value = [];
  };

  /**
   * 清除TreeSelect的回调
   */
  const clearTreeSelect = () => {
    params.value.DeptId = '';
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

  /**
   * 提交表单
   *
   * @param requestStatus 提交结果状态
   */
  function onSubmitUserForm(requestStatus: boolean) {
    // 请求成功关闭弹窗重载表格
    if (requestStatus) {
      userFormDialogRef.value?.close();
      vxeTableLayoutRef.value!.refresh();
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
    reFresh,
    clearTreeSelect,
    onSubmitUserForm
  };
}
