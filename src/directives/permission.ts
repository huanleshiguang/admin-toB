/*
 * @Author: QMZhao
 * @Date: 2023-07-11 10:16:08
 * @LastEditors: QMZhao zhao971462054@163.com
 * @LastEditTime: 2023-07-11 15:10:37
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
