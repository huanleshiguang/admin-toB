/*
 * @Author: QMZhao
 * @Description: 
 * @Date: 2022-10-31 14:26:10
 * @LastEditTime: 2022-10-31 17:05:11
 * @Reference: 
 */
import { reactive, Ref, onMounted, onBeforeMount } from "vue";

import * as Ecahrts from "echarts";

import { debounce } from "lodash-es";

// export function useEcharts(target: Iobj, event: string, chartRef: Iobj | null) {
export function useEcharts(target: Iobj, event: string, callback: (e: Event) => void) {

  onMounted(() => target.addEventListener(event, callback))

  onBeforeMount(() => target.removeEventListener(event, callback))
}