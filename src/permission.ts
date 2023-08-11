/*
 * @Author: QMZhao
 * @Description: 登录权限验证
 * @Date: 2021-07-26 10:46:56
 * @LastEditTime: 2023-08-11 12:45:50
 * @Reference:
 */
import { RouteLocationNormalized, NavigationGuardNext } from 'vue-router';
import { ErrorRouterParams } from 'ICUCommon';

import NProgress from 'nprogress'; // progress bar
import 'nprogress/nprogress.css'; // progress bar style

import { router } from './router';

import { useConfigParams } from '/@/hooks/request/useRequestConfigParams';
import { useAuthRouter } from '/@/hooks/common/useAuthRouter';

import { useWorkbenchSidebar } from '/@/store/common/useWorkbenchSidebar';

NProgress.configure({ showSpinner: false }); // NProgress Configuration

router.beforeEach(async (to: RouteLocationNormalized, _from: RouteLocationNormalized, next: NavigationGuardNext) => {
  // start progress bar
  NProgress.start();
  const { setShowSideBar } = useWorkbenchSidebar();
  // 判断是否登录
  const { token } = useConfigParams();

  // 工作台导航条
  const routerParams: ErrorRouterParams = { toPath: to.path, fromPath: _from.path };
  setShowSideBar(to.meta.showSideBar === false ? to.meta.showSideBar : true);
  if (to.meta.requireAuth) {
    if (token) {
      useAuthRouter(routerParams, next);
    } else {
      next({
        path: '/error'
      });
    }
  } else {
    next();
  }
});

router.afterEach(() => {
  // finish progress bar
  NProgress.done();
});
