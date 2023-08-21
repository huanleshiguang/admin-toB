import { VxeTableEvents } from 'vxe-table';
import areaType from 'areaTypeModules';
export function useHospManageEvent({ ...arg }) {
  const { vxeTableLayoutRef, updateRef } = arg;
  const { createMessage, createConfirm } = useMessage();

  /**
   * 新增
   */
  const add = () => {
    updateRef.value.open();
  };

  /**
   * 编辑
   * @param hospInfo 院区信息
   */
  const editRow = (hospInfo: areaType.hospAreaInfo) => {
    updateRef.value.open(hospInfo);
  };

  /**
   * 删除
   * @param hospInfo 院区信息
   */
  const deleteRow = (hospInfo: areaType.hospAreaInfo) => {
    const { id, hospAreaName } = hospInfo
    createConfirm(`是否删除'${hospAreaName}'`, 'warning').then(() => loadDeleteHosptAreaInfo(id));
  };

  /**
   * 删除院区
   * @param id 院区ID
   */
  const loadDeleteHosptAreaInfo = async (id: string) => {
    try {
      await deleteHosptAreaInfo(id);
      createMessage.success('删除成功');
      reFresh();
    } catch (error) {
      createMessage.error('删除失败');
    }
  };

  /**
   * 更新Table
   * @param isReturnPageOne 是否回退到第一页
   */
  function reFresh(isReturnPageOne: Boolean = false) {
    vxeTableLayoutRef.value.refresh(isReturnPageOne);
  }

  /**
   *
   * @param hospInfo 院区信息
   */
  const currentChangeEvent: VxeTableEvents.CurrentChange = (hospInfo) => {
    console.log(`行选中事件`, hospInfo);
  };

  /**
   * 加载院区列表（无分页）
   * @returns total:总数 pageData:数据列表
   */
  async function initMethod() {
    const result = await fetchHosptAreaInfo();
    return {
      total: result.length,
      pageData: result || []
    };
  }

  /**
   * 更新院区信息的回调
   * @param isSuccess 是否更新成功
   */
  const onSubmitHosptForm = (isSuccess: Boolean) => {
    if (isSuccess) {
      updateRef.value.close();
      createMessage.success('更新成功');
      reFresh();
    } else {
      createMessage.error('更新失败');
    }
  };
  return {
    currentChangeEvent,
    initMethod,
    add,
    editRow,
    deleteRow,
    reFresh,
    onSubmitHosptForm
  };
}
