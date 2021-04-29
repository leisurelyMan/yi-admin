<template>
  <div class="app-container">
    <form-create
      v-model="fApi"
      :rule="rule"
      :option="options"
      :value.sync="value"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      fApi: {},
      value: { projectName: "", companyName: "", startDate: "" }, // 这里的value对应下面rule里的field
      options: {
        onSubmit: (formData) => {
          console.log(JSON.stringify(formData)); // 提交按钮默认事件
        },
        form: {
          inline: false, // 切换form子元素的block属性
          labelPosition: "right",
          labelWidth: "180px",
          hideRequiredAsterisk: true,
          showMessage: true,
          // disabled: true,
          size: "big",
        },
        info: {
          //提示消息类型,popover,tooltip
          type: "popover",
        },
      },
      rule: [
        {
          type: "input", // 表单类型
          field: "projectName",
          title: "项目名称",
          value: "",
          validate: [
            { required: true, message: "请输入项目名称", trigger: "blur" }, // 验证正则
          ],
        },
        {
          type: "input",
          field: "companyName",
          title: "项目公司名称",
          value: "",
        },
        {
          type: "datePicker",
          field: "startDate",
          title: "活动开工日期",
          value: "",
        },
        {
          type: "ElButton",
          title: "修改项目名称",
          native: false,
          on: {
            click: () => {
              this.rule[0].value += "a"; // 表单事件 this.rule[0]就是第0项的项目名称
            },
          },
          children: ["点击"],
        },
      ],
    };
  },
  methods: {},
};
</script>

<style scoped></style>
