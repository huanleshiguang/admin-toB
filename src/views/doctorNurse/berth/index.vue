<template>
	<div class="h_100">
		<div class="bgfff berthBox1 flex flex-ac">
			<div class="it1 berthItem1">
				<div class="h_100 flex flex-ac">
					<div class="it1">
						<div>
							<img src="/images/Frame.png" class="berthImg1">
						</div>
						<div class="ft24 bold cf60">
							重症监护室
						</div>
					</div>
				</div>
			</div>
			<div class="it1 berthItem1">
				<div class="h_100 flex flex-ac">
					<div class="it1">
						<div class="ft32 bold cblue">
							20
						</div>
						<div class="cblue ft16">
							在科人数
						</div>
					</div>
				</div>
			</div>
			<div class="it1 berthItem1">
				<div class="h_100 flex flex-ac">
					<div class="it1">
						<div class="ft32 bold cf60">
							20
						</div>
						<div class="cf60 ft16">
							新入科
						</div>
					</div>
				</div>
			</div>
			<div class="it1 berthItem1">
				<div class="h_100 flex flex-ac">
					<div class="it1">
						<div class="ft32 bold cblue">
							20
						</div>
						<div class="cblue ft16">
							已出科
						</div>
					</div>
				</div>
			</div>
			<div class="it1 berthItem1">
				<div class="h_100 flex flex-ac">
					<div class="it1">
						<div class="ft32 bold cred">
							20
						</div>
						<div class="cred ft16">
							病危
						</div>
					</div>
				</div>
			</div>
			<div class="it1 berthItem1">
				<div class="h_100 flex flex-ac">
					<div class="it1">
						<div class="ft32 bold cred">
							20
						</div>
						<div class="cred ft16">
							病重
						</div>
					</div>
				</div>
			</div>
			<div class="it1 berthItem1">
				<div class="h_100 flex flex-ac">
					<div class="it1">
						<div class="ft32 bold cf60">
							20
						</div>
						<div class="cf60 ft16">
							手术
						</div>
					</div>
				</div>
			</div>
			<div class="it1 berthItem1">
				<div class="h_100 flex flex-ac">
					<div class="it1">
						<div class="ft32 bold c999">
							20
						</div>
						<div class="c999 ft16">
							死亡
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="flex pt20">
			<div class="it1"></div>
			<div>
				<el-button-group>
				    <el-button :type="data.current === index ? 'primary' : 'default'" v-for="(item,index) in data.navList" :key="index" @click="changeNav(index)">{{item.name}}</el-button>
				</el-button-group>
			</div>
		</div>
		<div class="berthContent mt10" :class="{'bgfff':data.current == 1}">
			<el-scrollbar>
				<div class="flex flex-wrap pb20" v-if="data.current == 0">
					<div class="berthItem2">
						<div class="berthBox2">
							<div>
								<span class="ft20 bold">ICU-001</span>
								<span class="ft20 bold ml10">张无忌</span>
								<span class="ft16 ml10 c999">男</span>
								<span class="ft16 ml10 c999">32岁</span>
							</div>
							
							<div class="flex ft14 c666 pt5">
								<div class="nameBox">病案号：</div>
								<div>000000000</div>
							</div>
							<div class="flex ft14 c666 pt5">
								<div class="nameBox">诊断：</div>
								<div>多器官衰竭（MODS）</div>
							</div>
							<div class="flex ft14 c666 pt5">
								<div class="nameBox">手术：</div>
								<div>心肺复苏手术</div>
								<div class="ml10">术后3天</div>
							</div>
							<div class="flex ft14 c666 pt5">
								<div class="nameBox">过敏：</div>
								<div>青霉素</div>
							</div>
							<div class="flex ft14 c666 pt5">
								<div class="nameBox">主治医生：</div>
								<div>张三</div>
							</div>
							<div class="flex ft14 c666 pt5">
								<div class="nameBox">责任护士：</div>
								<div>张四</div>
							</div>
							<div class="flex ft14 c666 pt5">
								<div class="nameBox">入科时间：</div>
								<div>2022-11-07</div>
								<div class="ml10">10天</div>
							</div>
							
							<div class="pt10 flex flex-ac">
								<div class="it1">
									<el-button-group size="small">
									    <el-button type="primary">扫码</el-button>
									    <el-button type="primary">转床</el-button>
									    <el-button type="primary">患者出科</el-button>
									</el-button-group>
								</div>
								<div class="berthFavBox point">
									<el-icon size="22px"><Star /></el-icon>
								</div>
							</div>
							
						</div>
					</div>
					<div class="berthItem2">
						<div class="berthBox2">
							<div>
								<span class="ft20 bold">ICU-001</span>
								<span class="ft20 bold ml10">张无忌</span>
								<span class="ft16 ml10 c999">男</span>
								<span class="ft16 ml10 c999">32岁</span>
							</div>
							
							<div class="flex ft14 c666 pt5">
								<div class="nameBox">病案号：</div>
								<div>000000000</div>
							</div>
							<div class="flex ft14 c666 pt5">
								<div class="nameBox">诊断：</div>
								<div>多器官衰竭（MODS）</div>
							</div>
							<div class="flex ft14 c666 pt5">
								<div class="nameBox">手术：</div>
								<div>心肺复苏手术</div>
								<div class="ml10">术后3天</div>
							</div>
							<div class="flex ft14 c666 pt5">
								<div class="nameBox">过敏：</div>
								<div>青霉素</div>
							</div>
							<div class="flex ft14 c666 pt5">
								<div class="nameBox">主治医生：</div>
								<div>张三</div>
							</div>
							<div class="flex ft14 c666 pt5">
								<div class="nameBox">责任护士：</div>
								<div>张四</div>
							</div>
							<div class="flex ft14 c666 pt5">
								<div class="nameBox">入科时间：</div>
								<div>2022-11-07</div>
								<div class="ml10">10天</div>
							</div>
							
							<div class="pt10 flex flex-ac">
								<div class="it1">
									<el-button-group size="small">
									    <el-button type="primary">扫码</el-button>
									    <el-button type="primary">转床</el-button>
									    <el-button type="primary">患者出科</el-button>
									</el-button-group>
								</div>
								<div class="berthFavBox point">
									<el-icon size="22px"><Star /></el-icon>
								</div>
							</div>
							
						</div>
					</div>
					<div class="berthItem2">
						<div class="berthBox2">
							<div>
								<span class="ft20 bold">ICU-001</span>
								<span class="ft20 bold ml10">张无忌</span>
								<span class="ft16 ml10 c999">男</span>
								<span class="ft16 ml10 c999">32岁</span>
							</div>
							
							<div class="flex ft14 c666 pt5">
								<div class="nameBox">病案号：</div>
								<div>000000000</div>
							</div>
							<div class="flex ft14 c666 pt5">
								<div class="nameBox">诊断：</div>
								<div>多器官衰竭（MODS）</div>
							</div>
							<div class="flex ft14 c666 pt5">
								<div class="nameBox">手术：</div>
								<div>心肺复苏手术</div>
								<div class="ml10">术后3天</div>
							</div>
							<div class="flex ft14 c666 pt5">
								<div class="nameBox">过敏：</div>
								<div>青霉素</div>
							</div>
							<div class="flex ft14 c666 pt5">
								<div class="nameBox">主治医生：</div>
								<div>张三</div>
							</div>
							<div class="flex ft14 c666 pt5">
								<div class="nameBox">责任护士：</div>
								<div>张四</div>
							</div>
							<div class="flex ft14 c666 pt5">
								<div class="nameBox">入科时间：</div>
								<div>2022-11-07</div>
								<div class="ml10">10天</div>
							</div>
							
							<div class="pt10 flex flex-ac">
								<div class="it1">
									<el-button-group size="small">
									    <el-button type="primary">扫码</el-button>
									    <el-button type="primary">转床</el-button>
									    <el-button type="primary">患者出科</el-button>
									</el-button-group>
								</div>
								<div class="berthFavBox point">
									<el-icon size="22px"><Star /></el-icon>
								</div>
							</div>
							
						</div>
					</div>
					<div class="berthItem2">
						<div class="berthBox2">
							<div>
								<span class="ft20 bold">ICU-001</span>
								<span class="ft20 bold ml10">张无忌</span>
								<span class="ft16 ml10 c999">男</span>
								<span class="ft16 ml10 c999">32岁</span>
							</div>
							
							<div class="flex ft14 c666 pt5">
								<div class="nameBox">病案号：</div>
								<div>000000000</div>
							</div>
							<div class="flex ft14 c666 pt5">
								<div class="nameBox">诊断：</div>
								<div>多器官衰竭（MODS）</div>
							</div>
							<div class="flex ft14 c666 pt5">
								<div class="nameBox">手术：</div>
								<div>心肺复苏手术</div>
								<div class="ml10">术后3天</div>
							</div>
							<div class="flex ft14 c666 pt5">
								<div class="nameBox">过敏：</div>
								<div>青霉素</div>
							</div>
							<div class="flex ft14 c666 pt5">
								<div class="nameBox">主治医生：</div>
								<div>张三</div>
							</div>
							<div class="flex ft14 c666 pt5">
								<div class="nameBox">责任护士：</div>
								<div>张四</div>
							</div>
							<div class="flex ft14 c666 pt5">
								<div class="nameBox">入科时间：</div>
								<div>2022-11-07</div>
								<div class="ml10">10天</div>
							</div>
							
							<div class="pt10 flex flex-ac">
								<div class="it1">
									<el-button-group size="small">
									    <el-button type="primary">扫码</el-button>
									    <el-button type="primary">转床</el-button>
									    <el-button type="primary">患者出科</el-button>
									</el-button-group>
								</div>
								<div class="berthFavBox point">
									<el-icon size="22px"><Star /></el-icon>
								</div>
							</div>
							
						</div>
					</div>
					<div class="berthItem2">
						<div class="berthBox2">
							<div>
								<span class="ft20 bold">ICU-001</span>
								<span class="ft20 bold ml10">张无忌</span>
								<span class="ft16 ml10 c999">男</span>
								<span class="ft16 ml10 c999">32岁</span>
							</div>
							
							<div class="flex ft14 c666 pt5">
								<div class="nameBox">病案号：</div>
								<div>000000000</div>
							</div>
							<div class="flex ft14 c666 pt5">
								<div class="nameBox">诊断：</div>
								<div>多器官衰竭（MODS）</div>
							</div>
							<div class="flex ft14 c666 pt5">
								<div class="nameBox">手术：</div>
								<div>心肺复苏手术</div>
								<div class="ml10">术后3天</div>
							</div>
							<div class="flex ft14 c666 pt5">
								<div class="nameBox">过敏：</div>
								<div>青霉素</div>
							</div>
							<div class="flex ft14 c666 pt5">
								<div class="nameBox">主治医生：</div>
								<div>张三</div>
							</div>
							<div class="flex ft14 c666 pt5">
								<div class="nameBox">责任护士：</div>
								<div>张四</div>
							</div>
							<div class="flex ft14 c666 pt5">
								<div class="nameBox">入科时间：</div>
								<div>2022-11-07</div>
								<div class="ml10">10天</div>
							</div>
							
							<div class="pt10 flex flex-ac">
								<div class="it1">
									<el-button-group size="small">
									    <el-button type="primary">扫码</el-button>
									    <el-button type="primary">转床</el-button>
									    <el-button type="primary">患者出科</el-button>
									</el-button-group>
								</div>
								<div class="berthFavBox point">
									<el-icon size="22px"><Star /></el-icon>
								</div>
							</div>
							
						</div>
					</div>
					<div class="berthItem2">
						<div class="berthBox2">
							<div>
								<span class="ft20 bold">ICU-001</span>
								<span class="ft20 bold ml10">张无忌</span>
								<span class="ft16 ml10 c999">男</span>
								<span class="ft16 ml10 c999">32岁</span>
							</div>
							
							<div class="flex ft14 c666 pt5">
								<div class="nameBox">病案号：</div>
								<div>000000000</div>
							</div>
							<div class="flex ft14 c666 pt5">
								<div class="nameBox">诊断：</div>
								<div>多器官衰竭（MODS）</div>
							</div>
							<div class="flex ft14 c666 pt5">
								<div class="nameBox">手术：</div>
								<div>心肺复苏手术</div>
								<div class="ml10">术后3天</div>
							</div>
							<div class="flex ft14 c666 pt5">
								<div class="nameBox">过敏：</div>
								<div>青霉素</div>
							</div>
							<div class="flex ft14 c666 pt5">
								<div class="nameBox">主治医生：</div>
								<div>张三</div>
							</div>
							<div class="flex ft14 c666 pt5">
								<div class="nameBox">责任护士：</div>
								<div>张四</div>
							</div>
							<div class="flex ft14 c666 pt5">
								<div class="nameBox">入科时间：</div>
								<div>2022-11-07</div>
								<div class="ml10">10天</div>
							</div>
							
							<div class="pt10 flex flex-ac">
								<div class="it1">
									<el-button-group size="small">
									    <el-button type="primary">扫码</el-button>
									    <el-button type="primary">转床</el-button>
									    <el-button type="primary">患者出科</el-button>
									</el-button-group>
								</div>
								<div class="berthFavBox point">
									<el-icon size="22px"><Star /></el-icon>
								</div>
							</div>
							
						</div>
					</div>
					<div class="berthItem2">
						<div class="berthBox2">
							<div>
								<span class="ft20 bold">ICU-001</span>
								<span class="ft20 bold ml10">张无忌</span>
								<span class="ft16 ml10 c999">男</span>
								<span class="ft16 ml10 c999">32岁</span>
							</div>
							
							<div class="flex ft14 c666 pt5">
								<div class="nameBox">病案号：</div>
								<div>000000000</div>
							</div>
							<div class="flex ft14 c666 pt5">
								<div class="nameBox">诊断：</div>
								<div>多器官衰竭（MODS）</div>
							</div>
							<div class="flex ft14 c666 pt5">
								<div class="nameBox">手术：</div>
								<div>心肺复苏手术</div>
								<div class="ml10">术后3天</div>
							</div>
							<div class="flex ft14 c666 pt5">
								<div class="nameBox">过敏：</div>
								<div>青霉素</div>
							</div>
							<div class="flex ft14 c666 pt5">
								<div class="nameBox">主治医生：</div>
								<div>张三</div>
							</div>
							<div class="flex ft14 c666 pt5">
								<div class="nameBox">责任护士：</div>
								<div>张四</div>
							</div>
							<div class="flex ft14 c666 pt5">
								<div class="nameBox">入科时间：</div>
								<div>2022-11-07</div>
								<div class="ml10">10天</div>
							</div>
							
							<div class="pt10 flex flex-ac">
								<div class="it1">
									<el-button-group size="small">
									    <el-button type="primary">扫码</el-button>
									    <el-button type="primary">转床</el-button>
									    <el-button type="primary">患者出科</el-button>
									</el-button-group>
								</div>
								<div class="berthFavBox point">
									<el-icon size="22px"><Star /></el-icon>
								</div>
							</div>
							
						</div>
					</div>
					<div class="berthItem2">
						<div class="berthBox2">
							<div>
								<span class="ft20 bold">ICU-001</span>
								<span class="ft20 bold ml10">张无忌</span>
								<span class="ft16 ml10 c999">男</span>
								<span class="ft16 ml10 c999">32岁</span>
							</div>
							
							<div class="flex ft14 c666 pt5">
								<div class="nameBox">病案号：</div>
								<div>000000000</div>
							</div>
							<div class="flex ft14 c666 pt5">
								<div class="nameBox">诊断：</div>
								<div>多器官衰竭（MODS）</div>
							</div>
							<div class="flex ft14 c666 pt5">
								<div class="nameBox">手术：</div>
								<div>心肺复苏手术</div>
								<div class="ml10">术后3天</div>
							</div>
							<div class="flex ft14 c666 pt5">
								<div class="nameBox">过敏：</div>
								<div>青霉素</div>
							</div>
							<div class="flex ft14 c666 pt5">
								<div class="nameBox">主治医生：</div>
								<div>张三</div>
							</div>
							<div class="flex ft14 c666 pt5">
								<div class="nameBox">责任护士：</div>
								<div>张四</div>
							</div>
							<div class="flex ft14 c666 pt5">
								<div class="nameBox">入科时间：</div>
								<div>2022-11-07</div>
								<div class="ml10">10天</div>
							</div>
							
							<div class="pt10 flex flex-ac">
								<div class="it1">
									<el-button-group size="small">
									    <el-button type="primary">扫码</el-button>
									    <el-button type="primary">转床</el-button>
									    <el-button type="primary">患者出科</el-button>
									</el-button-group>
								</div>
								<div class="berthFavBox point">
									<el-icon size="22px"><Star /></el-icon>
								</div>
							</div>
							
						</div>
					</div>
					<div class="berthItem2">
						<div class="berthBox2">
							<div>
								<span class="ft20 bold">ICU-001</span>
								<span class="ft20 bold ml10">张无忌</span>
								<span class="ft16 ml10 c999">男</span>
								<span class="ft16 ml10 c999">32岁</span>
							</div>
							
							<div class="flex ft14 c666 pt5">
								<div class="nameBox">病案号：</div>
								<div>000000000</div>
							</div>
							<div class="flex ft14 c666 pt5">
								<div class="nameBox">诊断：</div>
								<div>多器官衰竭（MODS）</div>
							</div>
							<div class="flex ft14 c666 pt5">
								<div class="nameBox">手术：</div>
								<div>心肺复苏手术</div>
								<div class="ml10">术后3天</div>
							</div>
							<div class="flex ft14 c666 pt5">
								<div class="nameBox">过敏：</div>
								<div>青霉素</div>
							</div>
							<div class="flex ft14 c666 pt5">
								<div class="nameBox">主治医生：</div>
								<div>张三</div>
							</div>
							<div class="flex ft14 c666 pt5">
								<div class="nameBox">责任护士：</div>
								<div>张四</div>
							</div>
							<div class="flex ft14 c666 pt5">
								<div class="nameBox">入科时间：</div>
								<div>2022-11-07</div>
								<div class="ml10">10天</div>
							</div>
							
							<div class="pt10 flex flex-ac">
								<div class="it1">
									<el-button-group size="small">
									    <el-button type="primary">扫码</el-button>
									    <el-button type="primary">转床</el-button>
									    <el-button type="primary">患者出科</el-button>
									</el-button-group>
								</div>
								<div class="berthFavBox point">
									<el-icon size="22px"><Star /></el-icon>
								</div>
							</div>
							
						</div>
					</div>
					<div class="berthItem2">
						<div class="berthBox2">
							<div>
								<span class="ft20 bold">ICU-001</span>
								<span class="ft20 bold ml10">张无忌</span>
								<span class="ft16 ml10 c999">男</span>
								<span class="ft16 ml10 c999">32岁</span>
							</div>
							
							<div class="flex ft14 c666 pt5">
								<div class="nameBox">病案号：</div>
								<div>000000000</div>
							</div>
							<div class="flex ft14 c666 pt5">
								<div class="nameBox">诊断：</div>
								<div>多器官衰竭（MODS）</div>
							</div>
							<div class="flex ft14 c666 pt5">
								<div class="nameBox">手术：</div>
								<div>心肺复苏手术</div>
								<div class="ml10">术后3天</div>
							</div>
							<div class="flex ft14 c666 pt5">
								<div class="nameBox">过敏：</div>
								<div>青霉素</div>
							</div>
							<div class="flex ft14 c666 pt5">
								<div class="nameBox">主治医生：</div>
								<div>张三</div>
							</div>
							<div class="flex ft14 c666 pt5">
								<div class="nameBox">责任护士：</div>
								<div>张四</div>
							</div>
							<div class="flex ft14 c666 pt5">
								<div class="nameBox">入科时间：</div>
								<div>2022-11-07</div>
								<div class="ml10">10天</div>
							</div>
							
							<div class="pt10 flex flex-ac">
								<div class="it1">
									<el-button-group size="small">
									    <el-button type="primary">扫码</el-button>
									    <el-button type="primary">转床</el-button>
									    <el-button type="primary">患者出科</el-button>
									</el-button-group>
								</div>
								<div class="berthFavBox point">
									<el-icon size="22px"><Star /></el-icon>
								</div>
							</div>
							
						</div>
					</div>
				</div>
				
				<div v-else>
					<div class="pad20">
						<el-form :inline="true">
						    <el-form-item label="患者状态">
								<el-radio-group>
								    <el-radio label="全部" />
								    <el-radio label="在科" />
									<el-radio label="出科" />
								</el-radio-group>
						    </el-form-item>
						    <el-form-item label="姓名">
						    	<el-input />
						    </el-form-item>
							<el-form-item label="病案号">
								<el-input />
							</el-form-item>
							<el-form-item label="在科时间">
								<el-date-picker
								        
								        type="daterange"
								        range-separator="To"
								        start-placeholder="开始时间"
								        end-placeholder="结束时间"
								        
								      />
							</el-form-item>
						</el-form>
					</div>
					<div class="pl20 pr20">
						<el-table :data="data.tableData" border style="width: 100%">
						    <el-table-column prop="name" label="患者姓名" width="180" />
						    <el-table-column prop="age" label="年龄" width="180" />
						    <el-table-column prop="sex" label="性别" />
							<el-table-column prop="des1" label="诊断" />
							<el-table-column prop="des2" label="手术" />
							<el-table-column prop="des3" label="过敏" />
							<el-table-column prop="des4" label="感染" />
							<el-table-column prop="doctor" label="主治医生" />
							<el-table-column prop="nurse" label="责任护士" />
							<el-table-column prop="startTime" label="入科时间" />
							<el-table-column prop="endTime" label="出科时间" />
							<el-table-column prop="sex" label="性别" />
							<el-table-column label="操作" width="132" align="center">
								<template #default="scope">
								        <el-button size="small">撤消</el-button>
								        <el-button
								          size="small"
								          type="danger"								          
								          >查看</el-button
								        >
								</template>
							</el-table-column>	
						  </el-table>
					</div>
				</div>
			</el-scrollbar>
		</div>
	</div>
</template>

<script setup lang="ts">
	import {
		Star
	} from "@element-plus/icons-vue";
	const data = reactive({
		current:0,
		navList:[
			{
				name:'床位卡片'
			},
			{
				name:'患者查询'
			}
		],
		tableData:[
			{
				name:'张五金',
				age:20,
				sex:'男',
				des1:'多器官功能衰竭',
				des2:'',
				des3:'青霉素',
				des4:'HIV COVID19',
				doctor:'扁鹊',
				nurse:'责任护士',
				startTime:'2022-10-12',
				endTime:'2022-10-13',
			},
			{
				name:'张五金',
				age:20,
				sex:'男',
				des1:'多器官功能衰竭',
				des2:'',
				des3:'青霉素',
				des4:'HIV COVID19',
				doctor:'扁鹊',
				nurse:'责任护士',
				startTime:'2022-10-12',
				endTime:'2022-10-13',
			}
		]
	})
	
	const changeNav = (index:number) => {
		data.current = index;
	}
</script>

<style scoped>
	.berthBox1{
		height: 96px;
	}
	.berthItem1{
		height: 80px;
		margin: 0 4px;
		background: #F6F9FB;
		text-align: center;
	}
	.berthImg1{
		display: block;
		margin: auto;
	}
	.ft32{
		font-size: 32px;
	}
	
	.berthContent{
		height: calc(100% - 106px);
	}
	
	.berthItem2{
		width: 25%;
		padding:8px;
	}
	.berthBox2{
		height: 260px;
		background: #fff;
		padding: 16px;
	}
	.berthBox2:hover{ background:#fef9f5;}
	.nameBox{ width: 75px; color: #333;}
	.berthFavBox{ color: #666;}
	.berthFavBox:hover{ color: #D80000;}
</style>