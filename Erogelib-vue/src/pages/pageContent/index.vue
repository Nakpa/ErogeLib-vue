<template>
  <div class="mainBgClass">
    <el-row>
      <el-col :span="24" class="content">
        <el-card shadow="never" :body-style="{ padding: '10px' }" class="mainInfoCard">
          Eroge is life , like a melody
        </el-card>
        
      </el-col>
    </el-row>
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
  }

}

</script>
<style scoped>
.mainBgClass{
  width:100%;
}
.content {
  padding-top: 25px;
  padding-right: 25px;
  padding-bottom: 125px;
  padding-left: 25px;
}
.mainInfoCard{
  margin: auto;
  width: 70%;
  height: calc(90vh - 140px);
  /* height: 100vh; */
  min-width: 700px;
  min-height: 350px; 
  margin-top: 50px;
  background: none;
}
</style>
