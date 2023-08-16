<!--
 * @Author: ZhouHao joehall@foxmail.com
 * @Date: 2023-07-12 14:32:21
 * @LastEditors: ZhouHao joehall@foxmail.com
 * @LastEditTime: 2023-08-15 18:06:02
 * @FilePath: \servious-illness-admin\src\views\system\bunk\components\BunkManagement.vue
 * @Description: 床位管理
-->
<template>
  <div class="bunk-manage">
    <vxe-table-layout
      ref="bunkManageTableRef"
      class="h_100"
      border
      has-index
      :loader="loadBunkTableList"
      :row-config="{ isCurrent: true, isHover: true }"
      height="100%"
      :columns-list="columnsList"
      @current-change="currentChangeEvent"
    >
      <template #operator-left>
        <span class="ml-3 text-gray-600 inline-flex items-center font-stl">所选院区：</span>
        <el-select
          v-model="hospArea"
          class="w-150 mr-2px"
          clearable
          placeholder="请选择院区"
          :suffix-icon="ArrowDown"
          @clear="handleClear"
        >
          <el-option
            v-for="item in hospAreaList"
            :key="item.id"
            :label="item.hospAreaName"
            :value="item.hospAreaName"
            @click="selectedHospArea(item.id)"
          />
        </el-select>
        <span class="ml-3 text-gray-600 inline-flex items-center font-stl">所选科室：</span>
        <common-tree-select
          ref="treeSelectRef"
          :data="hospAreaDepList"
          :transmit-props="transmitProps"
          @handle-node-click="handleNodeClick"
        />
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
            <el-popconfirm
              confirm-button-text="是"
              cancel-button-text="否"
              :icon="InfoFilled"
              title="确定要删除这条信息吗？"
              @confirm="deleteRow(row)"
            >
              <template #reference>
                <el-button type="danger" :icon="Delete" size="small">删除</el-button>
              </template>
            </el-popconfirm>
          </template>
        </vxe-column>
      </template>
    </vxe-table-layout>
    <!-- 新增编辑 -->
    <update ref="updateRef" @re-fetchtable-list="reFresh" />
  </div>
</template>

<script setup lang="ts">
import { ArrowDown, Edit, Delete, InfoFilled, Search, Plus, Refresh } from '@element-plus/icons-vue';
import { update } from './components';
import { useBunkManageCommon } from './composiables/useBunkManageCommon';
import { useBunkManageEvent } from './composiables/useBunkManageEvent';

const {
  updateRef,
  treeSelectRef,
  bunkManageTableRef,
  hospArea,
  type,
  hospAreaList,
  hospAreaDepList,
  columnsList,
  params,
  transmitProps
} = useBunkManageCommon();
const {
  handleSearch,
  currentChangeEvent,
  loadBunkTableList,
  loadHospAreaList,
  selectedHospArea,
  handleNodeClick,
  addRow,
  editRow,
  deleteRow,
  handleClear,
  reFresh
} = useBunkManageEvent({
  updateRef,
  treeSelectRef,
  bunkManageTableRef,
  hospAreaList,
  hospAreaDepList,
  params
});
onMounted(() => {
  loadHospAreaList();
});
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
