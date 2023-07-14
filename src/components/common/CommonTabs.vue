<template>
  <el-tabs class="common-tabs" :type="props.type">
    <el-tab-pane v-for="item in tabList" :key="item.id" :label="item.label">
      <component :is="item.component" class="common-tabs_component" />
    </el-tab-pane>
    <slot />
  </el-tabs>
</template>
<script setup lang="ts" name="CommonTabs">
import { PropType } from 'vue';

interface TabList {
  id: string;
  label: string;
  component: PropType<Component | string>;
}

const props = withDefaults(
  defineProps<{
    type?: string;
    tabList: TabList[];
  }>(),
  {
    type: 'border-card',
    tabList: () => []
  }
);
</script>
<style lang="scss" scoped>
.common-tabs {
  height: inherit;

  &_component {
    flex-grow: 1;
  }

  ::v-deep .el-tabs__content {
    height: calc(100% - 39px);
    display: flex;
    flex-direction: column;

    .el-tab-pane {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      overflow: hidden;
    }
  }
}
</style>
