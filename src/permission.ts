/*
 * @Author: QMZhao
 * @Description: 登录权限验证
 * @Date: 2021-07-26 10:46:56
 * @LastEditTime: 2023-07-19 18:26:46
 * @Reference:
 */
import { router } from './router';

import NProgress from 'nprogress'; // progress bar
import 'nprogress/nprogress.css'; // progress bar style
import { getToken } from '/@/utils/session'; // get token from cookie

import { store } from '/@/store';
import { useNavMenuList } from '/@/store/common/routerList';
const { setShowSideBar } = useNavMenuList(store);

NProgress.configure({ showSpinner: false }); // NProgress Configuration

router.beforeEach(async (to, _from, next) => {
  // start progress bar
  NProgress.start();

  // 判断是否登录
  const hasToken = getToken();

  // 工作台导航条

  setShowSideBar(to.meta.showSideBar === false ? to.meta.showSideBar : true);

  if (to.meta.requireAuth) {
    if (hasToken) {
      next();
    } else {
      // 项目里有 token 验证的时候请切换成这个注释内容
      // next({
      //   path: "/"
      // });
      next();
    }
  } else {
    next();
  }
});

router.afterEach(() => {
  // finish progress bar
  NProgress.done();
});
