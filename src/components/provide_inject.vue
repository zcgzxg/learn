<template>
  <div>
    <provide_inject_child></provide_inject_child>
  </div>
</template>

<script>
import provide_inject_child from './provide_inject_child.vue'

export default {
    data(){
        return{
            message:'medial components'
        }
    },
    components:{
        provide_inject_child
    }
}
</script>

<style>

</style>