<template>
  <div class="dialog-tips" v-show="dialogStatus">
    <div class="dialog-main">
      <div class="title">{{this.title}}
        <span class="el-icon-close" @click="closeDialog()"></span>
      </div>
      <div class="content">{{content}}</div>
      <div class="foot" v-if="btnList">
        <el-button type="primary" size="mini" v-for="(item, index) in btnList" :key="index" @click="getIt(index)">{{item}}</el-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'dialog-tips',
  data() {
    return {}
  },
  computed: {
    title() {
      return this.$store.state.dialog.title
    },
    content() {
      return this.$store.state.dialog.content
    },
    btnList() {
      return this.$store.state.dialog.btn
    },
    path() {
      return this.$store.state.dialog.path
    },
    dialogStatus() {
      return this.$store.state.dialog.dialogStatus
    }
  },
  methods: {
    getIt(index) {
      this.$store.dispatch('updateDialogStatus', false)
      if (this.path[index]) {
        this.$router.push(`/${this.path[index]}`)
      }
    },
    closeDialog() {
      this.$store.dispatch('updateDialogStatus', false)
    }
  }
}
</script>
<style>
.dialog-tips {
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
.dialog-main {
  width: 200px;
  padding: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #ffffff;
  border-radius: 4px;
  box-shadow: 0px 1px 3px 0px rgba(140, 140, 140, 0.5);
}
.dialog-main .title {
  height: 20px;
  line-height: 20px;
  font-size: 14px;
  text-align: left;
  position: relative;
}
.title .el-icon-close {
  position: absolute;
  top: 3px;
  right: 10px;
  cursor: pointer;
}
.dialog-main .content {
  line-height: 24px;
  margin-top: 20px;
}
.dialog-main .foot {
  text-align: center;
  margin-top: 20px;
}
</style>

