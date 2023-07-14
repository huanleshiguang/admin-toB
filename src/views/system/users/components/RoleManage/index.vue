
<template>
  <div class="role-manage">
    <div calss="role-config">
      <RoleConfig />
    </div>
    <div calss="work-stat">
     <WorkStat />
    </div>
    <div calss="feac-list">
      <FeactureLimt />
    </div>
    <div calss="feac-limit">
      <FeactureList />
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
  // align-items: center;
  div {
    height: inherit
  }
}
</style>