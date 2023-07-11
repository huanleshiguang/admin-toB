<template>
  <el-drawer
    v-model="visible"
    class="dialog-layout"
    :size="size"
    v-bind="$attrs"
    @open="$emit('open')"
    @close="$emit('close')"
    @closed="onClosed"
  >
    <template #header>
      <!-- 标题插槽 -->
      <slot v-if="initReady" name="header" v-bind="{ data: initData, close, submit }">
        <span class="dialog-layout__title">{{ title }}</span>
      </slot>
      <span v-else-if="initError" class="color-danger">加载错误</span>
      <span v-else>加载中...</span>
    </template>

    <template #default>
      <CommonLoading v-if="initLoading" />
      <CommonError v-if="initError" :error="initError as ErrorType" />
      <!-- 默认插槽 -->
      <slot v-if="initReady" v-bind="{ data: initData, close, submit }"></slot>
    </template>
  </el-drawer>
</template>

<script setup lang="ts" name="DrawerLayout">
import { PropType } from 'vue';
import { CommonError, CommonLoading } from '/@/components/common';

const isFunction = (any) => typeof any === 'function';

type ErrorType = Error | string;
const props = defineProps({
  // 宽度
  size: {
    type: String,
    default: '656px'
  },
  // 弹窗标题
  title: {
    type: String,
    default: '未命名对话框'
  },
  // 初始化方法
  initMethod: {
    type: Function,
    default: (data) => data
  },
  // 确认方法
  sureMethod: {
    type: [Function, null] as PropType<(data) => {} | null>,
    // (data) => data
    default: null
  },
  // 确认按钮是否禁用
  sureDisable: {
    type: Boolean,
    default: false
  },
  // 显示关闭按钮
  showClose: {
    type: Boolean,
    default: undefined
  },
  // 关闭弹窗前的事件
  beforeClose: {
    type: Function,
    default: (close) => close()
  },
  // 自动关闭
  autoClose: {
    type: Boolean,
    default: false
  }
});
const visible = ref<boolean>(false);
const initLoading = ref<boolean>(false);
const initReady = ref<boolean>(false);
const sureLoading = ref<boolean>(false);
const initError = ref<ErrorType>('');
const initData = ref<any>(null);
const closedCallbacks = ref<any[]>([]);
const emit = defineEmits(['initReady', 'open', 'close', 'success', 'error', 'sure', 'cancel']);
defineExpose({
  open,
  close
});
const closable = computed(() => {
  const { showClose } = props;

  if (!showClose) return false;

  return !initLoading.value && !sureLoading.value;
});
// Dialog 打开的回调
async function open(data = {}) {
  const { initMethod } = props;
  visible.value = true;
  initError.value = '';
  initReady.value = false;
  initLoading.value = true;
  // 先初始化对话框自身
  try {
    initData.value = (await initMethod(data)) || data;

    initReady.value = true;
    emit('initReady');
  } catch (err) {
    if (process.env.NODE_ENV !== 'production') console.error('dialog-layout initMethod', err);

    initError.value = err as ErrorType;
  } finally {
    initLoading.value = false;
  }
}
// Dialog 关闭的回调
function close(callback?) {
  const { beforeClose } = props;
  if (isFunction(callback)) closedCallbacks.value.push(callback);

  beforeClose(() => {
    visible.value = false;
  });
}
const submit = async () => {
  const { autoClose, sureMethod } = props;
  const success = async (result) => {
    await nextTick();
    // @arg 确认方法调用后的结果
    // 成功回调

    emit('success', result);
    if (autoClose) close();
  };

  // 只有对话框的确认方法
  if (sureMethod) {
    try {
      sureLoading.value = true;
      const result = await sureMethod(initData);
      await success(result);
    } catch (err) {
      // @arg 确认方式调用失败的原因
      // 确认方法失败的回调
      emit('error', err);
    } finally {
      await nextTick();
      sureLoading.value = false;
    }
  } else {
    await success(null);
  }
};

const onSure = () => {
  // 弹窗确认事件的回调
  emit('sure');
  submit();
};

const onCancel = () => {
  // 弹窗取消事件的回调
  emit('cancel');
  visible.value = false;
};

const onClosed = () => {
  initReady.value = false;
  let callback;

  while ((callback = closedCallbacks.value.shift())) {
    callback();
  }
};
</script>

<style lang="scss" scoped>
.dialog-layout {
  &__title {
    line-height: var(--el-dialog-font-line-height);
    font-size: var(--el-dialog-title-font-size);
    color: var(--el-text-color-primary);
  }
}
</style>
