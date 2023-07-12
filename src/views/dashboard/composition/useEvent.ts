/*
 * @Autor: QMZhao
 * @Date: 2023-07-12 15:31:41
 * @LastEditors:
 * @LastEditTime: 2023-07-12 15:35:14
 * @Description:
 * @FilePath: \servious-illness-admin\src\views\dashboard\composition\useEvent.ts
 */
export function useDashboradEvent() {
  const privateRouter = useRouter();
  function onJumpTo(url: string): void {
    privateRouter.push({
      path: '/system/menu'
    });
  }
  return {
    ...toRefs(
      reactive({
        onJumpTo
      })
    )
  };
}
