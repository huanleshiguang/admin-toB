import { DataItem } from 'Dictionary';

export function useCommon() {
  // 搜索字段
  const dictName = ref<string>('');

  // dict字典ref
  const vxeTableLayout = ref(null);

  // 更新ref
  const updateRef = ref(null);

  // 选中行
  const currentRow = ref<DataItem>();

  /**
   * 初始化方法
   * @param params 表格分页
   * @returns
   */
  async function initMethod() {
    const { pageData } = await getDataItemList();
    return pageData;
  }
  return {
    dictName,
    vxeTableLayout,
    updateRef,
    currentRow,
    initMethod
  };
}
