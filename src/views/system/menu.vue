<!--
 * @Autor: zhao
 * @Date: 2023-02-17 22:45:44
 * @LastEditors: QMZhao zhao971462054@163.com
 * @LastEditTime: 2023-07-11 15:18:23
 * @Description: 
 * @FilePath: /vue-vite-elementplus-zhao/src/views/system/menu.vue
-->
<template>
  <div class="three-container w_100 h_100">
    <div ref="container" class="w_100 h_100">
      <el-button v-auth="'sysMenuTableEdit'" type="primary" @click="testClick">搜索</el-button>
      <el-button v-auth="'sysMenuTableSync'">同步</el-button>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { testApi } from '/@/api/login';
import { useMessage } from '/@/hooks/common/useMessage';
const { createMessage } = useMessage();

async function testClick() {
  try {
    const result = await testApi();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
  // testApi();
  // createMessage.success('ss');
}
</script>
<style scoped lang="scss">
.three-container {
  position: relative;
  background-color: #bfe3dd;
}
</style>
