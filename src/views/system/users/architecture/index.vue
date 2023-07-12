W
<!--
 * @Autor: QMZhao
 * @Date: 2023-07-12 09:58:50
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-07-12 17:53:52
 * @Description: 
 * @FilePath: \servious-illness-admin\src\views\system\users\architecture\index.vue
-->
<template>
  <div class="w_100 h_100 architecture-container">
    这是架构管理页面

    <div class="custom-table w_100">
      <el-button @click="onChangeVisiable">点击</el-button>
    </div>
    <el-drawer v-model="visiable" title="I'm outer Drawer" modal-class="custom-modal" size="50%">123</el-drawer>
  </div>
</template>

<script lang="ts" setup>
const visiable = ref(false);
function onChangeVisiable(): void {
  visiable.value = !visiable.value;
}
</script>
<style lang="scss" scoped>
.architecture-container {
  .custom-table {
    height: 500px;
    background-color: #0aa1ed;
    position: relative;
  }
  :deep(.custom-modal) {
    position: absolute;
  }
}
</style>
