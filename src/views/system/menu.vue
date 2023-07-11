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
      <vxe-table-layout
        ref="vxeTableLayout"
        class="h_100"
        border
        has-index
        :loader="initMethod"
        :row-config="{ isCurrent: true, isHover: true }"
        height="100%"
        :columns-list="columnsList"
        @current-change="currentChangeEvent"
      >
        <template #operator-left>
          <el-button type="primary" @click="handleSearch">搜索</el-button>
          <el-button @click="handleSearch">刷新</el-button>
        </template>
      </vxe-table-layout>
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
import VxeTableLayout from '/@/components/VxeTable/index.vue';
import { VxeTableEvents } from 'vxe-table';
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
  },
  {
    title: '性别',
    field: 'sex'
  }
];
const vxeTableLayout = ref();
const handleSearch = () => {
  vxeTableLayout.value.refresh(true);
};
const currentChangeEvent: VxeTableEvents.CurrentChange = (row) => {
  console.log(`行选中事件`, row);
};
async function initMethod(params: any) {
  console.log('params', params);
  const { pageSize } = params;
  return {
    total: 100,
    records: [...new Array(pageSize)].map((_, index) => {
      console.log(index);
      return { id: index, name: '333', sex: '男' };
    })
  };
}
onMounted(() => {
  console.log(vxeTableLayout.value);
});
</script>
<style scoped lang="scss">
.three-container {
  position: relative;
  background-color: #bfe3dd;
}
</style>
