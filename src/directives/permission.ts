/*
 * @Author: QMZhao
 * @Date: 2023-07-11 10:16:08
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-08-08 16:52:46
 * @FilePath: \servious-illness-admin\src\directives\permission.ts
 * @Description: 全局按钮权限指令
 */
import type { App, Directive, DirectiveBinding } from 'vue';
import { usePermission } from '/@/hooks/common/usePermission';

function isAuth(el: Element, binding: any) {
  const { hasPermission } = usePermission();
  const value = binding.value;
  if (!value) return;
  // 没有权限隐藏该按钮
  if (!hasPermission(value)) {
    el.parentNode?.removeChild(el);
  }
}

const mounted = (el: Element, binding: DirectiveBinding<any>) => {
  isAuth(el, binding);
};

const authDirective: Directive = {
  mounted
};

export function setupPermissionDirective(app: App) {
  app.directive('auth', authDirective);
}

export default authDirective;
