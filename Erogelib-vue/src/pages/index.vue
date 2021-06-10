<template>
  <div>
    <db-header></db-header>
    <pageContent style="height: calc(90vh - 30px)"/>
    <db-footer></db-footer>
  </div>
</template>

<script>
import DbHeader from '@/components/DbHeader.vue'
import DbFooter from '@/components/DbFooter.vue'
import pageContent from '@p/pageContent'

import {
  queryTmUser,
  userLogin
} from '@a/erogelib/userinfo/index.js';
import {mapMutations} from "vuex";

export default {

  components: {
    DbHeader,
    DbFooter,
    pageContent
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

</style>
