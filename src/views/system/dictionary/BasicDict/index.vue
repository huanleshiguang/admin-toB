<template>
  <div class="basic-dict">
    <VxeTableLayout
      ref="vxeTableLayout"
      size="small"
      border
      has-index
      :loader="initMethod"
      :row-config="{ isCurrent: true, isHover: true }"
      max-height="100%"
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
            <el-button size="small" link type="primary" @click="editRow(row)">编辑</el-button>
            <el-button size="small" link type="danger">删除</el-button>
          </template>
        </vxe-column>
      </template>
    </VxeTableLayout>
    <Update ref="updateRef" />
    <DrawerLayout ref="drawerLayout" modal-class="modal-drawer">
      <template #header>
        <div>
          <el-button type="primary" @click="addValue">添加值域</el-button>
        </div>
      </template>
      <VxeTableLayout
        :show-header="false"
        border
        size="small"
        max-height="400px"
        :columns-list="childColumnsList"
        :row-config="{ isHover: true }"
        :menu-config="menuConfig"
        :loader="initMethod"
        @menu-click="contextMenuClickEvent"
      ></VxeTableLayout>
    </DrawerLayout>
    <UpdateValue ref="updateValueRef" />
  </div>
</template>
<script setup lang="ts">
import { VxeTableEvents } from 'vxe-table';
import VxeTableLayout from '/@/components/VxeTable/VxeTableLayout.vue';
import DrawerLayout from '/@/components/DrawerLayout/index.vue';
import Update from './update.vue';
import TableTitle from '../common/title.vue';
import { columnsList, childColumnsList } from './enum';
import UpdateValue from '/@/views/system/dictionary/BasicDict/updateValue.vue';
import { useMessage } from '/src/hooks/common/useMessage';
const { createConfirm, createMessage } = useMessage();

const menuConfig = ref({
  className: 'right-menu',
  body: {
    options: [
      [
        { code: 'edit', name: '编辑' },
        { code: 'delete', name: '删除' }
      ]
    ]
  }
});
const vxeTableLayout = ref();
const updateRef = ref();
const updateValueRef = ref();
const drawerLayout = ref();
const add = () => {
  updateRef.value.open();
};
const addValue = () => {
  updateValueRef.value.open();
};
const editRow = (row) => {
  console.log(row);

  updateRef.value.open(row);
};

const contextMenuClickEvent: VxeTableEvents.MenuClick = async ({ menu, row, column }) => {
  switch (menu.code) {
    case 'edit':
      // 示例
      if (row && column) {
        updateRef.value.open(row);
        console.log('编辑');
      }
      break;
    case 'delete':
      // 示例
      if (row && column) {
        const result = await createConfirm('删除后不可恢复，是否确认删除？', 'warning');
        if (result) {
          createMessage.success('okk');
        }
      }
      break;
  }
};

const currentDbClick: VxeTableEvents.CellDblclick = ({ row }) => {
  drawerLayout.value.open();
  console.log(row);
};

async function initMethod(params: any) {
  // console.log('params', params);
  const { pageSize } = params;
  return {
    total: 100,
    records: [...new Array(pageSize)].map((_, index) => {
      return { id: index, dictCode: '333', dictName: '男' };
    })
  };
}

onMounted(() => {
  // console.log(vxeTableLayout.value);
});
</script>
<style lang="scss" scoped>
.basic-dict {
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
