<template>
	<div class="myInfoBox flex flex-ac">
		<div>
			<div class="flex headBox">
				<img src="/images/head.png">
				<div class="ml5 pt5">
					<div class="flex">
						<div class="ft14 bold it1">ICU-011</div>
						<el-icon color="#D80000" size="16">
							<Star />
						</el-icon>
					</div>
					<div><span class="ft20 bold mr10">李双燕</span><span class="mr10">女</span><span>24岁</span></div>
				</div>
			</div>
		</div>
		<div class="line ml10"></div>
		
		<div class="myInfoBox2 ft14">
			<div>病案号：5120132</div>
			<div>诊断：脾破裂肝多发脑损伤</div>
		</div>
		<div class="myInfoBox2 ft14">
			<div>ID：M02356789</div>
			<div>病人费别：自费</div>
		</div>
		<div class="myInfoBox2 ft14">
			<div>入院日期：2018-9-18 12:00</div>
			<div>时间：1天</div>
		</div>
		<div class="myInfoBox2 ft14">
			<div>入科日期：2018-9-19 13:00</div>
			<div>过敏史：异类胺</div>
		</div>
		<div class="myInfoBox2 ft14">
			<div>主治医生：张三</div>
			<div>护士责任：李珊珊</div>
		</div>
		<div class="myInfoBox2 ft14">
			<div>危急值：<span class="cred">K：5 Na:19 Cl-:</span></div>
			
		</div>
	</div>
</template>

<script setup>
	import {
		Star
	} from "@element-plus/icons-vue";
</script>

<style scoped>
	.myInfoBox {
		height: 76px;
		background: #fff;
		padding: 0 30px;
		border: #D9D9D9 solid 1px;
	}

	.headBox img {
		height: 58px;
	}

	.line {
		height: 76px;
		border-left: #D9D9D9 solid 1px;
	}
	.myInfoBox2{
		padding: 6px 10px 0;
		height: 60px;
		background: #F6F9FB;
		line-height: 24px;
		margin-left: 10px;
	}
</style>