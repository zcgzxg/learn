<template>
  <div class="box">
    <h1 class="title">App</h1>
    <!-- <router-link class="routerLink" to="/">Home</router-link>
    <router-link class="routerLink" to="/about">About</router-link> -->
    <div class="body">
      <UserMenu class="appMenu"></UserMenu>
      <router-view class="appContent"></router-view>
    </div>

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
  position: absolute;
  left: calc(50% - 350px);
  width: 700px;
  
}
.body {
  display: flex;
  flex-direction: row;
  justify-items: center;
  position: absolute;
  width: 700px;
  border: dashed #ccc 1px;
}

.title {
  width: 50px;
  margin: 0;
  padding: 10px 0px 10px 10px;
}

.routerLink {
  padding: 5px 10px;
  text-decoration: none;
}

.routerLink:hover {
  color: aquamarine;
}

.appMenu {
  width: 200px;
}

.appContent {
  width: 400px;
}
</style>
