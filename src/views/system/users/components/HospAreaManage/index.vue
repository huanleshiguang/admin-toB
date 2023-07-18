<!--
 * @Author: ZhouHao joehall@foxmail.com
 * @Date: 2023-07-12 19:57:02
 * @LastEditors: ZhouHao joehall@foxmail.com
 * @LastEditTime: 2023-07-17 18:28:54
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
        <!-- <el-button type="primary" :icon="Delete" @click="remove">删除院区</el-button> -->
      </template>
      <template #columns>
        <vxe-column title="操作" align="center" fixed="right">
          <template #default="{ $columnIndex, row }">
            <el-button link type="primary" @click="editRow($columnIndex, row)">编辑</el-button>
            <el-popconfirm confirm-button-text="是" cancel-button-text="否" :icon="InfoFilled" icon-color="#626AEF"
              title="确定要删除这条信息吗？" @confirm="deleteRow(row)">
              <template #reference>
                <el-button link type="danger">删除</el-button>
              </template>
            </el-popconfirm>
          </template>
        </vxe-column>
      </template>
    </vxe-table-layout>

    <!-- 新增院区的dialog -->
    <update ref="updateRef" @reFetchtableList="reFresh" />
  </div>
</template>
  
<script setup lang='ts'>
import VxeTableLayout from '/@/components/VxeTable/VxeTableLayout.vue';
import { VxeTableEvents } from 'vxe-table';
import update from './update.vue'
import { apiGetHosptAreaInfo, apiDeleteHosptAreaInfo } from '/@/api/system/user'
// import { useMessage } from '/@/hooks/common/useMessage';
// const { createConfirm, createMessage } = useMessage(); 
import {
  Plus,
  InfoFilled
} from '@element-plus/icons-vue'

const vxeTableLayout = ref();
const updateRef = ref<any>();
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
  console.log(params, 'params1');
  try {
    const data = await apiGetHosptAreaInfo()
    console.log(data, "data"); // true

    records = data.map(item => {
      const { id, hospAreaCode, hospAreaName } = item
      return {
        id,
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
const editRow = (columnIndex, row) => {
  console.log(row);

  console.log(columnIndex, 'columnIndex');

  updateRef.value.open(row);
};
const deleteRow = (row) => {
  console.log(row,'row');
  apiDeleteHosptAreaInfo(row.id).then((res) => {
    if (res) {
      reFresh();
    }
  })
}
const reFresh = () => {
  vxeTableLayout.value.refresh()
}
</script>
  
<style scoped lang='scss'>

</style>