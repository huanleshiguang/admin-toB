<!--
 * @Author: ZhouHao joehall@foxmail.com
 * @Date: 2023-07-12 09:09:22
 * @LastEditors: ZhouHao joehall@foxmail.com
 * @LastEditTime: 2023-07-24 18:07:53
 * @FilePath: \servious-illness-admin\src\views\system\personnel.vue
 * @Description: 架构管理模块
-->
<template>
  <div class="common-layout">
    <vxe-table-layout ref="vxeTableLayout" class="h_100" border has-index :loader="initMethod"
      :row-config="{ isCurrent: true, isHover: true }" height="100%" :columns-list="columnsList"
      @current-change="currentChangeEvent">
      <template #operator-left>
        <!-- 院区选择 -->
        <span class="ml-3  text-gray-600 inline-flex items-center">选择院区：</span>
        <el-select v-model="hospAreaName" clearable class="w-60" placeholder="请选择院区" :suffix-icon="ArrowDown"
          @clear="handleClear">
          <el-option v-for="item in hospAreaList" :key="item.id" :label="item.hospAreaName" :value="item.hospAreaName"
            @click="selectedHospArea(item.id)" /></el-select>
        <!-- 科室选择 -->
        <span class="ml-3  text-gray-600 inline-flex items-center">选择科室：</span>
        <common-tree-select ref="treeSelect" v-model:data="reactHospAreaDepList" :transmit-props="transmitProps"
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
        <span class="ml-3  text-gray-600 inline-flex items-center">科室检索：</span>
        <el-input v-model="params.Keyword" class="w-60 m-2" placeholder="用户名称/工号" :suffix-icon="Search" />
        <el-button type="primary" @click="handleSearch">搜索</el-button>
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

<script lang="ts" setup>
import VxeTableLayout from '/@/components/VxeTable/VxeTableLayout.vue';
import { VxeTableEvents } from 'vxe-table';
import { ArrowDown, Search, Document, Folder, FolderOpened, InfoFilled } from '@element-plus/icons-vue';
import type { hospAreaInfo, fetchHospAreaDepList } from '/@/api/system/types/user';
import { columnsList, transmitProps, params } from './useCommon';
import update from './update.vue';
const vxeTableLayout = ref();
const updateRef = ref();
const hospAreaName = ref<string>('');
const treeSelect = ref();
const hospAreaList = ref<hospAreaInfo[]>([]);
const reactHospAreaDepList = ref<fetchHospAreaDepList[]>([]);

onMounted(() => {
  // 获取初始院区列表
  fetchinitHsopAreaList();
});
const fetchinitHsopAreaList = async () => {
  try {
    const result = await fetchHosptAreaInfo();
    hospAreaList.value = result;
  } catch (error) {
    throw (error);
  }
};
// 根据院区获取相应科室
const selectedHospArea = async (AreaId: string) => {
  params.value.AreaId = AreaId;
  try {
    const result = await fetchHosptAreaDepList(AreaId);
    reactHospAreaDepList.value = result;
  } catch (error) {
    throw (error);
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
  vxeTableLayout.value.refresh(true);
};
const handleClear = () => {
  treeSelect.value.deptName = '';
  params.value.AreaId = '';
  params.value.DeptId = '';
}
async function initMethod() {
  const result = await fetchHosptAreaDepUserList(params.value);
  const { pageData: records, total } = result;
  return {
    total,
    records
  };
};
const editRow = (row) => {
  console.log(row, 'row');
  updateRef.value.open(row);
};
const deleteRow = (row) => {
  console.log(row, 'row');
}
const reFresh = () => {
  vxeTableLayout.value.refresh();
}
</script>

<style scoped lang="scss">
.common-layout {
  display: flex;
  overflow: hidden;
}
</style>
