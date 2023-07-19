<!--
 * @Author: ZhouHao joehall@foxmail.com
 * @Date: 2023-07-13 10:09:40
 * @LastEditors: ZhouHao joehall@foxmail.com
 * @LastEditTime: 2023-07-19 12:19:57
 * @FilePath: \servious-illness-admin\src\views\system\users\components\RoleManage\components\item-header.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="header-container">
    <div class="header-left mr_10"><slot name="header-left" /></div>
    <div class="header-right"><slot name="header-right" /></div>
  </div>
</template>
  
<script setup lang='ts'>
  
</script>
  
<style lang="scss" scoped>
  .header-container {
    display: flex;
    justify-content: space-between;
    height: 32px;
    // width: 300px;
  }
  .header-left  {
    height: 32px;
    line-height: 32px;
    font-size: $font-size-16;
    font-weight: $font-weight-500;
  }
</style>