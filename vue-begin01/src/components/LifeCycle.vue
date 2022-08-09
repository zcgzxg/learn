<template>
<div>
    <div>hello, world!</div>
    <p>{{counter}}</p>
    <button @click="counter++">改变counter</button>
</div>
</template>
<script>
export default {
    data(){
        return{
            counter:0
        }
    },
    beforeCreate(){
        console.log('beforeCreate');
    },
    created(){
        console.log('created');
    },
    beforeMount(){
        console.log('beforeMount');
    }, 
    mounted(){
        console.log('mounted');
    },
    beforeUpdate(){
        console.log('beforeUpdate');
    },
    updated(){
        console.log('updated');
    },
    beforeUnmount(){
        console.log('beforeUnmount');
    },
    unmounted(){
        console.log('unmounted');
    }

}
</script>