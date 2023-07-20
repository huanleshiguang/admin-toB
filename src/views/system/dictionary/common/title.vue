<template>
  <p class="title">{{ title }}</p>
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
