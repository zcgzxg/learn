<script>
export default{
  data(){
    return{
      msg:'Hello组件',
    }
  },
  // props:['message','staticValue']  // 列表接收数据
  // 所有的props都是单向下行绑定数据流，防止子组件意外改变父组件状态
  props:{ // 对象接收数据
    // 1.接收指定类型数据
    message:String,
    staticValue:String,
    // 2.限制默认值
    defaultValue:{
      type:String,
      default:'默认值'
    },
    requiredValue:{
      type:String
      default:'必须传值',
      required:true
    }
  },
  mounted(){
    // 通过$parent获得父组件属性,尽量通过props传值，避免组件被不同的父组件复用时产生错误
    console.log(this.$parent)
  }
}
</script>

<template>
<div>
<h1>{{ msg }}</h1>
<h1>{{message}}</h1>
<h1>{{staticValue}}</h1>
<h1>{{defaultValue}}</h1>
<h1>{{requiredValue}}</h1>
</div>
</template>

<style>
</style>
