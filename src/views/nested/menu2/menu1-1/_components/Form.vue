<template>
  <div style="padding:10px;">
    <el-form ref="form" :model="form" label-width="160px">
      <el-form-item
        prop="name"
        label="项目名称"
        :rules="[{ required: true, message: '活动名称不能为空' }]"
      >
        <el-col :span="11">
          <el-input v-model="form.name"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item
        prop="company"
        label="项目公司名称"
        :rules="[{ required: true, message: '活动名称不能为空' }]"
      >
        <el-col :span="11">
          <el-input v-model="form.company"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="活动区域">
        <el-cascader
          size="large"
          :options="options"
          placeholder="项目地址"
          v-model="form.region"
          @change="handleChange"
        >
        </el-cascader>
      </el-form-item>
      <el-form-item
        prop="money"
        label="总投资金额（万元）"
        :rules="[{ required: true, message: '总投资金额不能为空' }]"
      >
        <el-col :span="11">
          <el-input v-model.number="form.money"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="项目建设内容">
        <el-col :span="11">
          <el-input type="textarea" v-model="form.desc"></el-input>
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
        <el-select v-model="form.status" placeholder="请选择项目建设状态">
          <el-option label="已建成未投产" value="1"></el-option>
          <el-option label="已建成已投产" value="2"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="活动开工日期">
        <el-col :span="11">
          <el-date-picker
            type="date"
            placeholder="选择日期"
            v-model="form.date1"
            style="width: 100%;"
          ></el-date-picker>
        </el-col>
      </el-form-item>
      <el-form-item label="活动完工日期">
        <el-col :span="11">
          <el-date-picker
            type="date"
            placeholder="选择日期"
            v-model="form.date2"
            style="width: 100%;"
          ></el-date-picker>
        </el-col>
      </el-form-item>
      <el-form-item prop="fundRaising" label="拟使用募集资金（万元）">
        <el-col :span="11">
          <el-input v-model.number="form.fundRaising"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="募集资金用途" prop="deliveryWay">
        <el-col :span="11">
          <el-checkbox-group v-model="form.deliveryWay">
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
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { regionData, CodeToText } from "element-china-area-data";
export default {
  name: "Detail",

  props: {
    detail: {
      type: Object,
      default: () => {},
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
        name: "",
        company: "",
        region: [], // 地区code
        money: null,
        fundRaising: null,
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
        status: null,
        deliveryWay: [],
      },
      rules: {
        money: [{ validator: checkAge, trigger: "blur" }],
      },
      options: regionData,
      selectedOptions: [],
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
    handleChange() {
      console.log(this.form.region);
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
