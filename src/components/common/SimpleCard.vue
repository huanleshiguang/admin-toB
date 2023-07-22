<!--
 * @Autor: QMZhao
 * @Date: 2023-07-14 10:44:28
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-07-14 14:36:00
 * @Description: 
 * @FilePath: \servious-illness-admin\src\components\common\SimpleCard.vue
-->
<template>
  <div class="w_100 h_100 simple-card">
    <div class="simple-card__header flex item-center flex">
      <p>
        <span>{{ title }}</span>
      </p>
      <p>
        <slot name="headerBtn"></slot>
      </p>
    </div>
    <div class="flex">
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
    padding: 13px 10px;
    box-sizing: border-box;
  }
}
</style>
