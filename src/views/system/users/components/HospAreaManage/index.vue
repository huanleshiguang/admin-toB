<!--
 * @Author: ZhouHao joehall@foxmail.com
 * @Date: 2023-07-12 19:57:02
 * @LastEditors: ZhouHao joehall@foxmail.com
 * @LastEditTime: 2023-07-13 18:58:38
 * @FilePath: \servious-illness-admin\src\views\system\users\components\HosptAreaManage.vue
 * @Description: 
-->
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

    <!-- 新增院区的dialog -->
    <update ref="updateRef" />
  </div>
</template>
  
<script setup lang='ts'>
import VxeTableLayout from '/@/components/VxeTable/VxeTableLayout.vue';
import { VxeTableEvents } from 'vxe-table';
import { apiGetHosptAreaInfo } from '/@/api/system/user'
import update from './update.vue'
import {
  Plus,
  Delete
} from '@element-plus/icons-vue'
import { isArray } from 'xe-utils';
const vxeTableLayout = ref();
const updateRef = ref();
let records = reactive([])
const columnsList = [
  {
    title: '编码',
    field: 'hospAreaCode',
  },
  {
    title: '院区名称',
    field: 'hospAreaName',
  }
];
const currentChangeEvent: VxeTableEvents.CurrentChange = (row) => {
  console.log(`行选中事件`, row);
};
async function initMethod(params: any) {
  console.log(params, 'params');
  try {
    const data = await apiGetHosptAreaInfo()
    console.log(Array, isArray(data), "data"); // true

    records = data.map(item => {
      const { hospAreaCode, hospAreaName } = item
      return {
        hospAreaCode,
        hospAreaName
      }
    })
    const total = records.length
    return {
      total,
      records
    };
  } catch (error) {
    throw (error as Error)
  }
}
const add = () => {
  updateRef.value.open();
};
const remove = () => {
}
</script>
  
<style scoped lang='scss'></style>