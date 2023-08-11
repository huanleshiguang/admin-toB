<template>
  <div class="basic-dict">
    <VxeTableLayout
      ref="vxeTableLayout"
      size="small"
      border
      :loader="initMethod"
      :row-config="{ isCurrent: true, isHover: true }"
      height="100%"
      :columns-list="columnsList"
      @cell-dblclick="currentDbClick"
    >
      <template #operator-left>
        <div class="flex">
          <el-input v-model="dictName" placeholder="请输入字典名称" class="mr_10" clearable />
          <el-button type="primary" :icon="Search" @click="refresh">搜索</el-button>
        </div>
      </template>
      <template #operator-right>
        <el-button @click="add">新增</el-button>
      </template>
      <template #columns>
        <vxe-column title="操作" align="center" width="180" fixed="right">
          <template #default="{ $columnIndex, row }">
            <el-button size="small" link type="primary" @click="currentDbClick({ row })">查看值域</el-button>
            <el-button size="small" link type="primary" @click="editRow(row)">编辑</el-button>
            <el-button size="small" link :type="row.dataStatus === 0 ? 'danger' : 'success'" @click="enableRow(row)">
              {{ row.dataStatus === 0 ? '停用' : '启用' }}
            </el-button>
          </template>
        </vxe-column>
      </template>
    </VxeTableLayout>
    <Update ref="updateRef" @refresh="refresh" />
    <DrawerLayout ref="drawerLayout" modal-class="modal-drawer">
      <template #header>
        <div>
          <el-button type="primary" @click="addValue">添加值域</el-button>
        </div>
      </template>
      <VxeTableLayout
        ref="childTableRef"
        :show-header="false"
        border
        size="small"
        height="350px"
        :columns-list="childColumnsList"
        :row-config="{ isHover: true }"
        :menu-config="menuConfig"
        :loader="initValueMethod"
        @menu-click="contextMenuClickEvent"
      ></VxeTableLayout>
    </DrawerLayout>
    <UpdateValue ref="updateValueRef" @refresh="refreshChild" />
  </div>
</template>
<script setup lang="ts">
import Update from './components/update.vue';
import { columnsList, childColumnsList } from './enum';
import UpdateValue from './components/updateValue.vue';
import { Search } from '@element-plus/icons-vue';
import { useCommon } from './composables/useDictCommon';
import { useEvent } from './composables/useDictEvents';
const {
  menuConfig,
  dictName,
  vxeTableLayout,
  childTableRef,
  updateRef,
  updateValueRef,
  drawerLayout,
  currentRow,
  initMethod,
  initValueMethod
} = useCommon();

const { currentDbClick, add, addValue, editRow, enableRow, refresh, refreshChild, contextMenuClickEvent } = useEvent({
  drawerLayout,
  updateRef,
  updateValueRef,
  vxeTableLayout,
  childTableRef,
  currentRow
});

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
