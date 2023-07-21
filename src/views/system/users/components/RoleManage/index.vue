<!--
 * @Author: ZhouHao joehall@foxmail.com
 * @Date: 2023-07-13 10:09:08
 * @LastEditors: ZhouHao joehall@foxmail.com
 * @LastEditTime: 2023-07-20 19:40:43
 * @FilePath: \servious-illness-admin\src\views\system\users\components\RoleManage\index.vue
 * @Description: 角色管理板块
-->

<template>
  <div class="role-manage">
    <div calss="role-config">
      <RoleConfig />
    </div>
    <!-- <div calss="work-stat">
     <WorkStat />
    </div> -->
    <div calss="feac-list">
      <FeactureList />
    </div>
    <!-- <div calss="feac-limit">
      <FeactureLimt />
    </div> -->
  </div>
</template>
  
<script setup lang='ts'>
import RoleConfig from './RoleConfig/index.vue'
// import FeactureLimt from './FeactureLimt/index.vue'
import FeactureList from './FeactureList/index.vue'

</script>
  
<style scoped lang="scss">
.role-manage {
  display: flex;
  justify-content: space-around;
  height: 100%;
  div {
    width: 500px;
    padding: 20px 100px 0 0;
  }
}
</style>