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
    props: true,
    children:[
      {
        path:'user',
        name:'user',
        component:() => import('../views/AntBreadcrumbChildren/user.vue'),
        props:true
      },
      {
        path:'about',
        name:'about',
        component:() => import('../views/AntBreadcrumbChildren/about.vue'),
        props:true
      }
    ]
  },
  {
    path:"/Dropdown",
    name:"antDropdown",
    component:() => import('../views/AntDropdown.vue')
  },
  {
    path:"/Menu",
    name:"antMenu",
    component:()=>import('../views/AntMenu.vue')
  },
  {
    path:"/PageHeader",
    name:"antPageHeader",
    component:()=>import('../views/AntPageHeader.vue')
  },
  {
    path:'/Pagination',
    name:"antPagination",
    component:()=>import('../views/AntPagination')
  },
  {
    path:'/Steps',
    name:"antSteps",
    component:()=>import('../views/AntSteps.vue')
  },
  {
    path:'/AutoComplete',
    name:"antAutoComplete",
    component:()=>import('../views/AntAutoComplete.vue')
  },{
    path:'/Cascader',
    name:'AntCascader',
    component:()=>import('../views/AntCascader.vue')
  },
  {
    path:'/Checkbox',
    name:'AntCheckbox',
    component:()=>import('../views/AntCheckbox.vue')
  },
  {
    path:'/DatePicker',
    name:'AntDatePicker',
    component:()=>import('../views/AntDatePicker.vue')
  },
  {
    path:'/Form',
    name:'AntForm',
    component:()=>import('../views/AntForm.vue')
  },{
    path:'/Form2',
    name:'AntForm2',
    component:()=>import('../views/AntForm2.vue')
  },
  {
    path:'/Form3',
    name:'AntForm3',
    component:()=>import('../views/AntForm3.vue')
  },
  {
    path:'/Input',
    name:'AntInput',
    component:()=>import('../views/AntInput.vue')
  },
  {
    path:'/Mentions',
    name:'AntMentions',
    component:()=>import('../views/AntMentions.vue')
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
