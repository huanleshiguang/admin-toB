<!--
 * @Author: ZhouHao joehall@foxmail.com
 * @Date: 2023-07-14 14:45:11
 * @LastEditors: ZhouHao joehall@foxmail.com
 * @LastEditTime: 2023-07-18 13:46:25
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
    <itemContent>
      <template #default>
        <CommonTree :data="apiData.data" :show-checkbox="true" />
      </template>
    </itemContent>
  </div>
</template>

<script setup lang='ts'>
import itemHeader from '../components/ItemHeader.vue';
import itemContent from '../components/ItemContent.vue';
import CommonTree from '/@/components/common/CommonTree.vue';
import { apiGetFeatureList } from '/@/api/system/user';
// interface Tree {
//   menuName: string
//   children?: Tree[]
// };
// const data: Tree[] = reactive({
//   data:[]
// });
const apiData = reactive({
  data:[]
});

onMounted(()=>{
  getFeatureList()
})
const getFeatureList = async ()=>{
  try {
    const result = await apiGetFeatureList();
    apiData.data = result
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