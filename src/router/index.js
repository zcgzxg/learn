import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/antTypography",
    name: "antTypography",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/AntTypography.vue"),
  },
  {
    path: "/conditionRender",
    name: "conditionRender",
    component: () => import("../conditionRender.vue"),
  },
  {
    path: "/grid",
    name: "grid",
    component: () => import("../views/AntGrid.vue"),
  },
  {
    path: "/antlayout",
    name: "antLayout",
    component: () => import("../views/AntLayout.vue"),
  },
  {
    path: "/antspace",
    name: "antSpace",
    component: () => import("../views/AntSpace.vue"),
  },
  {
    path: "/antbreadcrumb/:id",
    name: "antBreadcrumb",
    component: () => import("../views/AntBreadcrumb.vue"),
    props:true
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
