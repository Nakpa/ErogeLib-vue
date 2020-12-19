<template>
  <div>
      Life is Eroge
      <el-button @click="testClick">测试按钮</el-button>
  </div>
</template>

<script>

import {
  queryTmUser
} from '@a/erogelib/userinfo/index.js'

export default {

  components: {
  },

  props: {
  },

  data: function () {
    return {
    }
  },

  watch: {
  },

  methods: {
    testClick() {
      let params = {
        userName: 'N'
      }
      console.log(params , ' -------- params');
      queryTmUser(params).then(res => {
        console.log(res , '----------- testClick');
      })
    }
  }

}

</script>
<style scoped>

</style>
