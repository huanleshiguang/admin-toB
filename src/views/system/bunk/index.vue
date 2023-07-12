<!--
 * @Author: ZhouHao joehall@foxmail.com
 * @Date: 2023-07-11 14:32:10
 * @LastEditors: ZhouHao joehall@foxmail.com
 * @LastEditTime: 2023-07-12 14:41:19
 * @FilePath: \servious-illness-admin\src\views\system\bunk\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<!--
 * @Autor: ZhouHao joehall@foxmail.com
 * @Date: 2023-02-17 22:45:44
 * @LastEditors: ZhouHao joehall@foxmail.com
 * @LastEditTime: 2023-07-12 14:36:47
 * @Description: 
 * @FilePath: /vue-vite-elementplus-zhao/src/views/system/menu.vue
-->
<template>
  <div class="three-container w_100 h_100">
    <common-tabs :tab-list="tabList" />
  </div>
</template>
<script setup lang="ts">
import CommonTabs from '/@/components/common/common-tabs.vue';
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
