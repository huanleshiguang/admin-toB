<!--
 * @Author: 赵启铭
 * @Date: 2020-12-19 10:39:44
 * @LastEditTime: 2023-07-12 16:47:00
 * @Description: 
 * @FilePath: \servious-illness-admin\src\components\common\CustomDrawer.vue
-->
<template>
  <div class="custom-drawer h100">
    <!-- 抽屉组件 -->
    <div :class="['drawer-container', drawerVisiable && 'slide-in']" :style="{ width: `${drawerWidth}px` }">
      <slot name="content" />
      <p v-show="drawerVisiable" class="drawer-close close-common" @click="handleCloseDrawer">
        <SvgIcon :icon-class="'cha'" class="close-icon"></SvgIcon>
      </p>
    </div>
    <!-- 遮罩层 -->
    <div v-show="drawerVisiable" class="drawer-wrapper" @click="handleCloseDrawer"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';

export default defineComponent({
  name: 'CustomDrawer',

  props: {
    // 抽屉组件标题
    title: {
      type: String,
      default: ''
    },
    // 二级嵌套图标
    iconName: {
      type: Boolean
    },
    // 抽屉容器宽度
    drawerWidth: {
      type: Number,
      default: 1063
    },
    // 显示抽屉参数
    drawerVisiable: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean
    }
  },
  setup(props, { emit }) {
    const data = reactive({
      handleCloseDrawer: () => {
        emit('update:drawerVisiable', !props.drawerVisiable);
        emit('closeCustomDrawer');
      }
    });
    const dataRefs = toRefs(data);

    return {
      ...dataRefs
    };
  }
});
</script>

<style scoped lang="scss">
.custom-drawer {
  .drawer-container {
    background: white;
    @include slideX;
    right: -40px;
    top: auto;
    bottom: 0;
    // width: 600px;
    height: 100%;
    border-top: 1px solid;
    box-shadow: -3px 3px 12px rgba(33, 33, 33, 0.05);
    border-color: rgba(0, 0, 0, 0.09);
    &.slide-in {
      transform: translateX(-40px);
      // z-index: 2024;
      z-index: 1032;
    }
    .drawer-close {
      position: absolute;
      left: -40px;
      top: 30px;
      @include cursor;
    }
    .close-common {
      width: 40px;
      height: 40px;
      text-align: center;
      line-height: 40px;
      background: $color-primary;
      opacity: 1;
      border-radius: 5px 0px 0px 5px;
      .close-icon {
        fill: $color-white;
      }
    }
    .drawer-header {
      padding: 30px 30px 0;
      @include flex;
      @include flex-secondary-axis-center;
      .draw-icon {
        width: 18px;
        height: 18px;
        transform: rotate(180deg);
        @include cursor;
      }
    }

    .drawer-content {
      position: relative;
    }
    .drawer-loading {
      height: calc(100% - 54px);
    }
  }
  .drawer-wrapper {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    // z-index: 2023;
    z-index: 1031;
    background: rgba(0, 0, 0, 0.3);
  }
}
</style>
