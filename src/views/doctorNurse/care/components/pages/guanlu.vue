<template>
	<div class="pad10">
		<div class="flex">
			<div class="leftBox mr10" style="height: 500px; background: #eee;">

			</div>
			<div class="it1">
				<div class="flex">
					<div class="it1"></div>
					<div>
						<el-button size="small">查看历史</el-button>
					</div>
				</div>

				<div class="pt10">
					<el-table :data="tableData" style="width: 100%" border size="small">
						<el-table-column prop="date" label="标题" align="center" />
						<el-table-column prop="name" label="部位" align="center" />
						<el-table-column prop="address" label="型号" align="center" />
						<el-table-column prop="address" label="深度" align="center" />
						<el-table-column prop="address" label="刻度" align="center" />
						<el-table-column prop="address" label="有效期" align="center" />
						<el-table-column prop="address" label="置管时间" align="center" />
					</el-table>

				</div>
				<div class="guanluBox1 mt10">
					<swiper :space-between="0" slidesPerView="auto" @swiper="onSwiper" @slideChange="onSlideChange"
						class="guanluSwiper">
						<swiper-slide>
							<div>
								<div class="ftc">
									<div class="guanluBtn1">插管</div>
								</div>
								<div class="guanluLine">
									<div class="guanluPoint"></div>
								</div>
								<div class="guanluTimeBox">
									<div>2022-11-09</div>
									<div>00:00:00</div>
								</div>
							</div>
						</swiper-slide>
						<swiper-slide>
							<div>
								<div class="ftc">
									<div class="guanluBtn1">护理</div>
								</div>
								<div class="guanluLine">
									<div class="guanluPoint"></div>
								</div>
								<div class="guanluTimeBox">
									<div>2022-11-09</div>
									<div>00:00:00</div>
								</div>
							</div>
						</swiper-slide>
						<swiper-slide>
							<div>
								<div class="ftc">
									<div class="guanluBtn1">引流</div>
								</div>
								<div class="guanluLine">
									<div class="guanluPoint"></div>
								</div>
								<div class="guanluTimeBox">
									<div>2022-11-09</div>
									<div>00:00:00</div>
								</div>
							</div>
						</swiper-slide>
						<swiper-slide>
							<div>
								<div class="ftc">
									<div class="guanluBtn1">封管</div>
								</div>
								<div class="guanluLine">
									<div class="guanluPoint"></div>
								</div>
								<div class="guanluTimeBox">
									<div>2022-11-09</div>
									<div>00:00:00</div>
								</div>
							</div>
						</swiper-slide>
						<swiper-slide>
							<div>
								<div class="ftc">
									<div class="guanluBtn1">冲管</div>
								</div>
								<div class="guanluLine">
									<div class="guanluPoint"></div>
								</div>
								<div class="guanluTimeBox">
									<div>2022-11-09</div>
									<div>00:00:00</div>
								</div>
							</div>
						</swiper-slide>
						<swiper-slide>
							<div>
								<div class="ftc">
									<div class="guanluBtn1">封管</div>
								</div>
								<div class="guanluLine">
									<div class="guanluPoint"></div>
								</div>
								<div class="guanluTimeBox">
									<div>2022-11-09</div>
									<div>00:00:00</div>
								</div>
							</div>
						</swiper-slide>
					</swiper>
				</div>

				<div class="flex pt10">
					<div class="guanluBox2 mr10">
						<div class="guanluBtn2 active">插管</div>
						<div class="guanluBtn2">护理</div>
						<div class="guanluBtn2">冲管</div>
						<div class="guanluBtn2">封管</div>
						<div class="guanluBtn2">重置</div>
						<div class="guanluBtn2">引流</div>
						<div class="guanluBtn2">感染</div>
						<div class="guanluBtn2">拔管</div>
					</div>
					<div class="it1 mr10">
						<el-form label-width="100px" label-position="left" size="small" class="guanluBox3">
							<el-form-item label="管路名称">

							</el-form-item>
							<el-form-item label="部位">

							</el-form-item>
							<el-form-item label="位置">

							</el-form-item>
							<el-form-item label="置管深度">
								<div>1CM</div>
							</el-form-item>
							<el-form-item label="外露刻度">

							</el-form-item>
							<el-form-item label="科室内/外入">

							</el-form-item>
							<el-form-item label="置管时间">

							</el-form-item>
						</el-form>
					</div>
					<div class="it1">
						<el-form label-position="left" size="small">
							<el-form-item label="">
								<el-checkbox-group v-model="data.recode">
								    <el-checkbox label="输出护理记录" />
								</el-checkbox-group>
							</el-form-item>
							<el-form-item>
								<el-input
								    
								    :rows="4"
								    type="textarea"
								    placeholder="请输入"
								  />
							</el-form-item>
							<el-form-item>
							    <div class="it1">
									<div class="flex w_100">
										<div class="it1"></div>
										<el-button type="primary" size="default">保存</el-button>
									</div>
								</div>
							</el-form-item>
						</el-form>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script lang="ts">
	export default {
		name: 'care_4',
	}
</script>
<script setup lang="ts">
	import { Swiper, SwiperSlide } from 'swiper/vue';
	import 'swiper/css'
	const onSwiper = (swiper) => {
		console.log(swiper);
	};
	const onSlideChange = () => {
		console.log('slide change');
	};
	
	const data = reactive({
		recode:[]
	})
	
	
</script>

<style scoped>
	.leftBox {
		width: 500px;
	}

	.guanluBox1 {
		border: #D9D9D9 dashed 1px;
		padding: 20px;
		user-select: none;
	}

	.guanluBtn1 {
		height: 26px;
		line-height: 26px;
		border-radius: 13px;
		background: #ED6D00;
		padding: 0 12px;
		display: inline-block;
		color: #fff;
	}

	.guanluLine {
		position: relative;
		width: 100%;
		height: 1px;
		margin: 16px 0;
	}

	.guanluLine::after,
	.guanluLine::before {
		width: 50%;
		content: '';
		display: block;
		height: 0;
		border-top: #ED6D00 solid 1px;
		position: absolute;
		top: 0;
	}

	.guanluLine::after {
		left: 0
	}

	.guanluLine::before {
		right: 0;
	}

	.guanluPoint {
		width: 12px;
		height: 12px;
		border-radius: 100%;
		border: 1px solid #ED6D00;
		position: absolute;
		left: 50%;
		top: 50%;
		margin-top: -6px;
		margin-left: -6px;
		background: #fff;
		z-index: 10;
	}

	.guanluTimeBox {
		width: 120px;
		height: 54px;
		background: #F6F9FB;
		border-radius: 5px;
		line-height: 20px;
		font-size: 14px;
		text-align: center;
		padding-top: 6px;
		margin: auto;
		color: #666;
	}

	.guanluSwiper .swiper-slide {
		width: 130px;
	}

	.guanluSwiper .swiper-slide:first-child .guanluLine::after {
		display: none;
	}

	.guanluSwiper .swiper-slide:last-child .guanluLine::before {
		display: none;
	}

	.guanluBox2 {
		width: 76px;
	}

	.guanluBtn2 {
		width: 76px;
		height: 30px;
		line-height: 30px;
		border-radius: 4px;
		background: #E6EBF0;
		cursor: pointer;
		margin: 0 0 2px;
		color: #333;
		font-size: 12px;
		text-align: center;
	}

	.guanluBtn2.active,
	.guanluBtn2:hover {
		background: #2C579B;
		color: #fff;
	}

	.guanluBox3 {
		border: #D9D9D9 solid 1px;
	}

	.guanluBox3 .el-form-item {
		border-bottom: #D9D9D9 solid 1px;
		margin: 0;
	}

	.guanluBox3 :deep(.el-form-item__label) {
		background: #F6F9FB !important;
		height: 36px;
		line-height: 36px;
		border-right: #D9D9D9 solid 1px;
		padding: 0 0 0 8px;
		margin-right: 8px;
	}
</style>