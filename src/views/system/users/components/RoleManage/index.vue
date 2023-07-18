<!--
 * @Author: ZhouHao joehall@foxmail.com
 * @Date: 2023-07-13 10:09:08
 * @LastEditors: ZhouHao joehall@foxmail.com
 * @LastEditTime: 2023-07-18 10:36:18
 * @FilePath: \servious-illness-admin\src\views\system\users\components\RoleManage\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->

<template>
  <div class="role-manage">
    <div calss="role-config">
      <RoleConfig />
    </div>
    <div calss="work-stat">
     <WorkStat />
    </div>
    <div calss="feac-list">
      <FeactureList />
    </div>
    <div calss="feac-limit">
      <FeactureLimt />
    </div>
  </div>
</template>
  
<script setup lang='ts'>
import RoleConfig from './RoleConfig/index.vue'
import WorkStat from './WorkStat/index.vue'
import FeactureLimt from './FeactureLimt/index.vue'
import FeactureList from './FeactureList/index.vue'

</script>
  
<style scoped lang="scss">
.role-manage {
  display: flex;
  justify-content: space-between;
  height: 100%;
}
</style>