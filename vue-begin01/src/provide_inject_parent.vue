<template>
  <div>
    <provide_inject></provide_inject>
    <p>父节点message obj：{{obj.message}}</p>
    <p>父节点message：{{message}}</p>
    <button @click="this.obj.message='你好';this.message='好'">改变父节点message</button>
  </div>
</template>

<script>
import provide_inject from './components/provide_inject.vue'
export default {
    data(){
        return{
          message:'parent components',
          obj:{
            message:'parent components obj'
          }
        }
    },
    methods:{

    },
    components:{
        provide_inject,
    },
    // provide 作为对象形式存在时无法传递 property，需要转变为函数形式
    // provide:{
    //   msg:'parent components',
    // }
    // provide 和 inject 不是响应式绑定， prop 是响应式
    provide(){
      return{
        // msg:this.message,
        obj:this.obj, // 响应式对象
        // 传递对象就可以实现响应式的绑定，可以理解为浅拷贝，
        // 实际上子组件接收到的是传递对象的地址，
        // 因此对象的内容改变会使得所有访问改地址的地方都会改变
        // 之前的方式都是传递一个值，在子组件的作用域内新建一个变量
        msg:()=>this.message  // 通过函数传递
      }
    }
}
</script>

<style>

</style>