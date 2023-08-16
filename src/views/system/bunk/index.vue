<!--
 * @Autor: ZhouHao joehall@foxmail.com
 * @Date: 2023-02-17 22:45:44
 * @LastEditors: ZhouHao joehall@foxmail.com
 * @LastEditTime: 2023-08-15 18:08:29
 * @Description: 【todo】
 * @FilePath: /vue-vite-elementplus-zhao/src/views/system/menu.vue
-->
<template>
  <div class="w_100 h_100">
    <div>
      <CommonTabList :nav-list="tabList" @change="change" />
    </div>
    <div class="contentBox">
      <component :is="data.componentName"></component>
    </div>
  </div>
</template>
<script setup lang="ts">
import BedEquipment from './components/BedEquipment/index.vue';
import BunkManage from './components/BunkManage/index.vue';
const tabList = [
  {
    label: '床位管理',
    component: BunkManage
  },
  {
    label: '床旁设备',
    component: BedEquipment
  }
];
const data = reactive({
  componentName: tabList[0].component
});
const change = (index: number) => {
  console.log(tabList['RoleManage'], 'tabList[');

  data.componentName = tabList[index].component;
};
</script>
<style scoped lang="scss">
.three-container {
  position: relative;
  background-color: #bfe3dd;
}

.contentBox {
  height: calc(100% - 70px);
  background: #fff;
}
</style>
