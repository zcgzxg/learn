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
    children: [
      {
        path: 'user',
        name: 'user',
        component: () => import('../views/AntBreadcrumbChildren/user.vue'),
        props: true
      },
      {
        path: 'about',
        name: 'about',
        component: () => import('../views/AntBreadcrumbChildren/about.vue'),
        props: true
      }
    ]
  },
  {
    path: "/Dropdown",
    name: "antDropdown",
    component: () => import('../views/AntDropdown.vue')
  },
  {
    path: "/Menu",
    name: "antMenu",
    component: () => import('../views/AntMenu.vue')
  },
  {
    path: "/PageHeader",
    name: "antPageHeader",
    component: () => import('../views/AntPageHeader.vue')
  },
  {
    path: '/Pagination',
    name: "antPagination",
    component: () => import('../views/AntPagination')
  },
  {
    path: '/Steps',
    name: "antSteps",
    component: () => import('../views/AntSteps.vue')
  },
  {
    path: '/AutoComplete',
    name: "antAutoComplete",
    component: () => import('../views/AntAutoComplete.vue')
  }, {
    path: '/Cascader',
    name: 'AntCascader',
    component: () => import('../views/AntCascader.vue')
  },
  {
    path: '/Checkbox',
    name: 'AntCheckbox',
    component: () => import('../views/AntCheckbox.vue')
  },
  {
    path: '/DatePicker',
    name: 'AntDatePicker',
    component: () => import('../views/AntDatePicker.vue')
  },
  {
    path: '/Form',
    name: 'AntForm',
    component: () => import('../views/AntForm.vue')
  }, {
    path: '/Form2',
    name: 'AntForm2',
    component: () => import('../views/AntForm2.vue')
  },
  {
    path: '/Form3',
    name: 'AntForm3',
    component: () => import('../views/AntForm3.vue')
  },
  {
    path: '/Input',
    name: 'AntInput',
    component: () => import('../views/AntInput.vue')
  },
  {
    path: '/Mentions',
    name: 'AntMentions',
    component: () => import('../views/AntMentions.vue')
  },
  {
    path: '/Mentions2',
    name: 'AntMentions2',
    component: () => import('../views/AntMentions2.vue')
  },
  {
    path: '/Radio',
    name: 'AntRadio',
    component: () => import('../views/AntRadio.vue')
  },
  {
    path: '/Rate',
    name: 'AntRate',
    component: () => import('../views/AntRate.vue')
  },
  {
    path: '/Select',
    name: 'AntSelect',
    component: () => import('../views/AntSelect.vue')
  }, {
    path: '/Slider',
    name: 'AntSlider',
    component: () => import('../views/AntSlider.vue')
  },
  {
    path: '/Switch',
    name: 'AntSwitch',
    component: () => import('../views/AntSwitch.vue')
  },
  {
    path:'/TimePicker',
    name:'AntTimePicker',
    component:()=>import('../views/AntTimePicker.vue')
  },
  {
    path:'/Transfer',
    name:'AntTransfer',
    component:()=>import('../views/AntTransfer.vue')
  },
  {
    path:'/Transfer2',
    name:'AntTransfer2',
    component:()=>import('../views/AntTransfer2.vue')
  },
  {
    path:'/Transfer3',
    name:'AntTransfer3',
    component:()=>import('../views/AntTransfer3.vue')
  },
  {
    path:'/TreeSelect',
    name:'AntTreeSelect',
    component:()=>import('../views/AntTreeSelect.vue')
  },
  {
    path:'/TreeSelect2',
    name:'AntTreeSelect2',
    component:()=>import('../views/AntTreeSelect2.vue')
  },
  {
    path:'/Upload',
    name:'AntUpload',
    component:()=>import('../views/AntUpload.vue')
  },
  {
    path:'/Avatar',
    name:'AntAvatar',
    component:()=>import('../views/AntAvatar.vue')
  },
  {
    path:'/Badge',
    name:'AntBadge',
    component:()=>import('../views/AntBadge.vue')
  },
  {
    path:'/Calendar',
    name:'AntCalendar',
    component:()=>import('../views/AntCalendar.vue')
  },
  {
    path:'/Calendar2',
    name:'AntCalendar2',
    component:()=>import('../views/AntCalendar2.vue')
  },
  {
    path:'/Calendar3',
    name:'AntCalendar3',
    component:()=>import('../views/AntCalendar3.vue')
  },
  {
    path:'/Card',
    name:'AntCard',
    component:()=>import('../views/AntCard.vue')
  },
  {
    path:'/Carousel',
    name:'AntCarousel',
    component:()=>import('../views/AntCarousel.vue')
  },
  {
    path:'/Collapse',
    name:'AntCollapse',
    component:()=>import('../views/AntCollapse.vue')
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
