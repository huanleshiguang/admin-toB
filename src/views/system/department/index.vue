<!--
 * @Autor: ZhouHao joehall@foxmail.com
 * @Date: 2023-02-17 22:45:44
 * @LastEditors: ZhouHao joehall@foxmail.com
 * @LastEditTime: 2023-08-23 11:36:42
 * @Description: 
 * @FilePath: \servious-illness-admin\src\views\system\users\index.vue
-->
<template>
  <div class="w_100 h_100">
    <CommonTabs :tab-list="tabList" @change="change" />
  </div>
</template>
<script setup lang="ts">
import DeptManagefrom from './components/DeptManage/index.vue';
import HospAreaManage from './components/HospAreaManage/index.vue';

const tabList = [
  {
    label: '科室管理',
    component: DeptManagefrom,
    isLazy: true
  },
  {
    label: '院区管理',
    component: HospAreaManage,
    isLazy: true
  }
];
const data = reactive({
  componentName: tabList[0].component
});
const change = (index: number) => {
  data.componentName = tabList[index].component;
};
</script>
<style scoped lang="scss">
.contentBox {
  height: calc(100% - 70px);
}
</style>
