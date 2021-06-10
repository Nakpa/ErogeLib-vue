<template>
  <div class="my-class">
    Eroge is life , like a melody
    <el-button @click="loginTestClick">登录按钮</el-button>
    <el-button @click="logoutTestClick">登出按钮</el-button>
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
    }
  },

  watch: {
  },

  methods: {
    ...mapMutations(['changeLogin']),

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
            duration: 1500,
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

</style>
