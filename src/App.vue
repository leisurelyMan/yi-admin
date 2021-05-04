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
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
}
::v-deep
  .el-tabs--border-card
  > .el-tabs__header
  .el-tabs__item:not(.is-disabled):hover {
  // color: #fff;
}
::v-deep textarea {
  -webkit-appearance: none;
  background-color: #fff;
  background-image: none;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  color: #606267;
  display: inline-block;
  font-size: inherit;
  min-height: 60px;
  line-height: 40px;
  outline: 0;
  padding: 0 15px;
  -webkit-transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  width: 100%;
}

::v-deep .el-collapse-item__header {
  color: #fff;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  box-sizing: border-box;
  padding: 10px;
}
::v-deep .special-class-0 .el-collapse-item__header {
  background-color: #444;
}
::v-deep .special-class-1 .el-collapse-item__header {
  background-color: #3eb066;
}
::v-deep .el-collapse-item__content {
  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.1);
}
::v-deep .special-class-0 .el-tabs--border-card > .el-tabs__header {
  background-color: #444;
  border-radius: 0;
}
::v-deep .special-class-1 .el-tabs--border-card > .el-tabs__header {
  background-color: #3eb066;
}
::v-deep .el-tabs--border-card > .el-tabs__header .el-tabs__item {
  color: #fff;
  margin: 0 15px;
}
::v-deep .el-tabs--border-card > .el-tabs__header .el-tabs__item.is-active {
  color: #333;
}
::v-deep .el-tabs--border-card {
  border: none;
}
::v-deep .el-tabs__content {
  box-sizing: border-box;
  border: 1px solid #dcdfe6;
}
</style>
