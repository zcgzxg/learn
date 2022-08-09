<template>
  <div>
    <Children></Children>
    <h2>{{a}}</h2>
    <h2>{{b}}</h2>
    <button @click="add">改变b</button>
  </div>
</template>

<script setup>
// setup 语法糖 直接在 script 标签加上 setup property
// 顶层的绑定会被暴露给模板
// 定义响应式变量还是需要从Vue中引入
import {ref} from 'vue'
// 引入组件，不需要再注册
import Children from './components/51_setupSyntacticSugarChildren.vue'
// 定义变量，在模板中使用不需要暴露，模板直接使用
const a=20
const b=ref(10)
function add(){
    b.value++
}
</script>

<style>

</style>