<template>
  <div style="padding:10px;">
    <div class="container">
      <div v-for="(item, index) in publisherData" :key="index" class="project">
        <div class="bold">{{ index + 1 }}{{ item.projectName }}</div>
        <div class="row">
          <div class="row-item">
            该募投项目是否符合国家产:
          </div>
          <div class="row-item">
            {{ check[item.isPolicy] }}
          </div>
          <el-tooltip
            effect="light"
            :content="item.policyEffect"
            placement="right"
          >
            <i class="icon el-icon-question"></i>
          </el-tooltip>
        </div>
        <div class="row">
          <div class="row-item">
            该募投项目是否符合地方相关:
          </div>
          <div class="row-item">
            {{ check[item.isPlan] }}
          </div>
          <el-tooltip
            effect="light"
            :content="item.planEffect"
            placement="right"
          >
            <i class="icon el-icon-question"></i>
          </el-tooltip>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "publisher",
  props: {
    publisherData: {
      type: Array,
      default: () => [],
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
  padding: 30px 100px;
  .project {
    margin: 20px;
  }
  .bold {
    font-weight: 600;
    font-size: 26px;
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
