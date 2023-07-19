<!--
 * @Author: ZhouHao joehall@foxmail.com
 * @Date: 2023-07-12 14:32:21
 * @LastEditors: ZhouHao joehall@foxmail.com
 * @LastEditTime: 2023-07-19 09:46:29
 * @FilePath: \servious-illness-admin\src\views\system\bunk\components\BunkManagement.vue
 * @Description: 院区管理
-->
<template>
  <div class="bunk-manage">
    <vxe-table-layout ref="vxeTableLayout" class="h_100" border has-index :loader="initMethod"
      :row-config="{ isCurrent: true, isHover: true }" height="100%" :columns-list="columnsList"
      @current-change="currentChangeEvent">
      <template #operator-left>
        <span class="ml-3 text-gray-600 inline-flex items-center font-stl">所选院区：</span>
        <el-select v-model="value" class="w-50 m-2" placeholder="请选择院区" :suffix-icon="ArrowDown">
          <el-option v-for="item in reactiveHospAreaList" :key="item.id" :label="item.hospAreaName" :value="item.hospAreaName" />
        </el-select>
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
import { apiGetHosptAreaInfo } from '/@/api/system/user';
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
const hospAreaList: any = []
const reactiveHospAreaList = reactive(hospAreaList)
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
  // console.log(vxeTableLayout.value);
  getHospAreaList()
});
const getHospAreaList = async () => {
  try {
    const result = await apiGetHosptAreaInfo()
    reactiveHospAreaList.length = 0;
    reactiveHospAreaList.push(...result)
  } catch (error) {
    throw (error)
  }
}
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