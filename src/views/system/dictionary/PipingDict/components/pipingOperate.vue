<script setup>
import TableTitle from '../../common/title.vue';
import { pipingOperateColumnsList } from '../enum';
const initMethod = () => {};
const add = () => {};
const editRow = () => {};
</script>
<template>
  <div class="flex-grow flex">
    <VxeTableLayout
      ref="vxeTableLayout"
      size="small"
      intact
      border
      :loader="initMethod"
      height="auto"
      :columns-list="pipingOperateColumnsList"
    >
      <template #operator-left>
        <TableTitle title="管路操作" />
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
  </div>
</template>

<style lang="scss" scoped></style>
