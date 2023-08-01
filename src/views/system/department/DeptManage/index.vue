<!--
 * @Author: ZhouHao joehall@foxmail.com
 * @Date: 2023-07-29 09:37:37
 * @LastEditors: ZhouHao joehall@foxmail.com
 * @LastEditTime: 2023-08-01 19:17:41
 * @FilePath: \servious-illness-admin\src\views\system\department\DeptManage\index.vue
 * @Description: 
-->

<template>
  <div class="common-layout">
    <vxe-table-layout ref="vxeTableLayoutRef" class="h_100" border :loader="initMethod" :immediate="false"
      :row-config="{ isCurrent: true, isHover: true }" height="100%" :columns-list="deptColumnsList"
      @current-change="currentChangeEvent">
      <template #operator-left>
        <!-- 院区选择 -->
        <span class="ml-3  text-gray-600 inline-flex items-center font-stl">选择院区：</span>
        <el-select v-model="hospAreaName" clearable class="w-150" placeholder="请选择院区" :suffix-icon="ArrowDown" clearble
          @clear="handleClear">
          <el-option v-for="item in hospAreaList" :key="item.id" :label="item.hospAreaName" :value="item.hospAreaName"
            @click="selectedHospArea(item.id)" /></el-select>
        <!-- 科室选择 -->
        <span class="ml-3  text-gray-600 inline-flex items-center font-stl">科室类型：</span>
        <el-select v-model="deptTypeName">
          <el-option v-for="item in deptTypes" :key="item.DeptType" :label="item.deptTypeName" :value="item.deptTypeName"
            @click="handleDeptType(item)" />
        </el-select>
        <span class="ml-3  text-gray-600 inline-flex items-center font-stl">科室检索：</span>
        <el-input v-model="params.Keyword" class="w-150" placeholder="用户名称/工号" :suffix-icon="Search" />
        <el-button type="primary" class="ml-3" :icon="Search" @click="handleSearch">搜索</el-button>
      </template>
      <template #operator-right>
        <div>
          <el-button type="primary" :icon="Refresh" @click="handleSearch">同步</el-button>
        </div>
      </template>
      <template #columns>
        <vxe-column :title="titleMainDept" align="center" fixed="right">
          <template #default="{ row }">
            <el-switch v-model="row.isMainDept" :loading="loading" active-text="是" inactive-text="否"
              :before-change="() => switchBeforeChange(row)" />
          </template>
        </vxe-column>
      </template>
    </vxe-table-layout>
    <!-- 新增院区的dialog -->
    <update ref="updateRef" @reFetchtableList="reFresh" />
  </div>
</template>
 
<script lang="ts" setup>
import update from './update.vue';
import { ArrowDown, Search, Refresh } from '@element-plus/icons-vue';
import { useCommon } from './useCommon';
import { useEvent } from './useEvent';
const { vxeTableLayoutRef, updateRef, hospAreaList, loading, deptColumnsList, hospAreaName,
  titleMainDept, params, hospAreaDepList, deptTypes, deptTypeName } = useCommon();
const { loadInitHsopAreaList, selectedHospArea, handleSearch, handleClear, initMethod, switchBeforeChange, reFresh, currentChangeEvent, handleDeptType } = useEvent({
  vxeTableLayoutRef, hospAreaList, params, hospAreaName, hospAreaDepList, loading, deptTypes, deptTypeName
});

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
 