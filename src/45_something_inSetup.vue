<template>
  <div>
    <h2>{{counter}}</h2>
    <button @click="changeCounter">改变counter</button>
    <h2>{{user.name}}</h2>
    <button @click="changeName">改变name</button>
    <!-- <h2>{{msg}}</h2> -->
    <!-- <h2>{{reverseMsg}}</h2> -->
  </div>
</template>
<script>
import {
  ref,
  reactive,
  watch,
  watchEffect,
  computed,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated
} from "vue";
export default {
  data() {
    return {};
  },
  // watch 响应式更改
  // watch 接收三个参数
  // 1.相要侦听的响应式引用或 getter 函数
  // 2.一个回调
  // 3.可选的配置选项
  setup() {
    const counter = ref(0);
    // !!! ref() 返回的是带有 value 的对象一定注意
    function changeCounter() {
      counter.value++;
    }
    // watch(侦听的响应式引用, 回调函数）
    // 推测：ref创建的对象在被函数调用时暴露的是value属性，因此可以监听
    watch(counter, (newVal, oldVal) => {
      console.log("newVla:", newVal);
      console.log("oldVla:", oldVal);
    });

    const msgReactive = ref("use computed in reactive");
    const user = reactive({
      name: "user",
      age: 18,
      reverseMsg: computed(() => {
        // 返回一个带有
        return msgReactive.value
          .split("")
          .reverse()
          .join("");
      })
    });
    console.log("user中的computed对象", user.reverseMsg);
    function changeName() {
      user.name = "改变name";
    }
    // watch 无法监听到对象属性的变化
    watch(user, (newVal, oldVal) => {
      console.log("newVla:", newVal);
      console.log("oldVla:", oldVal);
    });
    // watchEffect(回调函数) 不需要指定监听的属性，组件初始化时会执行一次回调函数，自动收集依赖
    watchEffect(() => {
      console.log(user.name);
    });
    // watch 和 watchEffect 区别：
    // 1.watchEffect() 不需要指定监听属性，自动收集依赖，只要在回调中引用到了响应式的属性，只要这些属性发生改变，回调就会执行；watch只会监听指定的属性
    // 2

    //---------------------------------------------------------
    // computed
    // const msg = ref('use computed in setup')
    // const reverseMsg = computed(()=>{// 返回一个带有
    //     return msg.value.split('').reverse().join('')
    // })
    // console.log(reverseMsg.value)

    //---------------------------------------------------------

    //---------------------------------------------------------
    // 在 setup() 中使用生命周期钩子函数
    // 只需要在原始的生命周期钩子函数前加上 on 就可以，例如 onActivated, onDeactivated
    // 此外因为 setup 是围绕 beforeCreate 和 created 生命周期钩子运行的，所以不需要显示地定义它们。
    // 换句话说，在这些钩子中编写的任何代码都应该直接在 setup 中编写
    // 这些函数接受一个回调函数，当钩子被组件调用时将会被执行
    onBeforeMount(() => {
      console.log("onBeforeMount");
    });
    onMounted(() => {
      console.log("onMounted");
    });
    onBeforeUpdate(() => {
      console.log("onBeforeUpdate");
    });
    onUpdated(() => {
      console.log("onUpdate");
    });
    //---------------------------------------------------------

    return {
      counter,
      changeCounter,
      user,
      changeName
      // msg,
      // reverseMsg,
    };
  },
  // 选项式API的 watch 用法
  watch: {
    message: function(newVal, oldVal) {}
  }
};
</script>