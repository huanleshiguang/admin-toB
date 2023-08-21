<script lang="ts" setup name="SortDragTree">
import type { AllowDropType } from 'element-plus/es/components/tree/src/tree.type';
import { SortUp, SortDown } from '@element-plus/icons-vue';
import { cloneDeep } from 'lodash-es';

// 只允许水平拖拽
const allowDrop = (draggingNode: Node, dropNode: Node, type: AllowDropType) => {
  return type !== 'inner';
};

const props = defineProps({
  // 远程加载
  loader: {
    type: Function,
    default: undefined
  },
  // tree 数据
  options: {
    type: Array,
    default: () => []
  },
  // tree 显示字段
  showLabel: {
    type: String,
    default: 'label'
  },
  // tree 使用字段
  useFiled: {
    type: String,
    default: 'value'
  }
});
const emit = defineEmits(['options:update']);
// tree绑定数据
const dataList = ref([]);
const load = async () => {
  const { loader, options } = props;
  if (!loader) {
    dataList.value = options as [];
    return;
  }
  try {
    dataList.value = await loader();
  } catch (err) {
    // err
  }
};
onMounted(() => {
  load();
});
// options更新
watch(dataList, (val) => {
  emit('options:update', val);
});
watch(
  () => props.options,
  (val: []) => {
    dataList.value = val;
  }
);
/**
 * 下移
 * @param data 选中行
 */
const handleSortDown = (data) => {
  const { useFiled } = props;
  const index = dataList.value.findIndex((item: {}) => item[useFiled] === data[useFiled]);
  dataList.value[index] = dataList.value.splice(index + 1, 1, dataList.value[index])[0];
  dataList.value = cloneDeep(dataList.value);
};
/**
 * 上移
 * @param data 选中行
 */
const handleSortUp = (data) => {
  const { useFiled } = props;
  const index = dataList.value.findIndex((item: {}) => item[useFiled] === data[useFiled]);
  dataList.value[index] = dataList.value.splice(index - 1, 1, dataList.value[index])[0];
  dataList.value = cloneDeep(dataList.value);
};
/**
 * 是否为第一个
 * @param data 当前行
 */
const isFirst = (data) => {
  const { useFiled } = props;
  const index = dataList.value.findIndex((item: {}) => item[useFiled] === data[useFiled]);
  return index === 0;
};
/**
 * 是否为最后一个
 * @param data 当前行
 */
const isEnd = (data) => {
  const { useFiled } = props;
  const index = dataList.value.findIndex((item: {}) => item[useFiled] === data[useFiled]);
  return dataList.value.length - 1 === index;
};
</script>
<template>
  <div class="Sort-Drag-tree">
    <el-tree :allow-drop="allowDrop" :data="dataList" draggable default-expand-all :node-key="useFiled">
      <template #default="{ node, data }">
        <span class="custom-tree-node">
          <span>{{ node[showLabel] }}</span>
          <span>
            <el-link
              :disabled="isEnd(data)"
              :underline="false"
              :icon="SortDown"
              title="下移"
              @click="handleSortDown(data)"
            ></el-link>
            <el-link
              :disabled="isFirst(data)"
              :underline="false"
              :icon="SortUp"
              title="上移"
              @click="handleSortUp(data)"
            ></el-link>
          </span>
        </span>
      </template>
    </el-tree>
  </div>
</template>
<style scoped lang="scss">
.Sort-Drag-tree {
  width: 100%;
  height: 100%;
  background-color: white;
  padding: 5px;
  overflow: auto;
}
.custom-tree-node {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  padding-right: 8px;
}
:deep(.el-tree-node) {
  border: 1px solid $color-primary;
  border-top: 0;
  &:first-child {
    border-top: 1px solid $color-primary;
  }
}
</style>
