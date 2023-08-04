import { VxeTableEvents } from 'vxe-table';
import { hospAreaInfo } from '/@/api/system/types/area';

export function useHospManageEvent({ ...arg }) {
  const { vxeTableLayoutRef, updateRef } = arg;

  /**
   * 
   * @param row 院区信息
   */
  const currentChangeEvent: VxeTableEvents.CurrentChange = (row) => {
    console.log(`行选中事件`, row);
  };

  /**
   * 
   * @returns total:总数 records:数据列表
   */
  async function initMethod() {
    try {
      const result = await fetchHosptAreaInfo()  
      return {
        total:result.length,
        records:result || []
      };
    } catch (error) {
      throw (error)
    }
  }

/**
 * 新增
 */
  const add = () => {
    updateRef.value.open();
  };

 /**
  * 
  * @param row 院区信息
  */
  const editRow = (row: hospAreaInfo) => {
    console.log(row, 'row');

    updateRef.value.open(row);
  };

  /**
   * 
   * @param row 院区信息
   */
  const deleteRow = (row: hospAreaInfo) => {
    console.log(row, 'row');
    deleteHosptAreaInfo(row.id).then((res) => {
      if (res) {
        reFresh();
      }
    })
  }

 /**
  * 
  * @param is1PageIndex 是否回退到第一页
  */
  const reFresh = (is1PageIndex:Boolean = false) => {
    vxeTableLayoutRef.value.refresh(is1PageIndex)
  }
  return {
    currentChangeEvent,
    initMethod,
    add,
    editRow,
    deleteRow,
    reFresh
  }
}