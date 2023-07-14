<template>
  <div class="header-menu">
    <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
		background-color="none"
		:ellipsis="false"
		text-color="#fff"
		active-text-color="#00A0DF"
		router
        @select="handleSelect"
      >
        <el-menu-item index="/doctorNurse/berth/index">床位管理</el-menu-item>
		<el-menu-item index="/doctorNurse/care/index">诊疗护理</el-menu-item>
        <!-- <el-sub-menu index="2">
          <template #title>Workspace</template>
          <el-menu-item index="2-1">item one</el-menu-item>
        </el-sub-menu> -->
        
      </el-menu>
  </div>
</template>
<script lang="ts" setup>
const pagePath = useRouter().currentRoute.value.path;
const activeIndex = ref(pagePath)
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>
<style scoped lang="scss">

  .header-menu .el-menu{
	   height: 40px;
  }
  .header-menu .el-menu--horizontal>.el-menu-item,.header-menu .el-menu--horizontal{
	border:none;
	background: none;
  }
  .header-menu .el-menu--horizontal>.el-menu-item.is-active,.header-menu .el-menu--horizontal>.el-menu-item:hover{
	border:none;
	background: #fff;
	color: #00A0DF;
  }
</style>
