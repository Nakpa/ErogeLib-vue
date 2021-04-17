<template>
  <div>
    Life is Eroge
    <el-button @click="testClick">测试按钮</el-button>
    <el-button @click="loginTestClick">登录按钮</el-button>
    <el-button @click="logoutTestClick">登出按钮</el-button>
  </div>
</template>

<script>

import {
  queryTmUser,
  userLogin
} from '@a/erogelib/userinfo/index.js';
import {mapMutations} from "vuex";

export default {

  components: {
  },

  props: {
  },

  data: function () {
    return {
      imageUrl: '',
    }
  },

  watch: {
  },

  methods: {

    ...mapMutations(['changeLogin']),

    testClick() {
      let params = {
        userName: 'N'
      }
      console.log(params , ' -------- params');
      queryTmUser(params).then(res => {
        if(res.code == 200){
          console.log(res , '----------- testClick');
          // this.$notify({
          //   title: '提示',
          //   message: "查询成功",
          //   duration: 3000,
          //   showClose: true,
          // })
        }
      })
    },

    loginTestClick() {
      let loginMap = {
        userAccount: 'nakpa',
        password: 'quanjin1999'
      }
      userLogin(loginMap).then(res => {
        console.log(res , ' ----------- userLogin')
        if(res.code == 200){
          console.log(res , ' ---------- returnMap --- login');
          this.$notify({
            title: '提示',
            message: "登入成功！",
            duration: 3000,
            showClose: true,
          })
          this.changeLogin({ Authorization: res.result.token });
        }
      })
    },

    logoutTestClick() {
      localStorage.removeItem('Authorization');
      sessionStorage.removeItem('Authorization');
    },

  }

}

</script>
<style scoped>
.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>
