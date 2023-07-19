<template>
  <div class="flex items-center">
    <span class="title">{{ title }}</span>
    <slot />
  </div>
</template>

<script setup lang="ts" name="TableTitle">
defineProps<{
  title: string;
}>();
</script>

<style lang="scss" scoped>
.title {
  font-size: 16px;
  font-weight: 500;
}
</style>
