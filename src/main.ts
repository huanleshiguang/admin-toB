/*
 * @Autor: QMZhao
 * @Date: 2021-09-08 23:54:23
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-08-09 12:32:16
 * @Description:
 * @FilePath: \servious-illness-admin\src\main.ts
 */

import App from './App.vue';
import { Exceptionless } from '@exceptionless/vue';
// import { ExceptionlessErrorHandler } from '@exceptionless/vue';
import { ICUWebResError } from '/@/utils/error';
import { setExceptionless } from '/@/utils/exceptionless';
import 'virtual:svg-icons-register';
import './assets/icon/iconfont.css';

// 菜单路由 permission control
import './permission';

import '/@/styles/index.scss';
import '/@/styles/element-style.scss';

// https://unocss.dev/
import 'uno.css';

import { setupRouter } from '/@/router';
import { setupStore } from '/@/store';
import { registerGlobComp } from '/@/components/registerGlobComp';
import { setupGlobalDirective } from '/@/directives';

function bootstrap() {
  const app = createApp(App);

  // pinia 配置
  setupStore(app);

  // 路由配置
  setupRouter(app);

  // vxe-table 等全局组件注册配置
  registerGlobComp(app);

  // 全局自定义指令配置
  setupGlobalDirective(app);

  // 错误上报
  setExceptionless();

  // 全局错误监听
  // app.config.errorHandler = ExceptionlessErrorHandler;
  app.config.errorHandler = (err, instance, info) => {
    Exceptionless.submitException(new ICUWebResError(JSON.stringify({ err, instance, info })));
  };

  app.mount('#app');
}

bootstrap();
