/*
 * @Autor: QMZhao
 * @Date: 2023-07-26 14:06:48
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-07-26 18:54:59
 * @Description: 人员配置数据加载
 * @FilePath: \servious-illness-admin\src\views\system\roles\components\ConfigUsers\components\UserList\composiables\useSearchForm.ts
 */

import { useRoleConfigTreeParams } from '/@/store/system/role';

export function useSearchForm() {
  const { setRoleConfigTreeParams } = useRoleConfigTreeParams();

  // 院区下拉列表
  const hospitalSelects = ref<Iobj[]>([]);
  // 科室树
  const departmentSelects = ref<Iobj[]>([]);
  // 人员列表
  const userList = ref<Iobj[]>([]);
  const isUserListLoading = ref(false);
  // 用户列表查询参数
  const userSearchForm = ref<RoleConfig.DepartmentUser>({
    AreaId: '',
    DeptId: ''
    // Keyword: ''
  });
  const defaultProps = {
    children: 'children',
    label: 'deptName'
  };

  /**
   * 初始化人员权限设置时功能菜单树形选择框禁用状态
   * ex: 无员工时禁用
   */
  const getUserListLength = computed(() => userList.value.length);

  const userListChange = watch(getUserListLength, (newValue: number) => {
    newValue && initModuleTreeStore();
  });

  function initModuleTreeStore(): void {
    if (!userList.value.length) {
      setRoleConfigTreeParams(null);
    }
  }

  /**
   * 数据清理
   */
  function cleanData(): void {
    hospitalSelects.value = [];
    departmentSelects.value = [];
    userList.value = [];
    userSearchForm.value = {
      AreaId: '',
      DeptId: ''
      // Keyword: ''
    };
  }

  /**
   * 院区数据加载
   */
  async function loadHospital() {
    try {
      const response = await fetchHosptAreaInfo();
      hospitalSelects.value = response;
    } catch (error) {
      hospitalSelects.value = [];
    }
  }

  /**
   * 获取院区科室信息（树状结构）
   *
   * @param areaId 院区id
   */
  async function loadDepartment(areaId: string) {
    try {
      const response = await fetchHosptAreaDepList(areaId);
      departmentSelects.value = response;
      userList.value = [];
    } catch (error) {
      departmentSelects.value = [];
      userList.value = [];
    }
  }

  /**
   * 用户列表
   *
   * @param params 院区、科室 id
   */
  async function loadUserList(params: RoleConfig.DepartmentUser) {
    isUserListLoading.value = true;
    try {
      const response = await fetchHosptAreaDepUserList(params);
      const { pageData } = response || { pageData: [] };
      isUserListLoading.value = false;
      userList.value = pageData;
    } catch (error) {
      userList.value = [];
      isUserListLoading.value = false;
    }
  }

  onBeforeMount(() => {
    loadHospital();
  });

  onBeforeUnmount(() => {
    userListChange();
    cleanData();
  });

  return {
    loadDepartment,
    loadUserList,
    defaultProps,
    ...toRefs(
      reactive({
        hospitalSelects,
        departmentSelects,
        userList,
        isUserListLoading,
        userSearchForm
      })
    )
  };
}
