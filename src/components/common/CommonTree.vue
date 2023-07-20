<!--
 * @Author: ZhouHao joehall@foxmail.com
 * @Date: 2023-07-18 09:32:45
 * @LastEditors: ZhouHao joehall@foxmail.com
 * @LastEditTime: 2023-07-20 17:35:35
 * @FilePath: \servious-illness-admin\src\components\common\CommonTree.vue
 * @Description: 公共tree组件
-->
<template>
  <div class="tree-wrapper">
    <div v-if="showSearch">
      <el-input v-model="filterText" lazy placeholder="请输入科室名称搜索" size="default" />
    </div>
    <el-scrollbar>

      <el-tree ref="treeRef" :data="getTreeData" :props="defaultProps" :showCheckbox="showCheckbox"
        :filter-node-method="filterNode" @node-click="handleNodeClick()">
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
      </el-tree>
    </el-scrollbar>
  </div>
</template>
  
<script setup lang='ts'>
import { ElTree } from 'element-plus';
import 'element-plus/es/components/tree/style/css'

// interface ComponentPublicInstance {
//   $forceUpdate(): void
// }
const props = defineProps({
  data: {
    type: Array,
    default: [],
    required: true
  },
  showCheckbox: {
    type: Boolean,
    default: false
  },
  showSearch: {
    type: Boolean,
    default: false
  },
  transmitProps: {
    type: Object,
    required: true
  }
})
const defaultProps = {
  children: `${props.transmitProps.children}`,
  label: `${props.transmitProps.label}`,
};
const filterText = ref('');
const treeRef = ref<InstanceType<typeof ElTree>>();
const treeList = reactive(props.data)

const getTreeData = computed(() => props.data)

watch(filterText, (val) => {
  treeRef.value!.filter(val);
})
watch(treeList, () => {
  //  forceUpdate()
  // $forceUpdate()
})
const filterNode = (value: string, data: any) => {
  if (!value) return true;
  return data[props.transmitProps.label].includes(value);
}
const emits = defineEmits(['handleNodeClick']);
const handleNodeClick = () => {
  emits('handleNodeClick');
}

// setInterval(() => {
//   getTreeData.value = [{ "children": [], "id": "6f0d7d2d70a949bbb61d44b416c46d80", "parentId": "0", "deptCode": "10001", "deptName": "信息科", "isMainDept": true }]
// }, 5000)
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