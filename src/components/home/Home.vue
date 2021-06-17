<template>
  <div id="home">
    <Head></Head>
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
    </div>
  </div>
</template>

<script>
import echartConfig from "./echart.js";
import Head from "../header.vue";
export default {
  components: {
    Head,
  },
  data() {
    return {
      //当前的步骤
      current: 0,
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
        document.getElementsByClassName("keyPeopleEcharts")[0]
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
  },
  mounted() {
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