<template>
  <div class="app-container">
    <form-create
      :rule="rule"
      v-model="fApi"
      :option="options"
      :value.sync="value"
    />
  </div>
</template>

<script>
import Form from "./_components/Form";
export default {
  components: { Form },
  data() {
    return {
      fApi: {},
      value: { field1: "111", field2: "222", time: "11:11:11" },
      options: {
        onSubmit: (formData) => {
          alert(JSON.stringify(formData));
        },
      },
      rule: [
        { type: "input", field: "field1", title: "field1", value: "aaa" },
        { type: "input", field: "field2", title: "field2", value: "sss" },
        { type: "timePicker", field: "time", title: "time", value: "12:12:12" },
        {
          type: "ElButton",
          title: "修改 field1",
          native: false,
          on: {
            click: () => {
              this.rule[0].value += "a";
            },
          },
          children: ["点击"],
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
