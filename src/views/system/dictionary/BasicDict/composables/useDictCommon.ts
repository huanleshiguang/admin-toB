import { DictCategory } from 'Dictionary';

export function useCommon() {
  // 搜索字段
  const categoryName = ref<string>('');
  // dict字典ref
  const vxeTableLayout = ref(null);
  // 更新字典ref
  const updateRef = ref(null);

  /**
   * 字典初始化方法
   * @param params 表格分页
   * @returns
   */
  async function initMethod(params: any) {
    const { total, pageData } = await fetchDictCategoryList({ ...params, categoryName: categoryName.value });
    return {
      total: total,
      pageData
    };
  }
  return {
    categoryName,
    vxeTableLayout,
    updateRef,
    initMethod
  };
}
