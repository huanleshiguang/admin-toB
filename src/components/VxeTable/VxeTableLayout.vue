<script setup lang="ts" name="VxeTableLayout">
import { isArray } from '/@/utils';
import type { VxeColumnProps, VxePagerPropTypes, VxeTablePropTypes } from 'vxe-table';
import { PropType } from 'vue';
import { cloneDeep } from 'lodash-es';
// defineComponent({
//   name: 'VxeTableLayout',
//   inheritAttrs: false
// });
const props = defineProps({
  // 完整的：没有分页的
  intact: {
    type: Boolean,
    default: false
  },
  // 是否展示刷新按钮
  showRefresh: {
    type: Boolean,
    default: true
  },
  //
  showHeader: {
    type: Boolean,
    default: true
  },

  // 相对定位的，即不自动撑满剩余空间
  relative: {
    type: Boolean,
    default: false
  },

  // 是否立即加载数据
  immediate: {
    type: Boolean,
    default: true
  },

  loader: {
    type: Function,
    default: () => {}
  },

  footer: {
    type: Boolean,
    default: true
  },

  headerHeight: {
    type: String,
    default: '32px'
  },
  columnsList: {
    type: Array as PropType<VxeColumnProps[]>,
    default: (): VxeColumnProps[] => []
  },
  // 表格分页参数
  pageSizeArr: {
    type: Array as PropType<VxePagerPropTypes.PageSizes>,
    default: (): VxePagerPropTypes.PageSizes => [10, 20, 50, 100]
  },

  // 表格分页参数
  pageSize: {
    type: Number,
    default: 20
  },
  // 是否有序号
  hasIndex: {
    type: Boolean,
    default: false
  },
  // 是否可以选择
  hasSelection: {
    type: Boolean,
    default: false
  }
});

// emit事件
const emit = defineEmits(['loaded', 'load-error', 'load-finish', 'load-start']);

const loading = ref<boolean>(false);
const table = ref<any>(null);
const total = ref<number>(0);
// const screenHeight = ref(window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight);

// watch(screenHeight, (val) => {
//   table.value.recalculate(true);
//   table.value.refreshScroll();
// });
const params = reactive<{ pageIndex: number; pageSize: number }>({
  pageIndex: 1,
  pageSize: props.pageSize
});

// 表格数据
const tableData = ref<Iobj[]>([]);

/**
 * 初始化请求结果数据
 *
 * @param resData
 */
function responseDataWrapper(resData: any) {
  const targetResData = resData || [];
  // 没有分页，直接返回数组时
  if (isArray(targetResData)) {
    return targetResData;
  }
  // 有分页，返回分页格式
  return (
    resData || {
      pageData: [],
      pageIndex: 0,
      pageSize: 0,
      total: 0
    }
  );
}

/**
 * 表格请求方法
 *
 * @param resetPage 重置分页
 */
async function refresh(resetPage?: boolean) {
  if (loading.value) return;

  if (resetPage) {
    params.pageIndex = 1;
    //仅重置页码
  }

  try {
    emit('load-start');
    loading.value = true;

    const targetResData = await props.loader(params);

    // 异常数据默认值
    const result = responseDataWrapper(targetResData);
    // 没有分页：返回的是 list
    if (props.intact) {
      tableData.value = cloneDeep(result);
      total.value = result && result.length;
    } else {
      const { pageData: records, total: rTotal } = unref(result);
      if (records && !records.length && rTotal && params.pageIndex > 1) {
        params.pageIndex--;
        loading.value = false;
        await refresh();
      } else {
        tableData.value = records || [];
        total.value = rTotal;
      }
    }
  } catch (err) {
    tableData.value = [];
    total.value = 0;
    if (process.env.NODE_ENV !== 'production') console.error('layout load', err);

    emit('load-error', err);
    return;
  } finally {
    loading.value = false;
    emit('load-finish');
  }

  await nextTick();
  emit('loaded', tableData.value);
}

/**
 * 表单头部自定义样式
 */
function headerCellClassName(): VxeTablePropTypes.HeaderCellClassName<Iobj> {
  return 'col-blue';
}

const onPageChange = () => {
  refresh();
};

defineExpose({
  refresh,
  tableData
});
// 初始化数据
onMounted(async () => {
  if (props.immediate) {
    await nextTick();
    await refresh();
  }
  // window.onresize = () => {
  //   return (() => {
  //     screenHeight.value = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
  //   })();
  // };
});
</script>
<template>
  <div class="table-layout">
    <slot name="title" v-bind="$attrs"></slot>
    <header v-if="showHeader" class="table-layout__header p-xAxis-10">
      <div class="flex flex-items-center flex-wrap">
        <slot name="operator-left" v-bind="$attrs"></slot>
      </div>

      <flex-spacer></flex-spacer>

      <div class="flex flex-items-center flex-wrap">
        <slot name="operator-right" v-bind="$attrs"></slot>
      </div>
    </header>

    <div class="table-layout__content p-10">
      <slot name="table" v-bind="$attrs">
        <div class="table-layout__main">
          <vxe-table
            ref="table"
            :header-cell-class-name="headerCellClassName"
            :loading="loading"
            stripe
            :data="cloneDeep(tableData)"
            :column-config="{ resizable: true }"
            v-bind="$attrs"
          >
            <vxe-column v-if="hasSelection" type="checkbox" width="40" align="center" fixed="left"></vxe-column>
            <vxe-column v-if="hasIndex" title="序号" width="80" fixed="left" align="center">
              <template #default="{ $rowIndex }">
                {{ $rowIndex + 1 + params.pageSize * (params.pageIndex - 1) }}
              </template>
            </vxe-column>
            <vxe-column
              v-for="columnItem in columnsList"
              :key="columnItem.field"
              align="center"
              v-bind="columnItem"
              :width="columnItem.width"
            ></vxe-column>
            <slot name="columns" v-bind="$attrs"></slot>
            <template #empty>
              <slot name="empty"><el-empty description="暂无数据" /></slot>
            </template>
          </vxe-table>
        </div>
      </slot>
    </div>
    <footer class="table-layout__footer">
      <slot v-if="!intact" name="footer-right">
        <vxe-pager
          v-model:current-page="params.pageIndex"
          v-model:page-size="params.pageSize"
          size="small"
          background
          :total="total"
          :page-sizes="pageSizeArr"
          :layouts="['Total', 'PrevPage', 'JumpNumber', 'NextPage', 'Sizes', 'FullJump']"
          class="table-layout-pager"
          @page-change="onPageChange"
        ></vxe-pager>
      </slot>
    </footer>
  </div>
</template>
<style lang="scss" scoped>
.table-layout {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  &__header {
    height: 45px;
    display: flex;
    align-items: center;
    margin-bottom: 12px;
  }

  &__content {
    flex: 1;
    background-color: #fff;
    display: flex;
    overflow: hidden;
    border-radius: $border-radius;
  }

  &__main {
    flex: 1;
    // width: auto;
    // position: relative;
    // height: 100%;
    overflow: hidden;
  }

  &__footer {
    line-height: 1.5;
    color: #666;
    .table-layout-pager {
      margin-top: 15px;
      background-color: transparent;
    }
  }

  &--default {
    position: relative;
  }

  &--default &__content {
    background: #fff;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
    border-radius: 2px;
  }

  &--plain &__main {
    border-bottom: 0;
  }

  &--outline &__content {
    border: 1px solid #ddd;
  }
  :deep(.col-blue) {
    color: $color-primary;
    background-color: #f6f9fb;
  }
  :deep(.vxe-table--render-default) {
    color: $color-2a;
  }
  :deep(.el-empty) {
    padding: 16px 0;
    .el-empty__image svg {
      width: 90%;
      height: 90%;
    }
  }
}
</style>
