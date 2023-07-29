<template>
  <div class="uno-wh-full">
    <div v-if="loading" v-loading="loading" element-loading-text="加载中" class="uno-wh-full"></div>
    <div v-else class="uno-wh-full">
      <div v-if="hasSource">
        <slot name="default" />
      </div>
      <div v-else class="uno-flex-center">
        <el-empty :description="emptyText"></el-empty>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const SimpleLoadingProps = withDefaults(
  defineProps<{
    loading: boolean;
    sourceData: Iobj | Iobj[];
    emptyText?: string;
  }>(),
  {
    loading: true,
    emptyText: '暂无数据',
    sourceData: (): Iobj[] => []
  }
);
const hasSource = computed(() => Object.keys(SimpleLoadingProps.sourceData).length);
</script>

<style scoped lang="scss"></style>
