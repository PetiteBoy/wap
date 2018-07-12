
<template>
    <div class="reg">
        <Header :title="headerTitle" :back-status="true"></Header>
        <div class="page-title">
            更换绑定手机
        </div>
        <div class="page-main">
            <div class=" page-item">
                <el-select v-model="idType" placeholder="请选择证件类型">
                    <el-option v-for="item in IDList" :key="item.type" :label="item.name" :value="item.type">
                    </el-option>
                </el-select>
            </div>
            <div class="page-item">
                <el-input :disabled="!idType" v-model="idNo" placeholder="请输入证件号"></el-input>
            </div>
            <div class=" page-item">
                <el-select v-model="licenseType" placeholder="请选择准驾车型">
                    <el-option v-for="item in licenseList" :key="item" :label="item" :value="item">
                    </el-option>
                </el-select>
            </div>
            <div class=" page-item">
                <el-input :disabled="!licenseType" v-model="licenseNo" placeholder="请输入驾驶证档案编号"></el-input>
            </div>
            <div class="page-item">
                <el-input v-model="oldPhone" placeholder="请输入手机号码"></el-input>
            </div>
            <div class="page-item">
                <el-input v-model="phone" placeholder="请输入手机号码"></el-input>
            </div>
            <div class="get-btn page-item">
                <el-input v-model="verifyCode" placeholder="请输入验证码"></el-input>
                <el-button>获取</el-button>
            </div>
            <div class="login-btn page-item">
                <el-button type="primary" :disabled="regBtnStatu">提交</el-button>
            </div>
            <div class="page-tips page-item">
                <div class="tips-title">提示：</div>
                <div>
                    请如实填写以上信息，注册虚假注册信息可能会导致黑名单
                </div>

            </div>
        </div>

    </div>
</template>
<script>
import Header from './Home/Header.vue'
export default {
  name: 'reg',
  components: {
    Header
  },

  data() {
    return {
      // 头部标题
      headerTitle: '教育管理平台',
      //   证件类别
      idType: '',
      //   证件编号
      idNo: '',
      //   驾驶证类型
      licenseType: '',
      //   驾驶证编号
      licenseNo: '',
      //   手机号
      phone: '',
      oldPhone: '',
      //   验证码
      verifyCode: ''
    }
  },
  computed: {
    IDList() {
      return this.$store.state.data.IDList
    },
    licenseList() {
      return this.$store.state.data.licenseList
    },
    regBtnStatu() {
      if (this.idType && this.idNo && this.licenseType && this.licenseNo && this.licenseBeginDate && this.licenseEndDate && this.phone && this.verifyCode) {
        return false
      } else {
        return true
      }
    }
  }
}
</script>
<style>
.el-date-editor.el-input,
.el-date-editor.el-input__inner {
  width: 100%;
}
</style>


