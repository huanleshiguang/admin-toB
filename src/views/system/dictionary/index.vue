<template>
  <CommonTabs :tab-list="tabList" />
</template>
<script setup lang="ts">
import CommonTabs from '/src/components/common/CommonTabs.vue';
import BasicDict from './BasicDict/index.vue';
import DataItemDict from './DataItem/index.vue';

const tabList = [
  {
    id: '1',
    label: '字典项',
    component: DataItemDict
  },
  {
    id: '2',
    label: '字典类别',
    component: BasicDict
  }
];
</script>
<style lang="scss" scoped></style>
