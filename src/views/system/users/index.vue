<!--
  * @Author: ZhouHao joehall@foxmail.com
  * @Date: 2023-07-12 09:09:22
 * @LastEditors: ZhouHao joehall@foxmail.com
 * @LastEditTime: 2023-07-29 15:14:36
  * @FilePath: \servious-illness-admin\src\views\system\personnel.vue
  * @Description: 人员管理模块
 -->
<template>
  <div class="common-layout">
    <vxe-table-layout ref="vxeTableLayoutRef" class="h_100" border :loader="initMethod"
      :row-config="{ isCurrent: true, isHover: true }" height="100%" :columns-list="columnsList"
      @current-change="currentChangeEvent">
      <template #operator-left>
        <!-- 院区选择 -->
        <span class="ml-3  text-gray-600 inline-flex items-center font-stl">选择院区：</span>
        <el-select v-model="hospAreaName" clearable class="w-150" placeholder="请选择院区" :suffix-icon="ArrowDown"
          @clear="handleClear">
          <el-option v-for="item in hospAreaList" :key="item.id" :label="item.hospAreaName" :value="item.hospAreaName"
            @click="selectedHospArea(item.id)" /></el-select>
        <!-- 科室选择 -->
        <span class="ml-3  text-gray-600 inline-flex items-center font-stl">选择科室：</span>
        <common-tree-select ref="treeSelectRef" v-model:data="hospAreaDepList" :transmit-props="transmitProps"
          @handleNodeClick="handleNodeClick">
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
        <span class="ml-3  text-gray-600 inline-flex items-center font-stl">人员检索：</span>
        <el-input v-model="params.Keyword" class="w-150" placeholder="姓名/工号" :suffix-icon="Search" />
        <el-button type="primary" class="ml-3" @click="handleSearch">搜索</el-button>
      </template>
      <template #operator-right>
        <div>
          <el-button type="primary" @click="addUser">新增</el-button>
          <el-button type="primary" class="ml-3" @click="handleSearch">同步</el-button>
        </div>
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
    <!-- 新增编辑-->
    <update ref="updateRef" @reFetchtableList="reFresh" />
  </div>
</template>
 
<script lang="ts" setup>
import VxeTableLayout from '/@/components/VxeTable/VxeTableLayout.vue';
import { VxeTableEvents } from 'vxe-table';
import { ArrowDown, Search, Document, Folder, FolderOpened, InfoFilled, Edit, Delete } from '@element-plus/icons-vue';
import type { hospAreaInfo, resDepList, userInfo } from '/@/api/system/types/user';
import { columnsList, params, hospAreaName } from './useCommon';
import update from './update.vue';
const vxeTableLayoutRef = ref();
const updateRef = ref();
const treeSelectRef = ref();
// 院区列表
const hospAreaList = ref<hospAreaInfo[]>([]);
// 科室列表
const hospAreaDepList = ref<resDepList[]>([]);
// 定义需要传给公共组件<common-tree-select />的字段（用于tree展示）
const transmitProps = {
  label: 'deptName',
  deptCode: 'deptCode',
  isMainDept: 'isMainDept',
  children: 'children'
};
onMounted(() => {
  fetchinitHsopAreaList();
});
// 获取初始院区列表
const fetchinitHsopAreaList = async () => {
  try {
    const result = await fetchHosptAreaInfo();
    hospAreaList.value = result;
  } catch (error) {
    if (error instanceof Error)
      throw (error.cause, 'catch捕获');
    else
      ElMessage({
        type: 'error',
        message: '获取院区信息出现未知错误'
      });
  }
};
// 根据院区获取相应科室
const selectedHospArea = async (AreaId: string) => {
  try {
    params.value.AreaId = AreaId;
    const result = await fetchDepList(AreaId);
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
const currentChangeEvent: VxeTableEvents.CurrentChange = (row) => {
  console.log(`行选中事件`, row);
};
// 搜索
const handleSearch = async () => {
  vxeTableLayoutRef.value.refresh(true);
};
const handleClear = () => {
  treeSelectRef.value.tempData = '';
  params.value.AreaId = '';
  params.value.DeptId = '';
}
async function initMethod() {
  try {
    const result = await fetchHosptAreaDepUserList(params.value);
    const { pageData: records, total } = result || {};
    return {
      total,
      records
    };
  } catch (error) {
    if (error instanceof Error)
      throw (error.cause, 'catch捕获')
    else {
      console.log(error);
      ElMessage({
        type: 'error',
        message: '获取人员信息出现未知错误'
      })
    }
  }
};
// 新增用户
const addUser = () => {
  updateRef.value.open();
};
const editRow = (row: userInfo) => {
  console.log(row, 'qqqqqq');
  updateRef.value.open(row);
};
const deleteRow = async (row: userInfo) => {
  const result = await deleteUserInfo(row.id);
  console.log(result);
  if (result) {
    reFresh()
  }
}
const reFresh = () => {
  vxeTableLayoutRef.value.refresh();
}
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
 