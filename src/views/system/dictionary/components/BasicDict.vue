<template>
  <div class="basic-dict">
    <VxeTableLayout
      ref="vxeTableLayout"
      border
      has-index
      :loader="initMethod"
      :row-config="{ isCurrent: true, isHover: true }"
      height="auto"
      :columns-list="columnsList"
      @current-change="currentChangeEvent"
    >
      <template #operator-left>
        <TableTitle title="基础字典" />
      </template>
      <template #operator-right>
        <el-button @click="add">新增</el-button>
      </template>
    </VxeTableLayout>

    <el-divider />

    <VxeTableLayout
      ref="vxeTableLayout"
      border
      has-index
      :loader="initMethod"
      :row-config="{ isCurrent: true, isHover: true }"
      height="auto"
      :columns-list="columnsList"
      @current-change="currentChangeEvent"
    >
      <template #operator-left>
        <TableTitle title="值域维护" />
      </template>
      <template #operator-right>
        <el-button @click="add">新增</el-button>
      </template>
    </VxeTableLayout>
  </div>
</template>
<script setup lang="ts">
import { VxeTableEvents } from 'vxe-table';
import VxeTableLayout from '/@/components/VxeTable/index.vue';
import TableTitle from './title.vue';
const columnsList = [
  {
    title: '编码',
    field: 'name'
  },
  {
    title: '名称',
    field: 'sex'
  },
  {
    title: '英文名称',
    field: 'sex'
  },
  {
    title: '缩略名',
    field: 'sex'
  },
  {
    title: '描述',
    field: 'sex'
  },
  {
    title: '操作',
    field: 'sex'
  }
];
const vxeTableLayout = ref();
const dialogLayout = ref();
const dialogVisible = ref(false);
const handleSearch = () => {
  vxeTableLayout.value.refresh(true);
};
const add = () => {
  console.log(dialogLayout);
  dialogVisible.value = true;
  dialogLayout.value.open();
};
const currentChangeEvent: VxeTableEvents.CurrentChange = (row) => {
  console.log(`行选中事件`, row);
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
}
</style>
