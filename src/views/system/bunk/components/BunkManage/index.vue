<!--
 * @Author: ZhouHao joehall@foxmail.com
 * @Date: 2023-07-12 14:32:21
 * @LastEditors: ZhouHao joehall@foxmail.com
 * @LastEditTime: 2023-08-02 10:29:32
 * @FilePath: \servious-illness-admin\src\views\system\bunk\components\BunkManagement.vue
 * @Description: 床位管理
-->
<template>
  <div class="bunk-manage">
    <vxe-table-layout ref="vxeTableLayoutRef" class="h_100" border has-index :loader="initMethod"
      :row-config="{ isCurrent: true, isHover: true }" height="100%" :columns-list="columnsList"
      @current-change="currentChangeEvent">
      <template #operator-left>
        <span class="ml-3 text-gray-600 inline-flex items-center font-stl">所选院区：</span>
        <el-select v-model="hospArea" class="w-150 mr-2px" clearable placeholder="请选择院区" :suffix-icon="ArrowDown"
          @clear="handleClear">
          <el-option v-for="item in hospAreaList" :key="item.id" :label="item.hospAreaName" :value="item.hospAreaName"
            @click="selectedHospArea(item.id)" />
        </el-select>
        <span class="ml-3 text-gray-600 inline-flex items-center font-stl">所选科室：</span>
        <common-tree-select ref="treeSelectRef" :data="hospAreaDepList" :transmit-props="transmitProps"
          @handleNodeClick="handleNodeClick" />
        <span class="ml-3 text-gray-600 inline-flex items-center font-stl">类型：</span>
        <el-select v-model="type" class="w-150 mr-2px" placeholder="请选择类型" :suffix-icon="ArrowDown" />
        <el-button type="primary" :icon="Search" @click="handleSearch">搜索</el-button>
      </template>
      <template #operator-right>
        <el-button type="primary" :icon="Plus" @click="addRow">新增</el-button>
        <el-button type="primary" :icon="Refresh" @click="handleSearch">同步</el-button>
      </template>
      <template #columns>
        <vxe-column title="操作" align="center" width="170" fixed="right">
          <template #default="{ row }">
            <el-button type="primary" :icon="Edit" size="small" @click="editRow(row)">编辑</el-button>
            <el-popconfirm confirm-button-text="是" cancel-button-text="否" :icon="InfoFilled" title="确定要删除这条信息吗？"
              @confirm="deleteRow(row)">
              <template #reference>
                <el-button type="danger" :icon="Delete" size="small">删除</el-button>
              </template>
            </el-popconfirm>
          </template>
        </vxe-column>
      </template>
    </vxe-table-layout>
    <!-- 新增编辑 -->
    <update ref="updateRef" @reFetchtableList="reFresh" />
  </div>
</template>
  
<script setup lang='ts'>
import { VxeTableEvents } from 'vxe-table';
import { ArrowDown, Edit, Delete, InfoFilled, Search, Plus, Refresh } from '@element-plus/icons-vue';
import type { hospAreaInfo, resDepInfo } from '/@/api/system/types/area';
import type { resHosptAreaDepUserList } from '/@/api/system/types/user';
import { columnsList, params, transmitProps } from './useCommon';
import update from './update.vue'
const updateRef = ref();
const treeSelectRef = ref();
const vxeTableLayoutRef = ref();
const hospArea = ref('');
const type = ref('');
const hospAreaList = ref<hospAreaInfo[]>([])
const hospAreaDepList = ref<resDepInfo[]>([])
const handleSearch = () => {
  vxeTableLayoutRef.value.refresh(true);
};
const currentChangeEvent: VxeTableEvents.CurrentChange = (row) => {
  console.log(`行选中事件`, row);
};
async function initMethod(params: resHosptAreaDepUserList) {
  console.log(params, 'params');
  const { PageSize } = params;
  return {
    total: 100,
    records: [...new Array(PageSize)].map((_, index) => {
      return { id: index, srial: 'adad', name: '张三', value: '1', desc: '12414' };
    })
  };
}
onMounted(() => {
  loadHospAreaList()
});
const loadHospAreaList = async () => {
  const result = await fetchHosptAreaInfo()
  hospAreaList.value = result || []

}
// 根据院区获取相应科室
const selectedHospArea = async (AreaId: string) => {
  try {
    params.value.AreaId = AreaId;
    const result = await fetchDepList(params.value);
    hospAreaDepList.value = result;
  } catch (error) {
    if (error instanceof Error)
      throw (error.cause, 'catch捕获');
    else {
      ElMessage({
        type: 'error',
        message: '获取科室信息出现未知错误'
      })
    }
  }
};
const handleNodeClick = (DeptId: string) => {
  params.value.DeptId = DeptId;
};
const addRow = () => {
  console.log('adduser');
  updateRef.value.open();
};
const editRow = (row: hospAreaInfo) => {
  console.log(row, 'qqqqqq');
  updateRef.value.open(row);
};
const deleteRow = async (row: hospAreaInfo) => {
  const result = await deleteUserInfo(row.id);
  console.log(result);
  if (result) {
    reFresh()
  }
}
const handleClear = () => {
  treeSelectRef.value.tempData = '';
  params.value.AreaId = '';
  params.value.DeptId = '';
  hospAreaDepList.value = [];
}
const reFresh = () => {
  vxeTableLayoutRef.value.refresh();
}
</script>

<style lang="scss" scoped>
.bunk-manage {
  overflow: hidden;
  height: 100%;
}

.font-stl {
  font-size: $font-size-14;
  font-weight: $font-weight-500;
}
</style>