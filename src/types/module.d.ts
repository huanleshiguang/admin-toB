/*
 * @Author: QMZhao
 * @Description:
 * @Date: 2021-08-16 11:50:24
 * @LastEditTime: 2023-02-17 15:54:33
 * @Reference:
 */
declare module "*.vue" {
  import { DefineComponent } from "vue";
  const Component: DefineComponent<{}, {}, any>;
  export default Component;
}

declare module "dayjs";

declare module "virtual:*" {
  const result: any;
  export default result;
}
