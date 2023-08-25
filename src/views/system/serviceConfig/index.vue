<template>
  <CommonTabs :tab-list="tabList" />
</template>
<script setup lang="ts">
import CommonTabs from '/src/components/common/CommonTabs.vue';
import PipingDict from './PipingDict/index.vue';
import BodyPartDict from './BodyPart/index.vue';
import ProjectOperateDict from './ProjectOperate/index.vue';
import DataItemDict from './DataItem/index.vue';

const tabList = [
  {
    id: '2',
    label: '管路字典',
    component: PipingDict
  },
  {
    id: '3',
    label: '人体部位字典',
    component: BodyPartDict
  },
  {
    id: '4',
    label: '项目操作配置',
    component: ProjectOperateDict
  },
  {
    id: '5',
    label: '数据项配置',
    component: DataItemDict
  }
];
</script>
<style lang="scss" scoped></style>
