<template>
  <div class="dashboard-container">
    <div class="header">
      江北公用影响力债券
    </div>
    <div class="top">
      <div class="count-base item-bg-1">
        <div class="com-count-title">绿色债券基本信息</div>
        <div class="com-screen-content">
          <div class="topRec_List">
            <div class="maquee">
              <ul>
                <li>
                  <div>债券名称：</div>
                  <div>江北公用影响力债券</div>
                </li>
                <li>
                  <div>发行人名称</div>
                  <div>江北公用</div>
                </li>
                <li>
                  <div>交易场所/债券类型：</div>
                  <div>中国银行间债券市场</div>
                  <div>资产支持票据（ABN）</div>
                </li>
                <li>
                  <div>注册总额/发行规模（亿元）：</div>
                  <div>15</div>
                </li>
                <li>
                  <div>主承销商</div>
                  <div>江北公用</div>
                </li>
                <li>
                  <div>主体信用评级：</div>
                  <div>AA</div>
                </li>
                <li>
                  <div>主体信用评级公司：</div>
                  <div>上海新世纪资信评估投资服务有限公司</div>
                </li>
                <li>
                  <div>债项评级：</div>
                  <div>AA+</div>
                </li>
                <li>
                  <div>债项评级公司：</div>
                  <div>上海新世纪资信评估投资服务有限公司</div>
                </li>
                <li>
                  <div>债券期限（年）：</div>
                  <div>5</div>
                </li>
                <li>
                  <div>认证评估机构：</div>
                  <div>江北公用</div>
                </li>
              </ul>
            </div>
            <div class="footer-title-bg">
              <span>上链节点：</span
              ><span>108x2f3g594ju2584l36g835l06h85q40r6g84d64</span>
            </div>
          </div>
        </div>
      </div>
      <div class="count-base item-bg-2">
        <div class="com-count-title">绿色债券募投资金用途</div>
        <div class="com-screen-content">
          <div id="main1" style="width: 100%; height: 450px"></div>
          <div class="footer-title-bg">
            <span>上链节点：</span
            ><span>108x2f3g594ju2584l36g835l06h85q40r6g84d64</span>
          </div>
        </div>
      </div>
    </div>
    <div class="clearfix"></div>
    <div class="mid">
      <div class="count-base item-bg-3" style="width:38%">
        <div class="com-count-title">节点状态</div>
        <div class="com-screen-content node-list">
          <div
            class="node-list-item"
            v-for="(item, index) in nodeList"
            :key="index"
          >
            <div :class="`index-bg-${index + 1}`">{{ index + 1 }}</div>
            <div class=" node-list-name">{{ item.name }}</div>
            <div class="node-list-bg">
              <div
                class="node-list-count"
                :style="{ width: `${item.percent}%` }"
              >
                {{ item.percent }}%
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="count-base item-bg-4" style="width:58%">
        <div class="com-count-title">数据流程图</div>
        <div class="com-screen-content data-flow">
          <div
            class="data-flow-child fl"
            v-for="(item, index) in flowData"
            :key="index"
          >
            <div>
              <div :class="item.status === 0 ? 'flow-default' : 'flow-active'">
                <span
                  :class="
                    item.name.length > 6
                      ? 'flow-active-item'
                      : 'flow-active-item'
                  "
                  >{{ item.name }}</span
                >
              </div>
              <div :class="item.status === 1 ? 'flow-doing' : 'none'">
                当前进度
              </div>
              <div class="flow-icon">
                <img
                  v-if="item.status !== 0"
                  src="../../assets/done-icon.png"
                />
              </div>
              <div class="flow-row"><span>——</span></div>
              <div class="flow-status">
                <span>{{ item.title }}</span>
              </div>
            </div>
            <div :class="index === flowData.length - 1 ? 'none' : ' arrow'">
              ➡
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="clearfix"></div>
    <div class="mid">
      <div class="count-base item-bg-6">
        <div class="com-count-title">区块链信息</div>
        <div class="block-describe-data">区块</div>
        <div class="com-screen-content block-info">
          <div
            class="block-name"
            v-for="(item, index) in blockInfoData"
            :key="index"
          >
            <div class="row">
              <div class="block-name-font">{{ item.name }}</div>
              <div class="nowrap">出块节点：{{ item.node }}</div>
            </div>

            <div class="block-time">
              {{ item.time }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="count-base item-bg-7">
      <div class="com-count-title">区块链交易</div>
      <div class="block-describe-deal">交易</div>
      <div class="com-screen-content block-deal">
        <div
          class="block-deal-item"
          v-for="(item, index) in blockDealData"
          :key="index"
        >
          <div class="mt-10 block-deal-width">
            交易：<span class="block-deal-font"> </span>
          </div>
          <div class="block-deal-time mt-10">{{ item.time }}</div>
        </div>
      </div>
    </div>
    <div class="clearfix"></div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
var echarts = require("echarts");
export default {
  name: "Dashboard",
  computed: {
    ...mapGetters(["name"]),
  },
  data() {
    return {
      chart: null,
      nodeList: [
        {
          name: "xxx品牌",
          percent: 80,
        },
        {
          name: "xxx品牌",
          percent: 20,
        },
        {
          name: "xxx品牌",
          percent: 30,
        },
        {
          name: "xxx品牌",
          percent: 40,
        },
        {
          name: "xxx品牌",
          percent: 90,
        },
      ],
      flowData: [
        // 0-未完成 1-进行中 2-已完成
        {
          name: "合规性与募投资金管理",
          title: "全部完成",
          status: 2,
        },
        {
          name: "绿色属性",
          title: "全部完成",
          status: 2,
        },
        {
          name: "环境收益",
          title: "进行中",
          status: 1,
        },
        {
          name: "ESG管理",
          title: "未完成",
          status: 0,
        },
        {
          name: "信息披露",
          title: "未完成",
          status: 0,
        },
      ],
      blockInfoData: [
        {
          node: "108x2f3g594ju2584l36g835l06h85q40r6g84d64",
          time: "2021-04-08 19:32:42",
          name: "区块720",
        },
        {
          node: "108x2f3g594ju2584l36g835l06h85q40r6g84d64",
          time: "2021-04-08 19:32:42",
          name: "区块720",
        },
        {
          node: "108x2f3g594ju2584l36g835l06h85q40r6g84d64",
          time: "2021-04-08 19:32:42",
          name: "区块720",
        },
        {
          node: "108x2f3g594ju2584l36g835l06h85q40r6g84d64",
          time: "2021-04-08 19:32:42",
          name: "区块720",
        },
        {
          node: "108x2f3g594ju2584l36g835l06h85q40r6g84d64",
          time: "2021-04-08 19:32:42",
          name: "区块720",
        },
        {
          node: "108x2f3g594ju2584l36g835l06h85q40r6g84d64",
          time: "2021-04-08 19:32:42",
          name: "区块720",
        },
      ],
      blockDealData: [
        {
          node: "108x2f3g594ju2584l36g835l06h85q40r6g84d64",
          time: "2021-04-08 19:32:42",
        },
        {
          node: "108x2f3g594ju2584l36g835l06h85q40r6g84d64",
          time: "2021-04-08 19:32:42",
        },
        {
          node: "108x2f3g594ju2584l36g835l06h85q40r6g84d64",
          time: "2021-04-08 19:32:42",
        },
        {
          node: "108x2f3g594ju2584l36g835l06h85q40r6g84d64",
          time: "2021-04-08 19:32:42",
        },
        {
          node: "108x2f3g594ju2584l36g835l06h85q40r6g84d64",
          time: "2021-04-08 19:32:42",
        },
        {
          node: "108x2f3g594ju2584l36g835l06h85q40r6g84d64",
          time: "2021-04-08 19:32:42",
        },
      ],
    };
  },
  mounted() {
    this.initCharts();
  },
  methods: {
    initCharts() {
      this.chart = echarts.init(document.getElementById("main1"));
      this.setOptions();
    },
    setOptions() {
      this.chart.setOption({
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)",
        },
        color: [
          "#8fc31f",
          "#f35833",
          "#00ccff",
          "#ffcc00",
          "#f5e965",
          "#a74faf",
          "#ff9668",
        ],
        legend: {
          icon: "square",
          itemWidth: 8,
          itemHeight: 8,
          itemGap: 10,
          top: "16",
          right: "10",
          data: ["数据1", "数据2", "数据3", "数据4", "数据5", "数据6", "数据7"],
          textStyle: {
            fontSize: 14,
            color: "#a0a8b9",
          },
        },
        series: [
          {
            name: "绿色债券募投资金用途",
            type: "pie",
            radius: "40%",
            center: ["50%", "50%"],
            data: [
              { value: 435, name: "数据1" },
              { value: 679, name: "数据2" },
              { value: 848, name: "数据3" },
              { value: 348, name: "数据4" },
              { value: 679, name: "数据5" },
              { value: 848, name: "数据6" },
              { value: 1348, name: "数据7" },
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
            itemStyle: {
              normal: {
                label: {
                  show: true,
                  //	                            position:'inside',
                  formatter: "{b} : {c} ({d}%)",
                  fontSize: 14, //文字的字体大小
                },
              },
              labelLine: { show: true },
            },
          },
        ],
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 30px;
    background: url("../../assets/interact.png") center no-repeat;
    background-size: cover;
    .header {
      font-size: 33px;
      font-weight: bold;
      color: #fff;
      line-height: 74px;
      background: url("../../assets/title-big-bg.png") no-repeat;
      background-size: cover;
      text-align: center;
    }
    .top,
    .mid {
      margin: 10px 0;
    }
    .count-base {
      margin-left: 10px;
      float: left; /*浮动*/
      width: 48%;
      min-height: 350px;
      background: url("../../assets/left-top3.jpg") center no-repeat;
      background-size: cover;
    }
    .com-count-title {
      margin: 10px 0;
      color: #fff;
      line-height: 2;
      font-size: 22px;
      text-align: center;
      background: url("../../assets/title-bg.png") no-repeat;
      background-size: cover;
    }
    .footer-title-bg {
      border-top: 1px solid #006699;
      border-bottom: 1px solid #006699;
      background: url("../../assets/footer-title-bg.png") no-repeat;
      background-size: cover;
      font-size: 16px;
      line-height: 2;
      color: #66ffff;
      clear: both;
      display: inline-block;
      text-align: center;
      margin: 20px 7.5% 10px;
      width: 85%;
    }
    .topRec_List ul {
      width: 100%;
      height: 195px;
    }
    .topRec_List li {
      width: 100%;
      height: 28px;
      line-height: 38px;
      text-align: left;
      font-size: 10px;
      // color: #76dbd1;
      list-style: none;
    }
    /*.topRec_List li:nth-child(2n){ background:#077cd0}*/
    .topRec_List li div {
      float: left;
    }
    .topRec_List li div:nth-child(1) {
      width: 37%;
    }
    .topRec_List li div:nth-child(2) {
      width: 30%;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .topRec_List li div:nth-child(3) {
      width: 33%;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    .maquee {
      margin: 0 auto;
      color: #fff;
      font-size: 16px;
      padding: 20px;
    }
    .com-screen-content {
      width: 100%;
      height: auto;
    }
    .clearfix {
      clear: both;
    }
    .node-list-item {
      margin-top: 20px;
      color: white;
      display: flex;
      align-items: center;
      box-sizing: border-box;
      padding: 0 10px;
    }
    .node-list-name {
      margin-left: 10px;
    }
    .node-list-bg {
      min-width: 240px;
      height: 20px;
      background-color: #000033;
      position: relative;
      margin-left: 20px;
    }
    .node-list-count {
      background-image: linear-gradient(to right, #0066ff, #00ccff);
      text-align: right;
      position: absolute;
      left: 0;
      top: 0;
      color: #fff;
    }
    .item-bg-1 {
      background: url("../../assets/item-bg-1.png") no-repeat;
      background-size: 100% 100%;
      padding: 10px;
    }
    .item-bg-2 {
      background: url("../../assets/item-bg-2.png") no-repeat;
      background-size: 100% 100%;
      padding: 10px;
    }
    .item-bg-3 {
      background: url("../../assets/item-bg-3.png") no-repeat;
      background-size: 100% 100%;
      padding: 10px;
    }
    .item-bg-4 {
      background: url("../../assets/item-bg-4.png") no-repeat;
      background-size: 100% 100%;
      padding: 10px;
    }
    .item-bg-5 {
      background: url("../../assets/item-bg-5.png") no-repeat;
      background-size: 100% 100%;
      padding: 10px;
    }
    .item-bg-6 {
      background: url("../../assets/item-bg-6.png") no-repeat;
      background-size: 100% 100%;
      padding: 10px;
    }
    .item-bg-7 {
      background: url("../../assets/item-bg-7.png") no-repeat;
      background-size: 100% 100%;
      padding: 10px;
    }
    .index-bg-1 {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      text-align: center;
      line-height: 32px;
      background: linear-gradient(#ff6633, #ff9933);
      margin-top: -9px;
    }
    .index-bg-2 {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      text-align: center;
      line-height: 32px;
      background: linear-gradient(#cc33cc, #ff3366);
      margin-top: -9px;
    }
    .index-bg-3 {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      text-align: center;
      line-height: 32px;
      background: linear-gradient(#0066cc, #00cccc);
      margin-top: -9px;
    }
    .index-bg-4 {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      text-align: center;
      line-height: 32px;
      background: linear-gradient(#006633, #66cc66);
      margin-top: -9px;
    }
    .index-bg-5 {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      text-align: center;
      line-height: 32px;
      background: linear-gradient(#cc9933, #cc9933);
      margin-top: -9px;
    }
    .data-flow-child {
      position: relative;
      margin-left: 20px;
      margin-top: 60px;
      display: flex;
    }
    .flow-doing {
      position: absolute;
      top: -50px;
      background: url("../../assets/doing-bg.png") no-repeat;
      background-size: 100% 100%;
      color: #fff;
      padding: 10px;
    }
    .flow-active {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      background-image: linear-gradient(#0099ff, #006699);
      color: #fff;
      font-size: 14px;

      display: flex;
      align-items: center;
    }
    .flow-default {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      background-color: #fff;
      color: #333;
      font-size: 16px;

      display: flex;
      align-items: center;
    }
    .flow-active-item {
      display: inline-block;
      text-align: center;
    }
    .flow-icon {
      position: absolute;
      left: 32px;
      top: 75px;
      text-align: center;
      width: 20px;
      height: 20px;
    }
    .flow-icon img {
      width: 20px;
      height: 20px;
    }
    .hidden {
      opacity: 0;
    }
    .none {
      display: none;
    }
    .flow-row {
      color: #0099ff;
      text-align: center;
      margin-top: 30px;
    }
    .flow-status {
      color: #fff;
      font-size: 12px;
      margin-top: 20px;
      text-align: center;
    }
    .fl {
      float: left;
    }
    .arrow {
      position: relative;
      font-size: 30px;
      top: 100px;
      left: 10px;
      color: #999;
    }
    .block-describe-data {
      font-size: 20px;
      border-left: 10px solid #00ccff;
      padding-left: 20px;
      color: #fff;
      margin-top: 40px;
      margin-left: 17px;
    }
    .block-describe-deal {
      font-size: 20px;
      border-left: 10px solid #33cc66;
      padding-left: 20px;
      color: #fff;
      margin-top: 40px;
      margin-left: 17px;
    }
    .block-time {
      margin: 10px 0;
    }
    .block-deal {
      color: #fff;
      padding: 20px 50px;
    }
    .block-deal-font {
      color: #33cc66;
    }
    .block-deal-item {
      clear: both;
      margin-top: 10px;
    }
    .block-deal-time {
      text-align: right;
    }
    .block-deal-width {
      max-width: 60%;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .block-name .block-name-font {
      color: #00ccff;
      min-width: 200px;
    }
    .row {
      display: flex;
      align-items: center;
    }
    .nowrap {
      max-width: 80%;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .block-info {
      font-size: 14px;
      color: #fff;
      padding: 20px 50px;
    }
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
