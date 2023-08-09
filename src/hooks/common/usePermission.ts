import { useButtons } from '/@/store/common/useMenus';

import { isArray } from '/@/utils';

export function usePermission() {
  const { targeButtons } = storeToRefs(useButtons());
  const getTargetButtons = computed(() => targeButtons.value);

  /**
   * 是否有权限判定
   */
  function hasPermission(value?: string, def = true): boolean {
    // 没有配置时默认显示
    if (!value) {
      return def;
    }

    // 异常权限code时默认隐藏
    if (!isArray(getTargetButtons.value)) {
      return false;
    }
    // 当前按钮有权限时显示
    if (getTargetButtons.value!.includes(value)) {
      return true;
    }
    return false;
  }
  return { hasPermission };
}
