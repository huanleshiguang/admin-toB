<script setup lang="ts">
import { FormulaInput } from '/@/components/common';

let input = ref({ formula: '', vars: {} });
const options = [
  { field: 'superman', name: '颜色' },
  { field: 'batman', name: '尿量' },
  { field: 'theflash', name: '形状' }
];
const change = (value) => {
  console.log(value);

  input = reactive(value);
};

const data = [
  {
    label: 'Level one 1',
    value: '1'
  },
  {
    label: 'Level one 2',
    value: '2'
  },
  {
    label: 'Level one 3',
    value: '3'
  },
  {
    label: 'Level one 4',
    value: '4'
  },
  {
    label: 'Level one 5',
    value: '5'
  },
  {
    label: 'Level one 6',
    value: '6'
  },
  {
    label: 'Level one 7',
    value: '7'
  },
  {
    label: 'Level one 8',
    value: '8'
  },
  {
    label: 'Level one 9',
    value: '9'
  },
  {
    label: 'Level one 10',
    value: '10'
  }
];
</script>
<template>
  <div class="bodyPart">
    人体部位字典

    <FormulaInput v-model:value="input" :options="options" scroll-wrapper-class-name="bodyPart" />
    <div>{{ input }}</div>
    <div class="border-lightBlue overflow-auto h-200 w-300">
      <SortDragTree :options="data" />
    </div>
  </div>
</template>
<style scoped lang="scss"></style>
