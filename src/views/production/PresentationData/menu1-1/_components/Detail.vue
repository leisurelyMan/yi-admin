<template>
  <div style="padding:10px;">
    <el-form ref="form" :model="form" label-width="180px">
      <el-form-item prop="name" label="项目名称：">
        <el-col :span="12">
          <template v-if="isEdit">
            <span>{{ form.projectName }}</span>
          </template>
          <template v-else>
            <el-input v-model="form.projectName"></el-input>
          </template>
        </el-col>
      </el-form-item>
      <el-form-item prop="companyName" label="项目公司名称：">
        <el-col :span="12">
          <template v-if="isEdit">
            <span>{{ form.companyName }}</span>
          </template>
          <template v-else>
            <el-input v-model="form.companyName"></el-input>
          </template>
        </el-col>
      </el-form-item>
      <el-form-item label="活动区域：">
        <el-col :span="12">
          <template v-if="isEdit">
            <span>{{ form.projectAddress }}</span>
          </template>
          <template v-else>
            <el-cascader
              size="large"
              :options="options"
              placeholder="项目地址"
              v-model="form.projectAddress"
            >
            </el-cascader>
          </template>
        </el-col>
      </el-form-item>
      <el-form-item prop="investmentAmount" label="总投资金额（万元）：">
        <el-col :span="12">
          <template v-if="isEdit">
            <span>{{ form.investmentAmount }}</span>
          </template>
          <template v-else>
            <el-input v-model.number="form.investmentAmount"></el-input>
          </template>
        </el-col>
      </el-form-item>
      <el-form-item label="项目建设内容：">
        <el-col :span="12">
          <template v-if="isEdit">
            <span>{{ form.buildContent }}</span>
          </template>
          <template v-else>
            <el-input type="textarea" v-model="form.buildContent"></el-input>
          </template>
        </el-col>
      </el-form-item>

      <el-form-item label="上传可研报告或项目：">
        <el-upload
          class="upload-demo"
          drag
          action="https://jsonplaceholder.typicode.com/posts/"
          multiple
        >
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
          <div class="el-upload__tip" slot="tip" v-if="!isEdit">
            支持扩展名:.rar .zip .doc .docx .pdf .jpg
          </div>
        </el-upload>
      </el-form-item>
      <el-form-item label="项目建设状态：">
        <el-col :span="12">
          <template v-if="isEdit">
            <span>{{ status[form.statas] }}</span>
          </template>
          <template v-else>
            <el-select v-model="form.statas" placeholder="请选择项目建设状态">
              <el-option label="已建成未投产" :value="1"></el-option>
              <el-option label="已建成已投产" :value="2"></el-option>
            </el-select>
          </template>
        </el-col>
      </el-form-item>
      <el-form-item label="活动开工日期：">
        <el-col :span="12">
          <template v-if="isEdit">
            <span>{{ form.startDate }}</span>
          </template>
          <template v-else>
            <el-date-picker
              type="date"
              placeholder="选择日期"
              v-model="form.startDate"
              style="width: 100%;"
            ></el-date-picker>
          </template>
        </el-col>
      </el-form-item>
      <el-form-item label="活动完工日期：">
        <el-col :span="12">
          <template v-if="isEdit">
            <span>{{ form.endDate }}</span>
          </template>
          <template v-else>
            <el-date-picker
              type="date"
              placeholder="选择日期"
              v-model="form.endDate"
              style="width: 100%;"
            ></el-date-picker>
          </template>
        </el-col>
      </el-form-item>
      <el-form-item prop="raisedFunds" label="拟使用募集资金（万元）：">
        <el-col :span="12">
          <template v-if="isEdit">
            <span>{{ form.raisedFunds }}</span>
          </template>
          <template v-else>
            <el-input v-model.number="form.raisedFunds"></el-input>
          </template>
        </el-col>
      </el-form-item>
      <el-form-item label="募集资金用途：" prop="buildStatas">
        <el-col :span="12">
          <template v-if="isEdit">
            <span>{{ buildStatas[form.buildStatas] }}</span>
          </template>
          <template v-else>
            <el-checkbox-group v-model="form.buildStatas">
              <el-checkbox value="001" label="建设" name="type"></el-checkbox>
              <el-checkbox value="002" label="运营" name="type"></el-checkbox>
              <el-checkbox
                value="003"
                label="偿还贷款"
                name="type"
              ></el-checkbox>
              <el-checkbox
                value="004"
                label="偿还债券"
                name="type"
              ></el-checkbox>
              <el-checkbox value="005" label="其他" name="type"></el-checkbox>
            </el-checkbox-group>
          </template>
        </el-col>
      </el-form-item>
      <el-form-item label="建设运营偿还贷款偿还：">
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
    </el-form>
  </div>
</template>
<script>
export default {
  name: "Detail",
  props: {
    detail: {
      type: Object,
      default: () => {},
    },
    isEdit: {
      type: Boolean,
      default: false,
    },
  },

  watch: {
    detail: {
      handler(val) {
        if (!this.isEdit) return;
        Object.assign(this.form, val);
      },
      immediate: true,
    },
  },
  data() {
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
      status: {
        1: "已建成未投产",
        2: "未建成未投产",
      },
      buildStatas: {
        "001": "建设",
        "002": "运营",
        "002": "偿还贷款",
        "002": "偿还债务",
        "002": "其他",
      },
    };
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
