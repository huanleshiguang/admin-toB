<script lang="ts" setup>
import { setMenuIcons } from '/@/utils/dict';

// 菜单图标下拉
const menuIcons = setMenuIcons();

const menuIconPaneProps = withDefaults(
  defineProps<{
    // 菜单图标值
    menuIcon: string;
    // 显示隐藏图标
    menuIconVisiable: boolean;
  }>(),
  {
    menuIcon: '',
    menuIconVisiable: false
  }
);

const menuIconPaneEmits = defineEmits<{
  (event: 'update:menuIcon', iconName: string);
  (event: 'update:menuIconVisiable', visiable: boolean);
}>();

// 图标点击选择事件
function onChangeMenuIcon(value: string) {
  menuIconPaneEmits('update:menuIcon', value);
  menuIconPaneEmits('update:menuIconVisiable', !menuIconPaneProps.menuIconVisiable);
}
</script>

<template>
  <div
    v-for="(item, index) in menuIcons"
    :key="item.value"
    class="w-80 h-80 m-xAxis-5 flex-col uno-flex-center menu-icon"
    @click="onChangeMenuIcon(`${item.value}`)"
  >
    <SvgIcon v-if="index <= 3" :icon-class="item.value" class="w-40 h-40"></SvgIcon>
    <span v-else :class="['w-40 h-40 f-s-44 line-height-none iconfont', `icon-${item.value}`]"></span>
    <span>{{ item.label }}</span>
  </div>
</template>

<style lang="scss" scoped>
.menu-icon {
  @include cursor;
  border-radius: $border-radius;
  transition: all 0.3s ease-in;
  &:hover {
    background-color: rgba(#000000, 0.1);
  }
}
</style>
