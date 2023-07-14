<!--
 * @Author: QMZhao
 * @Description: 
 * @Date: 2023-02-14 14:00:04
 * @LastEditTime: 2023-02-18 22:45:40
 * @Reference: 
-->
<template>
  <div class="breakcrumb-box">
    <el-breadcrumb class="app-breadcrumb" separator="/">
      <transition-group name="breadcrumb">
        <el-breadcrumb-item v-for="(item, index) in routes" :key="item.path">
          <span v-if="item.redirect === 'noRedirect' || index == routes.length - 1" class="no-redirect">
            {{ item.meta.title }}
          </span>
          <a v-else href="javascript: void(0)" @click.prevent="onJumpTo(item)">{{ item.meta.title }}</a>
        </el-breadcrumb-item>
      </transition-group>
    </el-breadcrumb>
  </div>
</template>

<script lang="ts" setup>
import { RouteRecordNormalized } from 'vue-router';

type PartialRouteRecordNormalized = Partial<RouteRecordNormalized>;

const privateRoute = useRoute();
const privateRouter = useRouter();

const routes = ref<any[]>([]);

watchEffect(() => {
  initBreakCrumb();
});

// 初始化面包屑导航栏
function initBreakCrumb() {
  const matched = ref<PartialRouteRecordNormalized[]>([]);
  matched.value = privateRoute.matched.filter((item) => item.meta && item.meta.title);
  const firstRoute = matched.value[0];
  if (!isDashbordPageWrapper(firstRoute)) {
    matched.value = [...[{ path: '/dashboard', meta: { title: '首页' } }], ...matched.value];
  }
  routes.value = matched.value;
}

// 判断是否首页
function isDashbordPageWrapper(route: PartialRouteRecordNormalized): boolean {
  const name = (route && route.name) as string;
  if (!name) return false;
  return name.trim() === 'Dashboard';
}

// 二级路由跳转
function onJumpTo(item: RouteRecordNormalized) {
  const { path } = item;
  console.log(item);
  privateRouter.push({
    path
  });
}
</script>

<style scoped lang="scss">
.app-breadcrumb {
  position: relative;
  min-width: 300px;
  .el-breadcrumb {
    display: inline-block;
    font-size: 14px;
    line-height: 50px;
    margin-left: 8px;

    .no-redirect {
      color: #97a8be;
      cursor: text;
    }
  }
}
.breakcrumb-box {
  position: relative;
}
/* breadcrumb transition */
.breadcrumb-move,
.breadcrumb-enter-active,
.breadcrumb-leave-active {
  transition: all 0.3s ease-in-out;
}

.breadcrumb-enter-from,
.breadcrumb-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.breadcrumb-leave-active {
  position: absolute;
  transform: translateX(180px);
}
</style>
