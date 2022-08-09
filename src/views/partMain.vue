<template>
    <div>
        Main
    </div>
</template>
<script>
export default {
    props: ['id'],
    mounted() {
        console.log(this.id)
    }
}
</script>