<!--
 * @Author: ZhouHao joehall@foxmail.com
 * @Date: 2023-07-12 09:09:22
 * @LastEditors: ZhouHao joehall@foxmail.com
 * @LastEditTime: 2023-07-21 10:01:21
 * @FilePath: \servious-illness-admin\src\views\system\personnel.vue
 * @Description: 架构管理界面
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
                <el-select v-model="hospAreaName" class="w-40" placeholder="请选择" :suffix-icon="ArrowDown">
                  <el-option v-for="item in hospAreaList.data" :key="item.id" :label="item.hospAreaName"
                    :value="item.hospAreaName" @click="selectedHospArea(item.id)" /></el-select>
              </div>
              <el-checkbox @change="onChanageOffice" :disabled="mainDeptCheckDisable" v-model="isCheckedMainDept"
                label="重症科室" />
            </div>
          </div>
          <!-- tree container -->
          <common-tree v-model:data="reactHospAreaDepList" :show-search="true" :transmit-props="transmitProps"
            @handleNodeClick="handleNodeClick">
            <!-- icon 选择  -->
            <template #icon-haschild&expanded>
              <FolderOpened />
            </template>
            <template #icon-haschild&unexpanded>
              <Folder />
            </template>
            <template #icon-nohaschild>
              <Document />
            </template>
          </common-tree>
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
              <el-input v-model="searchKey" placeholder="请输入姓名/工号后点击回车" size="default" :prefix-icon="Search" />
            </div>
            <el-button type="primary" class="ml_10" @click="handleSearch">搜索</el-button>
          </template>
        </vxe-table-layout>
      </el-main>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import VxeTableLayout from '/@/components/VxeTable/VxeTableLayout.vue';
import { VxeTableEvents } from 'vxe-table';
import { ArrowDown, Search, Document, Folder, FolderOpened } from '@element-plus/icons-vue';
import type { getHospAreaDepList } from '/@/api/system/types/user'

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
const mainDeptCheckDisable = ref<boolean>(true)
// 定义需要传给公共组件<common-tree />的字段（用于tree展示）
const transmitProps = {
  label: 'deptName',
  deptCode: 'deptCode',
  isMainDept: 'isMainDept',
  children: 'children'
}
const hospAreaName = ref<string>('')
//用户检索关键字
const searchKey = ref<string>('')
// 是否选择重症科室
const isCheckedMainDept = ref<Boolean>(false);
const hospAreaList = reactive({
  data: <any>[]
});
const reactHospAreaDepList = ref<getHospAreaDepList[]>([])
const tempHospAreaDepList = ref<getHospAreaDepList[]>([])

onMounted(() => {
  // 获取初始院区列表
  fetchinitHsopAreaList();
});
const fetchinitHsopAreaList = async () => {
  try {
    const result = await apiGetHosptAreaInfo();
    hospAreaList.data = result;
  } catch (error) {
    throw(error)
  }
}
const handleNodeClick = () => {
  console.log('子组件调用父组件handleNodeClick');
};
const currentChangeEvent: VxeTableEvents.CurrentChange = (row) => {
  console.log(`行选中事件`, row);
};
const handleSearch = () => {
  // 获取关键字
  console.log(searchKey, 'searchKey');
  vxeTableLayout.value.refresh(true);
};
async function initMethod(params: any) {
  console.log(params, 'params');
  const { pageCount } = params;
  return {
    total: 100,
    records: [...new Array(pageCount)].map((_, index) => {
      return { id: index, department: '检验科', job_number: '001', name: '张三', login_name: '12414', type: '1', sex: '女', quali: '临床医师', seniority: '3', superiors: '里斯', threelevel: '王五' };
    })
  };
};
const selectedHospArea = async (areaId: string) => {
  try {
    const result: getHospAreaDepList[] = await apiGetHosptAreaDepList(areaId);
    reactHospAreaDepList.value.length = 0;
    reactHospAreaDepList.value.push(...result);
    tempHospAreaDepList.value.push(...result);
    console.log(reactHospAreaDepList.value, 'reactHospAreaDepList');
    mainDeptCheckDisable.value = false
  } catch (error) {
    throw (error);
  }
};
const filterIsMainDep = (depItem, newValue: Boolean) => {
  if (depItem.children?.length) {
    depItem.children = depItem.children.filter((depItem) => {
      return filterIsMainDep(depItem, newValue);
    })
    return depItem.children.length ? true : false;
  } else {
    return depItem.isMainDept === newValue;
  }
};
function filterDepList(newValue: boolean): void {
  reactHospAreaDepList.value = JSON.parse(JSON.stringify(tempHospAreaDepList.value));
  const filteredDepList = reactHospAreaDepList.value.filter((depItem) => {
    return filterIsMainDep(depItem, newValue);
  });
  reactHospAreaDepList.value.length = 0;
  reactHospAreaDepList.value.push(...filteredDepList);
}
function onChanageOffice(event: boolean): void {
  // 勾选重症
  if (event) {
    filterDepList(event);
  }
  // 未勾选重症
  else {
    reactHospAreaDepList.value = JSON.parse(JSON.stringify(tempHospAreaDepList.value));
  }
}
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
