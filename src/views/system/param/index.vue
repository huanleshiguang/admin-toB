<!--
 * @Autor: ZhouHao joehall@foxmail.com
 * @Date: 2023-02-17 22:45:44
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-08-08 16:10:17
 * @Description: 
 * @FilePath: /vue-vite-elementplus-zhao/src/views/system/menu.vue
-->
<template>
  <div class="three-container w-full h_100">
    <div ref="container" class="w-full h_100">
      <!-- <el-button type="primary" @click="testClick">test</el-button> -->
      <vxe-table-layout ref="vxeTableLayout" class="h_100" border has-index :loader="initMethod"
        :row-config="{ isCurrent: true, isHover: true }" height="100%" :columns-list="columnsList"
        @current-change="currentChangeEvent">
        <template #operator-left>
          <div>
            <el-input v-model="value" placeholder="请输入设置名称查询" size="default" :prefix-icon="Search" />
          </div>
          <el-button type="primary" class="ml_10" @click="handleSearch">搜索</el-button>
          <el-button @click="handleSearch">刷新</el-button>
        </template>
      </vxe-table-layout>
    </div>
  </div>
</template>
<script lang="ts" setup>
import VxeTableLayout from '/@/components/VxeTable/VxeTableLayout.vue';
import { VxeTableEvents } from 'vxe-table';
import { Search } from '@element-plus/icons-vue';

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
  // console.log(params, 'params');
  const { pageSize } = params;
  return {
    total: 100,
    records: [...new Array(pageSize)].map((_, index) => {
      return { id: index, srial: 'adad', name: '张三', value: '1', desc: '12414' };
    })
  };
}


onMounted(() => {
  // console.log(vxeTableLayout.value);
});
</script>
<style scoped lang="scss">
.three-container {
  position: relative;
  background-color: #bfe3dd;
}
</style>
