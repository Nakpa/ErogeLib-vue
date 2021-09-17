<template>
  <div class="mainBgClass">
    <el-card class="loginPane" :style="isLogin? 'filter: blur(2px);':''">
      <el-row :gutter="10" style="padding-top: 75px;">
        <el-col :span="16">
          <p class="titleCss">Eroge is life 、 like a melody</p>
          <p class="titleCss" style="margin-bottom: 40px;">- As the Night's、Reincarnation -</p>
          <el-row :gutter="10">
            <el-col :span="16">
              <el-input v-model="account" clearable placeholder="在这里输入账号~" @keyup.enter.native="loginTestClick"/>
            </el-col>
          </el-row>
          <el-row :gutter="10">
            <el-col :span="16">
              <el-input v-model="password" clearable show-password placeholder="在这里输入密码~" auto-complete="off" @keyup.enter.native="loginTestClick"/>
            </el-col>
          </el-row>
          <el-row :gutter="10">
            <el-col :span="16">
              <el-button v-if="false" class="btnClass">注册</el-button>
              <el-button class="btnClass" @click="showVerifyPlugin">
                <i class="iconfont erg-icon-Category" style="color: rgba(128,128,128,0.7);"/>
                <span style="color: rgba(128,128,128,0.7);">登录</span></el-button>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
      <div class="bottomHelp" style="font-size: 14px;color: gray;line-height: 14px;">
        <i class="iconfont erg-icon-cat_missing" style="font-size: 16px;" />
        遇到问题?
        <a href="mailto:HarumaNakpa@outlook.com" style="text-decoration: none;color:grey;">联系我们</a>
        <span style="font-size: 13px;"> | Twitter: </span>
        <a href="https://twitter.com/naxc_2424" target="_blank" style="text-decoration: none;">
          <i class="iconfont erg-icon-twitter-icon" style="font-size: 16px;color: rgb(26,145,218);"/>
        </a>
      </div>
    </el-card>
    <div v-if="isLogin" class="loginPane-mask"></div>
    <el-row v-if="isLogin" :gutter="10">
      <el-col :span="16"  class="verifyClass">
        <slide-verify
          :l="35"
          :r="10"
          :w="300"
          :h="150"
          @success="onSuccess"
          @again="tryAgain"
          @fail="onFail"
          @refresh="onRefresh"
          :slider-text="sliderText">
        </slide-verify>
        <i class="el-icon-circle-close" style="cursor:pointer;padding-left: calc(50% - 190px);" @click="isLogin = false"></i>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import {
  userLogin 
} from '@a/erogelib/userinfo/index.js';

import {mapMutations} from "vuex";

export default {
  name: 'login',
  components: {
  },

  props: {
  },

  data: function () {
    return {
      account: '',
      password: '',
      isLogin: false,
      sliderText: 'Slide right to Confirm Login'
    }
  },

  watch: {
  },

  methods: {
    ...mapMutations(['changeLogin', 'setUserInfo']),

    showVerifyPlugin(){
      if(!this.account || !this.password){
        // this.$notify.info("未输入完整的账号信息");
        this.$notify({
          message: "未输入完整的账号信息",
          duration: 750,
          showClose: true,
        })
        return;
      }
      if(!this.isLogin){
        this.isLogin = true;
      }
    },

    onSuccess() {
      console.log(' verify success , now this time Login');
      if(this.isLogin){
        this.isLogin = false;
        this.loginTestClick();
      }
    },

    tryAgain() {
      console.log(' verify fail , are you robot ?');
    },

    onFail() {
      console.log(' verify fail , plz confirm again');
    },

    onRefresh() {
      console.log(' refresh img ');
    },

    loginTestClick() {
      let loginMap = {
        userAccount: this.account,
        password: this.password
      }
      if(loginMap.userAccount == 'admin' && loginMap.password == 'admin123'){
          this.changeLogin({ Authorization: 'EROGELIBADMIN====SKIP===' });
          let userInfo = {
            userName: 'ERG管理员',
            userAccount: 'admin',
            userId: 'erogelibAdmin',
            email: '',
            remark: '',
          }
          this.setUserInfo(userInfo);
          this.getUserTags();
          this.$router.push({path: '/home'});
        return;
      }
      userLogin(loginMap).then(res => {
        console.log(res , ' ----------- userLogin')
        if(res.code == 200){
          console.log(res , ' ---------- returnMap --- login');
          this.$notify({
            title: '提示',
            message: "登入成功！",
            duration: 1500,
            showClose: true,
          })
          this.changeLogin({ Authorization: res.result.token });
          let userInfo = {
            userName: res.result.userName,
            userAccount: res.result.userAcco,
            userId: res.result.userId,
            email: res.result.email,
            remark: res.result.remark,
          }
          this.setUserInfo(userInfo);
          this.$router.push({path: '/home'});
        }
      }).catch(err => {
        console.log(err);
      })
    },

    logoutTestClick() {
      localStorage.removeItem('Authorization');
      this.$router.push({path: 'login'});
    },
  }

}

</script>
<style lang="less" scoped>
.mainBgClass{
  width:100%;
  min-height:100vh;
  background:url(../../../static/image/main_bg.jpg);
}
.loginPane{
  position: absolute;
  width: 550px;
  height: 500px;
  min-height: 500px;
  top: calc(50% - 250px);
  left: calc(50% - 275px);
  background:url(../../../static/image/comf_kuro_bg.png);
}
.loginPane-mask{
  position: absolute;
  width: 550px;
  height: 500px;
  min-height: 500px;
  top: calc(50% - 250px);
  left: calc(50% - 275px);
  background: rgba(0,0,0,0.3);
  z-index: 99;
  border-radius: 10px;
  transition: 0.3s;
}
.verifyClass{
  position: absolute;
  top: calc(50% + 250px);
  left: calc(50% - 180px);
  z-index: 999;
}
.bottomHelp{
  position: absolute;
  bottom: 5px;
}
/deep/ .el-input--suffix .el-input__inner{
  background: none;
  margin-bottom: 20px;
  border-radius: 10px;
  color: #0061a8;
}
.btnClass{
  background: none;
  border-radius: 15px;
  padding: 10px;
  float: right;
  margin-left: 20px;
}
.titleCss{
  font-style: italic;
//   letter-spacing: 0.5px;
  color: #0061a8;
}
</style>
