/**
 * 登录表单事件
 */
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

  return {
    privateRouter,
    jumpTo
  };
}
