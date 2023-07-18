<!--
 * @Author: ZhouHao joehall@foxmail.com
 * @Date: 2023-07-14 14:45:11
 * @LastEditors: ZhouHao joehall@foxmail.com
 * @LastEditTime: 2023-07-18 14:01:34
 * @FilePath: \servious-illness-admin\src\views\system\users\components\RoleManage\RoleConfig\index.vue
 * @Description: 
-->
<template>
  <div>
    <itemHeader>
      <template #header-left>
        <span>功能权限</span>
      </template>
      <template #header-right>
       <!-- <el-button>123</el-button> -->
      </template>
    </itemHeader> 
    <el-divider></el-divider>
    <itemContent>
      <template #default>
        <CommonTree :data="data" :show-checkbox="true" />
      </template>
    </itemContent>
  </div>
</template>

<script setup lang='ts'>
import itemHeader from '../components/ItemHeader.vue'
import itemContent from '../components/ItemContent.vue'
import CommonTree from '/@/components/common/CommonTree.vue'

interface Tree {
  menuName: string
  children?: Tree[]
};
const data: Tree[] = [
  {
    menuName: '入科',
  },
  {
    menuName: '出科',
  },
  {
    menuName: '换床',
  },
  {
    menuName: '撤销',
  },
  {
    menuName: '查看',
  },
  {
    menuName: 'Level one 2',
  },
  {
    menuName: 'Level one 2',
  },
  {
    menuName: 'Level one 2',
  },
  {
    menuName: 'Level one 2',
  },
  {
    menuName: 'Level one 2',
  },
  {
    menuName: 'Level one 2',
  },
  {
    menuName: 'Level one 2',
  },
  {
    menuName: 'Level one 2',
  },
  {
    menuName: 'Level one 2',
  },
  {
    menuName: 'Level one 2',
  },
  {
    menuName: 'Level one 2',
  },
  {
    menuName: 'Level one 2',
  },
  {
    menuName: 'Level one 2',
  },
  {
    menuName: 'Level one 2',
  },
  {
    menuName: 'Level one 2',
  },
  {
    menuName: 'Level one 2',
  },
  {
    menuName: 'Level one 2',
  },
  {
    menuName: 'Level one 2',
  },
  {
    menuName: 'Level one 2',
  },
  {
    menuName: 'Level one 2',
  },
  {
    menuName: 'Level one 2',
  },
  {
    menuName: 'Level one 2',
  },
  {
    menuName: 'Level one 2',
  }
];
</script>

<style lang="scss" scoped>

</style>