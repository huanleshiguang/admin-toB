/**
 * 角色管理
 */
declare namespace RoleConfig {
  /**
   * 角色配置表单
   */
  export interface RoleForm {
    id?: string | number;
    // 角色代码
    roleCode: string;
    // 角色名称
    roleName: string;
    // 描述
    remark?: string;
  }

  /**
   * 角色权限接口参数
   */
  export interface RolePrivsParams {
    // 角色配置时: 0  人员配置时: 1
    objType: string | number;
    // objType=0：角色ID objType=1：人员ID
    objType: string | number;
  }

  /**
   * 更新角色权限参数
   */
  export interface RoleSaveParams extends RolePrivsParams {
    // 角色菜单代码集
    menuIds: (string | number)[];
    // menuIds: string[] | number[];
  }

  /**
   * 科室下人员查询
   */
  export interface DepartmentUser extends ICUCommon.TableCommon {
    areaId?: string;
    deptId?: string;
    Keyword?: string;
  }
}
