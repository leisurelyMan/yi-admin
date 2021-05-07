<template>
  <div style="padding:10px;">
    <el-collapse accordion>
      <div v-for="(value, key) in collapseData" :key="key" class="margin-10">
        <el-collapse-item :class="value.specialClass">
          <template slot="title">
            <i class="header-icon " :class="value.iconStyle"></i
            ><span class="title-margin">{{ value.collapseName }}</span>
          </template>
          <Detail :detail="value" :isEdit="isEdit" />
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
          collapseName: "募投项目基本信息",
          title: "1号能源站",
          projectName: "1#能源站",
          company: "江北公用",
          address: "河北省 唐山市 古治区",
          amount: 1800,
          content: "#能源站#能源站#能源站#能源站#能源站",
          bgColor: "#444444",
          id: "01141477-6333-49dd-aac8-b1a67cbce399",
          bondId: "dd02b79f-41a2-11eb-9079-00163e2e025e",
          companyName: "江北公用",
          projectAddress: ["北京", "天安门"],
          investmentAmount: "5000",
          buildContent:
            "热电厂#1建设热电厂#1建设热电厂#1建设热电厂#1建设热电厂#1建设热电厂#1建设热电厂#1建设热电厂#1建设热电厂#1建设热电厂#1建设热电厂#1建设热电厂#1建设热电厂#1建设热电厂#1建设热电",
          reportDocuments: "66500a3e-cc63-4c73-be3c-1417b7f7a5ae",
          scenePhotos: "4af295a2-7693-4c93-821c-fb6c68b59e32",
          buildStatas: ["001"],
          startDate: "2021-03-16",
          endDate: "2021-03-30",
          raisedFunds: "2000",
          useOfRaisedFunds: "偿还债券",
          supportingDocuments: "99733f55-14a2-4924-b04f-99af93e6b82f",
          creater: "506e42e5-4142-11eb-9079-00163e2e025e",
          createTime: "2021-03-25T20:10:13.000+0800",
          statas: 1,
          updater: "506e42e5-4142-11eb-9079-00163e2e025e",
          updateTime: "2021-04-10T21:37:12.000+0800",
        },
        {
          iconStyle: "el-icon-s-help",
          collapseName: "考核指标情况",
          title: "2号能源站",
          projectName: "2#能源站",
          company: "江北公用",
          address: "河北省 唐山市 古治区",
          amount: 1800,
          content: "#能源站#能源站#能源站#能源站#能源站",
          bgColor: "#3EB066",
          specialClass: "special-class",
          id: "01141477-6333-49dd-aac8-b1a67cbce399",
          bondId: "dd02b79f-41a2-11eb-9079-00163e2e025e",
          projectName: "热电厂#1",
          companyName: "江北公用",
          projectAddress: "13,1302,130204",
          investmentAmount: "5000",
          buildContent:
            "热电厂#1建设热电厂#1建设热电厂#1建设热电厂#1建设热电厂#1建设热电厂#1建设热电厂#1建设热电厂#1建设热电厂#1建设热电厂#1建设热电厂#1建设热电厂#1建设热电厂#1建设热电厂#1建设热电",
          reportDocuments: "66500a3e-cc63-4c73-be3c-1417b7f7a5ae",
          scenePhotos: "4af295a2-7693-4c93-821c-fb6c68b59e32",
          buildStatas: "003",
          startDate: "2021-03-16",
          endDate: "2021-03-30",
          raisedFunds: "2000",
          useOfRaisedFunds: "偿还债券",
          supportingDocuments: "99733f55-14a2-4924-b04f-99af93e6b82f",
          creater: "506e42e5-4142-11eb-9079-00163e2e025e",
          createTime: "2021-03-25T20:10:13.000+0800",
          statas: 1,
          updater: "506e42e5-4142-11eb-9079-00163e2e025e",
          updateTime: "2021-04-10T21:37:12.000+0800",
        },
      ],
      isEdit: true,
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
