<template>
  <div class="basic-dict">
    <VxeTableLayout
      ref="vxeTableLayout"
      size="small"
      intact
      border
      :loader="initMethod"
      height="100%"
      :columns-list="columnsList"
    >
      <template #operator-left>
        <TableTitle title="项目操作配置" />
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
import { useCommon } from './composables/useProjectOpCommon';
import { useEvent } from './composables/useProjectOpEvents';
const { vxeTableLayout, updateRef, currentRow, initMethod } = useCommon();

const { add, editRow, refresh } = useEvent({
  updateRef,

  vxeTableLayout,

  currentRow
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
./composables/useProjectOpCommon./composables/useProjectOpEvents
