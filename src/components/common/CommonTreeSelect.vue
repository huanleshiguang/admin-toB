<!--
 * @Author: ZhouHao joehall@foxmail.com
 * @Date: 2023-07-18 09:32:45
 * @LastEditors: ZhouHao joehall@foxmail.com
 * @LastEditTime: 2023-07-29 15:03:55
 * @FilePath: \servious-illness-admin\src\components\common\CommonTree.vue
 * @Description: 公共tree-select组件
-->
<template>
  <div class="tree-wrapper">
    <el-tree-select ref="treeRef" v-model="tempData" :data="getTreeData" :placeholder="placeholder"
      :multiple="multiple" :props="defaultProps" check-strictly node-key="id" @node-click="handleNodeClick">
      <template v-if="!showCheckbox" v-slot="{ node, data }">
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
  
<script setup lang='ts'>
import { ElTree } from 'element-plus';
import 'element-plus/es/components/tree/style/css'

const props = defineProps({
  data: {
    type: Array,
    default: [],
    required: true
  },
  modelData:{},
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
  }
});
const tempData = ref()
defineExpose({
  tempData
})
watch(() => props.modelData, (newVal) => {
  tempData.value = newVal;
},{ immediate: true })
const defaultProps = {
  children: `${props.transmitProps.children}`,
  label: `${props.transmitProps.label}`
};
const treeRef = ref<InstanceType<typeof ElTree>>();

const getTreeData = computed(() => props.data);

const emits = defineEmits(['handleNodeClick', 'value']);
const handleNodeClick = () => {
  const id = treeRef.value?.getCurrentKey();
  emits('handleNodeClick', id);
}
</script>
  
<style scoped lang="scss"></style>