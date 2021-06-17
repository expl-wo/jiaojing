<template>
  <div id="home">
    <header>
      <div class="title">武汉交警警企共建平台</div>
      <div class="timeBox">
        <span>{{ nowDate }}</span>
      </div>
    </header>
    <div class="content">
      <div class="leftBox">
        <div class="showContent">
          <div class="title">违法事故总览</div>
          <div class="contentDetail">展示内容</div>
        </div>
        <div class="showContent">
          <div class="title">外卖骑手</div>
          <div class="contentDetail">展示内容</div>
        </div>
        <div class="showContent">
          <div class="title">企业五色图</div>
          <div class="contentDetail">展示内容</div>
        </div>
        <div class="showContent">
          <div class="title">黑名单</div>
          <div class="contentDetail">展示内容</div>
        </div>
        <div class="showContent">
          <div class="title">违法骑手黑榜</div>
          <div class="contentDetail">展示内容</div>
        </div>
      </div>
      <div class="middleBox">
        <div class="topBox">
          <h2>个人三色码</h2>
        </div>
        <div class="bottomBox">
          <h2>企业五色图</h2>
          <div class="keyPeopleEcharts"></div>
        </div>
      </div>
      <div class="rightBox">
        <div class="showContent">
          <div class="title">违法事故反馈</div>
          <div class="contentDetail">展示内容</div>
        </div>
        <div class="showContent">
          <div class="title">趋势分析</div>
          <div class="contentDetail">展示内容</div>
        </div>
        <div class="showContent">
          <div class="title">最新骑手事故</div>
          <div class="contentDetail">展示内容</div>
        </div>
        <div class="showContent">
          <div class="title">骑手非现场违法</div>
          <div class="contentDetail">展示内容</div>
        </div>
      </div>
      <div class="lineEcharts"></div>
    </div>
  </div>
</template>

<script>
import echartConfig from "./echart.js";

export default {
  data() {
    return {
      //当前的步骤
      current: 0,
      //当前日期
      nowDate: "",
    };
  },
  methods: {
    handleProgress() {
      setTimeout(function fn() {
        this.current++;
        if (this.current <= 3) {
          setTimeout(fn, 1000);
        }
      }, 1000);
    },
    keyPeopleEcharts() {
      let keyPeople = this.$echarts.init(
        document.getElementsByClassName("keyPeopleEcharts")[0],
        "infographic"
      );
      keyPeople.setOption(echartConfig.colorShow);
      keyPeople.setOption({ title: { text: "新标题" } });

      console.log(keyPeople, 222);
    },
    lineEcharts() {
      let lineEcharts = this.$echarts.init(
        document.getElementsByClassName("lineEcharts")[0]
      );
      lineEcharts.setOption(echartConfig.line);
    },

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
  },
  mounted() {
    this.currentTime();
    console.log("options", echartConfig);
    // this.lineEcharts();
    this.keyPeopleEcharts();
    // this.handleProgress();
  },
  beforeDestroy() {
    if (this.formatDate) {
      clearInterval(this.formatDate); // 在Vue实例销毁前，清除时间定时器
    }
  },
};
</script>

<style lang="less" scoped src='../../assets/style/home.less'>
</style>