<template>
  <div>
    <h2 @click="counter++">{{counter}}</h2>
    <h2 @click="addCounter1">{{counter}}</h2>
    <!-- 绑定事件，传递参数 -->
    <h2 @click="addCounter(5)">{{counter}}</h2>
    <!-- 绑定事件，既传递参数，也传递事件对象 -->
    <h2 @click="addCounter3(5,$event)">{{counter}}</h2>
    <!-- 一个事件，绑定多个处理函数，注意处理函数需要加括号 -->
    <h2 @click="addCounter(5), addAge()">{{counter}}---{{age}}</h2>

    <!-- 事件修饰符 -->
    <!-- .stop 阻止事件冒泡 -->
    <div @click="divClick">
        <button @click.stop="btnClick">阻止冒泡</button>
    </div>
    <!-- .prevent 阻止默认行为 -->
    <form action="">
        <input type="submit" value="提交" @click.prevent="submitClick">
    </form>
    <!-- .once 只触发一次回调 -->
    <button @click.once="onceClick">只触发一次</button>

    <!-- 按键修饰符 -->
    <!-- .{keyCode(键盘编码) | keyAlias(键盘的简写)}监听键盘的某个键位 -->
    <input type="text" @keyup.enter="keyUp($event)">
  </div>
</template>

<script>
export default {
    data(){
        return{
            counter:0,
            age:18,
        }
    },
    methods:{
        addCounter1(e){
            this.counter++;
            console.log(e)//没有传参时才能读取到事件对象Event
        },
        addCounter(number) {
            this.counter+=number;
        },
        addCounter3(number,e){
            this.counter+=number;
            console.log(e)//没有传参时才能读取到事件对象Event
        },
        addAge(){
            this.age++
        },
        divClick(){
            console.log('父元素展示')
        },
        btnClick(){
            console.log('子元素展示')
        },
        submitClick(){
            console.log('提交成功')
        },
        onceClick(){
            console.log('只会触发一次')
        },
        keyUp(e){
            console.log(e.target.value)
        }
    }
}
</script>

<style>

</style>