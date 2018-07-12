<template>
    <!-- 获取验证码组件 -->
    <div class="get-code">
        <!-- 请输入手机号码 -->
        <div class="page-item">
            <el-input v-model="phone" placeholder="请输入手机号码"></el-input>
        </div>
        <!-- 请输入验证码 -->
        <div class="get-btn page-item">
            <el-input v-model="verifyCode" placeholder="请输入验证码"></el-input>
            <el-button :disabled="getCodeBtnStatus" @click="getCode()">获取</el-button>
        </div>
    </div>
</template>
<script>
import { checkPhone } from '../../utils/base.js'
export default {
  name: 'get-code',
  data() {
    return {
      phone: ''
    }
  },
  props: {
    type: {
      type: String,
      default: 'login'
    }
  },
  computed: {
    verifyCode() {
      return this.$store.state.login.verify.code
    },
    getCodeBtnStatus() {
      return !checkPhone(this.phone)
    },
    apiStatus() {
      return this.$store.state.login.api.status
    },
    apiMsg() {
      return this.$store.state.login.api.msg
    },
    apiType() {
      return this.$store.state.login.api.type
    }
  },
  watch: {
    apiStatus() {
      if (this.apiStatus !== '0x0000' && this.apiType === 'code') {
        alert(this.apiMsg)
        this.$store.dispatch('resetApi')
      }
    }
  },
  methods: {
    getCode() {
      let type = this.type
      let phone = this.phone
      this.$store.dispatch('getCode', {
        type,
        phone
      })
    }
  }
}
</script>

<style>
</style>

