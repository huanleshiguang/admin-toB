/*
 * @Author: QMZhao
 * @Date: 2020-12-30 09:49:48
 * @LastEditTime: 2023-07-12 12:56:05
 * @LastEditors: Please set LastEditors
 * @Description: 路由配置
 * @FilePath: \servious-illness-admin\src\router\index.ts
 */
import type { App } from 'vue';
import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router';
import { routes } from './routes';
import { store } from '/@/store';
import { useNavMenuList } from '/@/store/common/routerList';
const { setShowSideBar } = useNavMenuList(store);

export const router = createRouter({
	//history: createWebHashHistory(),
	history: createWebHistory(),
	// history: createWebHistory(import.meta.env.BASE_URL),
	routes,
	// 是否应该禁止尾部斜杠。默认为false
	strict: true,
	scrollBehavior: () => ({ left: 0, top: 0 })
});

// 路由注册
export function setupRouter(app : App<Element>) {
	app.use(router);
}

router.beforeEach((to, from) => {
	setShowSideBar(to.meta.showSideBar === false ? to.meta.showSideBar : true);
	// 返回 false 以取消导航
	//return false
})