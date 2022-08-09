<script>
import {ref, reactive, toRefs} from 'vue'
export default {
    data(){
        return{

        }
    },
    mathods:{

    },
    components:{

    },
    computed:{

    },
    setup(){ 
        // 在组件被创建前执行
        // 在setup中应尽量避免使用 this，会找不到实例对象
        let setupMsg = 'setupMsg'
        console.log('setp')

        // ------------------setupMsg 相关逻辑代码
        // 没有响应式
        function changeSetupMsg(){
            setupMsg = '函数更改setupMsg'
            console.log(setupMsg); // 表明数据非响应式的
        }

        // 通过 ref 定义响应式变量
        // ------------------counter 相关逻辑代码
        let counter = ref(0) // ref() 返回带有 value 属性的对象
        // 将值封装在一个对象中，看似没有必要，但为了保持 JavaScript 中不同数据类型的行为统一，这是必须的，
        // 这是因为在 JavaScript 中，Number 或 String 等基本类型是通过值而非引用传递的
        // 用对象将所有值都封装起来，就可以在整个应用中安全地传递它，而不必担心在某个地方失去它的响应性
        function changeCounter(){
            counter.value++
        }

        // 通过reactive定义引用类型的数据
        // -------------------obj 相关逻辑代码
        const obj=reactive({
            name:'reactive',
            age:18,
            children:{
                name:'children节点',
            }
        })
        function changeObjName(){
            obj.name = '改变后name'
        }
        // toRefs(object) 使得解构后的数据维持响应式
        // let {name, children} = toRefs(obj)
        // return {name, childre}
        
        // TODO: ref 和 reactive 有什么区别？

        return { // 通过 return 将数据暴露出去
            setupMsg,
            changeSetupMsg,
            counter,
            changeCounter,
            obj,
            changeObjName,
            ...toRefs(obj), // 通过ES6扩展运算符解构传值可以直接获得子对象的值，但会失去响应式
        // TODO: ES6是什么？
        }
    },
    beforeCreate(){
        console.log('beforeCreate');
    },
    created(){
        console.log('created');
    },
}
</script>

<template>
<!-- 组合式API可以将代码中逻辑关注点相关的代码手机在一起 -->
    <div>
        <h2>组合式API</h2>
        <p>{{setupMsg}}</p>
        <button @click="changeSetupMsg">改变setupMsg</button>

        <!-- 模板会自动解析 value 值，所此处要用 counter 而不是 counter.value -->
        <p>{{counter}}</p>
        <button @click="changeCounter">改变counter</button>

        <p>通过父对象获取 --{{obj.name}}</p>
        <p>通过解构获取  --{{name}}</p>
        <button @click="changeObjName">改变objName</button>
        <p>{{obj.children.name}}</p>
    </div>
</template>