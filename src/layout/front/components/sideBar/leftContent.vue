<template>
	<div>
		<div class="leftBox1">
			<div class="title flex flex-ac">
				<div class="it1 ft16 cfff">患者列表</div>
				<div class="point">
					<el-icon color="#fff" size="20px"><Expand /></el-icon>
				</div>
			</div>
			<div class="leftCon1">
				<div class="bgfff leftpd1">
					<el-form :inline="true" label-width="54px" size="default">
						<el-form-item label-width="0">
							<el-radio-group>
								<el-radio label="我的患者" />
								<el-radio label="其他患者" />
							</el-radio-group>
						</el-form-item>
						<el-form-item label="床位" style="width: 154px; overflow: hidden; margin-right: 0px; margin-left: 0;">
							<el-select placeholder="选择床位" style="width: 100px;">
							    <el-option label="床位1" value="1" />
							    <el-option label="床位2" value="2" />
							</el-select>
						</el-form-item>
						<el-form-item label="状态" style="width: 154px; overflow: hidden; margin-right: 0;">
							<el-select placeholder="选择状态" style="width: 100px;">
							    <el-option label="床位1" value="1" />
							    <el-option label="床位2" value="2" />
							</el-select>
						</el-form-item>
						<el-form-item label="病案号" style="width: 208px; overflow: hidden;">
							<el-input placeholder="请输入病案号" />
						</el-form-item>
						<el-form-item style="margin-right: 0;">
						      <el-button :icon="Search" type="primary" @click="onSubmit">查询</el-button>
						</el-form-item>
					</el-form>
					
					<div class="leftCon2">
						<div class="flex flex-ac">
							<div class="it1 ft14 cblue bold">ICU-011</div>
							<div class="ft12 c999">入科 2022-10-22</div>
						</div>
						<div class="pt5 flex flex-ac">
							<div class="it1">
								<span class="ft16 mr10">张无忌</span>
								<span class="ft14 mr10 c999">男</span>
								<span class="ft14 mr10 c999">24</span>
							</div>
							<div class="ft14 bold pt5">
								P018313
							</div>
						</div>
						<div class="flex flex-ac pt5">
							<el-icon size="16px"><IceCreamSquare /></el-icon>
							<div class="ft14 ml5">脾破裂肝多发脑损伤</div>
						</div>
					</div>
					
					<div class="leftCon2">
						<div class="flex flex-ac">
							<div class="it1 ft14 cblue bold">ICU-011</div>
							<div class="ft12 c999">入科 2022-10-22</div>
						</div>
						<div class="pt5 flex flex-ac">
							<div class="it1">
								<span class="ft16 mr10">张无忌</span>
								<span class="ft14 mr10 c999">男</span>
								<span class="ft14 mr10 c999">24</span>
							</div>
							<div class="ft14 bold pt5">
								P018313
							</div>
						</div>
						<div class="flex flex-ac pt5">
							<el-icon size="16px"><IceCreamSquare /></el-icon>
							<div class="ft14 ml5">脾破裂肝多发脑损伤</div>
						</div>
					</div>
					
				</div>
			</div>
		</div>
		
		
		<div class="leftBox1">
			<div class="title flex flex-ac">
				<div class="it1 ft16 cfff">提醒事项</div>
				<div class="point">
					<el-icon color="#fff" size="20px"><Expand /></el-icon>
				</div>
			</div>
			<div class="leftCon1">
				<div class="bgfff leftpd1">
					<el-table :data="data.tableData" :show-header="false" border style="width: 100%">
					    <el-table-column prop="title" label="" />
					    <el-table-column prop="statedes" label="" />
					    <el-table-column prop="num" label="" />
					</el-table>
				</div>
			</div>		
		</div>
		
		<div class="leftBox1">
			<div class="title flex flex-ac">
				<div class="it1 ft16 cfff">交班事项</div>
				<div class="point">
					<el-icon color="#fff" size="20px"><Expand /></el-icon>
				</div>
			</div>
			<div class="leftCon1">
				<div class="bgfff leftpd1">
					<el-table :data="data.tableData" :show-header="false" border style="width: 100%">
					    <el-table-column prop="title" label="" />
					    <el-table-column prop="statedes" label="" />
					    <el-table-column prop="num" label="" />
					</el-table>
				</div>
			</div>		
		</div>
		
	</div>
</template>

<script setup>
	import { Search,IceCreamSquare,Expand } from '@element-plus/icons-vue'
	const data = reactive({
		tableData:[
			{
				title:'医嘱',
				statedes:'新开',
				num:'1条'
			},
			{
				title:'医嘱',
				statedes:'未执行',
				num:'1条'
			},
			{
				title:'',
				statedes:'胃管',
				num:'1条'
			}
		]
	})
</script>

<style scoped>
	.leftBox1 {
		width: 326px;
	}

	.leftBox1 .title {
		height: 36px;
		background: #2C579B;
		padding: 0 8px;
	}

	.leftCon1 {
		padding: 0 2px;
	}
	
	.leftpd1{ padding: 5px;}
	:deep(.el-form-item){
		margin-bottom: 10px;
		margin-right: 20px;
	}
	:deep(.el-form--inline .el-input){
		width: auto;
	}
	
	.leftCon2{
		border-bottom: #eee solid 1px;
		padding: 10px 0;
	}
	.leftCon2:last-child{
		border: none;
	}
</style>