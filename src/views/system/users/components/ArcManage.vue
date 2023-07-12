<!--
 * @Author: ZhouHao joehall@foxmail.com
 * @Date: 2023-07-12 09:09:22
 * @LastEditors: ZhouHao joehall@foxmail.com
 * @LastEditTime: 2023-07-12 17:55:56
 * @FilePath: \servious-illness-admin\src\views\system\personnel.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="common-layout">
    <el-container>
      <el-aside>
        <div class="inaside-container mt_20">
          <div class="mb-2 header-container">
            <span class="ml-3 w-20 text-gray-600 inline-flex items-center">组织架构</span>
            <el-select v-model="value" class="w-50 m-2" placeholder="请选择" :suffix-icon="ArrowDown" />
            <el-checkbox v-model="value" label="重症科室" size="large" />
          </div>
          <div class="side-menu-container">
            <div class="mb-2">
              <el-input v-model="value" placeholder="请输入科室名称搜索" size="default" :suffix-icon="Search" />
            </div>
            <el-scrollbar height="inherit">
              <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
                <el-sub-menu index="1">
                  <template #title>
                    <el-icon>
                      <Folder />
                    </el-icon>
                    <span>Navigator One</span>
                  </template>
                  <el-menu-item-group title="Group One">
                    <el-menu-item index="1-1">
                      <el-icon>
                        <Document />
                      </el-icon>
                      <span>item one</span>
                    </el-menu-item>
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
                  <el-icon>
                    <Folder />
                  </el-icon>
                  <span>Navigator Two</span>
                </el-menu-item>
                <el-menu-item index="3" disabled>
                  <el-icon>
                    <Folder />
                  </el-icon>
                  <span>Navigator Three</span>
                </el-menu-item>
                <el-menu-item index="4">
                  <el-icon>
                    <Folder />
                  </el-icon>
                  <span>Navigator Four</span>
                </el-menu-item>
                <el-menu-item index="4">
                  <el-icon>
                    <Folder />
                  </el-icon>
                  <span>Navigator Four</span>
                </el-menu-item>
                <el-menu-item index="4">
                  <el-icon>
                    <Folder />
                  </el-icon>
                  <span>Navigator Four</span>
                </el-menu-item>
                <el-menu-item index="4">
                  <el-icon>
                    <Folder />
                  </el-icon>
                  <span>Navigator Four</span>
                </el-menu-item>
                <el-menu-item index="4">
                  <el-icon>
                    <Folder />
                  </el-icon>
                  <span>Navigator Four</span>
                </el-menu-item>
              </el-menu>
            </el-scrollbar>
          </div>
          <div class="footer-container">
            <el-button type="primary">点击同步全院组织架构</el-button>
          </div>
        </div>
      </el-aside>
      <el-main>
        <vxe-table-layout ref="vxeTableLayout" class="h_100" border has-index :loader="initMethod"
          :row-config="{ isCurrent: true, isHover: true }" height="100%" :columns-list="columnsList"
          @current-change="currentChangeEvent">
          <template #operator-left>
            <span class="ml-3 w-20 text-gray-600 inline-flex items-center">用户检索：</span>
            <div>
              <el-input v-model="value" placeholder="请输入姓名/工号后点击回车" size="default" :prefix-icon="Search" />
            </div>
            <el-button type="primary" class="ml_10" @click="handleSearch">搜索</el-button>
          </template>

          <template #operator-right>
            <el-button type="primary" :icon="Plus" @click="add">新增</el-button>
          </template>
        </vxe-table-layout>
      </el-main>
    </el-container>
    <dialog-layout ref="dialogLayout" title="新增" append-to-body show-close :init-method="initMethod" />
  </div>
</template>

<script lang="ts" setup>
import VxeTableLayout from '/@/components/VxeTable/index.vue';
import { VxeTableEvents } from 'vxe-table';
import DialogLayout from '/@/components/DialogLayout/index.vue';
import {
  Document,
  ArrowDown,
  Search,
  Folder,
  Plus
} from '@element-plus/icons-vue'

const value = ref('');
const vxeTableLayout = ref();
const dialogLayout = ref();
const dialogVisible = ref(false);
const columnsList = [
  {
    title: '科室',
    field: 'department',
  },
  {
    title: '工号',
    field: 'job_number',
  },
  {
    title: '姓名',
    field: 'name',
  },
  {
    title: '登录名',
    field: 'login_name',
  },
  {
    title: '类型',
    field: 'type',
  },
  {
    title: '性别',
    field: 'sex',
  },
  {
    title: '职业资格',
    field: 'quali',
  },
  {
    title: '年资',
    field: 'seniority',
  },
  {
    title: '上级医生',
    field: 'superiors',
  },
  {
    title: '三级医生',
    field: 'threelevel',
  }
];

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const currentChangeEvent: VxeTableEvents.CurrentChange = (row) => {
  console.log(`行选中事件`, row);
};
const handleSearch = () => {
  vxeTableLayout.value.refresh(true);
};
async function initMethod(params: any) {
  console.log(params, 'params');
  const { pageSize } = params;
  return {
    total: 100,
    records: [...new Array(pageSize)].map((_, index) => {
      return { id: index, department: '检验科', job_number: '001', name: '张三', login_name: '12414', type: '1', sex: '女', quali: '临床医师', seniority: '3', superiors: '里斯', threelevel: '王五' };
    })
  };
}
const add = () => {
  console.log(dialogLayout, 'dialogLayout');
  console.log(dialogLayout.value, 'dialogLayout.value');

  dialogVisible.value = true;
  dialogLayout.value.open();
};
</script>

<style scoped lang="scss">
.header-container {
  display: flex;
  align-items: center;
}

.side-menu-container {
  height: 600px;
  overflow: hidden;

  .el-scrollbar__wrap {
    // 隐藏横向滚动条
    overflow-x: hidden;
  }
}

.footer-container {
  margin-top:10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.common-layout {
  height: inherit;
  display: flex;
}
.inaside-container {
  height: 700px;
  margin-top: 20px;
}
</style>
