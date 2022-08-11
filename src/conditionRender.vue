<template>
  <div>
    <!-- v-if -->
    <p v-if="age>18">我是成年人了</p>
    <p v-else-if="age==18">我今天刚好18岁</p>
    <p v-else>我还是小孩</p>
    <!-- 在<template>元素上使用v-if条件渲染分组 -->
    <!-- template是不可见元素，最终渲染时是不会显示此元素 -->
    <template v-if="age>=18">
      <p>你好</p>
      <p>你好</p>
      <p>你好</p>
      <p>你好</p>
      <p>你好</p>
    </template>
    <!-- v-show -->
    <p v-show="sex=='man'">男生</p>
    <p v-show="sex=='woman'">女生</p>
    <!-- v-show的元素始终会被渲染并保留在DOM中，v-show只是简单地切换元素的display -->
    <!-- v-if只要后面为false，对应的元素和子元素都不会被渲染，控制dom元素的创建和销毁，运行时条件很少改变，或者一次性渲染时使用-->
    <h2 v-if="isShow">标题内容1 v-if</h2>
    <h2 v-show="!isShow">标题内容2 v-show</h2>
    <button @click="isShow=!isShow">改变isShow</button>

    <!-- v-for -->
    <ul>
      <li v-for="item in person" :key="item">{{item}}</li>
    </ul>
    <!-- 使用 of 替代 in 作为分隔符 -->
    <ul>
      <li v-for="item of person" :key="item">{{item}}</li>
    </ul>
    <ul>
      <li v-for="(item,index) in person" :key="index">{{ item }}-->{{ index }}</li>
    </ul>
    <!-- v-for 使用对象,item 表示键值，key 表示键名,(键值，键名，索引值)-->
    <ul>
      <li v-for="(item, key, index) in personObj" :key="item">{{index}} : {{key}} : {{item}}</li>
    </ul>
    <!-- 为了给Vue一个提示，以便它能够跟踪每个节点的身份，从而重用和重新排序现有元素 -->
    <!-- key：唯一的标识 -->
    <h3>没有key</h3>
    <ul>
      <li v-for="item in person" :key="item">
        <input type="checkbox" name id />
        {{item}}
      </li>
    </ul>
    <!-- 没有key时是按照同级元素的顺序进行标识，添加key以后则可以使得浏览器分辨出每个元素 -->
    <h3>添加key</h3>
    <ul>
      <li v-for="item in person" :key="item">
        <input type="checkbox" name id />
        {{item}}
      </li>
    </ul>
    <!-- TODO:此处案例仍存在bug，使用item作为key时，内容相同时（存在多个赵六）浏览器依然会按照顺序标识元素，为了避免此种状况key必须唯一 -->
    <button @click="addPerson">增加</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      age: 19,
      sex: "man",
      isShow: true,
      person: ["张三", "李四", "王五"],
      personObj: { name: "张三", age: 18, sex: "男" }
    };
  },
  methods: {
    addPerson: function() {
      this.person.unshift("赵六");
    }
  }
};
</script> 

<style>
</style>