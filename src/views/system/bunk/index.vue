<!--
 * @Autor: ZhouHao joehall@foxmail.com
 * @Date: 2023-02-17 22:45:44
 * @LastEditors: ZhouHao joehall@foxmail.com
 * @LastEditTime: 2023-07-13 09:20:27
 * @Description: 
 * @FilePath: /vue-vite-elementplus-zhao/src/views/system/menu.vue
-->
<template>
  <div class="three-container w-full h_100">
    <common-tabs :tab-list="tabList" />
  </div>
</template>
<script setup lang="ts">
import CommonTabs from '/src/components/common/CommonTabs.vue';
import BunkManage from './components/BunkManage.vue';
import BedEquipment from './components/BedEquipment.vue';
const tabList = [
  {
    id: '1',
    label: '床位管理',
    component: BunkManage
  },
  {
    id: '2',
    label: '床旁设备',
    component: BedEquipment
  }
];
</script>
<style scoped lang="scss">
.three-container {
  position: relative;
  background-color: #bfe3dd;
}
</style>
