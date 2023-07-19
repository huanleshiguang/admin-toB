<template>
  <div class="tree-wrapper">
    <div v-if="showSearch">
      <el-input v-model="filterText" placeholder="请输入科室名称搜索" size="default" :suffix-icon="Search" />
    </div>
    <el-scrollbar>
      <el-tree ref="treeRef" :data="data" :props="defaultProps" :showCheckbox="showCheckbox" :filter-node-method="filterNode" @node-click="handleNodeClick()">
        <template v-if="!showCheckbox" v-slot="{ node, data }">
          <el-icon v-if="data.children && node.expanded">
            <!-- 有子节点并且已展开 -->
            <slot name="icon-haschild&expanded" />
          </el-icon>
          <el-icon v-if="data.children && !node.expanded">
            <!-- 有子节点并且未展开 -->
            <slot name="icon-haschild&unexpanded" />
          </el-icon>
          <el-icon v-if="!data?.children">
            <!-- 无子节点 -->
            <slot name="icon-nohaschild" />
          </el-icon>
          <span style="margin-left: 10px">{{ node.label }}</span>
        </template>
      </el-tree>
    </el-scrollbar>
  </div>
</template>
  
<script setup lang='ts'>
import { Search } from '@element-plus/icons-vue';
import { ElTree } from 'element-plus'; 
import 'element-plus/es/components/tree/style/css'

defineProps({
  data: {
    type: Array,
    default: [],
    required: true
  },
  showCheckbox: {
    type: Boolean,
    default: false
  },
  showSearch:{
    type: Boolean,
    default: false
  }
})
const defaultProps = {
  children: 'children',
  label: 'menuName',
};
const filterText = ref('')
const treeRef = ref<InstanceType<typeof ElTree>>()

watch(filterText, (val) => {
  console.log(treeRef,'treeRef.value!');
  treeRef.value!.filter(val);
})
const filterNode = (value: string, data: any) => {
  if (!value) return true
  return data.menuName.includes(value)
}
const emits = defineEmits(['handleNodeClick'])
const handleNodeClick = () => {
  emits('handleNodeClick');
}
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