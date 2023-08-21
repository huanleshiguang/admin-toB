<template>
  <div class="formula-input-wrapper">
    <div
      ref="formulaRef"
      class="input"
      :class="{ error: errorMsg }"
      :contenteditable="disabled ? 'false' : 'plaintext-only'"
      :placeholder="placeholder"
      style="ime-mode: disabled"
      @keydown.stop="onKeydown"
      @keyup="onKeyup"
      @blur="setValue"
    ></div>
    <div v-if="errorMsg" class="hint">{{ errorMsg }}</div>
    <div v-if="showSelection" ref="selection" class="formula-input-selection" @click.stop>
      <el-input ref="input" v-model="filter" placeholder="输入关键字筛选"></el-input>
      <div v-if="displayOptions.length" class="options">
        <span v-for="(item, i) in displayOptions" :key="i" class="option" @click="optionClick(item)">
          {{ item.label }}
        </span>
      </div>
      <div v-else class="empty">暂无数据</div>
    </div>
  </div>
</template>
<script setup name="FormulaInput">
import { getHTMLList, str2dom, dom2str, isHTML, validKeys, setFocus, getDiffIndex, getParentNode } from './utils';
import throttle from 'lodash/throttle';

// 初始化value值；
const initDefaultInnerModol = () => ({
  formula: '',
  vars: {}
});

const props = defineProps({
  value: {
    type: String,
    default: ''
  },
  placeholder: {
    type: String,
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  },
  scrollWrapperClassName: {
    type: String,
    default: ''
  },
  options: {
    type: Array,
    default: () => []
  }
});

const innerModel = ref({
  formula: '',
  vars: {}
});
const formulaRef = ref(null);
const selection = ref(null);
const input = ref(null);
// 过滤
const filter = ref('');
// 是否显示选择框
const showSelection = ref(false);
// 错误消息
const errorMsg = ref('');
const displayOptions = computed(() => {
  const { options } = props;
  return options.filter(({ label }) => label.includes(filter.value));
});
const throttleSetSelectionStyle = throttle(setSelectionStyle, 100);
watch(
  () => showSelection,
  (v) => {
    if (!v) {
      removeEventListener();
    }
  }
);
watch(
  () => props.value,
  (val) => {
    innerModel.value = val ? JSON.parse(val) : initDefaultInnerModol();
  }
);
const emit = defineEmits(['update:value']);
function addEventListener() {
  const { scrollWrapperClassName } = props;
  // 添加全局click监听
  window.addEventListener('click', removeSelection);
  // 监听滚定事件 定位下拉框
  if (scrollWrapperClassName) {
    const el = getParentNode(formulaRef.value, scrollWrapperClassName);
    el && el.addEventListener('scroll', throttleSetSelectionStyle);
  }
}
function removeEventListener() {
  const { scrollWrapperClassName } = props;
  // 解绑全局click监听关闭选项弹框
  window.removeEventListener('click', removeSelection);
  // 解绑全局滚动监听
  if (scrollWrapperClassName) {
    const el = getParentNode(formulaRef.value, scrollWrapperClassName);
    el && el.addEventListener('scroll', throttleSetSelectionStyle);
  }
}
function onKeyup() {
  const target = formula.value;
  const originStr = target.innerHTML;
  let list = str2dom(originStr);
  list = list.map((v) => (isHTML(v) ? dom2str(v) : v.data.split('')).join(''));
  const filteredStr = list.join('');
  if (originStr !== filteredStr) {
    const index = getDiffIndex(originStr, filteredStr);
    formulaRef.value.innerHTML = filteredStr;
    setFocus(formulaRef.value, index);
  }
}
function initDisplay() {
  innerModel.value = props.value ? JSON.parse(props.value) : initDefaultInnerModol();
  const { vars, formula } = innerModel.value;
  let result = formula;
  for (let key in vars) {
    const rule = new RegExp(key, 'g');
    const name = `<div contenteditable="false">${vars[key]}<span>${key}</span></div>`;
    result = result.replace(rule, (v, index, string) => {
      const length = v.length;
      const str = string.slice(index - 1, length + index + 1);
      if (str.startsWith('_') || str.endsWith('_')) {
        return key;
      } else {
        return name;
      }
    });
  }
  formulaRef.value.innerHTML = result;
}
function removeSelection(e) {
  showSelection.value = false;
  e && resetDisplay('@');
}
function onKeydown(e) {
  const { key } = e;
  switch (key) {
    // 禁止回车
    case 'Enter':
      e.preventDefault();
      break;
    case '@':
      // case 'Process': // 中文输入法的 @
      openSelection();
      break;
    default:
      break;
  }
}
function openSelection() {
  filter.value = '';
  showSelection.value = true;
  setTimeout(() => {
    // append to body
    document.body.appendChild(selection.value);
    setSelectionStyle();
    // 绑定监听
    addEventListener();
    // 焦点到下拉框filter input中
    input.value.focus();
  }, 0);
}
function setSelectionStyle() {
  if (!formulaRef.value) return;
  const { top, left, height, width } = formulaRef.value.getBoundingClientRect();
  selection.value &&
    selection.value.setAttribute(
      'style',
      `left: ${left}px; top: ${top + height}px; width: ${width > 300 ? width : 300}px`
    );
}
function optionClick(item) {
  const { label, value } = item;
  showSelection.value = false;
  const res = `<div contenteditable="false">${label}<span>${value}</span></div>`;
  resetDisplay('@', res);
}
function resetDisplay(from, to = '') {
  let text = formulaRef.value.innerHTML;
  if (text.includes(from)) {
    text = text.replace(new RegExp(from, 'g'), to);
    formulaRef.value.innerHTML = text;
  }
  setValue();
}
// 更新 v-model
function setValue() {
  errorMsg.value = '';
  let formula = '';
  const vars = {};
  const text = formulaRef.value.innerHTML.replace(/\sdata-spm-anchor-id=".*?"/g, '');
  const list = getHTMLList({
    text,
    prefix: '<div contenteditable="false">',
    suffix: '</div>'
  });
  list.forEach((item) => {
    const [v1, v2] = getHTMLList({
      text: item,
      prefix: '<span>',
      suffix: '</span>'
    });
    if (v2) {
      formula += v2;
      vars[v2] = v1;
    } else {
      formula += v1;
    }
  });
  const res = {
    formula,
    vars
  };
  console.log(res, 'res');
  emit('update:value', JSON.stringify(res));
}
function validate() {
  const { formula } = innerModel.value;
  errorMsg.value = '';
  if (!formula) {
    errorMsg.value = '公式不能为空';
    return false;
  }
  return true;
}
defineExpose({
  validate
});
onMounted(() => {
  initDisplay();
});
onUnmounted(() => {
  // 删除全局监听
  removeEventListener();
  // 删掉下拉框
  const ele = document.querySelector('.formula-input-selection');
  ele && ele.parentNode.removeChild(ele);
});
</script>
<style lang="scss">
@import './index.scss';
</style>
