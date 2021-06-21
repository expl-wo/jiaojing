<template>
  <div id="doorPage">
    <p><span>{{ nowDate }}</span></p>
    <h2>XXX企业统一门户</h2>
    <div class="menu">
      <div class="menu1" @click="enterHome">
        <img src="../assets/img/u1073.png"/>
        <p>XXXXXXXX系统</p>
      </div>
      <div class="menu2">
        <img src="../assets/img/u1074.png" alt="" />
        <p>XXXXXXXX系统</p>
      </div>
      <div class="menu3">
        <div class="subMenu">
            <img src="../assets/img/u1075.png" alt="click me to enter">
        </div>
        <div class="subMenu">
            <img src="../assets/img/u1077.png" alt="click me to enter">
        </div>
        <div class="subMenu">
            <img src="../assets/img/u1076.png" alt="click me to enter">
        </div>
        <div class="subMenu">
            <img src="../assets/img/u1078.png" alt="click me to enter">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nowDate: "",
    };
  },
  methods: {
    currentTime() {
      setInterval(this.formatDate, 500);
    },
    formatDate() {
      let date = new Date();

      let hour = date.getHours(); // 时
      hour = hour < 10 ? "0" + hour : hour; // 如果只有一位，则前面补零
      let minute = date.getMinutes(); // 分
      minute = minute < 10 ? "0" + minute : minute; // 如果只有一位，则前面补零
      let second = date.getSeconds(); // 秒
      second = second < 10 ? "0" + second : second; // 如果只有一位，则前面补零
      this.nowDate = `${hour}:${minute}:${second}`;
    },
    enterHome(){
        this.$router.push('/home');
    }
  },
  mounted() {
    this.currentTime();
  },
};
</script>

<style scoped lang='less' src='../assets/style/index.less'>
</style>