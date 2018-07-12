
<template>
  <!-- 注册驾驶人用户 -->
  <div class="reg">
    <Header :title="headerTitle" :back-status="true"></Header>
    <div class="page-title">
      注册驾驶人用户
    </div>
    <div class="page-main">
      <!-- 请选择证件类型 -->
      <div class=" page-item">
        <el-select v-model="idType" placeholder="请选择证件类型">
          <el-option v-for="item in IDList" :key="item.type" :label="item.name" :value="item.type">
          </el-option>
        </el-select>
      </div>
      <!-- 请输入证件号 -->
      <div class="page-item">
        <el-input :disabled="!idType" v-model="idNo" placeholder="请输入证件号"></el-input>
      </div>
      <!-- 请选择准驾车型 -->
      <div class=" page-item">
        <el-select v-model="licenseType" placeholder="请选择准驾车型">
          <el-option v-for="item in licenseList" :key="item" :label="item" :value="item">
          </el-option>
        </el-select>
      </div>
      <!-- 请输入驾驶证档案编号 -->
      <div class=" page-item">
        <el-input :disabled="!licenseType" v-model="licenseNo" placeholder="请输入驾驶证档案编号"></el-input>
      </div>
      <!-- 驾驶证开始时间 -->
      <div class="page-item">
        <el-date-picker v-model="licenseBeginDate" type="date" placeholder="驾驶证开始时间" value-format="timestamp">
        </el-date-picker>
      </div>
      <!-- 驾驶证结束时间 -->
      <div class=" page-item">
        <el-date-picker v-model="licenseEndDate" type="date" placeholder="驾驶证结束时间" value-format="timestamp">
        </el-date-picker>
      </div>
      <!-- 上传驾驶人证件图片 -->
      <div class="page-item">
        <el-upload class="upload-demo" action="http://47.95.250.247/driver-api/file/upload" :on-success="handleSuccessIDPic">
          <el-button size="small" type="primary">上传驾驶人证件图片</el-button>
        </el-upload>
      </div>
      <!-- 上传驾驶人本人头像 -->
      <div class="page-item">
        <el-upload class="upload-demo" action="http://47.95.250.247/driver-api/file/upload" :on-success="handleSuccessSelfPic">
          <el-button size="small" type="primary">上传驾驶人本人头像</el-button>
        </el-upload>
      </div>
      <!-- 获取验证码 -->
      <GetCode :type="'register'"></GetCode>
      <!-- 注册 -->
      <div class="login-btn page-item">
        <el-button type="primary" :disabled="regBtnStatus" @click="reg()">注册</el-button>
      </div>
      <!-- 提示 -->
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
import GetCode from '../components/Home/GetCode.vue'
export default {
  name: 'reg',
  components: {
    Header,
    GetCode
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
      //   驾驶证有效期开始时间
      licenseBeginDate: 0,
      //   驾驶证有效期结束时间
      licenseEndDate: 0,
      //   验证码
      // verifyCode: '',
      // 证件图片token
      idCardImgUrlToken: '',
      // 驾驶人本人头像token
      headUrlToken: ''
    }
  },
  computed: {
    apiStatus() {
      return this.$store.state.login.api.status
    },
    apiMsg() {
      return this.$store.state.login.api.msg
    },
    apiType() {
      return this.$store.state.login.api.type
    },
    phone() {
      return this.$store.state.login.verify.phone
    },
    verifyCodeToken() {
      return this.$store.state.login.verify.token
    },
    verifyCode() {
      return this.$store.state.login.verify.code
    },
    IDList() {
      return this.$store.state.data.IDList
    },
    licenseList() {
      return this.$store.state.data.licenseList
    },
    getCodeBtnStatus() {
      return !checkPhone(this.phone)
    },
    regBtnStatus() {
      if (this.idType && this.idNo && this.licenseType && this.licenseNo && this.licenseBeginDate && this.licenseEndDate && this.phone && this.verifyCode) {
        return false
      } else {
        return true
      }
    }
  },
  watch: {
    apiStatus() {
      if (this.apiType === 'register') {
        if (this.apiStatus !== '0x0000') {
          alert(this.apiMsg)
          this.$store.dispatch('resetApi')
        } else {
          this.$router.push('/login')
        }
      }
    }
  },
  methods: {
    // 上传证件照成功
    handleSuccessIDPic(response) {
      this.idCardImgUrlToken = response.data.token
    },
    // 上传头像成功
    handleSuccessSelfPic(response) {
      this.headUrlToken = response.data.token
    },
    // 注册
    reg() {
      this.$store.dispatch('userRegister', {
        idType: this.idType,
        idNo: this.idNo,
        idCardImgUrlToken: this.idCardImgUrlToken,
        licenseType: this.licenseType,
        licenseNo: this.licenseNo,
        licenseBeginDate: this.licenseBeginDate,
        licenseEndDate: this.licenseEndDate,
        headUrlToken: this.headUrlToken,
        phone: this.phone,
        verifyCode: this.verifyCode,
        verifyCodeToken: this.verifyCodeToken
      })
    }
  },
  mounted() {
    this.$store.dispatch('resetApi')
    this.$store.dispatch('resetVerify')
  }
}
</script>
<style>
.el-date-editor.el-input,
.el-date-editor.el-input__inner {
  width: 100%;
}
</style>


