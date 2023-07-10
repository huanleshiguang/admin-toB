<!--
 * @Autor: zhao
 * @Date: 2023-02-17 22:45:44
 * @LastEditors: QMZhao zhao971462054@163.com
 * @LastEditTime: 2023-07-10 16:01:55
 * @Description: 
 * @FilePath: /vue-vite-elementplus-zhao/src/views/system/menu.vue
-->
<template>
  <div class="three-container w_100 h_100">
    <div ref="container" class="w_100 h_100">
      <!-- <el-button type="primary" @click="testClick">test</el-button> -->
      <vxeTableLayout :loader="initMethod" :columns-list="columnsList"></vxeTableLayout>
    </div>
    <!-- <vxe-table :data="tableData">
      <vxe-column type="seq" title="Seq" width="60"></vxe-column>
      <vxe-column field="name" title="Name"></vxe-column>
      <vxe-column field="role" title="Role"></vxe-column>
      <vxe-colgroup title="Group1">
        <vxe-column field="sex" title="Sex"></vxe-column>
        <vxe-column field="address" title="Address"></vxe-column>
      </vxe-colgroup>
    </vxe-table> -->
  </div>
</template>
<script lang="ts" setup>
import { pa } from 'element-plus/es/locale';
import vxeTableLayout from '/@/components/VxeTable/index.vue';
// import { testApi } from '/@/api/login';
// import { useMessage } from '/@/hooks/common/useMessage';
// const { createMessage } = useMessage();
// const tableData = ref([
//   { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', address: 'Shenzhen' },
//   { id: 10002, name: 'Test2', role: 'Test', sex: 'Man', address: 'Guangzhou' },
//   { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', address: 'Shanghai' }
// ]);
const columnsList = [
  {
    title: '名字',
    field: 'name'
  }
];
async function initMethod(params: any) {
  console.log(params);
  return {
    total: 1,
    records: [{ name: '333' }]
  };
}
</script>
<style scoped lang="scss">
.three-container {
  position: relative;
  background-color: #bfe3dd;
}
</style>
