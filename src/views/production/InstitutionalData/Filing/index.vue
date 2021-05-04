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
          collapseName: "合规性与募投资金管理",
          title: "1号能源站",
          projectName: "1#能源站",
          company: "江北公用",
          address: "河北省 唐山市 古治区",
          amount: 1800,
          content: "#能源站#能源站#能源站#能源站#能源站",
          bgColor: "#444444",
          check: true,
        },
        {
          iconStyle: "el-icon-s-help",
          collapseName: "绿色属性",
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
.title-margin {
  margin-left: 10px;
}
.margin-10 {
  margin-top: 10px;
}
</style>
