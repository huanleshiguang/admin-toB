<!--
 * @Author: ZhouHao joehall@foxmail.com
 * @Date: 2023-07-12 09:09:22
 * @LastEditors: ZhouHao joehall@foxmail.com
 * @LastEditTime: 2023-07-18 16:31:11
 * @FilePath: \servious-illness-admin\src\views\system\personnel.vue
 * @Description: 
-->
<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="350px">
        <div class="aside-container">
          <div class="header-container">
            <div class="select-container">
              <div class="select-item">
                <span class="text-gray-600 font-stl">组织架构：</span>
                <el-select v-model="value" class="w-40" placeholder="请选择" :suffix-icon="ArrowDown">
                  <el-option v-for="item in hospAreaList.data" :key="item.id" :label="item.hospAreaName"
                    :value="item.hospAreaName" /></el-select>
              </div>
              <el-checkbox v-model="value" label="重症科室" />
            </div>
            <div class="mb-2">
              <el-input v-model="value" placeholder="请输入科室名称搜索" size="default" :suffix-icon="Search" />
            </div>
          </div>
          <!-- tree container -->
          <common-tree :data="data" @handleNodeClick="handleNodeClick" />
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
            <span class="text-gray-600 font-stl">用户检索：</span>
            <div>
              <el-input v-model="value" placeholder="请输入姓名/工号后点击回车" size="default" :prefix-icon="Search" />
            </div>
            <el-button type="primary" class="ml_10" @click="handleSearch">搜索</el-button>
          </template>

          <template #operator-right>
            <!-- <el-button type="primary" :icon="Plus" @click="add">新增</el-button> -->
          </template>
        </vxe-table-layout>
      </el-main>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import VxeTableLayout from '/@/components/VxeTable/VxeTableLayout.vue';
import { VxeTableEvents } from 'vxe-table';
import CommonTree from '/@/components/common/CommonTree.vue'
import { ref } from 'vue';
import { ArrowDown, Search } from '@element-plus/icons-vue';
import { apiGetHosptAreaInfo } from '/@/api/system/user';

interface Tree {
  menuName: string
  children?: Tree[]
};
const value = ref('');
const vxeTableLayout = ref();
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
const data: Tree[] = [
  {
    menuName: 'Level one 1',
    children: [
      {
        menuName: 'Level two 1-1',
        children: [
          {
            menuName: 'Level three 1-1-1',
          },
        ],
      },
    ],
  },
  {
    menuName: 'Level one 2',
    children: [
      {
        menuName: 'Level two 2-1',
        children: [
          {
            menuName: 'Level three 2-1-1',
          },
        ],
      },
      {
        menuName: 'Level two 2-2',
        children: [
          {
            menuName: 'Level three 2-2-1',
          },
        ],
      },
    ],
  },
  {
    menuName: 'Level one 2',
    children: [
      {
        menuName: 'Level two 2-1',
        children: [
          {
            menuName: 'Level three 2-1-1',
          },
        ],
      },
      {
        menuName: 'Level two 2-2',
        children: [
          {
            menuName: 'Level three 2-2-1',
          },
        ],
      },
    ],
  },
  {
    menuName: 'Level one 2',
    children: [
      {
        menuName: 'Level two 2-1',
        children: [
          {
            menuName: 'Level three 2-1-1',
          },
        ],
      },
      {
        menuName: 'Level two 2-2',
        children: [
          {
            menuName: 'Level three 2-2-1',
          },
        ],
      },
    ],
  },
  {
    menuName: 'Level one 2',
    children: [
      {
        menuName: 'Level two 2-1',
        children: [
          {
            menuName: 'Level three 2-1-1',
          },
        ],
      },
      {
        menuName: 'Level two 2-2',
        children: [
          {
            menuName: 'Level three 2-2-1',
          },
        ],
      },
    ],
  },
  {
    menuName: 'Level one 2',
    children: [
      {
        menuName: 'Level two 2-1',
        children: [
          {
            menuName: 'Level three 2-1-1',
          },
        ],
      },
      {
        menuName: 'Level two 2-2',
        children: [
          {
            menuName: 'Level three 2-2-1',
          },
        ],
      },
    ],
  },
  {
    menuName: 'Level one 3',
    children: [
      {
        menuName: 'Level two 3-1',
        children: [
          {
            menuName: 'Level three 3-1-1',
          },
        ],
      },
      {
        menuName: 'Level two 3-2',
        children: [
          {
            menuName: 'Level three 3-2-1',
          },
        ],
      },
    ],
  },
];
const hospAreaList = reactive({
  data:<any>[]
})
onMounted(async () => {
  const result = await apiGetHosptAreaInfo();
  hospAreaList.data = result;
})
const handleNodeClick = () => {
  console.log('子组件调用父组件handleNodeClick');
};
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
};
</script>

<style scoped lang="scss">
.aside-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 20px;
  overflow: hidden;
}
.header-container {
  max-width: 350px;
  background-color: #fff;
  .select-container {
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
.footer-container {
  display: flex;
  align-items: center;
  justify-content: center;
}
.common-layout {
  display: flex;
  overflow: hidden;
}
.font-stl {
  font-size: $font-size-14;
  font-weight: $font-weight-500;
}
.select-item {
  display: flex;
  align-items: center;
}
</style>
