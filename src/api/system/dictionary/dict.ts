import request from '/@/utils/request';
import { ApiBranch, ApiController } from '/@/enums/dict';
import { BaseParams, PageResult } from '/@/types/axios';
import { DictCategory, DictValueInfo } from 'Dictionary';

// 统一接口管理
enum API {
  GET_DICT_CATEGORY_LIST = `${ApiBranch.BASEDATA}${ApiController.DICT_MANAGE}GetDictCategories`,
  GET_DICT_CATEGORY_LIST_LAZY = `${ApiBranch.BASEDATA}${ApiController.DICT_MANAGE}GetDictCategoreisByParentId`,
  SAVE_DICT_CATEGORY = `${ApiBranch.BASEDATA}${ApiController.DICT_MANAGE}SaveBaseDictCategory`,
  DELETE_DICT_CATEGORY = `${ApiBranch.BASEDATA}${ApiController.DICT_MANAGE}DeleteBaseDictCategory`,
  GET_DICT_CATEGORY_ITEM_LIST = `${ApiBranch.BASEDATA}${ApiController.DICT_MANAGE}GetBaseDictItems`,
  SAVE_DICT_CATEGORY_ITEM = `${ApiBranch.BASEDATA}${ApiController.DICT_MANAGE}SaveBaseDictItem`,
  DELETE_DICT_CATEGORY_ITEM = `${ApiBranch.BASEDATA}${ApiController.DICT_MANAGE}DeleteBaseDictItem`
}

// 获取字典列表
export const fetchDictCategoryList = async (params: BaseParams): Promise<PageResult> =>
  await request.get({ url: API.GET_DICT_CATEGORY_LIST, data: params });

// 获取字典列表-lazy
export const fetchDictCategoryListLazy = async (parentId: string): Promise<any> =>
  await request.get({ url: API.GET_DICT_CATEGORY_LIST_LAZY, data: { parentId } });
// 新增或者更新字典
export const fetctEditDictCategory = async (data: DictCategory): Promise<any> =>
  await request.post({ url: API.SAVE_DICT_CATEGORY, data });
// 删除字典
export const fetchDeleteDictCategory = async (data: { id: string }): Promise<any> =>
  await request.post({ url: API.DELETE_DICT_CATEGORY, data });

// 获取字典列表
export const fetchDictCategoryItemList = async (categoryId: string): Promise<any> =>
  await request.get({ url: API.GET_DICT_CATEGORY_ITEM_LIST, data: { categoryId } });
// 新增或者更新字典值域
export const fetchEditDictCategoryItem = async (data: DictValueInfo): Promise<any> =>
  await request.post({ url: API.SAVE_DICT_CATEGORY_ITEM, data });
// 删除字典值域
export const fetchDeleteDictCategoryItem = async (rangeId: string): Promise<any> =>
  await request.post({ url: API.DELETE_DICT_CATEGORY_ITEM, data: { id: rangeId } });
