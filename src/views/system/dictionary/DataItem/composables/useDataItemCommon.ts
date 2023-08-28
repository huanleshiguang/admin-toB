import { DictCategory } from 'Dictionary';

export function useCommon() {
  const treeRef = ref(null);
  // 搜索字段
  const dictName = ref<string>('');

  // dict字典ref
  const vxeTableLayout = ref(null);

  // 更新ref
  const updateRef = ref(null);

  // 选中行
  const currentRow = ref<DictCategory>();

  /**
   * 初始化方法
   * @param params 表格分页
   * @returns
   */
  async function initMethod() {
    const data = await fetchDictCategoryItemList(currentRow.value!.id as string);
    return data;
  }
  return { treeRef, dictName, vxeTableLayout, updateRef, currentRow, initMethod };
}
