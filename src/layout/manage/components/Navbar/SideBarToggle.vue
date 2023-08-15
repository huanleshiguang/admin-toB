<!--
 * @Autor: QMZhao
 * @Date: 2023-08-09 18:26:04
 * @LastEditTime: 2023-08-15 10:34:40
 * @Description: 
-->
<script lang="ts" setup>
import { useMenuCollapse } from '/@/store/common/useCommon';
const { setCollapse } = useMenuCollapse();
const { isCollapse } = storeToRefs(useMenuCollapse());

// 折叠侧边栏方法
function onCollapaseSideBar(): void {
  isCollapse.value = !isCollapse.value;
  setCollapse(isCollapse.value);
}
</script>
<template>
  <div class="sidebar-icom w-20 h-60" @click="onCollapaseSideBar">
    <div class="cursor-pointer uno-wh-full uno-flex-y-center transition-all-300">
      <i-ep-dArrow-right v-show="isCollapse" color="#fff" size="40px"></i-ep-dArrow-right>
      <i-ep-dArrow-left v-show="!isCollapse" color="#fff" size="40px"></i-ep-dArrow-left>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.sidebar-icom {
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate(0, -50%);
  z-index: 11;
  background-color: $color-border;
}
</style>
