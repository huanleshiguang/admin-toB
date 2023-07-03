/*
 * @Author: QMZhao
 * @Description:
 * @Date: 2021-09-18 09:02:50
 * @LastEditTime: 2021-09-23 23:04:23
 * @Reference:
 */
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
const privateRouter = ref<null | Iobj>(null);

// 退出
function onLoginOut(): void {
  privateRouter.value?.push({
    path: "/"
  });
}

export function useDashboardEvent() {
  privateRouter.value = useRouter();
  return reactive({
    privateRouter,
    onLoginOut
  });
}
