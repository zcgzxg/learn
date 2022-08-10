<template>
  <div>
    <h1>父组件内容--------------------</h1>
    <!-- <app class="parentAttr" id="parentId" :message="message" @injectContext="injectContext">
        <template v-slot:childreSlot>
            <p>插槽内容</p>
        </template>
    </app>
    <button @click="message = '改变后的值'">改变message</button>
    -->
    <app ref="content" @injectContext="injectContext"></app>
    <button @click="changeName">改变内容</button>
    <h1>----------------------------</h1>
  </div>
</template>

<script>
import app from './components/48_props_inSetup_children.vue'
import { provide, ref } from 'vue'
export default {
  components: {
    app
  },
  data() {
    return {
      message: 'parent message'
    }
  },
  methods: {
    injectContext(value) {
      console.log(value)
    }
  },
  mounted() {
    console.log(this.$refs.content)
    this.$refs.content.sendParent()
  },
  setup() {
    // provide-inject 本身是不具备响应性的，可以通过 ref 或 reactive 的方式给其添加响应性
    const name = ref('响应式祖先内容')
    provide('name', name) // 注意传值传 name.value 会失去响应性
    function changeName() {
      name.value = '改变后-响应式-祖先组件-内容'
    }

    return { changeName }
  }
}
</script>

<style>
</style>