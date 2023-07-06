<!--
 * @Autor: zhao
 * @Date: 2023-02-17 22:45:44
 * @LastEditors: zhao
 * @LastEditTime: 2023-02-19 00:15:51
 * @Description: 
 * @FilePath: /vue-vite-elementplus-zhao/src/views/system/menu.vue
-->
<template>
  <div class="three-container w_100 h_100">
    <div ref="container" class="w_100 h_100">
      <a-button type="primary" @click="testClick">test</a-button>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { testApi } from "/@/api/login";
import { useMessage } from "/@/hooks/common/useMessage";
const { createMessage } = useMessage();
const testClick = async () => {
  const result = await testApi();
    console.log(result);
  // createMessage.success('ss');
};
</script>
<style scoped lang="scss">
.three-container {
  position: relative;
  background-color: #bfe3dd;
}
</style>
