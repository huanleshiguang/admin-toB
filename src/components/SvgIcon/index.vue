<!--
 * @Author: QMZhao
 * @Description: 
 * @Date: 2023-01-30 11:58:17
 * @LastEditTime: 2023-07-13 14:30:31
 * @Reference: 
-->
<script lang="ts" setup>
const svgIconProps = withDefaults(
  defineProps<{
    // svg图标名称
    iconClass: string;
    // 图标颜色
    color?: string;
    // 自定义样式名称
    className?: string;
  }>(),
  {
    iconClass: 'icon',
    color: 'transparent',
    className: ''
  }
);

const symbolId = computed(() => `#icon-${svgIconProps.iconClass}`);

// 自定义icon样式
const svgClass = computed(() => {
  if (svgIconProps.className) {
    return 'svg-icon ' + svgIconProps.className;
  } else {
    return 'svg-icon';
  }
});
</script>

<template>
  <svg aria-hidden="true" :class="svgClass">
    <use :xlink:href="symbolId" :color="color" />
  </svg>
</template>

<style scoped>
.svg-icon {
  vertical-align: middle;
  fill: currentColor;
  overflow: hidden;
}
</style>
