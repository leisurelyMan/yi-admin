<template>
  <el-dialog
    :visible.sync="visible"
    width="800px"
    center
    title="绿色债券共识平台公约总则"
    :close-on-click-modal="false"
    @close="closeFn"
  >
    <div class="main">
      <p class="title">第一章 总则</p>
      <p class="item">
        第一条：绿色债券共识平台是一个基于区块链技术的绿色金融产品认证平台。通过区块链技术，以自动认证替代传统人工认证形式。在提高认证与MRV管理效率、确保经认证的项目质量的同时，构建去中心化的绿色金融产品信任机制，从而更好地为企业单位、金融机构和投资人完成绿色债券的全流程协作。
      </p>
      <p class="item">
        第二条本公约所称合作方，指接入绿色债券共识平台的联盟链成员。
      </p>
      <p class="title">
        第二章 行为准则
      </p>
      <p class="item">
        第三条合作方对在绿色债券共识平台上提交的确认事项、业务数据、文件等承担法律责任，应确保确认事项、业务数据、文件的合法、合规、有效、准确，不得含有任何违反国家法律法规政策规章的内容。
      </p>
      <p class="item">
        第四条合作方须承诺与绿色债券共识平台同等的保护数据隐私的责任，不得通过非正常手段获取其无权查看的数据，不得将数据泄露给无权查看的合作方。
      </p>
      <p class="item">
        第五条合作方须承担其接入绿色债券共识平台所需私钥的保护责任，防止私钥泄露或被不法分子窃取，造成合作方自身及其他合作方的经济损失。
      </p>
      <p class="item">
        第六条合作方不得将绿色债券共识平台代码以及数据在其他场景用作商用。
      </p>
      <p class="item">
        第七条合作方不得对绿色债券共识平台尝试进行攻击、破坏等影响平台正常运行的行为。
      </p>
      <p class="item">
        第八条合作方在绿色债券共识平台上的所有行为须遵守《绿色债券共识平台公约》及绿色债券共识平台上的所有协议、公约及制度，不得侵犯任何组织或个人的合法权益。
      </p>
      <p class="title">第三章 业务范围</p>
      <p class="item">
        第九条绿色债券共识平台为合作方提供绿色债券共识的各项核心服务（包括绿色债券认证、智能报告生成、债券存续期管理等）。
      </p>
      <p class="item">
        第十条绿色债券共识平台为合作方提供用户管理、机构管理、角色管理等基础服务，便于合作方内部管理及平台使用。
      </p>
      <p class="item">
        第十一条对于具有法律风险、需要监管的行业，绿色债券共识平台将参考法律法规及行业标准选择性合作。
      </p>
      <p class="item">
        第十二条绿色债券共识平台为所有合作方提供区块链节点部署方案咨询及实施支持。
      </p>
      <p class="title">第四章 附则</p>
      <p class="item">
        第十三条绿色债券共识平台会根据不同阶段的整体战略，通过与各合作方、投资人沟通需求，不断完善该公约。一旦本公约的内容发生变动，绿色债券共识平台将立即在网站上公布修改后的公约内容，该行为视为绿色债券共识平台已经通知各方修改内容。
      </p>
    </div>
    <span slot="footer" class="dialog-footer">
      <el-button @click="closeFn" type="primary">关闭</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
  name: "Modal",
  props: {
    modalStatus: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    visible: {
      get() {
        return this.modalStatus;
      },
      set(val) {
        this.$emit("update:modalStatus", val);
      },
    },
  },
  methods: {
    closeFn() {
      this.visible = false;
      this.$emit("closeModal");
    },
  },
};
</script>

<style lang="scss" scoped>
.success-icon {
  margin-bottom: 20px;
  width: 72px;
  height: 72px;
}
.main {
  display: flex;
  flex-direction: column;
  p {
    color: #333;
    font-size: 14px;
    margin: 5px 0;
  }
  .title {
    font-size: 20px;
    font-weight: bold;
    text-indent: 1em;
  }
  .item {
    font-size: 14px;
    text-indent: 2em;
  }
}
::v-deep .el-dialog--center .el-dialog__footer {
  text-align: right;
}
</style>
