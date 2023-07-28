<!--
 * @Autor: QMZhao
 * @Date: 2023-07-26 11:53:23
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-07-27 10:15:09
 * @Description: 
 * @FilePath: \servious-illness-admin\src\views\system\roles\components\ConfigUsers\components\UserList\index.vue
-->
<template>
  <div class="uno-wh-full">
    <SimpleCard :title="title">
      <div class="flex flex-col w-full">
        <el-form :mode="userSearchForm">
          <el-form-item label="院区" props="AreaId">
            <el-select
              v-model="userSearchForm.AreaId"
              placeholder="请选择院区"
              class="w-full"
              clearable
              @change="onChangeHospital(userSearchForm, loadDepartment)"
            >
              <el-option
                v-for="item in hospitalSelects"
                :key="item.id"
                :value="item.id"
                :label="item.hospAreaName"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="科室" props="DeptId">
            <el-tree-select
              v-model="userSearchForm.DeptId"
              :data="departmentSelects"
              :render-after-expand="false"
              :disabled="userSearchForm.AreaId ? false : true"
              :props="defaultProps"
              check-strictly
              clearable
              placeholder="请选择科室"
              class="w-full"
              node-key="id"
              @change="onChanageDepartment(userSearchForm, loadUserList)"
            />
          </el-form-item>
          <!-- <el-form-item label="" props="Keyword">
            <div class="flex items-center justify-between w-full">
              <el-input v-model="userSearchForm.Keyword" clearable placeholder="请输入姓名/工号" class="w-400" />
              <el-button type="primary">
                <i-ep-search></i-ep-search>
                搜索
              </el-button>
            </div>
          </el-form-item> -->
        </el-form>
        <SimpleLoading :loading="isUserListLoading" :source-data="userList">
          <div class="flex flex-col user-list p-xAxis-10">
            <div
              v-for="item in userList"
              :key="item.id"
              :class="['user-list-cell', currentUserId === item.id ? 'user-list-cell__actived' : '']"
              @click="onCurrentUserItem(item)"
            >
              <div class="flex items-center justify-between p-xAxis-20 h-60">
                <p class="h-full flex flex-col justify-around">
                  <span class="ulc-name">{{ item.userName }}</span>
                  <span class="ulc-work-code">工号: {{ item.userWorkNo }}</span>
                </p>
                <span class="">{{ item.positionLevelName }}</span>
              </div>
            </div>
          </div>
        </SimpleLoading>
      </div>
    </SimpleCard>
  </div>
</template>

<script lang="ts" setup>
import { useSearchForm } from './composiables/useSearchForm';
import { useUserEvent } from './composiables/useUserEvent';

withDefaults(
  defineProps<{
    title: string;
  }>(),
  {
    title: ''
  }
);

const {
  loadDepartment,
  loadUserList,
  hospitalSelects,
  departmentSelects,
  userList,
  defaultProps,
  isUserListLoading,
  userSearchForm
} = useSearchForm();
const { currentUserId, onChangeHospital, onChanageDepartment, onCurrentUserItem } = useUserEvent();
</script>
<style lang="scss" scoped>
.user-list-cell {
  box-shadow: $box-shadow;
  border-radius: $border-radius;
  background-color: $color-white;
  transition: all 0.3s ease-in;
  @include cursor;
  .ulc-name {}
}
.user-list-cell__actived {
  background-color: $color-primary;
}

</style>
