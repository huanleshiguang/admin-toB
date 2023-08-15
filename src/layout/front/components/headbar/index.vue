<template>
  <NavHeader :bg-color="bgColor">
    <menuBar></menuBar>
  </NavHeader>
</template>

<script setup>
import custom from '/@/styles/custom.module.scss';
import { default as menuBar } from '/@/layout/front/components/menu/index.vue';
const bgColor = custom.btnBgPrimary;
</script>

<style scoped>
.workenbach-header {
  background-color: v-bind(bgColor);
}
</style>
