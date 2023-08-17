import request from '/@/utils/request';
import { ApiBranch, ApiController } from '/@/enums/dict';
import { BaseParams, PageResult } from '/@/types/axios';
import { DataItem } from 'Dictiontary';

// 统一接口管理
enum API {
  GET_DATAITEM_LIST = `${ApiBranch.BASEDATA}${ApiController.BUSINESS_CONFIG}GetDataItemConfigs`,
  SAVE_DATAITEM = `${ApiBranch.BASEDATA}${ApiController.BUSINESS_CONFIG}SaveDataItemConfig`,
  DELETE_DATAITEM = `${ApiBranch.BASEDATA}${ApiController.BUSINESS_CONFIG}DeleteDataItemConfig`
}

// 获取数据项列表
export const getDataItemList = async (): Promise<PageResult> => await request.get({ url: API.GET_DATAITEM_LIST });

// 新增或者更新数据项
export const fetchDataItem = async (data: DataItem): Promise<any> =>
  await request.post({ url: API.SAVE_DATAITEM, data });

// 删除数据项
export const deleteDataItem = async (data: { id: string; dataStatus: number }): Promise<any> =>
  await request.post({ url: API.DELETE_DATAITEM, data });
