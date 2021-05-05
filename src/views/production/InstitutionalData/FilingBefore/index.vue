<template>
  <div style="padding:10px;">
    <el-collapse accordion>
      <div v-for="(value, key) in collapseData" :key="key" class="margin-10">
        <el-collapse-item :class="`special-class-${key}`">
          <template slot="title">
            <i class="header-icon " :class="value.iconStyle"></i>
            <span class="title-margin">{{ value.collapseName }}</span>
          </template>
          <el-tabs
            v-model="activeName"
            type="border-card"
            @tab-click="handleClick"
          >
            <el-tab-pane
              :class="`special-pane-${key}`"
              label="律师"
              name="lawyer"
            >
              <Detail :lawyerData="lawyerData" />
            </el-tab-pane>
            <el-tab-pane label="认证公司" name="certificationCompany">
              <Company :companyData="companyData" />
            </el-tab-pane>
            <el-tab-pane label="发行人" name="publisher">
              <Publisher :publisherData="publisherData" />
            </el-tab-pane>
          </el-tabs>
        </el-collapse-item>
      </div>
    </el-collapse>
  </div>
</template>
<script>
import Detail from "./_components/Detail";
import Company from "./_components/Company";
import Publisher from "./_components/Publisher";
export default {
  name: "ShowData",
  props: {},
  components: { Detail, Company, Publisher },
  data() {
    return {
      activeName: "lawyer",
      collapseData: [
        {
          iconStyle: "el-icon-user-solid",
          collapseName: "债券基本信息",
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
          collapseName: "募集资金使用情况",
          title: "2号能源站",
          projectName: "2#能源站",
          company: "江北公用",
          address: "河北省 唐山市 古治区",
          amount: 1800,
          content: "#能源站#能源站#能源站#能源站#能源站",
          bgColor: "#3EB066",
          specialClass: "special-class",
          check: true,
        },
        {
          iconStyle: "el-icon-s-help",
          collapseName: "报告期内的发行情况",
          title: "2号能源站",
          projectName: "2#能源站",
          company: "江北公用",
          address: "河北省 唐山市 古治区",
          amount: 1800,
          content: "#能源站#能源站#能源站#能源站#能源站",
          bgColor: "#3EB066",
          specialClass: "special-class",
          check: true,
        },
        {
          iconStyle: "el-icon-s-help",
          collapseName: "发行后债券项目信息",
          title: "2号能源站",
          projectName: "2#能源站",
          company: "江北公用",
          address: "河北省 唐山市 古治区",
          amount: 1800,
          content: "#能源站#能源站#能源站#能源站#能源站",
          bgColor: "#3EB066",
          specialClass: "special-class",
          check: true,
        },
      ],
      lawyerData: {},
      formData: {},
      companyData: [],
      publisherData: [],
    };
  },
  mounted() {
    this.lawyer();
  },
  methods: {
    handleClick(tab) {
      console.log(tab);
      this.activeName = tab.name;
      this[tab.name]();
    },
    lawyer() {
      this.lawyerData = {
        one: true,
        oneEffect: "上传机构报告封面进行展示",
        two: true,
        three: true,
        four: true,
        five: true,
        six: true,
      };
    },
    certificationCompany() {
      this.companyData = [
        {
          projectName: "#能源站",
          isPolicy: true,
          policyEffect:
            "传机构Logo后，将在该机构下的客户AI-MDT报告封面进行展示",
          isPlan: true,
          planEffect: "传机构Logo后，将在该机构下的客户AI-MDT报告封面进行展示",
        },
        {
          projectName: "#能源站",
          isPolicy: true,
          policyEffect:
            "传机构Logo后，将在该机构下的客户AI-MDT报告封面进行展示",
          isPlan: true,
          planEffect: "传机构Logo后，将在该机构下的客户AI-MDT报告封面进行展示",
        },
      ];
    },
    publisher() {
      this.publisherData = [
        {
          projectName: "#能源站",
          isPolicy: true,
          policyEffect:
            "传机构Logo后，将在该机构下的客户AI-MDT报告封面进行展示",
          isPlan: true,
          planEffect: "传机构Logo后，将在该机构下的客户AI-MDT报告封面进行展示",
        },
        {
          projectName: "#能源站",
          isPolicy: true,
          policyEffect:
            "传机构Logo后，将在该机构下的客户AI-MDT报告封面进行展示",
          isPlan: true,
          planEffect: "传机构Logo后，将在该机构下的客户AI-MDT报告封面进行展示",
        },
      ];
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
