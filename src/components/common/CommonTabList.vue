<!--
 * @Author: ZhouHao joehall@foxmail.com
 * @Date: 2023-07-24 09:13:02
 * @LastEditors: ZhouHao joehall@foxmail.com
 * @LastEditTime: 2023-07-26 17:42:28
 * @FilePath: \servious-illness-admin\src\components\common\CommonTabs.vue
 * @Description: 
-->
<template>
  <div class="navBox">
    <el-scrollbar height="42px" :always="true">
      <el-button-group class="flex flex-nowrap">
        <el-button :type="data.current === index ? 'primary' : 'default'" v-for="(item, index) in data.navList"
          :key="index" @click="changeNav(index)">
          {{ item.label }}
        </el-button>
      </el-button-group>
    </el-scrollbar>
  </div>
</template>
<script setup lang="ts" name="CommonTabs">

const props = defineProps({
  navList: {
    type: Array,
    default: []
  }
})
const data = reactive({
  current: 0,
  navList: [] as any
})

const emit = defineEmits(['change']);

data.navList = props.navList;

const changeNav = (index: number) => {
  data.current = index;
  emit('change', index)
}
</script>
<style lang="scss" scoped>
.navBox {
  margin: 5px 0;
}
</style>
