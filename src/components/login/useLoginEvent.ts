export function useLoginEvent() {
  const privateRouter = useRouter();

  /**
   * 登录到主界面
   */
  function jumpTo() {
    privateRouter.push({
      path: '/dashboard'
    });
  }

  // function

  return {
    privateRouter,
    jumpTo
  };
}
