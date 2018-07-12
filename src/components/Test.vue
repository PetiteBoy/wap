
<template>
    <div>
        <el-upload class="upload-demo" action="http://47.95.250.247/driver-api/file/upload" :before-upload="handleProgress" :on-success="handleSuccess">
            <el-button size="small" type="primary">点击上传</el-button>
        </el-upload>
    </div>
</template>
<script>
import $store from '../store'
export default {
  data() {
    return {
      fileList: []
    }
  },
  $store,
  methods: {
    handleProgress(file) {
      console.log(file.name)
    },
    handleSuccess(response) {
      console.log(response)
    }
  }
}
</script>