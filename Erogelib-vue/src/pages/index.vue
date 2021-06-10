<template>
  <div>
    <db-header></db-header>
    <el-row class="container">
      <el-col :span="24" class="content">
        <!-- <template> -->
        Eroge is life , like a melody
        <el-button @click="testClick">测试按钮</el-button>
        <el-button @click="loginTestClick">登录按钮</el-button>
        <el-button @click="logoutTestClick">登出按钮</el-button>
        <!-- </template> -->
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <footer class="footer">
          <db-footer></db-footer>
        </footer>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import DbHeader from '@/components/DbHeader.vue'
import DbFooter from '@/components/DbFooter.vue'

import {
  queryTmUser,
  userLogin
} from '@a/erogelib/userinfo/index.js';
import {mapMutations} from "vuex";

export default {

  components: {
    DbHeader,
    DbFooter,
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
      this.$router.push({path: 'login'});
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

element.style {
  background-color: rgb(10, 47, 88);
}

body {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  margin: 0;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

.el-menu,body,html {
  height: 100%;
}

.wrapper {
  position: relative;
}

footer,
div {
  display: block;
}

.container {
  padding-top: 50px;
  flex: 1;
}

.container,.wrapper {
  height: 100%;
}

.menu {
  height: 100%;
  background-color: #eef1f6;
}

.content {
  padding-top: 25px;
  padding-right: 25px;
  padding-bottom: 125px;
  padding-left: 25px;
}

.footer {
  height: 120px;
  background-color: #324057;
  color: #a4aebd;
  width: 100%;
  z-index: 1000;
  margin-top: -120px;
  line-height: 1;
  font-size: 22px;
}
</style>
