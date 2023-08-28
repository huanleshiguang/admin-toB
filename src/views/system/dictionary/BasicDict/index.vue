<template>
  <div class="basic-dict">
    <VxeTableLayout
      ref="vxeTableLayout"
      size="small"
      border
      :loader="initMethod"
      :tree-config="{
        transform: true,
        rowField: 'id',
        parentField: 'parentId'
      }"
      height="100%"
      :columns-list="columnsList"
    >
      <template #operator-left>
        <div class="flex">
          <el-input v-model="categoryName" placeholder="请输入字典名称" class="mr_10" clearable />
          <el-button type="primary" :icon="Search" @click="refresh">搜索</el-button>
        </div>
      </template>
      <template #operator-right>
        <el-button type="primary" @click="add">
          <i-ep-plus class="el-icon"></i-ep-plus>
          新增
        </el-button>
      </template>
      <template #columns>
        <vxe-column title="操作" align="center" width="150" fixed="right">
          <template #default="{ row }">
            <el-button size="small" :icon="Edit" link type="primary" @click="editRow(row)">编辑</el-button>
            <el-button
              :disabled="canDeleteRow(row)"
              :icon="Delete"
              size="small"
              link
              type="danger"
              @click="deleteRow(row)"
            >
              删除
            </el-button>
          </template>
        </vxe-column>
      </template>
    </VxeTableLayout>
    <Update ref="updateRef" @refresh="refresh" />
  </div>
</template>
<script setup lang="ts">
import Update from './components/update.vue';
import { columnsList } from './enum';
import { Search, Edit, Delete } from '@element-plus/icons-vue';
import { useCommon } from './composables/useDictCommon';
import { useEvent } from './composables/useDictEvents';
const { categoryName, vxeTableLayout, updateRef, initMethod } = useCommon();

const { add, editRow, refresh, deleteRow, canDeleteRow } = useEvent({
  updateRef,
  vxeTableLayout
});

onMounted(() => {
  // console.log(vxeTableLayout.value);
});
</script>
<style lang="scss" scoped>
.basic-dict {
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;

  :deep(.modal-drawer) {
    position: absolute;
    z-index: 888 !important;
  }
}
.right-menu {
  z-index: 2999 !important;
}
</style>
