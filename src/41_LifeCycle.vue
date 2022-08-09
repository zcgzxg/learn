<template>
<div>
    <LifeCycle v-if="isShow"></LifeCycle>
    <button @click="isShow=!isShow">销毁/创建</button>
</div>
</template>
<script>
import LifeCycle from './components/LifeCycle.vue'

export default {
    data(){
        return{
            isShow:true
        }
    },
    components:{
    LifeCycle,
}
}
</script>