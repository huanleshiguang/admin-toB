<template>
	<div class="navBox">
		<el-scrollbar height="42px" :always="true">
			<el-button-group class="flex flex-ac flex-nowrap">
				<el-button :type="data.current === index ? 'primary' : 'default'" v-for="(item,index) in data.navList"
					:key="index" @click="changeNav(index)">{{item.name}}</el-button>
			</el-button-group>
		</el-scrollbar>
	</div>
</template>

<script setup lang="ts">
	const props = defineProps({
		navList: {
			type: Array,
			default: [{
				name: '整体护理'
			}, {
				name: '医嘱执行'
			}, {
				name: '护理执行'
			}, {
				name: '护理记录'
			}, {
				name: '管路护理'
			}, {
				name: '皮肤护理'
			}, {
				name: '护理评估'
			}, {
				name: '抢救记录'
			}, {
				name: '液体平衡'
			}, {
				name: '交接班'
			}, {
				name: '生命体征'
			}, {
				name: '呼吸机'
			}, {
				name: 'CRRT'
			}]
		}
	})

	const data = reactive({
		current: 0,
		navList:[] as any
	})
	
	data.navList = props.navList;

	const changeNav = (index:number) => {
		data.current = index
	}
</script>

<style scoped>
	.navBox .el-button {
		width: 140px;
	}
</style>