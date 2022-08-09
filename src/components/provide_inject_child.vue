<template>
  <div>
    <p>{{obj.message}}</p>
    <p>{{newMsg}}</p>
  </div>
</template>

<script>
export default { 
    data(){
        return{
            message:'child components'
        }
    },
    computed:{
        newMsg:function(){
            return this.msg()   // 为了减少函数调用，对传递过来的函数使用计算属性进行封装
        }
    },
    inject:['obj','msg']  // 接受对象实现响应式传值
}
</script>

<style>

</style>