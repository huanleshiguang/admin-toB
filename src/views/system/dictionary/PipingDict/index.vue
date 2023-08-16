<script setup lang="ts">
import Piping from './components/piping.vue';
import PipingOperate from './components/pipingOperate.vue';
import DataItem from './components/dataItem.vue';
import DataRange from './components/dataRange.vue';
</script>
<template>
  <div class="pipingDict flex flex-row overflow-hidden">
    <div class="w_36 m-r-3 flex">
      <Piping />
    </div>
    <div class="w_28 m-r-3 flex">
      <PipingOperate />
    </div>

    <div class="w_36 flex flex-col h-full overflow-hidden">
      <div class="m-b-3 h_48 flex"><DataItem /></div>
      <div class="dataRange flex"><DataRange /></div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.pipingDict {
  height: inherit;
  max-height: calc(100vh - 111px);
  .dataRange {
    height: calc(52% - 10px);
  }
}
</style>
