<template>
  <div style="padding:10px;">
    <div class="container">
      <div class="row bold">{{ detail.title }}</div>
      <div class="row">
        <div class="row-item">项目名称:</div>
        <div class="row-item">{{ detail.projectName }}</div>
      </div>
      <div class="row">
        <div class="row-item">项目公司名称:</div>
        <div class="row-item">{{ detail.company }}</div>
      </div>
      <div class="row">
        <div class="row-item">公司地址:</div>
        <div class="row-item">{{ detail.address }}</div>
      </div>
      <div class="row">
        <div class="row-item">总投资金额(万元):</div>
        <div class="row-item">{{ detail.amount }}</div>
        <el-tooltip
          effect="light"
          content="上传机构Logo后，将在该机构下的客户AI-MDT报告封面进行展示"
          placement="right"
        >
          <i class="icon el-icon-question"></i>
        </el-tooltip>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Detail",
  props: {
    detail: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.container {
  box-sizing: border-box;
  padding: 30px 150px;
  .bold {
    font-weight: bold;
    font-size: 18px;
  }
  .row {
    display: flex;
    align-items: center;
    div:nth-child(1) {
      min-width: 150px;
    }
    .icon {
      font-size: 16px;
      margin-left: 5px;
      color: #7bcb00;
    }
  }
}
</style>
