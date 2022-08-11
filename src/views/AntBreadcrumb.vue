<template>
  <div>
    <h2>已登入ID:{{id}}</h2>
    <h2>当前页面:{{currentPath}}</h2>
    <!-- :routers 接收一个对象，对象中包含一个路由数组 -->
    <a-breadcrumb :routes="routes">
      <template #itemRender="{ route, routes}">
        <!-- spna 和 router-link 只能显示一种，当前页面是span 可以跳转的页面时 router-link -->
        <span v-if="currentPage.at(-1) == route.path">{{ route.breadcrumbName }}</span>
        <!-- ``模板字符串拼接url -->
        <router-link
          @click="refreshCurrentPage"
          v-else
          :to="{
          path:`${basePath}/${route.path}`,
          params:{id:UserID}
          }"
        >{{ route.breadcrumbName }}</router-link>
      </template>
    </a-breadcrumb>
    <router-view></router-view>
    <br />
  </div>
</template>
<script>
import { defineComponent, ref, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
export default defineComponent({
  props: ["id"], // 获取路由传参
  setup(props) {
    const UserID = "Ginlon";
    // console.log(props);
    const route = useRoute();
    // console.log("route", route);
    const currentPath = ref(route.path);
    console.log(currentPath);

    // console.log("currentPath", currentPage.at(-1));

    // TODO:需要点击两次才能够更新currentPath
    // 原因不详
    function refreshCurrentPage() {
      console.log("refresh", currentPath);
      console.log(route.path);
      currentPath.value = route.path;
    }
    const currentPage = computed(() => {
      console.log("计算属性执行了");
      return currentPath.value.split("/");
    });

    const router = useRouter();
    // console.log("route", route);
    // TODO:此处是通过固定索引获得子路由表，待改进
    const childrenRoutes = router.options.routes[6].children;
    // 调整数组格式符合breadcrumb语法
    childrenRoutes.map(currentValue => {
      currentValue.breadcrumbName = currentValue.name;
      currentValue.params = { id: props.id };
    });
    const routes = ref([
      {
        path: "user",
        breadcrumbName: "User"
      },
      {
        path: "about",
        breadcrumbName: "About"
      }
    ]);

    // console.log(childrenRoutes);
    // console.log("router", childrenRoutes);
    return {
      basePath: "/antbreadcrumb/" + UserID,
      childrenRoutes,
      routes,
      currentPage,
      refreshCurrentPage,
      currentPath
    };
  }
});
</script>