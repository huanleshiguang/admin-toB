/*
 * @Author: QMZhao
 * @Description:
 * @Date: 2021-02-06 16:57:45
 * @LastEditTime: 2022-08-17 16:34:54
 * @Reference:
 */
// import { InjectionKey } from "vue";
// import { createStore, StoreOptions, Store, useStore as baseUseStore } from "vuex";

// import { IStoreState } from "/@/model/store";

// import { setState } from "./modules/state";
// import { setMutation } from "./modules/mutation";
// import { setActions } from "./modules/action";
// import { getters } from "./modules/getters";

// const options: StoreOptions<IStoreState> = {
//   state: setState,
//   mutations: setMutation,
//   actions: setActions,
//   getters
// };

// // 组合式函数 官方推荐配置 https://next.vuex.vuejs.org/zh/api/#%E7%BB%84%E5%90%88%E5%BC%8F%E5%87%BD%E6%95%B0
// export const storeKey: InjectionKey<Store<IStoreState>> = Symbol();

// /**
//  * 组合式函数封装
//  *
//  * @returns
//  */
// export function useStore() {
//   return baseUseStore(storeKey);
// }

// export default createStore<IStoreState>(options);


// import {useUserLoginToken} from "./modules/useLogin"
