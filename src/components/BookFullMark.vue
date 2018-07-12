<template>
  <div class="edu-book">
    <Header :title="headerTitle" :back-status="true" :info-status="true"></Header>
    <div class="page-title">满分教育预约</div>
    <div class="page-main">
      <div class="page-tips">请选择所要预约的教育时间</div>
      <div class="page-item">
        <el-date-picker v-model="effectiveDate" type="date" placeholder="选择日期">
        </el-date-picker>
      </div>
      <div class="page-item current-status">
        满分场（8:00-12:00） 现已预约12/20人
      </div>
      <div class="page-item">
        <el-button type="primary">提交预约</el-button>
      </div>
      <div class="page-tips page-item">
        <p>请认真阅读信息，按照实际情况选择预约：</p>
        <p>1、驾驶人满分教育时间为7日，每日教育时间不得少于4小时，其中现场教育时间不得少于3日。</p>
        <p>2、大中型客货车、校车驾驶人，以及在一个记分周期内有两次以上达到12分或者累积记分达到24分以上的驾驶人，现场教育时间不得少于5日。</p>
      </div>
    </div>

  </div>
</template>
<script>
import Header from './Home/Header.vue'
export default {
  name: 'edu-book',
  data() {
    return {
      // 头部标题
      headerTitle: '预约',
      effectiveDate: '',
      dialogVisible: true
    }
  },
  components: { Header },
  computed: {},
  methods: {},
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
</style>

