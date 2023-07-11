<template>
  <div class="error flex flex-col flex-items-center justify-center">
    <svg
      v-if="icon"
      class="error__icon"
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
      :width="size"
      :height="size"
    >
      <path
        class="error__icon__path"
        d="M512 64a448 448 0 1 1 0 896A448 448 0 0 1 512 64zM333.824 237.632L243.328 328.128 424.32 509.12l-183.872 183.872 90.56 90.56L514.88 599.68l180.992 180.992 90.496-90.496-180.992-181.056 178.176-178.112-90.56-90.56-178.112 178.176-181.12-180.992z"
      ></path>
    </svg>

    <slot>
      <p class="error__message">
        {{ message }}
      </p>
    </slot>
  </div>
</template>

<script setup lang="ts" name="CommonError">
import { PropType } from 'vue';

const props = defineProps({
  // 是否显示icon
  icon: {
    type: Boolean,
    default: true
  },
  // icon大小
  size: {
    type: Number,
    default: 36
  },
  // 显示文案
  error: {
    type: [Error, String] as PropType<Error | string>,
    default: ''
  }
});
const message = computed(() => {
  const { error } = props;
  if (typeof error === 'string') return error;
  return error.message;
});
</script>

<style scoped lang="scss">
.error {
  position: relative;

  &__icon {
    margin-bottom: 4px;

    &__path {
      fill: #fe694a;
    }
  }

  &__message {
    font-size: 12px;
    font-weight: 400;
    color: #fe694a;
  }
}
</style>
