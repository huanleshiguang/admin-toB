/*
 * @Autor: QMZhao
 * @Date: 2023-07-12 15:31:41
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-08-08 09:49:14
 * @Description:
 */
import { MenuForm } from 'MenuConfig';
import { useMenus } from '/@/store/common/useMenus';

import { setMenuParentId } from '/@/utils/session';

export function useDashboradEvent() {
  const privateRouter = useRouter();
  const { setTargetMenus } = useMenus();
  function onJumpTo(item: MenuForm): void {
    const { routeAddr, id } = item;
    privateRouter.push({
      path: routeAddr ?? ''
    });

    setMenuParentId(id ?? '');
    setTargetMenus(id ?? '');
  }
  return {
    ...toRefs(
      reactive({
        onJumpTo
      })
    )
  };
}
