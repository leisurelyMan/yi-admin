<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>
<style lang="scss" scoped>
::v-deep .el-tabs--border-card {
  border-top: none;
}
::v-deep .el-tabs--border-card > .el-tabs__header {
  background-color: #444;
  box-sizing: border-box;
  padding: 20px 20px 0;
  border-radius: 5px;
}
::v-deep .el-tabs__item {
  min-width: 240px;
  text-align: center;
}
::v-deep .el-form {
  box-sizing: border-box;
  padding-left: 150px;
}
::v-deep .el-textarea__inner {
  padding: 15px;
}
::v-deep .el-checkbox__input.is-checked .el-checkbox__inner,
.el-checkbox__input.is-indeterminate .el-checkbox__inner {
  background-color: #00b149;
  border-color: #00b149;
}
::v-deep .el-checkbox__input.is-checked + .el-checkbox__label {
  color: #00b149;
}
// ::v-deep .el-tooltip__popper.is-light {
//   background-color: #f9fafc;
//   border: 1px solid #e1e1e2;
// }
::v-deep .el-button--primary {
  color: #fff;
  background-color: #00b149;
  border-color: #00b149;
}
::v-deep .el-button {
  min-width: 120px;
}
::v-deep .el-tabs--border-card > .el-tabs__header .el-tabs__item.is-active {
  color: #333;
}
::v-deep .el-tabs--border-card > .el-tabs__header .el-tabs__item {
  color: #fff;
}
::v-deep
  .el-tabs--border-card
  > .el-tabs__header
  .el-tabs__item:not(.is-disabled):hover {
  // color: #fff;
}
</style>
