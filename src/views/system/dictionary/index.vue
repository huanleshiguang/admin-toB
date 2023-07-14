<template>
  <CommonTabs :tab-list="tabList" />
</template>
<script setup lang="ts">
import CommonTabs from '/src/components/common/CommonTabs.vue';
import BasicDict from './BasicDict/index.vue';
const tabList = [
  {
    id: '1',
    label: '基础字典',
    component: BasicDict
  }
];
</script>
<style lang="scss" scoped></style>
