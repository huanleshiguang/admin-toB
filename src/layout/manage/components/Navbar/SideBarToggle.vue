<script lang="ts" setup>
import { useMenuCollapse } from '/@/store/common/useCommon';
const { setCollapse } = useMenuCollapse();

// 是否折叠侧边栏
const isCollapse = ref(false);

// 折叠侧边栏方法
function onCollapaseSideBar(): void {
  isCollapse.value = !isCollapse.value;
  setCollapse(isCollapse.value);
}
</script>
<template>
  <div :class="['h_100 ']" @click="onCollapaseSideBar">
    <!-- <div :class="['menu-btn-icon h-full uno-flex-center menu-btn-position']"> -->
    <div :class="['menu-btn-icon h-full menu-btn-position uno-flex-y-center']">
      <SvgIcon :icon-class="isCollapse ? 'expasion' : 'shou'" color="333" class-name="w-20 h-20"></SvgIcon>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.menu-btn-icon {
  padding-left: 10px;
  background-color: $color-border;
  transition: all 0.3s ease;
}
</style>
