/*
 * @Autor: QMZhao
 * @Date: 2021-09-08 23:54:23
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-07-13 18:29:27
 * @Description:
 * @FilePath: \servious-illness-admin\src\main.ts
 */

import App from './App.vue';

import 'virtual:svg-icons-register';
import './assets/icon/icon-style.css';

// 菜单路由 permission control
import './permission';

import '/@/styles/index.scss';

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

  app.mount('#app');
}

bootstrap();
