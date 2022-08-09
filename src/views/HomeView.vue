<template>
  <div class="home">
    <img class="portrait" alt="Ginlon" src="../assets/portrait.png">
    <HelloWorld msg="Welcome to My Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>

<style>
.portrait{
  width: 60%;
  margin: 20px;
  box-shadow: 5px 5px 5px rgba(0,0,128,0.3);
}
</style>