import { router } from '/@/router';

/**
 * 权限失效回到登录页
 */
export function jumpToLogin(): void {
  const privateRouter = router;
  privateRouter.push({
    path: '/'
  });
}
