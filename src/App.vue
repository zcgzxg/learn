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
  width: 80%;
  left: 10%;
  /* background: red; */
}
.body {
  display: flex;
  flex-direction: row;
  justify-items: center;
  position: absolute;
  width: 100%;
  border: dashed #ccc 1px;
  flex-grow: 1;
}

.title {
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
  flex-basis: 100px;
  width: 100px;
  flex-grow: 0.2;
  flex-shrink: 0.8;
}

.appContent {
  flex-basis: 400px;
  width: 100px;
  flex-grow: 0.8;
  flex-shrink: 0.2;
}
</style>
