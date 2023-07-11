/*
 * @Autor: QMZhao
 * @Date: 2021-09-08 23:54:23
 * @LastEditors: QMZhao zhao971462054@163.com
 * @LastEditTime: 2023-07-11 15:01:42
 * @Description:
 * @FilePath: /vue-vite-template/src/main.ts
 */

import App from './App.vue';

import 'virtual:svg-icons-register';

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
