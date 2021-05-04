<template>
  <div style="padding:10px;">
    <el-collapse accordion>
      <div v-for="(value, key) in collapseData" :key="key" class="margin-10">
        <el-collapse-item :class="value.specialClass">
          <template slot="title">
            <i class="header-icon " :class="value.iconStyle"></i
            ><span class="title-margin">{{ value.collapseName }}</span>
          </template>
          <Detail :detail="value" />
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
};
</script>
<style lang="scss" scoped>
::v-deep .el-collapse-item__header {
  color: #fff;
  background-color: #444444;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  box-sizing: border-box;
  padding: 10px;
}
::v-deep .special-class .el-collapse-item__header {
  background-color: #3eb066;
}
::v-deep .el-collapse-item__content {
  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.1);
}
.title-margin {
  margin-left: 10px;
}
.margin-10 {
  margin-top: 10px;
}
</style>
