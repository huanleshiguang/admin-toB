<!--
 * @Author: ZhouHao joehall@foxmail.com
 * @Date: 2023-07-12 14:40:09
 * @LastEditors: ZhouHao joehall@foxmail.com
 * @LastEditTime: 2023-07-14 15:57:02
 * @FilePath: \servious-illness-admin\src\views\system\bunk\components\BedEquipment.vue
 * @Description: 
-->
<template>
  <div class="common-layout">
    <el-container class="container">
      <el-aside>
        <div>
          <!-- <div>床位列表</div> -->
          <div calss="inaside-menu">
            <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
              <el-sub-menu index="1">
                <template #title>
                  <el-icon>
                    <location />
                  </el-icon>
                  <span>Navigator One</span>
                </template>
                <el-menu-item-group title="Group One">
                  <el-menu-item index="1-1">item one</el-menu-item>
                  <el-menu-item index="1-2">item two</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="Group Two">
                  <el-menu-item index="1-3">item three</el-menu-item>
                </el-menu-item-group>
                <el-sub-menu index="1-4">
                  <template #title>item four</template>
                  <el-menu-item index="1-4-1">item one</el-menu-item>
                </el-sub-menu>
              </el-sub-menu>
              <el-menu-item index="2">
                <el-icon><icon-menu /></el-icon>
                <span>Navigator Two</span>
              </el-menu-item>
              <el-menu-item index="3" disabled>
                <el-icon>
                  <document />
                </el-icon>
                <span>Navigator Three</span>
              </el-menu-item>
              <el-menu-item index="4">
                <el-icon>
                  <setting />
                </el-icon>
                <span>Navigator Four</span>
              </el-menu-item>
            </el-menu>
          </div>
        </div>
      </el-aside>
      <el-main>
        <div class="main-container">
          <div class="header-container">
            <div class="header-left">
              <!-- <h2>设备列表</h2> -->
            </div>
            <div class="header-right">
              <el-button type="primary" :icon="Plus">新增设备</el-button>
              <el-button type="primary" :icon="Delete">删除设备</el-button>
            </div>
          </div>
          <el-card class="box-card">
            <el-table :data="tableData" style="width: 100%">
              <el-table-column :label="item.label" align="center" v-for="item in devTabHeader " :key="item.label"
                :prop="item.prop">
                <template v-slot="scope">
                </template>
              </el-table-column>
            </el-table>
          </el-card>

          <el-divider />
          <div class="header-container">
            <div class="header-left">
              <h2>监测项目</h2>
            </div>
            <div class="header-right">
              <!-- <el-button type="primary" :icon="Plus">新增设备</el-button>
              <el-button type="primary" :icon="Delete">删除设备</el-button> -->
            </div>
          </div>
          <el-card class="box-card">
            <el-table :data="tableData" style="width: 100%">
              <el-table-column :label="item.label" align="center" v-for="item in decTabHeader " :key="item.label"
                :prop="item.prop">
                <template v-slot="scope">

                </template>
              </el-table-column>
            </el-table>
          </el-card>
        </div>
      </el-main>
    </el-container>
  </div>
</template>
  
<script setup lang='ts'>
import {
  Plus,
  Delete
} from '@element-plus/icons-vue';

const devTabHeader = [
  {
    prop: 'serial',
    label: '序号'
  },
  {
    prop: 'type',
    label: '类型'
  },
  {
    prop: 'sn',
    label: 'SN'
  },
  {
    prop: 'name',
    label: '设备名称'
  },
  {
    prop: 'firm',
    label: '厂商'
  },
  {
    prop: 'modelnum',
    label: '型号'
  },
  {
    prop: 'connectmode',
    label: '连接方式'
  },
]
const decTabHeader = [
  {
    prop: 'serial',
    label: '序号'
  },
  {
    prop: 'type',
    label: '类型'
  },
  {
    prop: 'chn_name',
    label: '名称（中文）'
  },
  {
    prop: 'en_name',
    label: '名称（英文）'
  },
  {
    prop: 'unit',
    label: '单位'
  },
  {
    prop: 'norm_range',
    label: '正常范围'
  },
  {
    prop: 'eff_range',
    label: '有效范围'
  },
]
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>
  
<style scoped lang="scss">
.container {
  height: calc(100% - 36px);
}
.main-container {
  height: 550px;
}

.box-card {
  width: 100%;
  height: 50%;
}

.header-container {
  display: flex;
  justify-content: space-between;
  height: 35px;
  line-height: 35px;
  margin-bottom: 5px;
}
</style>