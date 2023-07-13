<!--
 * @Author: ZhouHao joehall@foxmail.com
 * @Date: 2023-07-12 14:32:21
 * @LastEditors: ZhouHao joehall@foxmail.com
 * @LastEditTime: 2023-07-13 15:21:52
 * @FilePath: \servious-illness-admin\src\views\system\bunk\components\BunkManagement.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div class="bunk-manage">
      <vxe-table-layout ref="vxeTableLayout" class="h_100" border has-index :loader="initMethod"
        :row-config="{ isCurrent: true, isHover: true }" height="100%" :columns-list="columnsList"
        @current-change="currentChangeEvent">
        <template #operator-left>
          <span class="ml-3 text-gray-600 inline-flex items-center font-stl">所选院区：</span>
          <el-select v-model="value" class="w-50 m-2" placeholder="Pick a date" :suffix-icon="ArrowDown" />
          <span class="ml-3 text-gray-600 inline-flex items-center font-stl">所选科室：</span>
          <el-select v-model="value" class="w-50 m-2" placeholder="Pick a date" :suffix-icon="ArrowDown" />
          <span class="ml-3 text-gray-600 inline-flex items-center font-stl">类型</span>
          <el-select v-model="value" class="w-50 m-2" placeholder="Pick a date" :suffix-icon="ArrowDown" />
          <el-button type="primary" @click="handleSearch">搜索</el-button>
          <el-button @click="handleSearch">同步</el-button>
        </template>
      </vxe-table-layout>
    </div>
</template>
  
<script setup lang='ts'>
import VxeTableLayout from '/@/components/VxeTable/VxeTableLayout.vue';
import { VxeTableEvents } from 'vxe-table';
import { ArrowDown } from '@element-plus/icons-vue';
import { onMounted, ref } from 'vue';

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
      return { id: index, srial: 'adad', name: '张三', value: '1', desc: '12414' };
    })
  };
}
onMounted(() => {
  console.log(vxeTableLayout.value);
});
</script>

<style lang="scss" scoped>
.bunk-manage {
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
.font-stl {
  font-size: $font-size-14;
  font-weight: $font-weight-500;
}
</style>