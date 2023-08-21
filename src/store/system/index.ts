// /*
//  * @Author: ZhouHao joehall@foxmail.com
//  * @Date: 2023-07-18 17:30:40
//  * @LastEditors: ZhouHao joehall@foxmail.com
//  * @LastEditTime: 2023-07-25 16:45:17
//  * @FilePath: \servious-illness-admin\src\store\system\common\index.ts
//  * @Description: 系统配置模块 公共数据
//  */

// import { defineStore } from 'pinia';
// // 引入接口
// // import { fetchHosptAreaInfo } from '../../api/system/user/user';
// // import { hospAreaInfo } from '../../api/system/user/type/user';
// import areaType from 'areaTypeModules';
// interface systemConfig {
//   hospAreaInfoList: areaType.hospAreaInfo[];
// }

// //创建系统配置小仓库
// const useSysConfigStore = defineStore('SysConfig', {
//   //小仓库 存数据的地方
//   state: (): systemConfig => {
//     return {
//       hospAreaInfoList: []
//     };
//   },
//   actions: {
//     // 获取院区信息列表
//     async getHosptAreaInfo() {
//         const result = await fetchHosptAreaInfo();
//         // hospAreaInfoList.value = result;
//       }
//     }
// },
//   // getters: {
//   //   hospAreaInfoList: (state) => state.hospAreaInfoList
//   // }
// });

// // 对外暴露小仓库
// export default useSysConfigStore;
