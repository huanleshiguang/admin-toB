<!--
 * @Author: ZhouHao joehall@foxmail.com
 * @Date: 2023-07-12 19:57:02
 * @LastEditors: ZhouHao joehall@foxmail.com
 * @LastEditTime: 2023-07-26 17:00:06
 * @FilePath: \servious-illness-admin\src\views\system\users\components\HosptAreaManage.vue
 * @Description: 院区管理
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
          <template #default="{ row }">
            <el-button link type="primary" @click="editRow(row)">编辑</el-button>
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
import { hospAreaInfo } from '/@/api/system/types/user';
import update from './update.vue';
import {
  Plus,
  InfoFilled
} from '@element-plus/icons-vue'

const vxeTableLayout = ref();
const updateRef = ref<any>();
const columnsList = [
  {
    title: '院区编码',
    field: 'hospAreaCode'
  },
  {
    title: '院区名称',
    field: 'hospAreaName'
  }
];
const currentChangeEvent: VxeTableEvents.CurrentChange = (row) => {
  console.log(`行选中事件`, row);
};
async function initMethod() {
  let tableList = ref<hospAreaInfo[]>([])
  try {
    const result: hospAreaInfo[] = await fetchHosptAreaInfo()
    if (Array.isArray(result)) {
      tableList.value = result.map(item => {
        const { id, hospAreaName } = item
        return {
          id,
          hospAreaName
        }
      })
    }
    // const total = result.total
    // const records = result.pageData
    // const total = result.length
    // const { records,total } = tableList
    return {
      // total,
      // records
    };
  } catch (error) {
    throw (error)
  }
}
const add = () => {
  updateRef.value.open();
};
const editRow = (row: hospAreaInfo) => {
  console.log(row, 'row');

  updateRef.value.open(row);
};
const deleteRow = (row: hospAreaInfo) => {
  console.log(row, 'row');
  deleteHosptAreaInfo(row.id).then((res) => {
    if (res) {
      reFresh();
    }
  })
}
const reFresh = () => {
  vxeTableLayout.value.refresh()
}
</script>
  
<style scoped lang='scss'></style>