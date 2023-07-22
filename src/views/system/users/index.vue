<!--
 * @Autor: ZhouHao joehall@foxmail.com
 * @Date: 2023-02-17 22:45:44
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-07-21 18:57:40
 * @Description: 
 * @FilePath: \servious-illness-admin\src\views\system\users\index.vue
-->
<template>
  <div class="three-container w_100 h_100">
    <CommonTabs :tab-list="tabList" />
  </div>
</template>
<script setup lang="ts">
import { ArcManage, RoleManage, HospAreaManage, menuManage } from './components/index';

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
  },
  {
    id: '4',
    label: '菜单管理',
    component: menuManage
  }
];
</script>
<style scoped lang="scss">
.three-container {
  position: relative;
  background-color: #bfe3dd;
}
</style>
