<!--
 * @Author: ZhouHao joehall@foxmail.com
 * @Date: 2023-07-18 09:32:45
 * @LastEditors: ZhouHao joehall@foxmail.com
 * @LastEditTime: 2023-08-16 10:58:26
 * @FilePath: \servious-illness-admin\src\components\common\CommonTree.vue
 * @Description: 公共tree-select组件
-->
<template>
  <div class="tree-wrapper">
    <el-tree-select
      ref="treeRef"
      v-model="deptValue"
      :data="getTreeData"
      :placeholder="placeholder"
      :multiple="multiple"
      :props="defaultProps"
      :clearable="clearable"
      check-strictly
      node-key="id"
      @node-click="handleNodeClick"
      @clear="handleCrear"
    >
      <template v-if="!showCheckbox" #default="{ node, data }">
        <el-icon v-if="data.children.length && node.expanded">
          <!-- 有子节点并且已展开 -->
          <slot name="icon-haschild&expanded" />
        </el-icon>
        <el-icon v-if="data.children.length && !node.expanded">
          <!-- 有子节点并且未展开 -->
          <slot name="icon-haschild&unexpanded" />
        </el-icon>
        <el-icon v-if="!data?.children.length">
          <!-- 无子节点 -->
          <slot name="icon-nohaschild" />
        </el-icon>
        <span style="margin-left: 10px">{{ node.label }}</span>
      </template>
    </el-tree-select>
  </div>
</template>

<script setup lang="ts">
import { ElTree } from 'element-plus';
import 'element-plus/es/components/tree/style/css';
const treeRef = ref<InstanceType<typeof ElTree>>();
const props = defineProps({
  data: {
    type: Array,
    default: () => [],
    required: true
  },
  // 是否展示checkbox
  showCheckbox: {
    type: Boolean,
    default: false
  },
  // 是否展示搜索框
  showSearch: {
    type: Boolean,
    default: false
  },
  // 要展示的字段名
  transmitProps: {
    type: Object,
    required: true
  },
  placeholder: {
    type: String,
    default: '请选择'
  },
  multiple: {
    type: Boolean,
    defalue: false
  },
  clearable: {
    type: Boolean,
    default: true
  },
  modelData: {
    type: [String, Array],
    default: ''
  }
});
const emits = defineEmits(['update:modelData', 'handleNodeClick', 'value', 'clear']);
const deptValue = computed({
  get() {
    return props.modelData;
  },
  set(value) {
    console.log(value, 'value');
    emits('update:modelData', value);
  }
});
// 要显示的字段
const defaultProps = {
  children: `${props.transmitProps.children}`,
  label: `${props.transmitProps.label}`
};
const getTreeData = computed(() => props.data);
const handleNodeClick = () => {
  const id = treeRef.value?.getCurrentKey();
  emits('handleNodeClick', id);
};
const handleCrear = () => {
  emits('clear');
};
</script>

<style scoped lang="scss"></style>
