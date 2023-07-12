<template>
  <CommonTabs :tab-list="tabList" />
</template>
<script setup lang="ts">
import CommonTabs from '/@/components/common/common-tabs.vue';
import BasicDict from './components/BasicDict.vue';
const tabList = [
  {
    id: '1',
    label: '基础字典',
    component: BasicDict
  }
];
</script>
<style lang="scss" scoped></style>
