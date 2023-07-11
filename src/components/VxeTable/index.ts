/*
 * @Author: QMZhao zhao971462054@163.com
 * @Date: 2023-07-10 10:33:55
 * @LastEditors: QMZhao zhao971462054@163.com
 * @LastEditTime: 2023-07-11 17:17:26
 * @FilePath: \servious-illness-admin\src\components\VxeTable\index.ts
 * @Description: vxetable 配置项
 */
import { App } from 'vue';
import XEUtils from 'xe-utils';
import {
  // 全局对象
  VXETable,

  // 表格功能
  Filter,
  Edit,
  Menu,
  Export,
  Keyboard,
  Validator,

  // 可选组件
  Icon,
  Column,
  Colgroup,
  // Grid,
  // Tooltip,
  // Toolbar,
  Pager,
  // Form,
  // FormItem,
  // FormGather,
  // Checkbox,
  // CheckboxGroup,
  // Radio,
  // RadioGroup,
  // RadioButton,
  // Switch,
  // Input,
  Select,
  // Optgroup,
  // Option,
  // Textarea,
  // Button,
  // Modal,
  // List,
  // Pulldown,

  // 表格
  Table
} from 'vxe-table';
import zhCN from 'vxe-table/es/locale/lang/zh-CN';
import 'vxe-table/lib/style.css';
import 'vxe-table/styles/variable.scss';
// import 'vxe-table/styles/cssvar.scss';

// 按需加载的方式默认是不带国际化的，自定义国际化需要自行解析占位符 '{0}'，例如：
VXETable.setup({
  i18n: (key, args) => XEUtils.toFormatString(XEUtils.get(zhCN, key), args)
});

export function useTable(app: App<Element>) {
  // 表格功能
  app.use(Filter).use(Edit).use(Menu).use(Export).use(Keyboard).use(Validator);

  // 可选组件
  app
    .use(Icon)
    .use(Column)
    .use(Colgroup)
    // .use(Grid)
    // .use(Tooltip)
    // .use(Toolbar)
    .use(Pager)
    // .use(Form)
    // .use(FormItem)
    // .use(FormGather)
    // .use(Checkbox)
    // .use(CheckboxGroup)
    // .use(Radio)
    // .use(RadioGroup)
    // .use(RadioButton)
    // .use(Switch)
    // .use(Input)
    .use(Select)
    // .use(Optgroup)
    // .use(Option)
    // .use(Textarea)
    // .use(Button)
    // .use(Modal)
    // .use(List)
    // .use(Pulldown)

    // 安装表格
    .use(Table);
}

// 注册VXETable
export function setupVXETable(app: App<Element>) {
  app.use(useTable);
}
