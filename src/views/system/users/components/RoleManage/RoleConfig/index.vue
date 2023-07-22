<!--
 * @Author: ZhouHao joehall@foxmail.com
 * @Date: 2023-07-14 14:45:11
 * @LastEditors: ZhouHao joehall@foxmail.com
 * @LastEditTime: 2023-07-21 18:06:32
 * @FilePath: \servious-illness-admin\src\views\system\users\components\RoleManage\RoleConfig\index.vue
 * @Description: 角色管理 -> 角色配置组件
-->
<template>
  <div class="role-config-comp">
    <itemHeader>
      <template #header-left>
        <span>角色配置</span>
      </template>
      <template #header-right>
        <span class="ft16 text-gray-600 font-stl">选择院区：</span>
        <el-select v-model="hospAreaName" class="w-40" placeholder="请选择" :suffix-icon="ArrowDown">
          <el-option v-for="item in hospAreaList" :key="item.id" :label="item.hospAreaName" :value="item.hospAreaName"
            @click="selectedHospArea(item.id)" /></el-select>
      </template>
    </itemHeader>
    <el-divider></el-divider>
    <itemContent>
      <template #default>
        <common-tree :data="reactHospAreaDepList" :transmit-props="transmitProps" />
        <el-tree :data="reactHospAreaDepList" show-checkbox node-key="id" default-expand-all :expand-on-click-node="false">
          <template #default="{ node, data }">
            <span class="custom-tree-node">
              <span>{{ node.label }}</span>
              <span>
                <a @click="append(data)"> 添加 </a>
                <a style="margin-left: 8px" @click="remove(node, data)"> 删除 </a>
              </span>
            </span>
          </template>
        </el-tree>
      </template>
    </itemContent>
  </div>
</template>
  
<script setup lang='ts'>
import itemHeader from '../components/ItemHeader.vue';
import itemContent from '../components/ItemContent.vue';
import type { fetchHospAreaDepList } from '/@/api/system/types/user';
import { ArrowDown } from '@element-plus/icons-vue';

const hospAreaList = ref<any>([]);
const reactHospAreaDepList = ref<fetchHospAreaDepList[]>([]);
const hospAreaName = ref('');
const transmitProps = {
  label: 'deptName',
  deptCode: 'deptCode',
  isMainDept: 'isMainDept',
  children: 'children'
};
onMounted(() => {
  // 初始获取院区信息
  getHosptAreaDepList();
})
const getHosptAreaDepList = async () => {
  try {
    const result: any = await fetchHosptAreaInfo();
    hospAreaList.length = 0;
    hospAreaList.push(...result);
  } catch (error) {
    throw (error);
  }
};
const selectedHospArea = async (areaId: string) => {
  try {
    const result: fetchHospAreaDepList[] = await fetchHosptAreaDepList(areaId);
    reactHospAreaDepList.value = result;
  } catch (error) {
    throw (error);
  }
};

const remove = (node: Node, data: fetchHospAreaDepList) => {
  const parent = node.parent;
  const children: fetchHospAreaDepList[] = parent.data.children || parent.data;
  const index = children.findIndex((d) => d.id === data.id);
  children.splice(index, 1);
  reactHospAreaDepList.value = [...reactHospAreaDepList.value];
};
</script>
  
<style lang="scss" scoped>
.role-config-comp {
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>