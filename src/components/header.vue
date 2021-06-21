<template>
  <div id="head">
    <header>
      <div class="title">武汉交警警企共建平台</div>
      <div class="tabBox">
        <router-link to="/" class="tab">门户</router-link>
        <router-link to="/home" class="tab">首页</router-link>
        <router-link to="/user" class="tab">码图</router-link>
        <router-link to="/auto" class="tab">机动车</router-link>
        <!-- <span class="tab" @click="showTipModal">机动车</span> -->
      </div>
      <div class="timeBox">
        <span>{{ nowDate }}</span>
      </div>
    </header>
  </div>
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
    showTipModal(){
      window.alert('正在开发中，敬请期待');
    }
  },
  mounted() {
    this.currentTime();
  },
  beforeDestoyed(){
    clearInterval();
  }
};
</script>

<style lang='less' scoped>
#head{
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
    padding-left: 20px;
  }
  .tabBox {
    width: 70%;
    float: left;
    .tab {
      padding: 20px;
      // background-color: aqua;
      cursor: pointer;
      color: #fff;
    }
  }
  .timeBox {
    width: 13%;
    float: right;
    // margin-right: 20px;
  }
}
</style>