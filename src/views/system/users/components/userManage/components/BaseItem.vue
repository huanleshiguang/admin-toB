<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <slot name="header-left" />
      </el-header>
      <el-main>
        <slot name="content" />
      </el-main>
    </el-container>
  </div>
</template>
  
<script setup lang='ts'>

const props = defineProps({
  // 完整的：没有分页的
  title: {
    type: String,
    default: ''
  },
})
onMounted(()=>{
  console.log(props);
  
})
</script>
  
<style></style>