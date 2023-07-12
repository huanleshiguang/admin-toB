<template>
  <div class="basic-dict">
    <VxeTableLayout
      ref="vxeTableLayout"
      size="small"
      border
      has-index
      :loader="initMethod"
      :row-config="{ isCurrent: true, isHover: true }"
      height="auto"
      :columns-list="columnsList"
      @cell-dblclick="currentDbClick"
    >
      <template #operator-left>
        <TableTitle title="基础字典" />
      </template>
      <template #operator-right>
        <el-button @click="add">新增</el-button>
      </template>
      <template #columns>
        <vxe-column title="操作" align="center" fixed="right">
          <template #default="{ $columnIndex, row }">
            <el-button link type="primary" @click="editRow(row)">编辑</el-button>
            <el-button link type="danger">删除</el-button>
          </template>
        </vxe-column>
      </template>
    </VxeTableLayout>
    <update ref="updateRef" />

    <el-drawer
      v-model="drawerVisible"
      :append-to-body="false"
      style="position: absolute"
      title="I am the title"
      direction="rtl"
    >
      <span>Hi, there!</span>
    </el-drawer>
  </div>
</template>
<script setup lang="ts">
import { VxeTableEvents } from 'vxe-table';
import VxeTableLayout from '/@/components/VxeTable/index.vue';
import update from './update.vue';
import TableTitle from '../common/title.vue';
import { columnsList } from './enum';
const vxeTableLayout = ref();
const updateRef = ref();
const drawerVisible = ref(false);
const add = () => {
  updateRef.value.open();
};
const editRow = (row) => {
  console.log(row);

  updateRef.value.open(row);
};
const currentDbClick: VxeTableEvents.CellDblclick = ({ row }) => {
  drawerVisible.value = true;
  console.log(row);
};

async function initMethod(params: any) {
  console.log('params', params);
  const { pageSize } = params;
  return {
    total: 100,
    records: [...new Array(pageSize)].map((_, index) => {
      console.log(index);
      return { id: index, name: '333', sex: '男' };
    })
  };
}

onMounted(() => {
  console.log(vxeTableLayout.value);
});
</script>
<style lang="scss">
.basic-dict {
  display: flex;
  flex-direction: column;
  position: relative;
}
</style>
