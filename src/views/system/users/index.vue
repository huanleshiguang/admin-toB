<!--
  * @Author: ZhouHao joehall@foxmail.com
  * @Date: 2023-07-12 09:09:22
 * @LastEditors: ZhouHao joehall@foxmail.com
 * @LastEditTime: 2023-08-07 15:40:55
  * @FilePath: \servious-illness-admin\src\views\system\personnel.vue
  * @Description: 人员管理模块
 -->
<template>
  <div class="common-layout">
    <vxe-table-layout
      ref="vxeTableLayoutRef"
      class="h_100"
      border
      :loader="loadTableData"
      :row-config="{ isCurrent: true, isHover: true }"
      height="100%"
      :columns-list="columnsUserList"
      @current-change="currentChangeEvent"
    >
      <template #operator-left>
        <!-- 院区选择 -->
        <span class="ml-3 text-gray-600 inline-flex items-center font-stl">选择院区：</span>
        <el-select
          v-model="hospAreaName"
          clearable
          class="w-150"
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
        <!-- 科室选择 -->
        <span class="ml-3 text-gray-600 inline-flex items-center font-stl">选择科室：</span>
        <common-tree-select
          ref="treeSelectRef"
          v-model:data="hospAreaDepList"
          :transmit-props="treeSelectProps"
          @handleNodeClick="handleNodeClick"
          @clear="clearTreeSelect"
        >
          <!--传递 icon -->
          <template #icon-haschild&expanded>
            <FolderOpened />
          </template>
          <template #icon-haschild&unexpanded>
            <Folder />
          </template>
          <template #icon-nohaschild>
            <Document />
          </template>
        </common-tree-select>
        <span class="ml-3 text-gray-600 inline-flex items-center font-stl">人员检索：</span>
        <el-input v-model="params.Keyword" class="w-150" clearable placeholder="姓名/工号" :suffix-icon="Search" />
        <el-button type="primary" class="ml-3" @click="handleSearch">
          <i-ep-search class="el-icon"></i-ep-search>
          <span>搜索</span>
        </el-button>
      </template>
      <template #operator-right>
        <div>
          <el-button type="primary" :icon="Plus" @click="addUser">新增</el-button>
          <el-button type="primary" class="ml-3" :icon="Refresh" @click="handleSearch">同步</el-button>
        </div>
      </template>
      <template #columns>
        <vxe-column title="操作" align="center" width="250" fixed="right">
          <template #default="{ row }">
            <el-button type="primary" :icon="Edit" size="small" @click="editUser(row)">编辑</el-button>
            <el-popconfirm
              confirm-button-text="是"
              cancel-button-text="否"
              :icon="InfoFilled"
              title="确定要删除这条信息吗？"
              @confirm="deleteUser(row)"
            >
              <template #reference>
                <el-button type="danger" :icon="Delete" size="small">删除</el-button>
              </template>
            </el-popconfirm>
            <el-button text type="primary" size="small" @click="onConfigAuth(row)">分配权限</el-button>
          </template>
        </vxe-column>
      </template>
    </vxe-table-layout>
    <!-- 新增与编辑-->
    <update ref="updateRef" @reFetchtableList="reFresh" />
    <!-- 角色权限配置 -->
    <ModuleConfig
      v-model:module-config-visiable="moduleConfigDrawer.visiable"
      :card-title="moduleConfigDrawer.cardTitle"
      title="人员配置"
    />
  </div>
</template>
<script lang="ts" setup>
import { update } from './components';
import {
  ArrowDown,
  Search,
  Document,
  Folder,
  FolderOpened,
  InfoFilled,
  Edit,
  Delete,
  Plus,
  Refresh
} from '@element-plus/icons-vue';
import { useUserCommon } from './composables/useUserCommon';
import { useModuleConfigDrawer } from './composables/useModuleConfig';
import { useUserEvent } from './composables/useUserEvent';
// 人员管理相关数据
const {
  updateRef,
  vxeTableLayoutRef,
  treeSelectRef,
  treeSelectProps,
  params,
  hospAreaList,
  hospAreaDepList,
  columnsUserList,
  hospAreaName
} = useUserCommon();
// 人员管理增删改查事件
const {
  loadInitHsopAreaList,
  reFresh,
  handleSearch,
  addUser,
  editUser,
  deleteUser,
  handleClear,
  selectedHospArea,
  handleNodeClick,
  currentChangeEvent,
  loadTableData,
  clearTreeSelect
} = useUserEvent({
  vxeTableLayoutRef,
  treeSelectRef,
  updateRef,
  hospAreaList,
  hospAreaDepList,
  params
});
const { moduleConfigDrawer, onConfigAuth } = useModuleConfigDrawer();
onMounted(() => {
  loadInitHsopAreaList();
});
</script>

<style scoped lang="scss">
.common-layout {
  display: flex;
  overflow: hidden;
  height: 100%;
}
.font-stl {
  font-size: $font-size-14;
  font-weight: $font-weight-500;
}
</style>
