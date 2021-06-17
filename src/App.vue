<template>
  <div id="app">
    <!-- <router-link to="/">首页</router-link>
    <router-link to="detail">详情页</router-link>
    <router-link to="user">用户信息</router-link> -->
    <router-view />
  </div>
</template>

<script>
import Home from "./components/home/Home"
import Detail from "./components/detail/Detail"
import User from "./components/user/User"
export default {
  name: "App",
  data: function() {
    return {
      isShow: true
    };
  },
  components: {
    Home,
    Detail,
    User
  }
};
</script>

<style lang='less' src='./app.less'>
</style>
