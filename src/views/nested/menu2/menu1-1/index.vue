<template>
  <div class="app-container">
    <el-tabs v-model="activeName" type="border-card" @tab-click="handleClick">
      <el-tab-pane label="募投项目基本信息" name="first">
        <form-create
          v-model="form"
          :rule="rule"
          :option="options"
          :value.sync="value"
        />
      </el-tab-pane>
      <el-tab-pane label="考核指标情况" name="second"
        >考核指标情况1</el-tab-pane
      >

      <el-tab-pane label="考核指标情况" name="third">考核指标情况2</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: "first",
      form: {},
      value: {
        projectName: "",
        companyName: "",
        startDate: "",
        projectAddress: "",
        investmentAmount: "",
        buildContent: "",
        statas: "",
        pic: "",
        endDate: "",
        raisedFunds: "",
        purpose: ["1", "2"],
      }, // 这里的value对应下面rule里的field
      options: {
        submitBtn: {
          //类型 primary / success / warning / danger / info / text
          type: "primary",
          //尺寸 medium / small / mini
          size: "medium",
          //是否朴素按钮
          plain: false,
          //是否圆角按钮
          round: false,
          //是否圆形按钮
          circle: false,
          //是否加载中状态
          loading: false,
          //是否禁用状态
          disabled: false,
          //图标类名
          icon: "",
          //按钮宽度
          width: "",
          //是否默认聚焦
          autofocus: false,
          //原生 type 属性
          nativeType: "button",
          //按钮内容
          innerText: "提交",
          //按钮是否显示
          show: true,
          //按钮布局规则
          col: 5,
        },
        row: {
          //栅格间隔
          gutter: 0,
          //布局模式，可选 flex，现代浏览器下有效
          type: undefined,
          //flex 布局下的垂直排列方式 top/middle/bottom
          align: undefined,
          //flex 布局下的水平排列方式 start/end/center/space-around/space-between
          justify: undefined,
          //自定义元素标签
          tag: "div",
        },
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
          props: {
            clearable: true,
            placeholder: "请输入项目名称",
          },
        },
        {
          type: "input",
          field: "companyName",
          title: "项目公司名称",
          value: "",
          props: {
            placeholder: "项目公司名称",
          },
        },
        {
          type: "cascader",
          field: "projectAddress",
          title: "项目地址(省市区县)",
          value: ["陕西省", "西安市", "新城区"],
          props: {
            placeholder: "选择项目地址",
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
          type: "input",
          field: "investmentAmount",
          title: "项目总投资金额",
          value: "",
          props: {
            placeholder: "请输入项目总投资金额",
          },
        },
        {
          type: "textarea",
          field: "buildContent",
          title: "项目建设内容",
          value: "",
          autosize: true,
          props: {
            placeholder: "请填写项目建设内容",
            autosize: { minRows: 2, maxRows: 6 },
          },
        },
        {
          type: "upload",
          field: "pic",
          title: "上传可研报告或者项目设",
          value: [
            "http://img1.touxiang.cn/uploads/20131030/30-075657_191.jpg",
            "http://img1.touxiang.cn/uploads/20131030/30-075657_191.jpg",
          ],
          autosize: true,
          props: {
            type: "select",
            uploadType: "image",
            action: "/upload.php", // 必选参数，上传的地址
            name: "pic",
            multiple: true,
            accept: "image\/*",
            limit: 1,
            onSuccess: function(res, file) {
              file.url = res.data.filePath;
            },
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
            placeholder: "请选择项目建设状态",
          },
        },
        {
          type: "datePicker",
          field: "startDate",
          title: "项目开工日期",
          value: "",
        },
        {
          type: "datePicker",
          field: "endDate",
          title: "项目完工日期",
          value: "",
        },
        {
          type: "input",
          field: "raisedFunds",
          title: "拟使用募集资金（万元）",
          value: "",
          props: {
            placeholder: "请输入拟使用募集资金",
          },
        },
        {
          type: "checkbox",
          field: "purpose",
          title: "募集资金用途：",
          props: {
            placeholder: "请输入拟使用募集资金",
          },
          options: [
            { value: "1", label: "建设" },
            { value: "2", label: "运营" },
            { value: "3", label: "偿还贷款" },
            { value: "4", label: "偿还债券" },
            { value: "5", label: "其他" },
          ],
        },
        // {
        //   type: "checkbox",
        //   title: "标签",
        //   field: "label",
        //   value: ["1", "2", "3"],
        //   options: [
        //     { value: "1", label: "好用" },
        //     { value: "2", label: "方便" },
        //     { value: "3", label: "实用" },
        //     { value: "4", label: "有效" },
        //   ],
        // },
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
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
};
</script>

<style scoped></style>
