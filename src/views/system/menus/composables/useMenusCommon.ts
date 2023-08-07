import { ComponentInternalInstance } from 'vue';
import { MenuForm } from 'MenuConfig';

export function useMenusCommon() {
  // 当前菜单管理页面实 用于菜单状态切换 switch 绑定参数用
  const menuConfigInstance = ref<ComponentInternalInstance | null>(getCurrentInstance());

  // 表格查询条件
  const menuSearchForm = reactive({
    menuType: '',
    menuName: ''
  });
  // 菜单表单表头
  const menuFormTitle = ref('');
  // 菜单表单参数
  const menuFormData = reactive<MenuForm>({
    id: '',
    parentId: '',
    menuType: 0,
    menuCode: '',
    menuName: '',
    menuIcon: '',
    routeAddr: '',
    isCache: false,
    dataStatus: 0,
    sortNo: 0,
    remark: ''
  });
  // 菜单表格引用
  const menuTabeRef = ref<any>(null);
  // 菜单状态更改loading
  const isMenuStatusLoading = ref(false);
  // 菜单表单弹窗引用实例
  const menuFormDialogRef = ref<any>(null);
  // 菜单树
  const menuTrees = ref<Iobj[]>([]);

  /**
   * 格式化切换菜单消息弹窗状态名称
   *
   * @param status dataStatus
   * @returns 状态名称
   */
  function formatMenuStatusChangeName(status: number): string {
    const statusMap = new Map<number, string>([
      [0, '隐藏'],
      [1, '显示'],
      [2, '显示']
    ]);
    return statusMap.get(status) ?? '';
  }

  /**
   *
   * @param status
   * @returns
   */
  function formatMenuStatusChangeParams(status: number): number {
    const statusMap = new Map<number, number>([
      [0, 2],
      [1, 0],
      [2, 0]
    ]);
    return statusMap.get(status) ?? 0;
  }

  /**
   * 菜单树加载
   */
  async function loadMenuTree() {
    try {
      const response = await fetchOrgMenuTrees();
      menuTrees.value = response || [];
    } catch (error) {
      menuTrees.value = [];
    }
  }

  onBeforeMount(() => {
    loadMenuTree();
  });

  return {
    formatMenuStatusChangeName,
    formatMenuStatusChangeParams,
    ...toRefs(
      reactive({
        menuSearchForm,
        menuConfigInstance,
        menuTabeRef,
        menuFormDialogRef,
        isMenuStatusLoading,
        menuFormTitle,
        menuTrees,
        menuFormData
      })
    )
  };
}
