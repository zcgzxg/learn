<template>
  <div class="home">
    
    <HelloWorld msg="Welcome to My Vue.js App" mail="2675130594@qq.com" >
      <template #portrait>
        <img class="portrait" alt="Ginlon" :src="imgSrc[index]" />
        <a-button class="changeButton" type="primary" @click="changeImg">切换图片</a-button>
      </template>
    </HelloWorld>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  data(){
    return{
      index:0,
      imgSrc :[require('../assets/portrait.png'), require("../assets/logo.png")],
    }
  },
  methods:{
    changeImg:function(){
      this.index++
      if(this.index+1 > this.imgSrc.length){
        this.index = 0
      }
    }
  }
}
</script>

<style>
.portrait{
  width: 60%;
  margin: 20px;
  box-shadow: 5px 5px 5px rgba(0,0,128,0.3);
  display: block;
}
.changeButton{
  display: block;
  margin: 0px 20px 20px;
}
</style>