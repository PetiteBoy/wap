<template>
    <div class="test-tips-box">
        <Header :title="testTipsTitle"></Header>
        <div class="tips-main">
            <div>
                满分教育：适用于在一个违法记分周期内累积记分达到12分及以上的机动车驾驶人。
            </div>
            <div>审验教育：适用于持有大型客车、牵引车、城市公交车、中型客车、大型货车（以下简称大中型客货车）驾驶证一个记分周期内有记分且尚未达到12分的，持有其他准驾车型驾驶证发生交通事故造成人员死亡承担同等以上责任未被吊销驾驶证的，以及校车驾驶人。</div>
        </div>
    </div>
</template>
<script>
import Header from './Home/Header.vue'
export default {
  name: 'test-tips-box',
  components: { Header },
  data() {
    return {
      testTipsTitle: '考试须知'
    }
  }
}
</script>
<style>
.tips-main {
  padding: 20px;
}
</style>

