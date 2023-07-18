<template>
	<div class="h_100">
		<myInfo></myInfo>
		<div class="mt10">
			<navList />
		</div>
		<div class="contentBox">
			<el-scrollbar>
				<div>
					这里是动态组件内容部分
				</div>
			</el-scrollbar>
		</div>
	</div>
</template>

<script setup lang="ts">
	import myInfo from './components/info/index.vue'
	import navList from '/@/components/navList/index.vue';
</script>

<style scoped>
	.contentBox{
		height: calc(100% - 128px);
		background: #fff;
	}
</style>