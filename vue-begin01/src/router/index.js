import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from "vue-router";
// router 实现流程
// 1.定义路由组建（或从其他文件导入）
// const Home = { template: "<div>Home</div>"}; // 一种创建组件的方式
// const About = { template: "<div>About</div>"}; // 一种创建组件的方式
// 静态导入（加载时一次性导入，会影响整个应用的加载速度）
// import Home from "../views/Home.vue";
import About from "../views/About.vue";
import User from "../views/User.vue";
import NotFound from "../views/NotFound.vue";
import News from "../views/News.vue";
import Parent from "../views/Parent.vue";
import Style1 from "../views/style1.vue";
import Style2 from "../views/style2.vue";
import Jump from "../views/Jump.vue";
import Top from "../views/partTop.vue";
import Main from "../views/partMain.vue";
import Bottom from "../views/partBottom.vue";
// 路由懒加载，用到时在加载相关组件
// component（或components）配置接收一个返回 Promise 组件的函数
// Vue Router 只会在第一次进入页面时才会获取这个函数，然后使用缓存数据。
// 这意味着可以使用更复杂的函数，只要是返回一个 Promise
const Home = ()=>import('../views/Home.vue')

// 2.定义一些路由
// 每个路由都需要映射到一个组件（先不讨论嵌套路由）
const routes = [
  {
    path: "/:id", // 依然可以传递参数（编写代码是不要直接在 / 后面跟参数）
    // 重定向 redirect
    // redirect: "/home" ,
    // 重定向 命名路由
    // redirect: { name: "home" },
    // 方法动态路由
    redirect: (to) => {
      console.log(to);
      return { path: "/home" };
    },
  },
  {
    path: "/home",
    name: "home",
    component: Home, // 路由懒加载，访问页面时再加载相关组件
  },

  {
    path: "/about",
    component: About,
    // 独立守卫,仅对本路由生效
    beforeEnter: (to, from, next) => {
      console.log(to);
      console.log(from);
      if (false) {
        next();
      } else {
        console.log("拦截路由");
        console.log(router);
        router.push({ name: "news" }); // 跳转到新闻页面，瞎写的能用不确定符不符合语法规范
      }
    },
  },
  // 动态路由
  {
    path: "/user/:id", // 通过':'传递参数
    component: User,
    props: true, // 将 props 传递给路由组件
  },

  {
    // 限制传递的 id 为数字
    // path: "/news/:id(\\d+)",
    // 有多个参数
    // path: "/news/:id+",
    // 参数可有可无（任意个参数）
    // path: "/news/:id*",
    // 参数可有可无（最多一个参数）
    name: "news",
    path: "/news/:id?",
    component: News,
    props: true,
  },
  // 嵌套路由
  {
    path: "/parent",
    // alias: '/father', // 别名
    alias: ["/father", "/f"], // 多个别名
    component: Parent,
    children: [
      // 嵌套子路由
      {
        path: "style1",
        component: Style1,
      },
      {
        path: "style2",
        component: Style2,
      },
    ],
  },

  {
    path: "/jump",
    component: Jump,
  },

  {
    path: "/show/:id",
    components: {
      default: Main,
      Top, // ES6语法 Top:Top 的缩写
      Bottom,
    },
    props: {
      //命名视图的 props 需要为每个命名视图定义 props
      default: true,
      Top: false,
      Bottom: false,
    },
  },

  // 使用正则表达式的方式来进行模糊匹配
  // 常规参数只匹配 url 片段之间的字符，用 / 分割，
  // 如果我们想匹配任意路径，我们可以使用自定义的路径参数正则表达式，
  // 在 <路径参数> 后面的括号中加入正则表达式
  { path: "/:path(.*)", component: NotFound }, // path 路径参数，匹配任意页面
];

// 3.创建路由实例并传递 'routes' 配置
const router = createRouter({
  // 4.内部提供了 history 模式的实现，为了简单起见，我们这里使用 hash 模式
  // history: createWebHashHistory(), // hash模式会在url中添加#，并且不会对服务器发送请求，会提高性能

  // history模式，不会再url中显示'#'，如果服务器端没有配置好会报404错误
  history: createWebHistory(),

  routes, // 'routes: routes' 的缩写
});

// 全局路由守卫，访问每个页面前都会触发
// 方法需要传入一个回调函数，第一个参数是跳转目标地址对象，第二个参数是原始地址对象，第三个参数为通行函数
router.beforeEach((to, come, next) => {
  console.log(to);
  console.log(come);
  next(); // 允许通行，传入第三个参数后必须执行 next() 才会跳转
});

// 5.导出实例
export default router;
