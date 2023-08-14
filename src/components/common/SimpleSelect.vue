<!--
 * @Autor: QMZhao
 * @Date: 2023-08-11 18:06:52
 * @LastEditTime: 2023-08-11 18:17:55
 * @Description: 
-->
<script lang="ts" setup>
import { SelectOption } from 'ICUCommon';

const simpleSelectProps = withDefaults(
  defineProps<{
    dataSource: SelectOption[] | null;
    targetSelect: string | number;
  }>(),
  {
    dataSource: (): SelectOption[] => [],
    targetSelect: ''
  }
);

const simpleSelectEmits = defineEmits<{
  (e: 'update:targetSelect', value: string | number);
}>();

const setTargetSelect = computed({
  get: () => simpleSelectProps.targetSelect,
  set: (value: string | number) => {
    return simpleSelectEmits('update:targetSelect', value);
  }
});
</script>
<template>
  <el-select v-model="setTargetSelect" v-bind="$attrs" class="w-full">
    <el-options v-for="item in dataSource" :key="item.value" :label="item.label" :value="item.value"></el-options>
  </el-select>
</template>

<style lang="scss" scoped></style>
