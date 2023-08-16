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
</script>
<template>
  <div class="bodyPart">
    人体部位字典

    <FormulaInput v-model:value="input" :options="options" scroll-wrapper-class-name="bodyPart" />
    <div>{{ input }}</div>
  </div>
</template>
<style scoped></style>
