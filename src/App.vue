<template>
  <div class="box">
    <h2 class="title">App</h2>
    <!-- <router-link class="routerLink" to="/">Home</router-link>
    <router-link class="routerLink" to="/about">About</router-link> -->
    <UserMenu></UserMenu>
    <router-view></router-view>
  </div>
</template>
<script>
import UserMenu from "./components/UserMenu.vue"
export default {
  data() {
    return {
    }
  },
  components: {
    UserMenu
  },
}
</script>

<style>
.box {
  display: felx;
  flex-direction: row;
  justify-items: center;
  position: absolute;
  left: calc(50% - 350px);
  width: 700px;
  border: dashed #ccc 1px;
  padding: 20px;
}

.title {
  margin: 0;
  padding: 10px 0px;
}

.routerLink {
  padding: 5px 10px;
  text-decoration: none;
  background: #;
}

.routerLink:hover {
  color: aquamarine;
}
</style>
