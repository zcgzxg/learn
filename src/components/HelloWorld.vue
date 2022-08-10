<template>
  <div class="hello">
    <slot name="portrait" />
    <h1>{{ msg }}</h1>
    <p>
      Vue 学习过程
    </p>
    <p>{{ mail }}</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    mail: String,
  }
}
</script>
<style>
.hello {
  padding: 20px;
}
</style>