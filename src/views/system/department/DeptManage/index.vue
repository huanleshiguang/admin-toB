<!--
  * @Author: ZhouHao joehall@foxmail.com
  * @Date: 2023-07-12 09:09:22
 * @LastEditors: ZhouHao joehall@foxmail.com
 * @LastEditTime: 2023-07-29 16:42:10
  * @FilePath: \servious-illness-admin\src\views\system\personnel.vue
  * @Description: 科室管理模块
 -->
<template>
  <div class="common-layout">
    <vxe-table-layout ref="vxeTableLayoutRef" class="h_100" border has-index :loader="initMethod"
      :row-config="{ isCurrent: true, isHover: true }" height="100%" :columns-list="columnsList"
      @current-change="currentChangeEvent">
      <template #operator-left>
        <!-- 院区选择 -->
        <span class="ml-3  text-gray-600 inline-flex items-center font-stl">选择院区：</span>
        <el-select v-model="hospAreaName" clearable class="w-150" placeholder="请选择院区" :suffix-icon="ArrowDown" clearble
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
        <span class="ml-3  text-gray-600 inline-flex items-center font-stl">科室检索：</span>
        <el-input v-model="params.Keyword" class="w-150" placeholder="用户名称/工号" :suffix-icon="Search" />
        <el-button type="primary" class="ml-3" :icon="Search" @click="handleSearch">搜索</el-button>
      </template>
      <template #operator-right>
        <div>
          <el-button type="primary" :icon="Refresh" @click="addUser">同步</el-button>
        </div>
      </template>
      <template #columns>
        <vxe-column :title="titleMainDept" align="center" fixed="right">
          <template #default="{ row }">
            <el-switch v-model="row.isMainDept" :loading="loading" active-text="是" inactive-text="否"
              :before-change="onChangeMainDept" />
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
import { ArrowDown, Search, Document, Folder, FolderOpened, Refresh } from '@element-plus/icons-vue';
import type { hospAreaInfo, resDepList } from '/@/api/system/types/user';
import { columnsList, transmitProps, params, titleMainDept, hospAreaName } from './useCommon';
import update from './update.vue';
const vxeTableLayoutRef = ref();
const updateRef = ref();
const treeSelectRef = ref();
// 院区列表
const hospAreaList = ref<hospAreaInfo[]>([]);
// 科室列表
const hospAreaDepList = ref<resDepList[]>([]);
const loading = ref<boolean>(false)
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
      throw (error.cause, 'error.cause');
    else
      ElMessage({
        type: 'error',
        message: '未知错误'
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
        message: '未知错误'
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
      ElMessage({
        type: 'error',
        message: '未知错误'
      })
    }
  }
};
// 是否为重症科室
const onChangeMainDept = () => {
  loading.value = true
  return new Promise((resolve) => {
    setTimeout(() => {
      loading.value = false
      ElMessage.success('切换成功')
      return resolve(true)
    }, 1000)
  })
}
// 新增用户
const addUser = () => {
  updateRef.value.open();
};
// const editRow = (row: userInfo) => {
//   console.log(row, 'row');
//   updateRef.value.open(row);
// };
// const deleteRow = (row: userInfo) => {
//   // deleteUser(row.userWorkCode);
//   console.log(row, 'row');
// }
// 刷新数据
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
 