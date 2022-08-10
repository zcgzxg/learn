<template>
<<<<<<< HEAD
    <div>
        <h2>AntBreadcrumb</h2>
        <h2>id:{{ this.id }}</h2>

        <a-breadcrumb>
            <a-breadcrumb-item>Home</a-breadcrumb-item>
            <a-breadcrumb-item><a href="">Application Center</a></a-breadcrumb-item>
            <a-breadcrumb-item><a href="">Application List</a></a-breadcrumb-item>
            <a-breadcrumb-item>An Application</a-breadcrumb-item>
        </a-breadcrumb>
    </div>

=======
  <div>
    <h2>AntBreadcrumb</h2>
    <h2>id:{{ $route.params.id }}</h2>
  </div>
>>>>>>> 2436c09996499baa73d3c0b55192ed0a59f56a88
</template>

<script>
export default {
<<<<<<< HEAD
    mounted() {
        console.log(this.$route.params.id)
    },
    props: ['id']
=======
  mounted() {
    // console.log(this.$router.params.id)
  }
>>>>>>> 2436c09996499baa73d3c0b55192ed0a59f56a88
}
</script>
<style>
</style>