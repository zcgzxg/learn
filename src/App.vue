<template>
  <div class="box">
    <h1 class="title">App</h1>
    <!-- <router-link class="routerLink" to="/">Home</router-link>
    <router-link class="routerLink" to="/about">About</router-link>-->
    <div class="body">
      <UserMenu class="appMenu"></UserMenu>
      <router-view class="appContent"></router-view>
    </div>
  </div>
</template>
<script>
import UserMenu from "./components/UserMenu.vue";

export default {
  data() {
    return {};
  },
  components: {
    UserMenu
  }
};
</script>

<style scoped>
.box {
  position: absolute;
  width: max(80%, 620px);
  left: 10%;
}
.body {
  position: absolute;
  width: 100%;
  border: dashed #ccc 1px;
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
  width: 200px;
  float: left;
}

.appContent {
  width: 400px;
  position: relative;
  float: left;
  left: 10px;
  top: 0px;
}
.content {
  padding: 20px;
}
</style>
