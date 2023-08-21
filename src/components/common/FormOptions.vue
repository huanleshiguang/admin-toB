<!--
 * @Description: 用于下拉框，多选框，单选框options公共渲染组件
 * @Date: 2023-08-21 14:32:58
 * @LastEditors: [Dsy]
 * @LastEditTime: 2023-08-21 14:56:19
 * @Author: Dsy
-->
<script setup lang="ts" name="FormOptions">
type OptionType = 'option' | 'checkbox' | 'radio' | 'radio-button';
const props = defineProps({
  type: {
    type: String as PropType<OptionType>,
    default: 'option'
  },

  options: {
    type: Array,
    default: () => []
  },

  vertical: {
    type: Boolean,
    default: false
  },
  // 远程加载
  loader: {
    type: Function,
    default: undefined
  },
  // 展示的字段
  label: {
    type: String,
    default: 'label'
  },
  // 绑定的字段
  value: {
    type: String,
    default: 'value'
  },
  // 显示的方法
  showMethod: {
    type: Function,
    default: () => true
  },
  // 隐藏的方法
  disableMethod: {
    type: Function,
    default: (option) => false
  }
});
const options2 = ref([]);
watch(
  () => props.options,
  (options) => {
    const { loader } = props;
    if (loader) return;
    options2.value = options as [];
  }
);
async function load() {
  const { loader, options } = props;
  if (!loader) {
    options2.value = options as [];
    return;
  }

  try {
    options2.value = await loader();
  } catch (err) {
    // ignore
  }
}

function refresh() {
  load();
}
/**
 * 获取当前选中的option
 * @param curVal 选中的值
 */
type CurValType = String | [];
function getCurrentOptions(curVal: CurValType) {
  const { value } = props;
  if (typeof curVal === 'string') {
    return options2.value.find((item) => item[value] === curVal);
  } else {
    return options2.value.filter((item) => curVal.includes(item[value]));
  }
}
defineExpose({
  refresh,
  getCurrentOptions
});
onMounted(() => {
  load();
});
</script>
<template>
  <div class="form-options">
    <template v-if="type === 'option'">
      <el-option
        v-for="option in options2"
        v-show="showMethod(option)"
        :key="option[value]"
        :ref="option[value]"
        :disabled="disableMethod(option)"
        :value="option[value]"
        :label="option[label]"
      ></el-option>
    </template>

    <template v-else-if="type === 'radio'">
      <el-radio
        v-for="option in options2"
        v-show="showMethod(option)"
        :key="option[value]"
        :ref="option[value]"
        :class="{ vertical }"
        :disabled="disableMethod(option)"
        :label="option[value]"
      >
        {{ option[label] }}
      </el-radio>
    </template>

    <template v-else-if="type === 'radio-button'">
      <el-radio-button
        v-for="option in options2"
        v-show="showMethod(option)"
        :key="option[value]"
        :ref="option[value]"
        :disabled="disableMethod(option)"
        :label="option[value]"
      >
        {{ option[label] }}
      </el-radio-button>
    </template>

    <template v-else-if="type === 'checkbox'">
      <el-checkbox
        v-for="option in options2"
        v-show="showMethod(option)"
        :key="option[value]"
        :ref="option[value]"
        :disabled="disableMethod(option)"
        :label="option[value]"
      >
        {{ option[label] }}
      </el-checkbox>
    </template>
  </div>
</template>
<style scoped lang="scss">
.vertical {
  display: block;
  margin-bottom: 16px;
}
</style>
