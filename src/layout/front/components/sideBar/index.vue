<template>
	<div class="h_100 sidebar-content" :class="data.isshow ? '' : 'active'">
		<div class="toggleBtn" @click="toggle">
			<el-icon color="#fff">
				<DArrowLeft v-if="data.isshow" />
				<DArrowRight v-else />
			</el-icon>
		</div>
		<!-- 侧边栏 -->
		<div class="side-bar-list sidebar-header_expand">
			<el-scrollbar>
				<slot></slot>
			</el-scrollbar>
		</div>
	</div>
</template>
<script setup>
	import { DArrowLeft,DArrowRight } from "@element-plus/icons-vue";
	const data = reactive({
		isshow:true
	})
	
	const toggle = () => {
		data.isshow = !data.isshow;
	}
</script>
<style scoped lang="scss">
	.sidebar-content {
		box-sizing: border-box;
		position: relative;
		.sidebar-header_expand {
			
			// padding: 0 20px;
		}

		.sidebar-header_collapse {
			width: 65px;
		}


		.translate-hide {
			left: 0px;
			transform: translate(100%, -50%);
		}

		.translate-show {
			left: 70px;
			transform: translate(-10%, -50%);
		}

		.side-bar-list {
			flex: 1;
			height: 100%;
			overflow-y: auto;
			box-sizing: border-box;
			background-color: #00A0DF;
			width: 326px;
			transition: all .2s ease-in;
			// border-radius: 4px;
		}

	}
	
	.toggleBtn{
		width: 20px;
		height: 80px;
		position: absolute;
		right:-20px;
		top:50%;
		background: #00A0DF;
		border-radius: 0 6px 6px 0;
		z-index: 100000;
		text-align: center;
		line-height: 80px;
		font-size: 16px;
		cursor:pointer;
	}
	.sidebar-content.active .side-bar-list{
		width: 0;
	}
</style>