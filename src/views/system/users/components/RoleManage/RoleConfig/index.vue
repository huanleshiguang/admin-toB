<!--
 * @Author: ZhouHao joehall@foxmail.com
 * @Date: 2023-07-14 14:45:11
 * @LastEditors: ZhouHao joehall@foxmail.com
 * @LastEditTime: 2023-07-21 11:15:08
 * @FilePath: \servious-illness-admin\src\views\system\users\components\RoleManage\RoleConfig\index.vue
 * @Description: 
-->
<template>
  <div class="role-config-comp">
    <itemHeader>
      <template #header-left>
        <span>角色配置</span>
      </template>
      <template #header-right>
        <span class="text-gray-600 font-stl">选择院区：</span>
        <el-select v-model="hospAreaName" class="w-40" placeholder="请选择" :suffix-icon="ArrowDown">
          <el-option v-for="item in hospAreaList" :key="item.id" :label="item.hospAreaName" :value="item.hospAreaName"
            @click="selectedHospArea(item.id)" /></el-select>
      </template>
    </itemHeader>
    <el-divider></el-divider>
    <itemContent>
      <template #default>
        <common-tree :data="reactHospAreaDepList" :transmit-props="transmitProps"></common-tree>
      </template>
    </itemContent>
  </div>
</template>
  
<script setup lang='ts'>
import itemHeader from '../components/ItemHeader.vue'
import itemContent from '../components/ItemContent.vue'
import type { fetchHospAreaDepList } from '/@/api/system/types/user'
import { ArrowDown } from '@element-plus/icons-vue';

const hospAreaList = ref<any>([])
const reactHospAreaDepList = ref<fetchHospAreaDepList[]>([])
const hospAreaName = ref('')
onMounted(() => {
  // 初始获取院区信息
  fetchHosptAreaDepList()
})
const fetchHosptAreaDepList = async () => {
  try {
    const result: any = await apiFetchHosptAreaInfo()
    hospAreaList.length = 0
    hospAreaList.push(...result)
  } catch (error) {
    throw (error)
  }
}
const selectedHospArea = async (areaId: string) => {
  try {
    const result: fetchHospAreaDepList[] = await apiFetchHosptAreaDepList(areaId);
    reactHospAreaDepList.value.length = 0;
    reactHospAreaDepList.value.push(...result);
  } catch (error) {
    throw (error);
  }
};
const transmitProps = {
  label: 'deptName',
  deptCode: 'deptCode',
  isMainDept: 'isMainDept',
  children: 'children'
}
</script>
  
<style lang="scss" scoped>
.role-config-comp {
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>