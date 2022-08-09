<template>
    <div>用户</div>
</template>
<!--
<script>
export default {
    props:['id'], // props 接受路由传递的数据
    mounted() {
        // 选项式API中获取 route 传递的参数
        console.log(this.$route.params)
        console.log(this.id)
    },
}
</script>
-->


<script setup>
// 组合式API中获取 route 传递参数
import { useRoute } from 'vue-router'
console.log(useRoute().params.id)

// 组合式API中使用 props 获得路由传参
const props = defineProps({
    id: String
}) 
console.log(props.id)
</script>
<style>
</style>