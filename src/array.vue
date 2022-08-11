<template>
  <div>
    <ul>
      <li v-for="item in list" :key="item">{{item}}</li>
    </ul>
    <button @click="changeList">改变数组</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [1, 3, 6, 5, 4]
    };
  },
  methods: {
    changeList: function() {
      //通过索引值去修改数组
      // this.list[5]=7
      // vue2 是不能检测索引值修改数组的，也就不能进行响应式渲染。而 vue3 是可以的
      //push();给数组末尾添加元素
      // this.list.push(7, 8, 9)
      //pop();删除数组最末尾元素
      // this.list.pop()
      //shift();删除数组的第一位
      // this.list.shift()
      //unshift();添加元素到数组首位
      // this.list.unshift(0,9,8)
      //splice();//删除元素、插入元素、替换元素
      // vue2时不支持使用索引修改数组，就用splice进行替换
      // 删除元素 splice(操作位置下标, [切片长度], 新增元素)
      // this.list.splice(1,2)
      // 插入元素 splice（操作位置下标, 切片长度0，新增元素...）
      // this.list.splice(1,0,7,8,9)
      // 替换元素
      // this.list.splice(1,3,7,8,9)
      // sort(); 排序
      // this.list.sort()
      //reverse(); 反转
      this.list.reverse();
    }
  }
};
</script>

<style>
</style>