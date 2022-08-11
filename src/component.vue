<template>
  <div>
    <!-- 复用组件之间相互独立 -->
    <Content></Content>
    <!-- 获得子组件数据，通过自定义事件 -->
    <!-- 父组件中，通过v-on监听子组件自定义的事件 -->
    <Content @injectMsg="getChildMsg"></Content>
    <h1>{{message}}</h1>
    <Content>
      <button>插槽按钮</button>
    </Content>
    <Content>
      <input type="text" />
    </Content>
    <!-- 如果有多个值，同时放入组件进行替换，他们将会一起作为替换元素 -->
    <Content>
      <template v-slot:btn>
        <button>按钮</button>
      </template>
      <template v-slot:input>
        <input type="text" />
      </template>
      <!-- 插槽可以访问与模板其余部分相同的作用域，既不能直接访问子组件的作用域 -->
      <template v-slot:h2>
        <h2>具名插槽 {{message}}</h2>
      </template>
    </Content>
    <Content>
      <!-- 作用域插槽，访问插槽的数据 -->
      <!-- prop来的数据都会保存在v-slot绑定的对象中 -->
      <template v-slot:default="slotProps">
        <ul>
          <li v-for="item in slotProps.list" :key="item">{{item}}</li>
        </ul>
        <ol>
          <li v-for="item in slotProps.list" :key="item">{{item}}</li>
        </ol>
      </template>
    </Content>
  </div>
</template>

<script>
import Content from "./components/Content.vue";

export default {
  data() {
    return {
      message: "根节点"
    };
  },
  components: {
    Content
  },
  methods: {
    getChildMsg: function(value) {
      console.log(value);
      this.message = value;
    }
  }
};
</script>

<style>
</style>