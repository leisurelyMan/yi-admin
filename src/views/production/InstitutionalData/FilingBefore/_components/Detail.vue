<template>
  <div style="padding:10px;">
    <div class="container">
      <div class="row">
        <div class="row-item">发行人是否具备发行本:</div>
        <div class="row-item">{{ check[lawyerData.one] }}</div>
        <el-tooltip
          effect="light"
          :content="lawyerData.oneEffect"
          placement="right"
        >
          <i class="icon el-icon-question"></i>
        </el-tooltip>
      </div>
      <div class="row">
        <div class="row-item">发行人发行本期绿债:</div>
        <div class="row-item">{{ check[lawyerData.two] }}</div>
        <el-tooltip
          effect="light"
          content="上传机构Logo后，将在该机构下的客户AI-MDT报告封面进行展示"
          placement="right"
        >
          <i class="icon el-icon-question"></i>
        </el-tooltip>
      </div>
      <div class="row">
        <div class="row-item">本次债券发行是否符合:</div>
        <div class="row-item">{{ check[lawyerData.three] }}</div>
        <el-tooltip
          effect="light"
          content="上传机构Logo后，将在该机构下的客户AI-MDT报告封面进行展示"
          placement="right"
        >
          <i class="icon el-icon-question"></i>
        </el-tooltip>
      </div>
      <div class="row">
        <div class="row-item">《募集说明书的内容》和:</div>
        <div class="row-item">{{ check[lawyerData.four] }}</div>
        <el-tooltip
          effect="light"
          content="上传机构Logo后，将在该机构下的客户AI-MDT报告封面进行展示"
          placement="right"
        >
          <i class="icon el-icon-question"></i>
        </el-tooltip>
      </div>
      <div class="row">
        <div class="row-item">为本期绿色债券发行提:</div>
        <div class="row-item">{{ check[lawyerData.five] }}</div>
        <el-tooltip
          effect="light"
          content="上传机构Logo后，将在该机构下的客户AI-MDT报告封面进行展示"
          placement="right"
        >
          <i class="icon el-icon-question"></i>
        </el-tooltip>
      </div>
      <div class="row">
        <div class="row-item">发行人不存在对本次发:</div>
        <div class="row-item">{{ check[lawyerData.six] }}</div>
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
    lawyerData: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      check: {
        true: "是",
        false: "否",
      },
    };
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
    &-item:first-child {
      min-width: 150px;
      margin: 5px 10px;
    }
    .icon {
      font-size: 16px;
      margin-left: 5px;
      color: #7bcb00;
    }
  }
}
</style>
