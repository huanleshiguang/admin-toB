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
        <el-input v-model="dictName" placeholder="请输入字典名称" clearable>
          <template #append>
            <el-button :icon="Search" @click="refresh" />
          </template>
        </el-input>
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
// import { getBaseDictList, enabledBaseDict, getBaseDictValueList } from '/@/api/system/dict';
import { VxeTableEvents } from 'vxe-table';
// import VxeTableLayout from '/@/components/VxeTable/VxeTableLayout.vue';
// import DrawerLayout from '/@/components/DrawerLayout/index.vue';
import Update from './update.vue';
import { columnsList, childColumnsList } from './enum';
import UpdateValue from '/@/views/system/dictionary/BasicDict/updateValue.vue';
const { createConfirm, createMessage } = useMessage();
import { Search } from '@element-plus/icons-vue';
// 右键菜单
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
const dictName = ref<string>('');
const vxeTableLayout = ref();
const childTableRef = ref();
const updateRef = ref();
const updateValueRef = ref();
const drawerLayout = ref();
let currentRow = ref();
const add = () => {
  updateRef.value.open();
};
const addValue = () => {
  updateValueRef.value.open({ dictId: currentRow.value.id, dictName: currentRow.value.dictName });
};
const editRow = (row) => {
  console.log(row);

  updateRef.value.open(row);
};
const enableRow = (row) => {
  const { dataStatus, dictName, id } = row;
  const isEnable = dataStatus === 0;
  createConfirm(`确定${isEnable ? '停用' : '启用'}${dictName}字典吗`, isEnable ? 'warning' : 'success').then(
    async () => {
      try {
        await enabledBaseDict({ dictId: id, isEnabled: !isEnable });
        createMessage.success(`${isEnable ? '停用' : '启用'}成功`);
      } catch (e) {
        createMessage.error(`${isEnable ? '停用' : '启用'}失败`);
      }
    }
  );
};
const refresh = () => {
  vxeTableLayout.value.refresh();
};
const refreshChild = () => {
  childTableRef.value.refresh();
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

const currentDbClick: VxeTableEvents.CellDblclick = async ({ row }) => {
  currentRow.value = row;
  drawerLayout.value.open();
};

async function initMethod(params: any) {
  const { total, pageData } = await getBaseDictList({ ...params, dictName: dictName.value });
  return {
    total: total,
    records: pageData
  };
}
async function initValueMethod(params: any) {
  const { total, pageData } = await getBaseDictValueList({ ...params, dictCode: currentRow.value.dictCode });
  return {
    total: total,
    records: pageData
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
