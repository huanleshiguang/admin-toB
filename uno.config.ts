/*
 * @Autor: QMZhao
 * @Date: 2023-07-14 11:06:32
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-07-25 11:50:44
 * @Description: unocss自定义配置项
 * @FilePath: \servious-illness-admin\uno.config.ts
 */
import { defineConfig, presetAttributify, presetUno } from 'unocss';

export default defineConfig({
  /** 预设 */
  presets: [
    /** 属性化模式 & 无值的属性模式 */
    presetAttributify(),
    /** 默认预设 */
    presetUno()
  ],
  /** 自定义规则 */
  rules: [
    /** 字体大小 */
    [/^f-s-([\.\d]+)$/, ([_, num]) => ({ 'font-size': `${num}px` })],
    /** 宽度 */
    [/^w-([\.\d]+)$/, ([_, num]) => ({ width: `${num}px` })],
    /** 高度 */
    [/^h-([\.\d]+)$/, ([_, num]) => ({ height: `${num}px` })],
    /** 外边距 */
    [/^m-([\.\d]+)$/, ([_, num]) => ({ margin: `${num}px` })],
    /** 内边距 */
    [/^p-([\.\d]+)$/, ([_, num]) => ({ padding: `${num}px` })],
    /** 横向外边距 */
    [/^m-xAxis-([\.\d]+)$/, ([_, num]) => ({ margin: `0 ${num}px` })],
    /** 横向内边距 */
    [/^p-xAxis-([\.\d]+)$/, ([_, num]) => ({ padding: `0 ${num}px` })],
    /** 纵向外边距 */
    [/^m-yAxis-([\.\d]+)$/, ([_, num]) => ({ margin: `${num}px 0` })],
    /** 纵向内边距 */
    [/^p-yAxis-([\.\d]+)$/, ([_, num]) => ({ padding: `${num}px 0` })]
  ],
  /** 自定义快捷方式 */
  shortcuts: {
    'uno-wh-full': 'w-full h-full',
    'uno-flex-center': 'flex justify-center items-center',
    'uno-flex-x-center': 'flex justify-center',
    'uno-flex-y-center': 'flex items-center'
  }
});
