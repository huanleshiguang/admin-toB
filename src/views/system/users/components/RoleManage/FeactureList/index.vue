<!--
 * @Author: ZhouHao joehall@foxmail.com
 * @Date: 2023-07-14 14:45:11
 * @LastEditors: ZhouHao joehall@foxmail.com
 * @LastEditTime: 2023-07-21 09:47:13
 * @FilePath: \servious-illness-admin\src\views\system\users\components\RoleManage\RoleConfig\index.vue
 * @Description: 
-->
<template>
  <div class="feature-list-comp">
    <itemHeader>
      <template #header-left>
        <span>功能清单</span>
      </template>

      <template #header-right>

      </template>
    </itemHeader>
    <el-divider></el-divider>
    <itemContent >
      <template #default>
        <common-tree :data="reacFeactureList" :show-checkbox="true" :transmit-props="transmitProps">
        </common-tree>
      </template>
    </itemContent>
  </div>
</template>

<script setup lang='ts'>
import itemHeader from '../components/ItemHeader.vue';
import itemContent from '../components/ItemContent.vue';

const feactureList = <any>[]
const reacFeactureList = reactive(feactureList)
const transmitProps = {
  label: 'menuName',
  children: 'children'
}
onMounted(()=>{
  getFeatureList()
})
const getFeatureList = async ()=>{
  try {
    const result = await apiGetFeatureList();
    reacFeactureList.length= 0
    // apiData.data = result
    reacFeactureList.push(...result);
  } catch (error) {
    throw (error);
  }
}

</script>

<style lang="scss" scoped>
.feature-list-comp {
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>