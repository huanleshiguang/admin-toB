<template>
	<div class="h_100">
		<myInfo></myInfo>
		<div class="mt10">
			<navList @change="change"/>
		</div>
		<div class="contentBox">
			<el-scrollbar>
				<div>
					<keep-alive>
						<component :is="data.componentName"></component>
					</keep-alive>
				</div>
			</el-scrollbar>
		</div>
	</div>
</template>

<script setup lang="ts">
	import myInfo from './components/info/index.vue'
	import navList from '/@/components/navList/index.vue';
	import {care_0,care_1} from './components/index';
	const careComponents = {care_0,care_1};
	const data = reactive({
		componentName:careComponents['care_0']
	})
	const change = (index:number) => {
		data.componentName = careComponents['care_' + index];
	}
</script>

<style scoped>
	.contentBox{
		height: calc(100% - 128px);
		background: #fff;
	}
</style>