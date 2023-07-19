/*
 * @Author: ZhouHao joehall@foxmail.com
 * @Date: 2023-07-18 17:30:40
 * @LastEditors: ZhouHao joehall@foxmail.com
 * @LastEditTime: 2023-07-18 18:55:56
 * @FilePath: \servious-illness-admin\src\store\system\common\index.ts
 * @Description: 系统配置模块 公共数据
 */

import { defineStore } from "pinia";
// 引入接口
import { apiGetHosptAreaInfo } from "/@/api/system/user";
import { throwError } from "element-plus/es/utils";

// 引入数据类型
// import type { updateHospAreaInfo } from "/@/api/system/types/user";

//创建系统配置小仓库
let useSysConfigStore = defineStore('SysConfig', {
  //小仓库 存数据的地方
  state: () => {
    return {
      hospAreaInfoList: []
    }
  },
  actions: {
    // 获取院区信息列表
    async getHosptAreaInfo() {
      try {
        const result = await apiGetHosptAreaInfo();
        console.log(result,'result1');
        this.hospAreaInfoList = result;
      } catch (error) {
        throw(error)
      }
    }
  },
  getters: {
    hospAreaInfoList: (state) => state.hospAreaInfoList
  }
})

// 对外暴露小仓库
export default useSysConfigStore;