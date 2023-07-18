<template>
  <div class="tree-wrapper">
    <el-scrollbar>
      <el-tree :data="props.data" :props="defaultProps" showCheckbox @node-click="handleNodeClick()">
        <template v-if="!showCheckbox" v-slot="{ node, data }">
          <el-icon v-if="data.children">
            <Folder />
          </el-icon>
          <el-icon v-else>
            <Document />
          </el-icon>
          <span style="margin-left: 10px">{{ node.label }}</span>
        </template>
      </el-tree>
    </el-scrollbar>
  </div>
</template>
  
<script setup lang='ts'>
import { Document, Folder } from '@element-plus/icons-vue';
const props = defineProps({
  data: {
    type: Array,
    default: [],
    required: true
  },
  showCheckbox: {
    type: Boolean,
    default: false
  }
})
const defaultProps = {
  children: 'children',
  label: 'menuName',
};
const emits = defineEmits(['handleNodeClick'])
const handleNodeClick = () => {
  emits('handleNodeClick');
}
defineExpose({
  handleNodeClick
})
</script>
  
<style scoped lang="scss">
.tree-wrapper {
  flex-grow: 1;
  overflow: hidden;
  .el-scrollbar__wrap {
    // 隐藏横向滚动条
    overflow-x: hidden;
  }
}
</style>