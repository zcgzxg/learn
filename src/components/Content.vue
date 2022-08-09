<template>
<div>
    <p>二级节点=========================================</p>
    <p>-------------------------------</p>
    <HelloWorld :message='msg' staticValue='这是一个静态的传值' requiredValue='需要传值'></HelloWorld>
    <p>-------------------------------</p>
    <h2>我是组件内容</h2>
    <h2>{{msg}}</h2>
    <h2>{{obj.msg}}</h2>
    <button @click="this.msg='123123'">改变msg</button>
    <button @click="obj.msg='123123'">改变obj</button>
    <!-- <HelloWorld></HelloWorld> -->
    <button @click="sendParent">提交数据给父组件</button>
    <!-- 父组件访问子组件，$refs $children(废弃) -->
    <!-- ref:用来给元素或者子组件注册引用信息，注册后便可以通过父组件的$refs引用，普通标签也可以注册 -->
    <!-- 子组件访问父组件，$parent  -->
    <!-- 子组件访问根组件，$root -->
    <HelloWorld ref="hello" :message='msg' staticValue='这是一个静态的传值' requiredValue='需要传值'></HelloWorld>
    <p ref="pRef"></p>
    <h2>插槽的应用</h2>
    <div>
        <!-- 插槽命名后必须使用template包裹，使用v-slot属性进行匹配，否则无法替换 -->
        <!-- 会在没有提供内容的时候被渲染 -->
        <slot name="btn"><button>默认按钮</button></slot>
        <slot name="input"></slot>
        <slot name="h2"></slot>
        <!-- 作用域插槽 -->
        <!-- 通过v-bind传递数据 -->
        <slot :list="this.list"></slot>
    </div>
</div>
</template>
<script>
const obj={
    msg:'全局对象'
}
import HelloWorld from './HelloWorld.vue'
export default {
    data(){//data()必须是函数，并且要return一个对象，从而让每个组件返回一个新的对象，不会造成数据污染
        return{
            msg:'Content二级节点',
            obj,
            list:[1,2,3,4,5]
        }
    },
    components:{
        HelloWorld
    },
    methods:{
        // 在子组件中，通过$emit来触发事件
        sendParent:function(){
            // this.$emit('自定义事件名称',发送的事件参数)
            this.$emit('injectMsg',this.msg)
        }
    },
    mounted(){
        // console.log(this.$refs);
    }
}
</script>
