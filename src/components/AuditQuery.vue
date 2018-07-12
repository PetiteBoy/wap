<template>
  <div class="audit-query">
    <Header :title="headerTitle" :back-status="true"></Header>
    <div class="page-title">
      查询审核状态
    </div>
    <div class="page-main">
      <!-- 获取验证码 -->
      <GetCode :type="'login'"></GetCode>
      <div class="page-item">
        <el-button type="primary" @click="auditQuery()" :disabled="auditQueryBtnStatus">查询</el-button>
      </div>
      <div class="page-item self-info-main" v-show="auditQueryStatus">
        <div>手机号码：{{auditQueryData.phone}}</div>
        <div>准驾车型：{{auditQueryData.licenseType}}</div>
        <div>驾驶证号：{{auditQueryData.licenseNo}}</div>
        <div>驾驶证有效期：{{formatTime(auditQueryData.licenseBeginDate)}}--{{formatTime(auditQueryData.licenseEndDate)}}</div>
        <div>证件类型：{{auditQueryData.idType}}</div>
        <div>证件号码：{{auditQueryData.idNo}}</div>
        <div>注册时间：{{formatTime(auditQueryData.createTime)}}</div>
        <div>审核状态：{{auditQueryData.auditState}}</div>
        <div>审核时间：{{formatTime(auditQueryData.auditTime)}}</div>
        <div class="page-item">
          <el-button type="primary" @click="toDo()">{{btnText}}</el-button>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
import Header from './Home/Header.vue'
import GetCode from '../components/Home/GetCode.vue'
import { momentTime } from '../utils/base.js'
export default {
  name: 'audit-query',
  components: {
    Header,
    GetCode
  },

  data() {
    return {
      // 头部标题
      headerTitle: '查询审核状态',
      // 验证码
      // verifyCode:''，
      auditQueryStatus: false,
      btnText: ''
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
    // 审验结果数据
    auditQueryData() {
      return this.$store.state.login.auditQueryData
    },
    // 审验按钮状态
    auditQueryBtnStatus() {
      if (this.phone && this.verifyCode) {
        return false
      } else {
        return true
      }
    }
  },
  watch: {
    apiStatus() {
      if (this.apiType === 'auditstate') {
        let title = ''
        let content = ''
        let btn = ''
        let path = ''
        if (this.apiStatus !== '0x0000') {
          title = '审核信息'
          content = this.apiMsg
          btn = ['知道了']
          path = ['']
          this.$store.dispatch('updateDialog', {
            title,
            content,
            btn,
            path
          })
          this.$store.dispatch('resetApi')
          this.$store.dispatch('updateDialogStatus', true)
        } else {
          this.auditQueryStatus = true
          this.btnText = '前去登录'
        }
      }
    }
  },
  methods: {
    formatTime(timestamp) {
      return momentTime(timestamp)
    },
    // 查询审验状态
    auditQuery() {
      this.$store.dispatch('auditQuery', {
        phone: this.phone,
        verifyCode: this.verifyCode,
        verifyCodeToken: this.verifyCodeToken
      })
    },
    toDo() {
      // 审核通过
      this.$router.push('login')
      // 审核不过
      this.$router.push('update')
    }
  },
  mounted() {
    this.$store.dispatch('resetApi')
    this.$store.dispatch('resetVerify')
  }
}
</script>
<style>
.self-info-main {
  text-align: left;
}
</style>


