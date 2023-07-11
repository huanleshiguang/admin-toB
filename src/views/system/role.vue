<!--
 * @Autor: zhao
 * @Date: 2023-02-17 22:45:44
 * @LastEditors: QMZhao zhao971462054@163.com
 * @LastEditTime: 2023-07-11 15:17:23
 * @Description: 
 * @FilePath: /vite-element-plus-zhao-template/src/views/system/role.vue
-->
<script lang="ts" setup>
const name = ref('角色');

enum RoleAuthBtn {
  delete = 'sysRoleTableDelete',
  edit = 'sysRoleTableSearch'
}
</script>
<template>
  <div class="w_100 h_100 menu-container">这是一个{{ name }}测试页</div>
</template>

<style lang="scss" scoped>
.menu-container {
  background-color: $color-background;
}
</style>
