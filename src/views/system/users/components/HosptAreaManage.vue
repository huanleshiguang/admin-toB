<template>
     <div class="three-container w_100 h_100">
      <vxe-table-layout ref="vxeTableLayout" class="h_100" border has-index :loader="initMethod"
          :row-config="{ isCurrent: true, isHover: true }" height="100%" :columns-list="columnsList"
          @current-change="currentChangeEvent">
          <template #operator-left>
           <h2>院区管理</h2>
          </template>

          <template #operator-right>
            <el-button type="primary" :icon="Plus" @click="add">新增院区</el-button>
            <el-button type="primary" :icon="Delete" @click="remove">删除院区</el-button>
          </template>
        </vxe-table-layout>

        <dialog-layout ref="dialogLayout" title="新增" append-to-body show-close :init-method="initMethod" />
    </div>
</template>
  
<script setup lang='ts'>
import VxeTableLayout from '/@/components/VxeTable/index.vue';
import { VxeTableEvents } from 'vxe-table';
import DialogLayout from '/@/components/DialogLayout/index.vue';
import {
  Plus,
  Delete
} from '@element-plus/icons-vue'
const vxeTableLayout = ref();
const dialogLayout = ref();
const dialogVisible = ref(false);
const columnsList = [
  {
    title: '编码',
    field: 'encode',
  },
  {
    title: '院区名称',
    field: 'name',
  }
];

const currentChangeEvent: VxeTableEvents.CurrentChange = (row) => {
  console.log(`行选中事件`, row);
};
async function initMethod(params: any) {
  console.log(params, 'params');
  const { pageSize } = params;
  return {
    total: 100,
    records: [...new Array(pageSize)].map((_, index) => {
      return { id: index, encode: '002',name: '总院区' };
    })
  };
}
const add = () => {
  console.log(dialogLayout, 'dialogLayout');
  console.log(dialogLayout.value, 'dialogLayout.value');

  dialogVisible.value = true;
  dialogLayout.value.open();
};
const remove = ()=>{
}
</script>
  
<style>
  
</style>