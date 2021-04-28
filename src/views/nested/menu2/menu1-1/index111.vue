<template>
  <div class="app-container">
    <el-tabs v-model="activeName" type="border-card" @tab-click="handleClick">
      <el-tab-pane label="募投项目基本信息" name="first">
        <div v-for="(item, index) in dataArray" :key="index">
          <!-- @submit="submitForm" -->
          <Form :ref="`form${index}`" :detail="item" @add="addForm" />
        </div>
        <div style="padding-left:250px">
          <el-button type="primary" @click="submitForm('form')">确定</el-button>
          <el-button @click="resetForm('form')">重置</el-button>
          <el-button @click="addForm('form')">添加项目</el-button>
        </div>
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
      dataArray: [
        {
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
        {
          id: "5d94fa56-dc67-4b1a-8707-77d9c7d01251",
          bondId: "dd02b79f-41a2-11eb-9079-00163e2e025e",
          projectName: "养猪厂项目",
          companyName: "养猪厂",
          projectAddress: "14,1402,140214",
          investmentAmount: "6000",
          buildContent:
            "养猪厂项目建设养猪厂项目建设养猪厂项目建设养猪厂项目建设养猪厂项目建设养猪厂项目建设养猪厂项目建设养猪厂项目建设养猪厂项目建设养猪厂项目建设养猪厂项目建设养猪厂项目建设养猪厂项目建设养猪厂项目建设养猪",
          reportDocuments: "7ae530ad-16fc-4b09-b5ed-bff533c79e9b",
          scenePhotos: "9be68926-a7a3-4a56-b3c3-905024557088",
          buildStatas: "001",
          startDate: "2021-03-09",
          endDate: "2021-03-30",
          raisedFunds: "5000",
          useOfRaisedFunds: "建设,其他",
          supportingDocuments: "fd54b1e7-d1bb-4c30-ada6-8de8e3d5a509",
          creater: "506e42e5-4142-11eb-9079-00163e2e025e",
          createTime: "2021-03-25T20:17:52.000+0800",
          statas: 1,
          updater: "506e42e5-4142-11eb-9079-00163e2e025e",
          updateTime: "2021-04-10T21:37:12.000+0800",
        },
        {
          id: "dcf4ba6d-4301-4344-99b4-3ce80fc1e1f6",
          bondId: "dd02b79f-41a2-11eb-9079-00163e2e025e",
          projectName: "热力管道",
          companyName: "江北公用",
          projectAddress: "22,2205,220523",
          investmentAmount: "8000",
          buildContent:
            "热力管道建设热力管道建设热力管道建设热力管道建设热力管道建设热力管道建设热力管道建设热力管道建设热力管道建设热力管道建设热力管道建设热力管道建设热力管道建设热力管道建设热力管道建设热力管道建设热力管道",
          reportDocuments: "9153c9d2-a5c0-495f-9a06-9396102824cc",
          scenePhotos: "39c7fd24-848f-4b3c-8d59-b72e7e38f55a",
          buildStatas: "003",
          startDate: "2021-03-16",
          endDate: "2021-03-30",
          raisedFunds: "7000.34",
          useOfRaisedFunds: "偿还债券,其他",
          supportingDocuments: "145ab8fb-4b7c-4b1a-9695-d96d07c5ddfe",
          creater: "506e42e5-4142-11eb-9079-00163e2e025e",
          createTime: "2021-03-25T20:17:52.000+0800",
          statas: 1,
          updater: "506e42e5-4142-11eb-9079-00163e2e025e",
          updateTime: "2021-04-10T21:37:12.000+0800",
        },
      ],
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    submitForm(form) {
      console.log(form);
    },
    addForm() {
      const _form = {
        id: "",
        bondId: "",
        projectName: "",
        companyName: "",
        projectAddress: "",
        investmentAmount: "",
        buildContent: "",
        reportDocuments: "",
        scenePhotos: "",
        buildStatas: "",
        startDate: "",
        endDate: "",
        raisedFunds: "",
        useOfRaisedFunds: "",
        supportingDocuments: "",
        creater: "",
        createTime: "",
        statas: 1,
        updater: "",
        updateTime: "",
      };
      this.dataArray.push(_form);
    },
    resetForm() {
      Object.assign(this.$data, this.$options.data());
    },
  },
};
</script>

<style scoped>
.line {
  text-align: center;
}

/* ::v-deep .el-tabs__item is-top {
  min-width: 240px;
  text-align: center;
} */
</style>
