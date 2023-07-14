<script lang="ts" setup>

</script>

<template>
	<div :class="['h_100 flex flex-col sidebar-content']">
		<!-- 侧边栏 -->
		<div class="side-bar-list sidebar-header_expand">
			<el-scrollbar>
				<slot></slot>
			</el-scrollbar>
		</div>
	</div>
</template>

<style scoped lang="scss">
	.sidebar-content {
		box-sizing: border-box;

		.sidebar-header_expand {
			width: 326px;
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
			// border-radius: 4px;
		}

	}
</style>