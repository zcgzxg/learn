<template>
  <div>
    <h2>子组件内容-------------------------------</h2>
    <h2>children</h2>
    <h2>{{ message }}</h2>
    <slot name="childreSlot"><p>插槽默认内容</p></slot>
    <button @click="sendParent">发送数据</button>
    <h2>inject 获得祖先组件Name：{{ name }}</h2>
    <h2>---------------------------------------</h2>
  </div>
</template>

<script>
import { h, onUpdated, ref, toRefs, inject } from 'vue'
export default {
  props: {
    message: {
      type: String,
      default: '默认值'
    }
  },
  setup(props, context) {
    // props 是响应式的，不能够使用ES6解构，否则会消除 props 的响应性
    console.log(props.message)
    const { message } = toRefs(props) // 通过 toRefs 来维持解构后 props 的响应式
    // 如果props 中传进来的 message 是个可选参数则可能没有 message。这种情况下 toRefs 将不会为 message 创建 ref，需要使用 toRef 替换
    // const message = toRef(props, 'message')
    console.log(message.value)
    onUpdated(() => {
      console.log(message.value)
    })

    // setup 的第二个参数就是 context 暴露了一些在 setup 中有用的值
    // 1.Attribute(非响应式对象，等同于 $attrs)
    console.log(context.attrs)
    // 2.插槽（非响应式对象，等同于 $slots）
    console.log(context.slots)
    // 3.触发事件（方法，等同于 $emit）
    console.log(context.emit)
    // 4.暴露公共 property（函数）
    console.log(context.expose)
    // context 是一个普通的 JavaScript 对象，也就是说，它不是响应式的，这意味着你可以安全地对 context 使用 ES6 解构
    // setup(props, {attrs, slots, emit, expose})

    const counter = ref(0)
    function sendParent() {
      context.emit('injectContext', counter.value)
    }

    // 当 setup 返回渲染函数时，想要传递数据就需要通过 expose 暴露出去，在父组件中通过 ref property 接收
    context.expose({
      sendParent,
      counter
    })

    // return {sendParent}

    // setup 还可以返回一个渲染函数，当 setup 返回渲染函数时，想要传递数据就需要通过 expose
    // return () => h('div', counter.value)

    // 访问组件的 property
    // 执行 setup 时，只能访问一下 property：
    // props, attrs, slots, emit
    // 无法访问一下组件选项：
    // data, computed, methods, refs(模板ref)

    // 在 setup 中不要使用this，因为 setup() 是在解析其它组件选项之前被调用的，
    // 所以 setup() 内部的 this 的行为与其它选项中的 this 完全不同，
    // 这使得 setup() 在和其选项式API一起使用时可能会导致混淆

    //----------------------------------------------------------------
    // provide-inject 在 setup 中的使用
    const name = inject('name', '默认值')

    return {
      name
    }
  }
}
</script>

<style>
</style>