<template>
  <div class="exam-book">
    <Header :title="headerTitle" :back-status="true" :info-status="true"></Header>
    <div class="page-title">审验教育预约</div>
    <div class="page-main">
      <div class="page-tips">请选择所要预约的教育时间</div>
      <div class="page-item">
        <el-date-picker v-model="effectiveDate" type="date" placeholder="选择日期">
        </el-date-picker>
      </div>
      <div class="page-item current-status" v-for="(item,index) in examDataList" :key="index" :class="{'current-status-active': index === itemIndex}" @click="choseItem(index)">
        {{item.content}}
      </div>
      <div class="page-item">
        <el-button type="primary" :disabled="submitStatus" @click="submit()">提交预约</el-button>
      </div>
      <div class="page-tips page-item">
        <p>请认真阅读信息，按照实际情况选择预约：</p>
        <p>1、驾驶人审验教育时间不得少于3小时。</p>
        <p>2、对在一个记分周期内累积记分达到9至11分的大中型客货车驾驶人和校车驾驶人，以及持有其他准驾车型驾驶证发生交通事故造成人员死亡承担同等以上责任未被吊销驾驶证的驾驶人，应当采用现场审验教育形式。</p>
      </div>
    </div>
  </div>
</template>
<script>
import Header from './Home/Header.vue'
export default {
  name: 'exam-book',
  data() {
    return {
      // 头部标题
      headerTitle: '预约',
      effectiveDate: '',
      examDataList: [
        {
          content: '上午场（8:00-12:00） 现已预约12/20人'
        },
        {
          content: '下午场（1:30-5:30） 现已预约3/20人'
        }
      ],
      itemIndex: -1
    }
  },
  components: { Header },
  computed: {
    submitStatus() {
      if (this.effectiveDate && this.itemIndex !== -1) {
        return false
      } else {
        return true
      }
    }
  },
  methods: {
    choseItem(index) {
      this.itemIndex = index
    },
    submit() {
      let title = '预约失败'
      let content = '2018-06-10 上午场（8:00-12:00） 已经预约满员请预约其他场次'
      let btn = ['知道了']
      let path = ['']

      this.$store.dispatch('updateDialog', {
        title,
        content,
        btn,
        path
      })

      this.$store.dispatch('updateDialogStatus', true)
    }
  },
  mounted() {}
}
</script>
<style>
.current-status {
  width: 200px;
  border: 1px solid #eeeeee;
  padding: 10px;
  margin: 0 auto;
  margin-top: 15px;
  border-radius: 4px;
  cursor: pointer;
}
.current-status-active {
  border: 1px solid #409eff;
}
</style>
