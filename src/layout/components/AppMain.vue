<!--
 * @Author: QMZhao
 * @Date: 2020-12-12 14:16:47
 * @LastEditTime: 2023-07-12 19:43:52
 * @Description: 
 * @FilePath: \servious-illness-admin\src\layout\components\AppMain.vue
-->
<template>
  <section class="app-main">
    <router-view v-slot="{ Component }">
      <transition name="fade-transform" mode="out-in">
        <component :is="Component" :key="key" />
      </transition>
    </router-view>
  </section>
</template>

<script lang="ts" setup>
const privateRoute = useRoute();
const key = computed(() => privateRoute.path);
</script>

<style lang="scss" scoped>
.app-main {
  /* 60= navbar  60  */
  min-height: calc(100% - 100px);
  height: 100%;
  width: 100%;
  position: relative;
  overflow: hidden;
}

.fade-transform-leave-active,
.fade-transform-enter-active {
  transition: all 0.3s;
}

.fade-transform-enter {
  opacity: 0;
  transform: translateX(-30px);
}

.fade-transform-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
