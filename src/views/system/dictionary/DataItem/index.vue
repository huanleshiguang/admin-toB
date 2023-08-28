<template>
  <div class="basic-dict-item">
    <div class="category-tree">
      <header class="category-tree-header"><TableTitle title="字典类别" /></header>
      <section class="category-tree-body">
        <el-tree
          ref="treeRef"
          node-key="id"
          :load="loadTreeData"
          :props="{ label: 'categoryName', value: 'id', children: 'children', isLeaf: 'isLeaf' }"
          lazy
          highlight-current
          @node-click="handleNodeClick"
        />
      </section>
    </div>
    <VxeTableLayout
      ref="vxeTableLayout"
      size="small"
      :immediate="false"
      intact
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
        <TableTitle title="字典项配置" />
      </template>
      <template #operator-right>
        <el-button type="primary" @click="add">
          <i-ep-plus class="el-icon"></i-ep-plus>
          新增
        </el-button>
      </template>
      <template #columns>
        <vxe-column title="操作" align="center" width="180" fixed="right">
          <template #default="{ row }">
            <el-button size="small" :icon="Edit" link type="primary" @click="editRow(row)">编辑</el-button>
            <!-- <el-button size="small" link :type="row.dataStatus === 0 ? 'danger' : 'success'" @click="enableRow(row)">
              {{ row.dataStatus === 0 ? '停用' : '启用' }}
            </el-button> -->
          </template>
        </vxe-column>
      </template>
    </VxeTableLayout>
    <Update ref="updateRef" @refresh="refresh" />
  </div>
</template>
<script setup lang="ts">
import Update from './components/update.vue';
import TableTitle from '../common/title.vue';
import { columnsList } from './enum';
import { Edit } from '@element-plus/icons-vue';
import { useCommon } from './composables/useDataItemCommon';
import { useEvent } from './composables/useDataItemEvents';
const { treeRef, vxeTableLayout, updateRef, currentRow, initMethod } = useCommon();

const { add, editRow, refresh, handleNodeClick, loadTreeData } = useEvent({
  treeRef,
  updateRef,
  vxeTableLayout,
  currentRow
});
onMounted(() => {});
</script>
<style lang="scss" scoped>
.basic-dict-item {
  height: 100%;
  display: flex;
  flex-direction: row;
  position: relative;
  overflow: hidden;

  :deep(.modal-drawer) {
    position: absolute;
    z-index: 888 !important;
  }
}
.category-tree {
  width: 250px;
  height: 100%;
  margin-right: 16px;
  display: flex;
  flex-direction: column;
  &-header {
    margin-bottom: 10px;
    height: 45px;
    line-height: 45px;
  }
  &-body {
    flex: 1;
    border-radius: 6px;
    background-color: white;
    padding: 5px;
    :deep(.el-tree--highlight-current .el-tree-node.is-current > .el-tree-node__content) {
      background-color: $color-primary;
      color: white;
    }
  }
}
.right-menu {
  z-index: 2999 !important;
}
</style>
