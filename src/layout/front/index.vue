<!--
 * @Author: QMZhao
 * @Description: 
 * @Date: 2022-08-17 17:29:53
 * @LastEditTime: 2023-02-18 22:42:48
 * @Reference: 
-->
<template>
	<div class="w-full h_100 page-container">
		<headerBar></headerBar>
		<el-container class="containerBox">
			<div class="app-sidebar h_100" v-show="leftBar.showSideBar">
				<SideBar>
					<leftContent></leftContent>
				</SideBar>
			</div>
			<el-container>
				<el-main>
				<!-- 	<myInfo></myInfo> -->
					<!-- <div class="mt10">
						<navList />
					</div> -->
					<div class="main-container w-full">
						<app-main />
					</div>
				</el-main>
			</el-container>
		</el-container>
	</div>
</template>

<script lang="ts" setup>
	import { headerBar, AppMain, SideBar,leftContent } from './components';
	import { useNavMenuList } from '/@/store/common/routerList';
	const { leftBar } = useNavMenuList();
	//import navList from '/@/components/navList/index.vue';
</script>
<style lang="scss" scoped>
	.containerBox {
		margin-top: 10px;
		height: calc(100% - 50px);
	}

	.page-container {
		min-width: 1280px;
		overflow-x: auto;
		background: #eee;
	}

	.main-container {
		//background: #fff;
		height:100%;
		//height: calc(100% - 128px);
		// background-color: $color-background;
	}
	.el-main{ padding-top:0; padding-bottom: 0;}
</style>