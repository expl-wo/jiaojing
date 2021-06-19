<template>
  <div id="home">
    <Head></Head>
    <div class="content">
      <div class="leftBox">
        <div class="showContent">
          <div class="title">违法事故总览</div>
          <div class="contentDetail">
            <div class="leftChartBox">
              <div class="panelChartLeft"></div>
              <p></p>
              <p></p>
            </div>
            <div class="rightChartBox">
              <div class="panelChartRight"></div>
              <p></p>
              <p></p>
            </div>
          </div>
        </div>
        <div class="showContent">
          <div class="title">外卖骑手</div>
          <div class="contentDetail">
            <p>
              <i></i>
              <span>外卖企业数</span>
              <span>71771</span>
            </p>
            <div class="personTypeCount">
              <div><span>10191</span><span>骑手总数</span></div>
              <div><span>10191</span><span>专职骑手</span></div>
              <div><span>10191</span><span>众包骑手</span></div>
            </div>
          </div>
        </div>
        <!-- <div class="showContent">
          <div class="title">企业五色图</div>
          <div class="contentDetail">展示内容</div>
        </div> -->
        <div class="showContent">
          <div class="title">黑名单</div>
          <div class="blackListDetail">
            <div class="blackListTotal">
              <i></i>
              <span>黑名单总数</span>
              <p><span>123</span></p>
            </div>
            <div class="blackListCount">
              <i></i>
              <span>黑名单总数</span>
              <p><span>3</span></p>
            </div>
          </div>
        </div>
        <div class="showContent">
          <div class="detailLeft">
            <div class="title">违法骑手TOP10</div>
            <div class="contentDetail">
              <ul>
                <li><span>王ss(饿了么)</span><span>9</span></li>
                <li><span>王ss(饿了么)</span><span>9</span></li>
                <li><span>王ss(饿了么)</span><span>9</span></li>
                <li><span>王ss(饿了么)</span><span>9</span></li>
                <li><span>王ss(饿了么)</span><span>9</span></li>
                <li><span>王ss(饿了么)</span><span>9</span></li>
                <li><span>王ss(饿了么)</span><span>9</span></li>
                <li><span>王ss(饿了么)</span><span>9</span></li>
                <li><span>王ss(饿了么)</span><span>9</span></li>
                <li><span>王ss(饿了么)</span><span>9</span></li>
                <li><span>王ss(饿了么)</span><span>9</span></li>
              </ul>
            </div>
          </div>
          <div class="detailRight">
            <div class="title">事故骑手TOP10</div>
            <div class="contentDetail">
              <ul>
                <li><span>王ss(饿了么)</span><span>9</span></li>
                <li><span>王ss(饿了么)</span><span>9</span></li>
                <li><span>王ss(饿了么)</span><span>9</span></li>
                <li><span>王ss(饿了么)</span><span>9</span></li>
                <li><span>王ss(饿了么)</span><span>9</span></li>
                <li><span>王ss(饿了么)</span><span>9</span></li>
                <li><span>王ss(饿了么)</span><span>9</span></li>
                <li><span>王ss(饿了么)</span><span>9</span></li>
                <li><span>王ss(饿了么)</span><span>9</span></li>
                <li><span>王ss(饿了么)</span><span>9</span></li>
                <li><span>王ss(饿了么)</span><span>9</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="middleBox">
        <div class="topBox">
          <h2>个人三色码</h2>
        </div>
        <div class="bottomBox">
          <h2>企业五色图</h2>
          <div class="fiveColorEcharts"></div>
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
    return {};
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
    fiveColorEcharts() {
      let fiveColorEcharts = this.$echarts.init(
        document.getElementsByClassName("fiveColorEcharts")[0]
      );
      // keyPeople.setOption(echartConfig.colorShow);
      fiveColorEcharts.setOption(echartConfig.fiveColor);
      // console.log(fiveColorEcharts, 222);
    },
    panleEcharts() {
      let leftPanleEcharts = this.$echarts.init(
        document.getElementsByClassName("panelChartLeft")[0]
      );

      let rightPanelChart = this.$echarts.init(
        document.getElementsByClassName("panelChartRight")[0]
      );
      leftPanleEcharts.setOption(echartConfig.panel);
      rightPanelChart.setOption(echartConfig.panel);
      console.log(leftPanleEcharts,222);
    },
  },
  mounted() {
    console.log("options", echartConfig);
    this.panleEcharts();
    this.fiveColorEcharts();
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