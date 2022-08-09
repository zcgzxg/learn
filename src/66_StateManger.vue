<script>
// 状态管理
// Vue全家桶中 VueX 负责状态管理
// 所谓状态管理就是对整个应用的全局属性的集中管理
// 不使用 VueX 进行状态管理
// provide/inject 跨级通信
import store from './store'
import Home from './views/Home.vue'

export default {
    provide: {
        store
    },
    components: {
        Home
    },
}
</script>
<template>
    <Home></Home>
</template>