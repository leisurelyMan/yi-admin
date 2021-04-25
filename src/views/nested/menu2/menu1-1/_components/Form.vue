<template>
  <div style="padding:10px;">
    <el-form ref="form" :model="form" label-width="180px">
      <el-form-item
        prop="name"
        label="项目名称"
        :rules="[{ required: true, message: '活动名称不能为空' }]"
      >
        <el-col :span="12">
          <el-input v-model="form.projectName"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item
        prop="companyName"
        label="项目公司名称"
        :rules="[{ required: true, message: '活动名称不能为空' }]"
      >
        <el-col :span="12">
          <el-input v-model="form.companyName"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="活动区域">
        <el-cascader
          size="large"
          :options="options"
          placeholder="项目地址"
          v-model="form.projectAddress"
          @change="handleChange"
        >
        </el-cascader>
      </el-form-item>
      <el-form-item
        prop="investmentAmount"
        label="总投资金额（万元）"
        :rules="[{ required: true, message: '总投资金额不能为空' }]"
      >
        <el-col :span="12">
          <el-input v-model.number="form.investmentAmount"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="项目建设内容">
        <el-col :span="12">
          <el-input type="textarea" v-model="form.buildContent"></el-input>
        </el-col>
      </el-form-item>

      <el-form-item label="上传可研报告或项目:">
        <el-upload
          class="upload-demo"
          drag
          action="https://jsonplaceholder.typicode.com/posts/"
          multiple
        >
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
          <div class="el-upload__tip" slot="tip">
            支持扩展名:.rar .zip .doc .docx .pdf .jpg
          </div>
        </el-upload>
      </el-form-item>
      <el-form-item label="项目建设状态">
        <el-select v-model="form.statas" placeholder="请选择项目建设状态">
          <el-option label="已建成未投产" :value="1"></el-option>
          <el-option label="已建成已投产" :value="2"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="活动开工日期">
        <el-col :span="12">
          <el-date-picker
            type="date"
            placeholder="选择日期"
            v-model="form.startDate"
            style="width: 100%;"
          ></el-date-picker>
        </el-col>
      </el-form-item>
      <el-form-item label="活动完工日期">
        <el-col :span="12">
          <el-date-picker
            type="date"
            placeholder="选择日期"
            v-model="form.endDate"
            style="width: 100%;"
          ></el-date-picker>
        </el-col>
      </el-form-item>
      <el-form-item prop="raisedFunds" label="拟使用募集资金（万元）">
        <el-col :span="12">
          <el-input v-model.number="form.raisedFunds"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="募集资金用途" prop="buildStatas">
        <el-col :span="12">
          <el-checkbox-group v-model="form.buildStatas">
            <el-checkbox label="建设" name="type"></el-checkbox>
            <el-checkbox label="运营" name="type"></el-checkbox>
            <el-checkbox label="偿还贷款" name="type"></el-checkbox>
            <el-checkbox label="偿还债券" name="type"></el-checkbox>
            <el-checkbox label="其他" name="type"></el-checkbox>
          </el-checkbox-group>
        </el-col>
      </el-form-item>
      <el-form-item label="建设运营偿还贷款偿还:">
        <el-upload
          class="upload-demo"
          drag
          action="https://jsonplaceholder.typicode.com/posts/"
          multiple
        >
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
          <div class="el-upload__tip" slot="tip">
            支持扩展名:.rar .zip .doc .docx .pdf .jpg
          </div>
        </el-upload>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('form')">确定</el-button>
        <el-button @click="resetForm('form')">重置</el-button>
        <el-button @click="addForm('form')">添加项目</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { regionData, CodeToText } from "element-china-area-data";
export default {
  name: "Form",

  props: {
    detail: {
      type: Object,
      default: () => {},
    },
  },
  watch: {
    detail: {
      handler(val) {
        Object.assign(this.form, val);
      },
      immediate: true,
    },
  },
  data() {
    var checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("年龄不能为空"));
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error("请输入数字值"));
        } else {
          if (value < 18) {
            callback(new Error("必须年满18岁"));
          } else {
            callback();
          }
        }
      }, 1000);
    };
    return {
      form: {
        projectName: "",
        companyName: "",
        projectAddress: [], // 地区code
        investmentAmount: null,
        raisedFunds: null,
        startDate: "",
        endDate: "",
        delivery: false,
        type: [],
        resource: "",
        buildContent: "",
        statas: null,
        buildStatas: [],
      },
      rules: {
        investmentAmount: [{ validator: checkAge, trigger: "blur" }],
      },
      options: regionData,
      selectedOptions: [],
      obj: {
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
        statas: "003",
        startDate: "2021-03-16",
        endDate: "2021-03-30",
        raisedFunds: "7000.34",
        buildStatas: "偿还债券,其他",
        supportingDocuments: "145ab8fb-4b7c-4b1a-9695-d96d07c5ddfe",
        creater: "506e42e5-4142-11eb-9079-00163e2e025e",
        createTime: "2021-03-25T20:17:52.000+0800",
        statas: 1,
        updater: "506e42e5-4142-11eb-9079-00163e2e025e",
        updateTime: "2021-04-10T21:37:12.000+0800",
      },
    };
  },
  methods: {
    submitForm() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.$emit("submit", this.form);
          return true;
        }
        this.$message.error("表单校验失败");
        return false;
      });
    },
    resetForm() {
      Object.assign(this.$data, this.$options.data());
    },
    addForm() {
      this.$emit("add");
    },
    handleChange() {
      console.log(this.form.projectAddress);
    },
  },
};
</script>
<style lang="scss" scoped>
.container {
  box-sizing: border-box;
  padding: 30px 150px;
  .bold {
    font-weight: bold;
    font-size: 18px;
  }
  .row {
    display: flex;
    align-items: center;
    div:nth-child(1) {
      min-width: 150px;
    }
    .icon {
      font-size: 16px;
      margin-left: 5px;
      color: #7bcb00;
    }
  }
}
</style>
