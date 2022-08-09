<template>
<div>
    <!-- v-model基本使用 双向绑定 -->
    <input type="text" v-model="msg">
    <h2>{{msg}}</h2>
    <!-- 
        v-model更像是一个语法糖，本质是两个操作
        1.v-bind绑定value属性
        2.v-on给当前元素添加一个input事件
     -->
     <input type="text" :value="msg" @input="changeValue($event)">
     <!-- 复选框 -->
     <!-- 单个复选框，v-model绑定的是布尔值 -->
     <input type="checkbox" v-model="check">
     <h2>{{check}}</h2>
     <!-- 多个复选框，v-model会将value值加入到数组中-->
     <input type="checkbox" v-model="fruits" value="苹果">苹果
     <input type="checkbox" v-model="fruits" value="西瓜">西瓜
     <input type="checkbox" v-model="fruits" value="梨子">梨子
     <input type="checkbox" v-model="fruits" value="香蕉">香蕉
     <input type="checkbox" v-model="fruits" value="草莓">草莓
     <input type="checkbox" v-model="fruits" value="哈密瓜">哈密瓜
     <h2>喜欢的水果，{{fruits}}</h2>
     <!-- 单选框，加了v-model时就不需要加入name来分组，但也需要加入value值-->
     <input type="radio" v-model="sex" value="男">男
     <input type="radio" v-model="sex" value="女">女
     <h2>{{sex}}</h2>
     <!-- 选项框 -->
     <!-- 单选 -->
     <select name="" id="" v-model="city">
        <option value="山东">山东</option>
        <option value="北京">北京</option>
        <option value="上海">上海</option>
        <option value="广东">广东</option>
        <option value="深圳">深圳</option>
     </select>
     <h2>{{city}}</h2>
     <!-- 多选 -->
     <select name="" id="" v-model="citys" multiple>
        <option value="山东">山东</option>
        <option value="北京">北京</option>
        <option value="上海">上海</option>
        <option value="广东">广东</option>
        <option value="深圳">深圳</option>
     </select>
     <h2>{{citys}}</h2>
     <!-- 修饰符的使用 -->
     <!-- lazy懒惰修饰符，使得实时同步转变为在change事件后同步 -->
     <input type="text" v-model.lazy="msg">
     <h2>{{msg}}</h2>
     <!-- number 将文本框中的数据转为数值类型 -->
     <input type="text" v-model.number="counter">
     <h2>{{typeof counter}}</h2>
     <!-- trim 自动过滤用户输入的首尾空字符-->
     <input type="text" v-model.trim="msg" @keydown="downmsg">
     <h2>{{msg}}</h2>
</div>  
</template>

<script>
export default {
    data(){
        return{
            counter:0,
            msg:'hello,world',
            check:true,
            fruits:[],
            sex:'man',
            city:'上海',
            citys:[],
        }
    },
    methods:{
        changeValue(e){
            this.msg=e.target.value
        },
        downmsg(){
            console.log(this.msg)
        }
    }
}
</script>

<style>

</style>