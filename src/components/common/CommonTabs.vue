<!--
 * @Autor: QMZhao
 * @Date: 2023-07-19 18:23:23
 * @LastEditTime: 2023-08-04 17:39:37
 * @Description: 
-->
<template>
  <el-tabs class="common-tabs" :type="props.type">
    <el-tab-pane v-for="item in tabList" :key="item.label" :label="item.label" :lazy="lazy">
      <component :is="item.component" class="common-tabs_component" />
    </el-tab-pane>
    <slot />
  </el-tabs>
</template>
<script setup lang="ts" name="CommonTabs">
import { TabsComponens } from 'ICUCommon';
const props = withDefaults(
  defineProps<{
    type?: string;
    tabList: TabsComponens[];
    // 标签是否延迟渲染
    lazy?: boolean;
  }>(),
  {
    type: 'border-card',
    tabList: () => [],
    lazy: true
  }
);
</script>
<style lang="scss" scoped>
.common-tabs {
  height: inherit;

  &_component {
    flex-grow: 1;
  }

  :deep(.el-tabs__content) {
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
