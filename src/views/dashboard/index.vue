<!--
 * @Autor: QMZhao
 * @Date: 2021-09-17 22:21:32
 * @LastEditors: zhao
 * @LastEditTime: 2023-02-18 22:51:57
 * @Description: 
 * @FilePath: /vite-element-plus-zhao-template/src/views/dashboard/index.vue
-->

<template>
  <div class="w_100 h_100">
    <span>首页</span>
    {{ getToken }}
    <BarChart></BarChart>
  </div>
</template>

<script lang="ts">
import { useDashboardEvent } from "/@/composition/dashboard/useDashboardHandle";

import { useUserLoginToken } from "/@/store/login/useLogin";

import { BarChart } from "/@/components/dashboard";

export default defineComponent({
  name: "dashboard",
  components: {
    BarChart
  },
  setup() {
    const { token } = useUserLoginToken();
    const getToken = computed(() => token);
    const reactiveData = reactive({
      getToken
    });
    const dataRefs = toRefs(reactiveData);

    return { ...dataRefs, ...toRefs(useDashboardEvent()) };
  }
});
</script>
<style lang="scss" scoped></style>
