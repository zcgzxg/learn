<template>
    <div>
        <!-- vue_router 是居于路由和组件的，路由是用来设定访问路径，将路径和组件映射起来 -->
        <h1>HEllO</h1>
        <p>
            <!-- 使用 router-link 组件进行导航 -->
            <!-- 通过传递 'to' 来指定链接 -->
            <!-- '<router-link>' 将呈现一个带有正确 'href' 属性的 '<a>' 标签 -->
            <router-link to="/home">Go to Home</router-link>
            <router-link to="/about">Go to About</router-link>
            <router-link to="/user/123">Go to User</router-link>
            <!-- <router-link to="/news/456">News</router-link> -->
            <!-- 命名路由 -->
            <router-link :to="{name:'news', params:{id:456}}">News</router-link>
            <router-link to="/parent">Parent</router-link>
            <router-link to="/Jump">Jump</router-link>
        </p>
        <!-- 路由出口 -->
        <!-- 路由匹配到的组件将渲染在这里 -->
        <!-- 命名视图，同级展示多个视图 -->
        <router-view name="Top"></router-view>
        <!-- 默认展示default -->
        <router-view ></router-view> 
        <router-view name="Bottom"></router-view>
    </div>
</template>
<script setup>
// /*
//     router 实现流程
//     1.定义路由组建（或从其他文件导入）
//         const Home = { template: '<div>Home</div>'}
//         const About = { template: '<div>About</div>'}

//     2.定义一些路由
//         每个路由都需要映射到一个组件（先不讨论嵌套路由）
//     const routes = [
//         { path: '/', component: Home },
//         { path: '/about', component: About },
//     ]

//     3.创建路由实例并传递 'routes' 配置
//     const router = VueRouter.createRouter({
//         4.内部提供了 history 模式的实现，为了简单起见，我们这里使用 hash 模式
//         history: VueRouter.createWebHistory(),
//         routes, // 'routes: routes' 的缩写
//     })

//     5.创建并挂载根实例
//     const app = Vue.CreateApp({})
//     确保 _use_ 路由实例
//     整个应用支持路由
//     app.use(router)

//     app.mount('#app')

//     完成！ 
// */

// =======================================================================================
// 将 props 传递给路由组件
// 在组件中使用 $router 会与路由紧密耦合，这限制了组件的灵活性，因为它只能用于特定的 URL。
// 虽然这不一定是坏事，但我们可以通过 props 配置来解除这种行为


</script>

<style>
</style>