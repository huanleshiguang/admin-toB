/**
 * 错误路由返回路径
 */
export const useRouterFrom = defineStore('routerFrom', () => {
  const routerFromPath = ref<string | null>('');

  function setRouterFromPath(path: string | null): void {
    routerFromPath.value = path;
  }

  return { routerFromPath, setRouterFromPath };
});
