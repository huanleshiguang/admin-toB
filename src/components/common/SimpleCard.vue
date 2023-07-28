<!--
 * @Autor: QMZhao
 * @Date: 2023-07-14 10:44:28
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-07-25 11:45:23
 * @Description: 卡片组件
 * @FilePath: \servious-illness-admin\src\components\common\SimpleCard.vue
-->
<template>
  <div class="w-full h_100 simple-card flex flex-col">
    <div class="simple-card__header flex items-center justify-between box-border">
      <p class="w-150 h-40 f-s-16 flex items-center">
        <span>{{ title }}</span>
      </p>
      <p>
        <slot name="headerBtn"></slot>
      </p>
    </div>
    <div class="flex flex-1 overflow-y-auto">
      <slot name="default"></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
withDefaults(
  defineProps<{
    title: string;
  }>(),
  {
    title: ''
  }
);
</script>
<style lang="scss" scoped>
.simple-card {
  &__header {
    padding: 13px 10px 0;
    box-sizing: border-box;
    border-bottom: 1px solid $border-color;
    margin-bottom: 10px;
  }
}
</style>
