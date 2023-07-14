<template>
	<div class="headBox flex flex-ac">
		<div class="authIco mr10"></div>
		<div class="ft18 cfff mr10">医护工作站</div>
		<div>
			<menuBar></menuBar>
		</div>
	</div>
</template>

<script setup>
	import {default as menuBar} from '/@/layout/front/components/menu/index.vue'
</script>

<style scoped>
	.headBox{
		width: 100%;
		height: 40px;
		background: #2C579B;
		padding: 0 12px;
	}
	
	.authIco{
		width: 18px;
		height: 18px;
		background: url(./images/yihuIco1.png) 0 0 no-repeat;
		background-size: contain;
	}
</style>