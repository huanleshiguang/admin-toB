<!--
 * @Autor: ZhouHao joehall@foxmail.com
 * @Date: 2023-02-17 22:45:44
 * @LastEditors: ZhouHao joehall@foxmail.com
 * @LastEditTime: 2023-07-26 17:46:47
 * @Description: 
 * @FilePath: \servious-illness-admin\src\views\system\users\index.vue
-->
<template>
  <div class=" w_100 h_100">
    <div>
      <CommonTabList :navList="tabList" @change="change" />
    </div>
    <div class="contentBox">
      <component :is="data.componentName"></component>
    </div>
  </div>
</template>
<script setup lang="ts">
import DeptManagefrom from './DeptManage/index.vue';
import HospAreaManage from './HospAreaManage/index.vue'

const tabList = [
  {
    label: '科室管理',
    component: DeptManagefrom
  },
  {
    label: '院区管理',
    component: HospAreaManage
  },
];
const data = reactive({
  componentName: tabList[0].component
})
const change = (index: number) => {
  data.componentName = tabList[index].component;
}

</script>
<style scoped lang="scss">
.contentBox {
  height: calc(100% - 70px);
  background: #fff;
}
</style>
