<template>
  <div>
      <!-- 第一种，放置字符串 -->
      <p class="active">hello</p>
      <!-- 第二种，放置对象 -->
      <!-- <p :class="{类名:Boolean}">hello</p> -->
      <p :class="{active:isActive}">hello</p>
      <p :class="{active:isActive, HelloWorld:isActive}">hello</p>
      <!-- 可识别对象 -->
      <p :class="classObj">hello</p> 
      <!-- 使用绑定class不会被普通的class覆盖而是会合并 -->
      <p :class="{active:isActive}" class='HelloWorld'>hello</p> 
      <!-- 通过computed绑定class -->
      <p :class=classObjCom>hellocomputed</p>
      <!-- 数组语法 -->
      <p :class="[classArr, active]">class数组方式</p>
      <button @click="isActive=!isActive">改变class</button>
      <!-- 混合方式 -->
      <p :class="[classArr, {active:isActive}]">混合方式</p>
      
      <!-- style的操作方式 -->
      <!-- 第一种 放置字符串 -->
      <p style="color:red">hello</p>
      <!-- 第二种 放置对象 对子属性的操作可以使用驼峰命名法或者使用引号将其包裹起来 -->
      <p :style="{color:activeColor,fontSize:fontSize,'background-color':bgColor}">hello1</p>
      <p :style="styleObj">hello2</p>
      <!-- 第三种 数组模式 -->
      <p :style="[styleObj,{border:'5px solid blue'}]">hello3</p>

  </div>
</template>

<script>
export default {
    data(){
        return{
            isActive:true,
            error:null,
            classObj:{
                active:true,
                helloworld:true
            },
            classArr:'HelloWorld',
            active:'active',
            activeColor:'red',
            fontSize:'50px',
            bgColor:'pink',
            styleObj:{color:'red',
            fontSize:'50px',
            'background-color':'pink'},
        }
    },
    computed:{
        classObjCom:function(){
            return{
                active: this.isActive && !this.error,
                HelloWorld:this.error
            }
        }
    }
}
</script>

<style>
.active{
    font-size: 50px;
    color:blue;
}
.HelloWorld{
    background-color: pink;
}
</style>