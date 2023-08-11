import request from '/@/utils/request';
import { ApiBranch, ApiController } from '/@/enums/dict';
import { BaseParams, PageResult } from '/@/types/axios';
import { DictInfo, DictValueInfo } from './types/dict';

// 统一接口管理
enum API {
  GET_BASEDICT_LIST = `${ApiBranch.BASEDATA}${ApiController.DICT_MANAGE}GetBaseDictMainLists`,
  UPDATE_BASEDICT = `${ApiBranch.BASEDATA}${ApiController.DICT_MANAGE}UpdateBaseDictMain`,
  ENABLED_BASEDICT = `${ApiBranch.BASEDATA}${ApiController.DICT_MANAGE}EnabledBaseDictMain`,
  GET_BASEDICT_VALUE_LIST = `${ApiBranch.BASEDATA}${ApiController.DICT_MANAGE}GetBaseDictRanges`,
  UPDATE_BASEDICT_VALUE = `${ApiBranch.BASEDATA}${ApiController.DICT_MANAGE}UpdateBaseDictRange`,
  DELETE_BASEDICT_VALUE = `${ApiBranch.BASEDATA}${ApiController.DICT_MANAGE}DeleteBaseDictRange`
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
