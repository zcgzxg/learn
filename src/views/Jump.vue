<template>
    <div>
        <button @click="jump">跳转页面</button>
    </div>
</template>
<script>
export default {
    methods: {
        jump: function () {
            // if (false) { // 控制跳转
            // this.$router.push('/')
            // }
            // 通过传入对象跳转，带参数
            // this.$router.push({ path: '/user/123456' })
             // 命名路由，通过name跳转，传递参数
            // this.$router.push({ name:'news', params:{id:123} })
            // query传参，类似于get方法的传参，在url后加？传递参数 
            // this.$router.push({ path: '/about', query: { name: "参数" } })
            // 替换当前位置（历史记录）
            // this.$router.push({ path: '/about', query: { name: 'references' }, replace: true })
            this.$router.replace({ path: '/about', query: { name: 'references' } }) // 效果同上
        }
    }
}
</script>