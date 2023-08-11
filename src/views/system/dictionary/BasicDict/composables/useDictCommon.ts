import { DictInfo } from '/@/api/system/types/dict';

export function useCommon() {
  // 搜索字段
  const dictName = ref<string>('');
  // dict字典ref
  const vxeTableLayout = ref(null);
  // 值域ref
  const childTableRef = ref(null);
  // 更新字典ref
  const updateRef = ref(null);
  // 更新值域ref
  const updateValueRef = ref(null);
  // drawer弹窗ref
  const drawerLayout = ref(null);
  // 选中行
  const currentRow = ref<DictInfo>();

  // 右键菜单
  const menuConfig = ref({
    className: 'right-menu',
    body: {
      options: [
        [
          { code: 'edit', name: '编辑' },
          { code: 'delete', name: '删除' }
        ]
      ]
    }
  });

  /**
   * 字典初始化方法
   * @param params 表格分页
   * @returns
   */
  async function initMethod(params: any) {
    const { total, pageData } = await getBaseDictList({ ...params, dictName: dictName.value });
    return {
      total: total,
      pageData
    };
  }
  /**
   * 值域初始化方法
   * @param params
   * @returns
   */
  async function initValueMethod(params: any) {
    const { total, pageData } = await getBaseDictValueList({ ...params, DictId: currentRow.value!.id });
    return {
      total: total,
      pageData
    };
  }
  return {
    dictName,
    vxeTableLayout,
    childTableRef,
    updateRef,
    updateValueRef,
    drawerLayout,
    currentRow,
    menuConfig,
    initMethod,
    initValueMethod
  };
}
