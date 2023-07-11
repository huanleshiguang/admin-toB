<template>
  <div class="loading d-flex align-center justify-center">
    <svg class="loading__outer">
      <circle class="loading__inner" cx="25" cy="25" r="20" fill="none" stroke-width="3" stroke-linecap="round" />
    </svg>
  </div>
</template>

<script>
export default {
  name: 'CommonLoading'
};
</script>

<style scoped lang="scss">
.loading {
  position: relative;

  &__outer {
    width: 50px;
    height: 50px;
    animation: kf-outer 2s linear infinite;
  }

  &__inner {
    animation: kf-inner 1.5s ease-in-out infinite;
    stroke: #337ab7;
  }
}

@keyframes kf-outer {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes kf-inner {
  0% {
    stroke-dasharray: 1, 125;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 100, 125;
    stroke-dashoffset: -25;
  }
  100% {
    stroke-dasharray: 100, 125;
    stroke-dashoffset: -125;
  }
}
</style>
