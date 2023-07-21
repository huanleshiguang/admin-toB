<!--
 * @Autor: ZhouHao joehall@foxmail.com
 * @Date: 2023-02-17 22:45:44
 * @LastEditors: ZhouHao joehall@foxmail.com
 * @LastEditTime: 2023-07-21 14:45:20
 * @Description: 
 * @FilePath: /vue-vite-elementplus-zhao/src/views/system/menu.vue
-->
<template>
  <div class="three-container w_100 h_100">
    <common-tabs :tab-list="tabList" />
  </div>
</template>
<script setup lang="ts">
import CommonTabs from '/@/components/common/CommonTabs.vue';
import { ArcManage, RoleManage, HospAreaManage } from './components/index';


const tabList = [
  {
    id: '1',
    label: '架构管理',
    component: ArcManage
  },
  {
    id: '2',
    label: '角色管理',
    component: RoleManage
  },
  {
    id: '3',
    label: '院区管理',
    component: HospAreaManage
  }
];
</script>
<style scoped lang="scss">
.three-container {
  position: relative;
  background-color: #bfe3dd;
}
</style>
