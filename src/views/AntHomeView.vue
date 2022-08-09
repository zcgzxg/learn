<template>
<div>
  <h2>Home</h2>
  <Hello></Hello>
  
  <router-link to="/">主页</router-link>
  <router-link to="/about">关于</router-link>
  <RouterView></RouterView>
</div>
</template>

<script>
import Hello from '../components/Hello.vue'
export default{
  components:{
    Hello
  }
}
</script>
