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
      value: {
        projectName: "",
        companyName: "",
        startDate: "",
        projectAddress: "",
        buildContent: "",
        statas: "",
      }, // 这里的value对应下面rule里的field
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
          type: "cascader",
          field: "projectAddress",
          title: "项目地址",
          value: ["陕西省", "西安市", "新城区"],
          props: {
            options: [
              {
                value: "beijing",
                label: "北京",
                children: [
                  {
                    value: "gugong",
                    label: "故宫",
                  },
                  {
                    value: "tiantan",
                    label: "天坛",
                  },
                  {
                    value: "wangfujing",
                    label: "王府井",
                  },
                ],
              },
              {
                value: "jiangsu",
                label: "江苏",
                children: [
                  {
                    value: "nanjing",
                    label: "南京",
                    children: [
                      {
                        value: "fuzimiao",
                        label: "夫子庙",
                      },
                    ],
                  },
                  {
                    value: "suzhou",
                    label: "苏州",
                    children: [
                      {
                        value: "zhuozhengyuan",
                        label: "拙政园",
                      },
                      {
                        value: "shizilin",
                        label: "狮子林",
                      },
                    ],
                  },
                ],
              },
            ],
          },
        },
        {
          type: "select",
          field: "statas",
          title: "项目建设状态",
          value: "1",
          options: [
            { value: "1", label: "已建成未投产", disabled: false },
            { value: "2", label: "已建成已投产", disabled: false },
          ],
          props: {
            // multiple: true,
          },
        },
        {
          type: "datePicker",
          field: "startDate",
          title: "活动开工日期",
          value: "",
        },
        {
          type: "textarea",
          field: "buildContent",
          title: "项目建设内容",
          value: "",
          autosize: true,
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
