<!--
 * @Autor: ZhouHao joehall@foxmail.com
 * @Date: 2023-02-17 22:45:44
 * @LastEditors: ZhouHao joehall@foxmail.com
 * @LastEditTime: 2023-07-11 16:58:43
 * @Description: 
 * @FilePath: /vue-vite-elementplus-zhao/src/views/system/menu.vue
-->
<template>
  <div class="three-container w_100 h_100">
    <div ref="container" class="w_100 h_100">
      <vxe-table-layout ref="vxeTableLayout" class="h_100" border has-index :loader="initMethod"
        :row-config="{ isCurrent: true, isHover: true }" height="100%" :columns-list="columnsList"
        @current-change="currentChangeEvent">
        <template #operator-left>
          <span class="ml-3 w-20 text-gray-600 inline-flex items-center">所选院区：</span>
          <el-select v-model="value" class="w-50 m-2" placeholder="Pick a date" :suffix-icon="ArrowDown" />
          <span class="ml-3 w-20 text-gray-600 inline-flex items-center">所选科室：</span>
          <el-select v-model="value" class="w-50 m-2" placeholder="Pick a date" :suffix-icon="ArrowDown" />
          <span class="ml-3 w-10 text-gray-600 inline-flex items-center">类型</span>
          <el-select v-model="value" class="w-50 m-2" placeholder="Pick a date" :suffix-icon="ArrowDown" />
          <el-button type="primary" @click="handleSearch">搜索</el-button>
          <el-button @click="handleSearch">同步</el-button>
        </template>
      </vxe-table-layout>
    </div>
  </div>
</template>
<script lang="ts" setup>
import VxeTableLayout from '/@/components/VxeTable/index.vue';
import { VxeTableEvents } from 'vxe-table';
import { ArrowDown } from '@element-plus/icons-vue';

const value = ref('');
const columnsList = [
  {
    title: '设置项名称',
    field: 'name',
  },
  {
    title: '配置值',
    field: 'value',
    width: '40%'
  },
  {
    title: '描述',
    field: 'desc',
    width: '40%'
  }
];
const vxeTableLayout = ref();
const handleSearch = () => {
  vxeTableLayout.value.refresh(true);
};
const currentChangeEvent: VxeTableEvents.CurrentChange = (row) => {
  console.log(`行选中事件`, row);
};
async function initMethod(params: any) {
  console.log(params, 'params');
  const { pageSize } = params;
  return {
    total: 100,
    records: [...new Array(pageSize)].map((_, index) => {
      // console.log(index);
      return { id: index, srial: 'adad', name: '张三', value: '1', desc: '12414' };
    })
  };
}
onMounted(() => {
  console.log(vxeTableLayout.value);
});
</script>
<style scoped lang="scss">
.three-container {
  position: relative;
  background-color: #bfe3dd;
}
</style>
