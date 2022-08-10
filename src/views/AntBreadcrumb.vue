<template>
    <div>
        <h2>AntBreadcrumb</h2>
        <h2>id:{{ this.id }}</h2>

        <a-breadcrumb>
            <a-breadcrumb-item>Home</a-breadcrumb-item>
            <a-breadcrumb-item>Application Center</a></a-breadcrumb-item>
            <a-breadcrumb-item>Application List</a></a-breadcrumb-item>
            <a-breadcrumb-item>An Application</a-breadcrumb-item>
        </a-breadcrumb>
    </div>

</template>

<script>
export default {
    mounted() {
        console.log(this.$route.params.id)
    },
    props: ['id']
}
</script>
<style>
</style>