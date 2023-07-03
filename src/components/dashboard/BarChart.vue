<!--
 * @Author: QMZhao
 * @Description: 
 * @Date: 2022-10-31 14:15:49
 * @LastEditTime: 2023-02-03 17:15:51
 * @Reference: 
-->
<script lang="ts" setup>
// import { ref, onMounted } from "vue";
import * as echarts from "echarts";

import type { EChartsOption } from "echarts";

import { useEcharts } from "/@/composition/app-common/useEcharts";
import { debounce } from "lodash";

const barChart = ref<HTMLDivElement | null>(null);
const myChart = ref<Iobj | null>(null);

// const colorList = ["#9E87FF", "#73DDFF", "#fe9a8b", "#F56948", "#9E87FF"];
const option: EChartsOption = {
  tooltip: {
    trigger: "item"
  },

  series: [
    {
      name: "访问来源",
      type: "pie",
      radius: "80%",
      center: ["50%", "50%"],
      color: ["#5ab1ef", "#b6a2de", "#67e0e3", "#2ec7c9"],
      data: [
        { value: 500, name: "电子产品" },
        { value: 310, name: "服装" },
        { value: 274, name: "化妆品" },
        { value: 400, name: "家居" }
      ].sort(function (a, b) {
        return a.value - b.value;
      }),
      roseType: "radius",
      animationType: "scale",
      animationEasing: "exponentialInOut",
      animationDelay: function () {
        return Math.random() * 400;
      }
    }
  ]
};

function initCharts(): void {
  myChart.value = echarts.init(barChart.value as HTMLDivElement);
  myChart.value.setOption(option);
}

const initResizeEvent = debounce(() => {
  myChart.value!.resize({
    width: "auto",
    height: "auto"
  });
}, 100);

useEcharts(window, "resize", initResizeEvent);
// myChart.value && useEcharts(window, "resize", myChart.value);

onMounted(() => {
  // console.log("myChart--", myChart);
  // myChart && myChart!.setOption(option)
  initCharts();
  // window.addEventListener("resize", initResizeEvent)
});
</script>

<template>
  <div ref="barChart" class="bar-chart-container" id="barChart"></div>
</template>

<style scoped lang="scss">
.bar-chart-container {
  // width: 400px;
  // height: 500px;
  width: 100%;
  height: 100%;
}
</style>
