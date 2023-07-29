<!--
  * @Author: ZhouHao joehall@foxmail.com
  * @Date: 2023-07-12 09:09:22
 * @LastEditors: ZhouHao joehall@foxmail.com
 * @LastEditTime: 2023-07-29 15:13:42
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
        <span class="ml-3  text-gray-600 inline-flex items-center">选择院区：</span>
        <el-select v-model="hospAreaName" clearable class="w-150" placeholder="请选择院区" :suffix-icon="ArrowDown"
          @clear="handleClear">
          <el-option v-for="item in hospAreaList" :key="item.id" :label="item.hospAreaName" :value="item.hospAreaName"
            @click="selectedHospArea(item.id)" /></el-select>
        <!-- 科室选择 -->
        <span class="ml-3  text-gray-600 inline-flex items-center">选择科室：</span>
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
        <span class="ml-3  text-gray-600 inline-flex items-center">科室检索：</span>
        <el-input v-model="params.Keyword" class="w-150" placeholder="用户名称/工号" :suffix-icon="Search" />
        <el-button type="primary" class="ml-3" @click="handleSearch">搜索</el-button>
      </template>
      <template #operator-right>
        <div>
          <el-button type="primary" @click="addUser">新增</el-button>
        </div>
      </template>
      <template #columns>
        <vxe-column :title="isMainDept" align="center" fixed="right">
          <template #default="{ row }">
            <el-switch v-model="isSelecteddMainDept" @change="onChangeMainDept(row)" />
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
import { ArrowDown, Search, Document, Folder, FolderOpened } from '@element-plus/icons-vue';
import type { hospAreaInfo, resDepList } from '/@/api/system/types/user';
import { columnsList, transmitProps, params, isSelecteddMainDept, isMainDept, hospAreaName } from './useCommon';
import update from './update.vue';
const vxeTableLayoutRef = ref();
const updateRef = ref();
const treeSelectRef = ref();
// 院区列表
const hospAreaList = ref<hospAreaInfo[]>([]);
// 科室列表
const hospAreaDepList = ref<resDepList[]>([]);

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
  treeSelectRef.value.deptIds = '';
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
const onChangeMainDept = (row: any) => {
  console.log(row, 'row');
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
</style>
 