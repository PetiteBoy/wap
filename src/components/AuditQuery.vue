<template>
  <div class="audit-query">
    <Header :title="headerTitle" :back-status="true"></Header>
    <div class="page-title">
      查询审核状态
    </div>
    <div class="page-main">
      <div class="page-item">
        <el-input v-model="phone" placeholder="请输入手机号码"></el-input>
      </div>
      <div class="get-btn page-item">
        <el-input v-model="verifyCode" placeholder="请输入验证码"></el-input>
        <el-button :disabled="getCodeBtnStatus" @click="getCode()">获取</el-button>
      </div>
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
          <el-button type="primary" @click="update()">修改信息</el-button>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
import Header from './Home/Header.vue'
import { checkPhone, momentTime } from '../utils/base.js'
export default {
  name: 'audit-query',
  components: {
    Header
  },

  data() {
    return {
      // 头部标题
      headerTitle: '查询审核状态',
      // 手机号
      phone: ''
      // 验证码
      // verifyCode:''
    }
  },
  computed: {
    // 审验结果状态
    auditQueryStatus() {
      return this.$store.state.login.auditQueryStatus
    },
    // 审验结果数据
    auditQueryData() {
      return this.$store.state.login.auditQueryData
    },
    // 验证码token
    verifyCodeToken() {
      return this.$store.state.login.verifyCodeToken
    },
    // 验证码
    verifyCode() {
      return this.$store.state.login.verifyCode
    },
    // 发送验证码状态
    getCodeBtnStatus() {
      return !checkPhone(this.phone)
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
  methods: {
    formatTime(timestamp) {
      return momentTime(timestamp)
    },
    // 获取验证码
    getCode() {
      let type = 'auditstate'
      let phone = this.phone
      this.$store.dispatch('getCode', {
        type,
        phone
      })
    },
    // 查询审验状态
    auditQuery() {
      this.$store.dispatch('auditQuery', {
        phone: this.phone,
        verifyCode: this.verifyCode,
        verifyCodeToken: this.verifyCodeToken
      })
    },
    // 修改信息
    update() {}
  }
}
</script>
<style>
.self-info-main {
  text-align: left;
}
</style>


