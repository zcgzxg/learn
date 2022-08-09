<template>
  <div>
    about
    <button @click="goBack()">后退</button>

  </div>
</template>

<script>
export default {
  mounted() {
    console.log(this.$route) // this.$route 当前组件的路由对象主要保存各种参数， this.$router 全局组件的路由对象用来调用各种路由方法
  },
  methods: {
    goBack() {
      // 横跨历史
      // 前进传入值为正值，后退则是负值
      // this.$router.go(-1)
      // go(-1) 的效果相当于 back()
      // this.$router.back()
      // go(1) 效果相当于 forward()
      this.$router.forward()
    }
  }
}
</script>

<style>
</style>