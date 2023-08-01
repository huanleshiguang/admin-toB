import type { FormRules } from 'element-plus';
import type { resHospAreaDepTree, resRoleInfo } from '/@/api/system/types/user'
export function useUpdateCommon() {

  /**
 * form组件内单个select实例
 */
  const dialogLayoutRef = ref();
  const belongToTreeRef = ref();
  const bePartTreeRef = ref();
  const formRef = ref();
  // userFormtitle
  const userFormtitle = ref('');

  const isMultiple = ref<Boolean>(true);

  // 定义需要传给公共组件<common-tree-select />的字段（用于tree展示）
  const transmitProps = {
    id: 'id',
    type: 'type',
    label: 'areaDeptName',
    children: 'children'
  };
  const hospAreaDepList = ref<resHospAreaDepTree[]>([]);
  const roleList = ref<resRoleInfo[]>([]);

  /**
*  同级目录下的update组件：表单 rules
*/
  const rules = reactive<FormRules>({
    deptName: [
      {
        required: true,
        message: '请输入所属科室!',
        trigger: 'change'
      },
    ],
    userName: [
      {
        required: true,
        message: '请输入姓名！',
        trigger: 'change'
      }
    ],
    genderName: [{
      required: true,
      message: '请输入性别！',
      trigger: 'change'
    }],
    userWorkNo: [{
      required: true,
      message: '请输入用户工号！',
      trigger: 'change'
    }],
    positionLevelName: [
      {
        required: true,
        message: '请选择职务类别！',
        trigger: 'change'
      }
    ],
    userRoleIds: [{
      required: true,
      message: '请选择用户角色！',
      trigger: 'change'
    }]
  });
  /**
  * userForm:表单字段
  */
  const userForm = ref<any>({
    deptId: '',
    deptIds: [],
    userName: '',
    userIdNo: '',
    positionLevelName: '',
    genderName: '',
    userTel: '',
    userWorkNo: '',
    userRoleIds: []
  });
  return {
    ...toRefs(
      reactive({
        formRef,
        dialogLayoutRef,
        belongToTreeRef,
        bePartTreeRef,
        transmitProps,
        hospAreaDepList,
        roleList,
        isMultiple,
        userFormtitle,
        rules,
        userForm
      })
    )
  }
}
