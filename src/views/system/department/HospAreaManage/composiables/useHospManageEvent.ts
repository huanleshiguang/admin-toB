import { VxeTableEvents } from 'vxe-table';
import areaType from 'areaTypeModules';
export function useHospManageEvent({ ...arg }) {
  const { vxeTableLayoutRef, updateRef } = arg;
  const { createMessage } = useMessage();

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
    deleteHosptAreaInfo(hospInfo.id).then((res) => {
      if (res) {
        createMessage.success('删除成功');
        reFresh();
      }
    });
  };

  /**
   * 更新Table
   * @param isReturnPageOne 是否回退到第一页
   */
  const reFresh = (isReturnPageOne: Boolean = false) => {
    vxeTableLayoutRef.value.refresh(isReturnPageOne);
  };

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
  return {
    currentChangeEvent,
    initMethod,
    add,
    editRow,
    deleteRow,
    reFresh
  };
}
