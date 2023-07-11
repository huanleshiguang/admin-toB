<script setup lang="ts">
import type { VxeColumnProps, VxePagerPropTypes } from 'vxe-table';
import { PropType } from 'vue';
defineComponent({
  name: 'VxeTableLayout',
  inheritAttrs: false
});
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

// withDefaults(
//   defineProps<{
//     columnsList: VxeColumnProps[];
//   }>(),
//   {
//     columnsList: (): VxeColumnProps[] => []
//   }
// );

// emit事件
const emit = defineEmits(['loaded', 'load-error', 'load-finish', 'load-start']);

const loading = ref<boolean>(false);
const table = ref<any>(null);
const total = ref<number>(0);
const params = reactive<{ pageIndex: number; pageSize: number }>({
  pageIndex: 1,
  pageSize: props.pageSize
});
const list = ref([]);
const refresh = async (resetPage?: boolean) => {
  if (loading.value) return;

  if (resetPage) {
    params.pageIndex = 1;
    //仅重置页码
    //this.params.pageSize = 20;
  }

  try {
    emit('load-start');
    loading.value = true;

    const result = await props.loader(params);
    // 没有分页：返回的是 list
    if (props.intact) {
      list.value = result;
      total.value = result && result.length;
    } else {
      const { records, total: rTotal } = unref(result);
      console.log(unref(result),'unref(result)');
      
      if (records && !records.length && rTotal && params.pageIndex > 1) {
        params.pageIndex--;
        loading.value = false;
        await refresh();
      } else {
        list.value = records || [];
        total.value = rTotal;
      }
    }
  } catch (err) {
    list.value = [];
    total.value = 0;
    if (process.env.NODE_ENV !== 'production') console.error('layout load', err);

    emit('load-error', err);
    return;
  } finally {
    loading.value = false;
    emit('load-finish');
  }

  await nextTick();
  emit('loaded', list.value);
};

const onPageChange = () => {
  refresh();
};
defineExpose({
  refresh
});
// 初始化数据
onMounted(async () => {
  if (props.immediate) {
    await nextTick();
    await refresh();
  }
});
</script>
<template>
  <div class="table-layout">
    <slot name="title" v-bind="$attrs"></slot>
    <header v-if="showHeader" class="table-layout__header">
      <div class="d-flex align-center flex-wrap">
        <slot name="operator-left" v-bind="$attrs"></slot>
      </div>

      <flex-spacer></flex-spacer>

      <div class="d-flex align-center flex-wrap">
        <slot name="operator-right" v-bind="$attrs"></slot>
      </div>
    </header>
    
    <div class="table-layout__content">
      <slot name="table" v-bind="$attrs">
        <vxe-table ref="table" class="table-layout__main" :loading="loading" stripe :data="list" v-bind="$attrs">
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
            <slot name="empty"></slot>
          </template>
        </vxe-table>
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

  &__header {
    height: 45px;
    display: flex;
    align-items: center;
  }

  &__content {
    flex-grow: 1;
    background-color: #fff;
  }

  &__main {
    width: auto;
    position: relative;
    height: 100%;
  }

  &__footer {
    align-items: end;
    line-height: 1.5;
    color: #666;
    border-top: 1px #ddd solid;
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
}
</style>
