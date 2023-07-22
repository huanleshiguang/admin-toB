import request from '/@/utils/request';
import { BaseParams, PageResult } from '/@/types/axios';
import { DictInfo, DictValueInfo } from './types/dict';
const commonUrl = '/BaseData/DictManage';
// 统一接口管理
enum API {
  GET_BASEDICT_LIST = `${commonUrl}/GetBaseDictMainLists`,
  UPDATE_BASEDICT = `${commonUrl}/UpdateBaseDictMain`,
  ENABLED_BASEDICT = `${commonUrl}/EnabledBaseDictMain`,
  GET_BASEDICT_VALUE_LIST = `${commonUrl}/GetBaseDictRanges`,
  UPDATE_BASEDICT_VALUE = `${commonUrl}/UpdateBaseDictRange`,
  DELETE_BASEDICT_VALUE = `${commonUrl}/DeleteBaseDictRange`
}

// 获取字典列表
export const getBaseDictList = async (params: BaseParams): Promise<PageResult> =>
  await request.get({ url: API.GET_BASEDICT_LIST, data: params });
// 新增或者更新字典
export const updateBaseDict = async (data: DictInfo): Promise<any> =>
  await request.post({ url: API.UPDATE_BASEDICT, data });
// 启用停用字典
export const enabledBaseDict = async (data: { id: string; isEnabled: boolean }): Promise<any> =>
  await request.post({ url: API.ENABLED_BASEDICT, data });

// 获取字典列表
export const getBaseDictValueList = async (params: BaseParams): Promise<PageResult> =>
  await request.get({ url: API.GET_BASEDICT_VALUE_LIST, data: params });
// 新增或者更新字典值域
export const updateBaseDictValue = async (data: DictValueInfo): Promise<any> =>
  await request.post({ url: API.UPDATE_BASEDICT_VALUE, data });
// 删除字典值域
export const deleteBaseDictValue = async (rangeId: string): Promise<any> =>
  await request.post({ url: `${API.DELETE_BASEDICT_VALUE}?rangeId=${rangeId}` });
