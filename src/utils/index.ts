/*
 * @Author: QMZhao
 * @Date: 2020-08-19 14:05:33
 * @LastEditTime: 2021-09-15 21:53:20
 * @LastEditors: QMZhao
 * @Description: 简单的工具方法
 * @FilePath: /vue-vite-template/src/utils/index.ts
 */
import dayjs from 'dayjs';

import relativeTime from 'dayjs/plugin/relativeTime';
import duration from 'dayjs/plugin/duration';
import isBetween from 'dayjs/plugin/isBetween';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';
import isToday from 'dayjs/plugin/isToday';
import { intersectionWith, isEqual, mergeWith, unionWith } from 'lodash-es';

dayjs.extend(isBetween);
dayjs.extend(isSameOrAfter);
dayjs.extend(isSameOrBefore);
dayjs.extend(isToday);
dayjs.extend(duration);

// dayjs类型判断
type UnitTypeShort = 'd' | 'M' | 'y' | 'h' | 'm' | 's' | 'ms';
type UnitType = 'millisecond' | 'second' | 'minute' | 'hour' | 'day' | 'month' | 'year' | 'date' | UnitTypeShort;

type OpUnitType = UnitType | 'week' | 'w';

/**
 * 时间戳转换
 *
 * @param params
 * @returns
 */
export function formateMill(date?: string | number) {
  return dayjs(date).valueOf();
}

// 格式化时间数据
/**
 *
 * @param date 有参数时根据传入时间格式化, 没有就默认当前时间
 * @param hasHours 是否需要格式化成 年-月-日 时:分:秒 不传返回年-月-日
 */
export function formateDate(date?: any, hasHours = false) {
  return dayjs(date || new Date()).format(`YYYY-MM-DD${hasHours ? ' HH:mm:ss' : ''}`);
}

export function formateYearDate(date?: any, hasHours = false) {
  return dayjs(date || new Date()).format(`YYYY年MM月DD日${hasHours ? ' HH:mm:ss' : ''}`);
}

/**
 * 判断时间相同或之后
 *
 * @param {Date} dateTime
 * @param {Date} contrastDateTime
 * @param {String} dateType
 * @returns
 */
export function isNowDateSameOrAfter(dateTime: string, contrastDateTime: string, dateType = 'day') {
  return dayjs(dateTime).isSameOrAfter(contrastDateTime, dateType);
}

/**
 * 判断时间相同或之前
 *
 * @param {Date} dateTime
 * @param {Date} contrastDateTime
 * @param {String} dateType
 * @returns
 */
export function isNowDateSameOrBefore(dateTime: string, contrastDateTime: string, dateType = 'day') {
  return dayjs(formateDate(dateTime)).isSameOrBefore(contrastDateTime, dateType);
}

/**
 * 判断当前时间是否今天
 *
 * @param {Date} dateTime
 * @returns
 */
export function isNowDateTime(dateTime: string, nowDate = formateDate(new Date())) {
  return dayjs(dateTime).isToday(nowDate);
}

/**
 * 判断当前时间是否包含在内
 *
 * @param {Date} nowDate
 * @param {Date} beforeDate
 * @param {Date} afterDate
 * @returns Boolean
 */
export function isBetweenDateTime(nowDate: string, beforeDate: string, afterDate: string) {
  return dayjs(nowDate).isBetween(beforeDate, dayjs(afterDate));
}

/**
 * 增加一定时间
 *
 * @param dateType 时间类型
 * @param num 需要调整的时间数量
 */
export function formateAddDate(dateType: OpUnitType, num: number, date?: string) {
  return formateDate(dayjs(date || new Date()).add(num, dateType));
}

/**
 * 减去一定时间
 *
 * @param dateType 时间类型
 * @param num 需要调整的时间数量
 */
export function formateSubtractDate(dateType: OpUnitType, num: number, date?: string) {
  return formateDate(dayjs(date || new Date()).subtract(num, dateType));
}

/**
 *初始化时间 开始时间
 *
 * @param dateType 时间类型
 * @param date YYYY-MM-DD字符串时间格式
 */
export function formatterStartDate(dateType: OpUnitType, date?: string | number): string {
  return formateDate(dayjs(date || new Date()).startOf(dateType));
}

/**
 *初始化时间的末尾
 *
 * @param dateType 时间类型
 * @param date YYYY-MM-DD字符串时间格式
 */
export function formatterEndDate(dateType: OpUnitType, date?: string | number): string {
  return formateDate(dayjs(date || new Date()).endOf(dateType));
}

/**
 * 判断是否在某个时间范围内，包含当日
 *
 * @param startDate 开始时间
 * @param endDate 结束时间
 * @param date 对比时间
 * @returns
 */
export function isRangeDateTime(startDate: string, endDate: string, date: string): boolean {
  // 是否在之前
  const isBefore = isNowDateSameOrBefore(startDate, date);
  // 是否在之后
  const isAfter = isNowDateSameOrAfter(endDate, date);
  if (isBefore && isAfter) {
    return true;
  }
  return false;
}

/**
 * 获取月份时间
 *
 * @param date YYYY-MM-DD字符串时间格式
 * @returns 月份里的日期
 */
export function getMonthDate(date?: string): number {
  return dayjs(date || new Date()).get('date');
}

/**
 * 获取星期数
 *
 * @param date YYYY-MM-DD字符串时间格式
 * @returns 星期几 (星期天0，星期六6)
 */
export function getWeekenDate(date?: string): number {
  return dayjs(date || new Date()).get('day');
}

/**
 * 格式化小于10的天数据
 *
 * @param day 0 ~ 31 天数据
 */
export function formatDay(day: number) {
  if (day <= 9) {
    return `0${day}`;
  } else {
    return `${day}`;
  }
}

/**
 * 截取年月日时间格式的年月
 *
 * @param monthDate YYYY-MM-DD时间格式的字符串
 * @return YYYY-DD
 */
export function cutOutYearMonthHasLink(monthDate: string) {
  return monthDate.split('-').slice(0, 2).join('-');
}

/**
 * 截取年月日时间格式的年月
 *
 * @param monthDate YYYY-MM-DD时间格式的字符串
 * @return YYYYDD
 */
export function cutOutYearMonthNotLink(monthDate: string) {
  return monthDate.split('-').slice(0, 2).join('');
}

/**
 * 截取年月日时间格式的日
 *
 * @param monthDate YYYY-MM-DD时间格式的字符串
 * @return 01 ~ 31
 */
export function cutOutYearDay(monthDate: string) {
  return monthDate.split('-').slice(-1).join('');
}

/**
 * 去掉年月日时分秒的秒
 *
 * @param monthDate YYYY-MM-DD HH:mm:ss时间格式的字符串
 * @return YYYY-MM-DD HH:mm
 */
export function cutOutOfSeconds(monthDate: string) {
  return monthDate.slice(0, -3);
}

/**
 * 去掉年月日，保留时分秒
 *
 * @param date YYYY-MM-DD HH:mm:ss时间格式的字符串
 * @returns HH:mm:ss
 */
export function cutOutOfDate(date: string) {
  return date.slice(11);
}

/**
 * 相对时间计算
 *
 * @param comparisonTime 对比时间
 * @param targetTime 目标时间
 * @returns
 */
export function useRelativeTime(comparisonTime?: string, targetTime?: string) {
  dayjs.extend(relativeTime);
  return dayjs(formateDate(targetTime, true)).from(formateDate(comparisonTime, true), true);
}

/**
 *
 * 验证方法
 */

// 邮箱
export const isEmail = (s: string) => {
  return /^([el-zA-Z0-9_-])+@([el-zA-Z0-9_-])+((.[el-zA-Z0-9_-]{2,3}){1,2})$/.test(s);
};
// 身份证
export const isIdcard = (s: string) => {
  return /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(s);
};

// 电话号码
export const isPhone = (s: string) => {
  return /^([0-9]{3,4}-)?[0-9]{7,8}$/.test(s);
};

// 手机号码
export const isMobile = (s: string) => {
  // return /^1[0-9]{10}$/.test(s);
  return /^1[3456789]\d{9}$/.test(s);
};

// 是否url地址
export const isURL = (s: string) => {
  return /^http[s]?:\/\/.*/.test(s);
};

// 是否字符串
export const isString = (o: any, def?: '') => {
  return Object.prototype.toString.call(o).slice(8, -1) === 'String' ? o : def;
};

// 是否数字
export const isNumber = (o: any, def?: 0) => {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Number' ? o : def;
};

// 是否boolean
export const isBoolean = (o: any) => {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Boolean';
};

// 是否函数
export const isFunction = (o: any) => {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Function';
};

// 是否为null
export const isNull = (o: any) => {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Null';
};

// 是否undefined
export const isUndefined = (o: any) => {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Undefined';
};

// 是否对象
export const isObj = (o: any) => {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Object';
};

// 是否数组
export const isArray = (o: any): boolean => {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Array';
};

// 是否时间
export const isDate = (o: any) => {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Date';
};

// 根据url地址下载
export const download = (url: string) => {
  const isChrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
  const isSafari = navigator.userAgent.toLowerCase().indexOf('safari') > -1;
  if (isChrome || isSafari) {
    const link = document.createElement('a');
    link.href = url;
    if (link.download !== undefined) {
      const fileName = url.substring(url.lastIndexOf('/') + 1, url.length);
      link.download = fileName;
    }
    if (document.createEvent) {
      const e = document.createEvent('MouseEvents');
      e.initEvent('click', true, true);
      link.dispatchEvent(e);
      return true;
    }
  }
  if (url.indexOf('?') === -1) {
    url += '?download';
  }
  window.open(url, '_self');
  return true;
};

/*
 * 清空数组（删除索引及索引之后）
 * @param arr 数组
 * @param index 开始索引
 */
export function clearArray(arr: Array<any>, index = 0): void {
  arr.splice(index, arr.length - index);
}

// 格式化列表时间格式
export function formateTableDataValueDate(tableItem: Iobj) {
  for (const key in tableItem) {
    if (tableItem[key] && dayjs(tableItem[key]).isValid()) {
      tableItem[key] = formateDate(tableItem[key]);
    }
  }
}

/**
 * Add the object as a parameter to the URL
 * @param baseUrl url
 * @param obj
 * @returns {string}
 * eg:
 *  let obj = {a: '3', b: '4'}
 *  setObjToUrlParams('www.baidu.com', obj)
 *  ==>www.baidu.com?a=3&b=4
 */
export function setObjToUrlParams(baseUrl: string, obj: any): string {
  let parameters = '';
  for (const key in obj) {
    parameters += key + '=' + encodeURIComponent(obj[key]) + '&';
  }
  parameters = parameters.replace(/&$/, '');
  return /\?$/.test(baseUrl) ? baseUrl + parameters : baseUrl.replace(/\/?$/, '?') + parameters;
}

/**
 * Recursively merge two objects.
 * 递归合并两个对象。
 *
 * @param source The source object to merge from. 要合并的源对象。
 * @param target The target object to merge into. 目标对象，合并后结果存放于此。
 * @param mergeArrays How to merge arrays. Default is "replace".
 *        如何合并数组。默认为replace。
 *        - "union": Union the arrays. 对数组执行并集操作。
 *        - "intersection": Intersect the arrays. 对数组执行交集操作。
 *        - "concat": Concatenate the arrays. 连接数组。
 *        - "replace": Replace the source array with the target array. 用目标数组替换源数组。
 * @returns The merged object. 合并后的对象。
 */
export function deepMerge<T extends object | null | undefined, U extends object | null | undefined>(
  source: T,
  target: U,
  mergeArrays: 'union' | 'intersection' | 'concat' | 'replace' = 'replace'
): T & U {
  if (!target) {
    return source as T & U;
  }
  if (!source) {
    return target as T & U;
  }
  return mergeWith({}, source, target, (sourceValue, targetValue) => {
    if (isArray(targetValue) && isArray(sourceValue)) {
      switch (mergeArrays) {
        case 'union':
          return unionWith(sourceValue, targetValue, isEqual);
        case 'intersection':
          return intersectionWith(sourceValue, targetValue, isEqual);
        case 'concat':
          return sourceValue.concat(targetValue);
        case 'replace':
          return targetValue;
        default:
          throw new Error(`Unknown merge array strategy: ${mergeArrays as string}`);
      }
    }
    if (isObj(targetValue) && isObj(sourceValue)) {
      return deepMerge(sourceValue, targetValue, mergeArrays);
    }
    return undefined;
  });
}
