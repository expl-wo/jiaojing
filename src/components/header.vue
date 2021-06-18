<template>
  <header>
    <div class="title">武汉交警警企共建平台</div>
    <div class="tabBox">
      <router-link to="/" class="tab">首页</router-link>
      <router-link to="user" class="tab">码图</router-link>
      <router-link to="detail" class="tab">个人码</router-link>
    </div>
    <div class="timeBox">
      <span>{{ nowDate }}</span>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      //当前日期
      nowDate: "",
    };
  },
  methods: {
    currentTime() {
      setInterval(this.formatDate, 500);
    },
    formatDate() {
      let date = new Date();
      let year = date.getFullYear(); // 年
      let month = date.getMonth() + 1; // 月
      let day = date.getDate(); // 日
      // let week = date.getDay(); // 星期
      let hour = date.getHours(); // 时
      hour = hour < 10 ? "0" + hour : hour; // 如果只有一位，则前面补零
      let minute = date.getMinutes(); // 分
      minute = minute < 10 ? "0" + minute : minute; // 如果只有一位，则前面补零
      let second = date.getSeconds(); // 秒
      second = second < 10 ? "0" + second : second; // 如果只有一位，则前面补零
      this.nowDate = `${year}/${month}/${day} ${hour}:${minute}:${second}`;
    },
    toHome() {},
    toDetail() {},
    toUser() {},
  },
  mounted() {
    this.currentTime();
  },
};
</script>

<style lang='less' scoped>
header {
  color: #fff;
  height: 60px;
  font-weight: bolder;
  font-size: 20px;
  background-color: #07112d;
  line-height: 60px;
  text-align: center;
  .title {
    width: 15%;
    float: left;
    margin-left: 20px;
  }
  .tabBox {
    width: 60%;
    float: left;
    .tab {
      padding: 20px;
      // background-color: aqua;
      cursor: pointer;
      color: #fff;
    }
  }
  .timeBox {
    width: 15%;
    float: right;
    margin-right: 20px;
  }
}
</style>