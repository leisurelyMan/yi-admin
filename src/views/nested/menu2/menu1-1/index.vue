<template>
  <div class="app-container">
    <el-tabs v-model="activeName" type="border-card" @tab-click="handleClick">
      <el-tab-pane label="募投项目基本信息" name="first">
        <Form @submit="submitForm" ref="form" />
      </el-tab-pane>
      <el-tab-pane label="考核指标情况" name="second"
        >考核指标情况1</el-tab-pane
      >
      <el-tab-pane label="考核指标情况" name="third">考核指标情况2</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import Form from "./_components/Form";
export default {
  components: { Form },
  data() {
    return {
      activeName: "first",
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    submitForm(form) {
      console.log(form);
      // this.$refs[formName].validate((valid) => {
      //   if (valid) {
      //     console.log(111);
      //   } else {
      //     console.log("error submit!!");
      //     return false;
      //   }
      // });
    },
  },
};
</script>

<style scoped>
.line {
  text-align: center;
}
::v-deep .el-tabs--border-card {
  border-top: none;
}
::v-deep .el-tabs--border-card > .el-tabs__header {
  background-color: #444;
  box-sizing: border-box;
  padding: 20px 20px 0;
  border-radius: 5px;
}
</style>
