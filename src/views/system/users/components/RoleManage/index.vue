<!--
 * @Autor: QMZhao
 * @Date: 2023-07-21 10:00:30
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-07-22 18:15:43
 * @Description: 
 * @FilePath: \servious-illness-admin\src\views\system\users\components\RoleManage\index.vue
-->
<template>
  <div class="role-manage">
    <div v-for="item in systemRoles" :key="item.label">
      {{ item.label }}
    </div>
  </div>
</template>

<script setup lang="ts">
import RoleConfig from './RoleConfig/index.vue';
// import FeactureLimt from './FeactureLimt/index.vue'
import FeactureList from './FeactureList/index.vue';
const systemRoles = ref<ICUCommon.TabsComponens[]>([
  {
    label: "角色配置",
    component: RoleConfig
  },
  {
    label: "配置",
    component: FeactureList
  },
  {
    label: "色配置",
    component: RoleConfig
  },
])
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
