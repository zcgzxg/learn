<template>
    <div>
        新闻
    </div>
</template>
<script>
export default {
    data() {
        return {
            count: 18,
        }
    },
    props:['id'],
    // 组件内守卫
    beforeRouteEnter(to, from, next) {
        // 注意在这个守卫中是获取不到 this 的，因为这个守卫是在组件创建前执行
        console.log('路由组件进入之前');
        console.log(to, from);
        next((instance) => { // next() 回调函数中的第一个参数就是本组件的实例对象，可以调用相关属性和方法
            console.log(instance.count);
            console.log(instance.id);
        })
    },
    beforeRouteUpdate() {
        console.log('路由更新组件之前');
    },
    beforeRouteLeave() {
        console.log('路由离开组件时');
    },
}
</script>