<template>
  <div>
    <h2>Welcome {{id}}</h2>
  </div>
</template>

<script>
export default {
  props: ["id"],
  onmount() {
    console.log(this.id);
  }
};
</script>

<style>
</style>