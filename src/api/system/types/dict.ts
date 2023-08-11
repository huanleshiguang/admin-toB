export interface DictInfo {
  id?: string;
  parentId: string;
  dictCode: string;
  dictName: string;
  dictEnName: string;
  dictEnAbbr: string;
  remark: string;
}
export interface DictValueInfo {
  id?: string;
  dictId: string;
  rangeName: string;
  rangeEnName: string;
  rangeValue: string;
  remark: string;
}
