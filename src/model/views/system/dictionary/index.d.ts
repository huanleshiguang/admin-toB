/**
 * 字典管理
 */
declare module 'Dictionary' {
  /**
   * 基础字典
   */
  export interface DictInfo {
    id?: string;
    parentId: string;
    dictCode: string;
    dictName: string;
    dictEnName: string;
    dictEnAbbr: string;
    remark: string;
  }
  /**
   * 基础字典值域
   */
  export interface DictValueInfo {
    id?: string;
    dictId: string;
    rangeName: string;
    rangeEnName: string;
    rangeValue: string;
    remark: string;
  }
  /**
   * 操作项配置值域
   */
  export interface ProjectOperate {
    id?: string;
    operName: string;
    operTypeCode: string;
    operTypeName: string;
    operLimitCode: string;
    operLimitName: string;
    canDelete: string;
    nurseRecordFormat: string;
    nurseDocFormat: string;
    dataItem: [];
  }
  /**
   * 数据项配置值域
   */
  export interface DataItem {
    id?: string;
    dataItemName: string;
    dataItemCode: string;
    dataItemTypeCode: string;
    dataItemTypeName: string;
    outInTypeCode: string;
    outInTypeName: string;
    useValueCode: string;
    useValueName: string;
  }
}
