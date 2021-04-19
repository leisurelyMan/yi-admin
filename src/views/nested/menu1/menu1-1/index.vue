<template>
  <div style="padding:10px;">
    <el-collapse accordion>
      <el-collapse-item>
        <template slot="title">
          <i class="header-icon el-icon-user-solid"></i
          ><span class="title-margin">债项基本信息</span>
        </template>
        <Detail :detail="detail" />
      </el-collapse-item>
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
      detail: {
        title: "1号能源站",
        projectName: "1#能源站",
        company: "江北公用",
        address: "河北省 唐山市 古治区",
        amount: 1800,
        content: "#能源站#能源站#能源站#能源站#能源站",
      },
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
::v-deep .el-collapse-item__content {
  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.1);
}
.title-margin {
  margin-left: 10px;
}
</style>
