<template>
  <div style="padding:10px;">
    <el-collapse accordion>
      <div v-for="(value, key) in collapseData" :key="key" class="margin-10">
        <el-collapse-item :class="`special-class-${key}`">
          <template slot="title">
            <i class="header-icon " :class="value.iconStyle"></i
            ><span class="title-margin">{{ value.collapseName }}</span>
          </template>
          <el-tabs
            v-model="activeName"
            type="border-card"
            @tab-click="handleClick"
          >
            <el-tab-pane
              :class="`special-pane-${key}`"
              label="律师"
              name="first"
            >
              <Detail :detail="value" />
            </el-tab-pane>
            <el-tab-pane label="认证公司" name="second">认证公司</el-tab-pane>
            <el-tab-pane label="发行人" name="third">发行人</el-tab-pane>
          </el-tabs>
        </el-collapse-item>
      </div>
    </el-collapse>
  </div>
</template>
<script>
import Detail from "./_components/Detail";
export default {
  name: "ShowData",
  props: {},
  components: { Detail },
  data() {
    return {
      activeName: "first",
      collapseData: [
        {
          iconStyle: "el-icon-user-solid",
          collapseName: "债项基本信息",
          title: "1号能源站",
          projectName: "1#能源站",
          company: "江北公用",
          address: "河北省 唐山市 古治区",
          amount: 1800,
          content: "#能源站#能源站#能源站#能源站#能源站",
          bgColor: "#444444",
        },
        {
          iconStyle: "el-icon-s-help",
          collapseName: "募投项目基本情况",
          title: "2号能源站",
          projectName: "2#能源站",
          company: "江北公用",
          address: "河北省 唐山市 古治区",
          amount: 1800,
          content: "#能源站#能源站#能源站#能源站#能源站",
          bgColor: "#3EB066",
          specialClass: "special-class",
        },
      ],
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
};
</script>
<style lang="scss" scoped>
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
.title-margin {
  margin-left: 10px;
}
.margin-10 {
  margin-top: 10px;
}
</style>
