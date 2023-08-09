/*
 * @Autor: QMZhao
 * @Date: 2023-07-25 11:08:11
 * @LastEditTime: 2023-08-09 10:49:47
 * @Description: 功能清单数据
 */
import type TreeStore from 'element-plus/es/components/tree/src/model/tree-store';

import { useRoleConfigTreeParams } from '/@/store/system/role';

import { RolePrivsParams } from 'RoleConfig';

export function useRoleTreeData(moduleTreeRef: Ref<TreeStore | null>) {
  const moduleTreesLoading = ref(false);
  // 功能清单树
  const moduleTrees = ref<Iobj[]>([]);
  // 菜单勾选回显keys
  const moduleRoleKeys = ref<string[]>([]);
  const defaultProps = {
    children: 'children',
    label: 'menuName',
    disabled: setInitDisabled
  };
  const isCheckStrictily = ref(false);

  const { treeParams } = storeToRefs(useRoleConfigTreeParams());

  const getTreeParams = computed(() => {
    return treeParams.value;
  });
  /**
   * 监听角色 / 人员选项获取对应的权限数据
   */
  const watchTreeParams = watch(getTreeParams, (newValue: RolePrivsParams) => {
    newValue && loadRolePrivs(newValue);
  });

  /**
   * 设置菜单模块禁用显示状态
   *
   * @returns 未选择角色时禁用, 选择后取消禁用
   */
  function setInitDisabled(): boolean {
    if (!getTreeParams.value) {
      return true;
    }
    return false;
  }

  /**
   * 菜单模块树
   */
  async function loadModules() {
    moduleTreesLoading.value = true;
    try {
      const response = await fetchOrgMenuTrees();
      moduleTreesLoading.value = false;
      moduleTrees.value = response;
    } catch (error) {
      moduleTreesLoading.value = false;
    }
  }

  /**
   * 角色权限
   */
  async function loadRolePrivs(params: RolePrivsParams) {
    // mark: 在显示复选框的情况下，初始化渲染时节点不遵循父子互相关联
    isCheckStrictily.value = true;
    try {
      const response = await fetchRolePrivs(params);
      moduleRoleKeys.value = roleTreeKeyWarapper(response);
      moduleTreeRef.value?.setCheckedKeys(moduleRoleKeys.value);
      isCheckStrictily.value = false;
    } catch (error) {
      moduleRoleKeys.value;
    }
  }

  /**
   * 提取角色 / 人员权限 key
   */
  function roleTreeKeyWarapper(roles: Iobj[]): string[] {
    const treeKeys: string[] = [];
    roles &&
      roles.map((item: Iobj) => {
        treeKeys.push(item.menuId);
      });
    return treeKeys;
  }

  /**
   * 清除数据
   */
  function cleanData(): void {
    moduleTrees.value = [];
    moduleRoleKeys.value = [];
    moduleTreeRef.value = null;
    // 关闭侦听事件
    watchTreeParams();
  }

  onMounted(() => {
    loadModules();
  });

  onBeforeUnmount(() => {
    cleanData();
  });
  return {
    defaultProps,
    ...toRefs(
      reactive({
        getTreeParams,
        moduleTreesLoading,
        moduleTrees,
        isCheckStrictily
      })
    )
  };
}
