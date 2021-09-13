<template>
  <header style="">
    <!-- <transition name="bounce"> -->
      <el-row :class="isShowAll ? novBgClass : novBgClassMin" style="line-height:30px;height: 50px;background-color: rbga(238,238,238,0.6);border-bottom:1px solid rgba(252,222,192,1);">
        <el-col v-if="isShowAll" :span="2">
          <div class="text-logo" style="cursor:pointer;" @click="returnToHome">{{msg}}</div>
        </el-col>
        <el-col v-if="isShowAll" :span="21">
        </el-col>
        <el-col :span="isShowAll ? 1 : 12">
          <el-dropdown trigger="click" placement="bottom-start"  @command="clickMore">
            <div style="position: relative;top: 10px;left: 10px;text-align: center;cursor:pointer;
              border-style: none;width:30px;height:30px;border-radius:15px;border: 1px solid #00adb5;">
              <i class="iconfont erg-icon-neko-foot-icon" style="font-size:24px;color: #00adb5;"></i>
            </div>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item icon="iconfont erg-icon-gerenzhongxinx" command="userInfo" disabled>我的信息</el-dropdown-item>
              <el-dropdown-item icon="iconfont erg-icon-new-Blog" command="addBlog" :disabled="!user.userId">新建博文</el-dropdown-item>
              <el-dropdown-item icon="iconfont erg-icon-tools" command="erogeMaker" disabled>ERG开发</el-dropdown-item>
              <el-dropdown-item v-if="user.userId" icon="iconfont erg-icon-exit" command="logout">账号登出</el-dropdown-item>
              <el-dropdown-item v-else icon="iconfont erg-icon-exit" command="logout">登录 / 注册</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>
        <!-- <el-col :span="isShowAll ? 1 : 12">
          <i v-if="isShowAll" class="iconfont erg-icon-put-away-right"
          style="cursor:pointer;font-size:26px;color: #00adb5;position: relative;top: 10px;left: 40%;border-style: none;" @click="putawayHandle"></i>
          <i v-if="!isShowAll" class="iconfont erg-icon-put-away-left-copy"
          style="cursor:pointer;font-size:26px;color: #00adb5;position: relative;top: 10px;left: 40%;border-style: none;" @click="putawayHandle"></i>
        </el-col> -->
      </el-row>
    <!-- </transition> -->
      <el-dialog title="写点文章" :visible.sync="addBlogFlag" 
        :append-to-body="true" :close-on-press-escape="false" 
        :modal="false" width="50%" @close="closeDialog" :before-close="handleClose" destroy-on-close>
        <addBlogDialog/>
        <span slot="footer" style="margin-right:10px">
          <el-button size="mini" @click="closeDialog">提交</el-button>
          <el-button size="mini" @click="closeDialog">返回</el-button>
        </span>
      </el-dialog>
  </header>
</template>

<script>
import addBlogDialog from '@p/pageContent/comps/addBlogDialog.vue';
export default {
  name: 'db-header',

  components: {
    addBlogDialog
  },

  data() {
    return {
      msg: 'ErogeLib',
      uniqueOpenedFlag: true,
      activeIndex: "1",
      isShowAll: true,
      novBgClass: 'novBgClass',
      novBgClassMin: 'novBgClassMin',
      user: {},
      addBlogFlag: false,
    }
  },

  mounted() {
    this.$nextTick( () => {
      this.user = JSON.parse(localStorage.getItem('userInfo')) || {}
    })
  },

  methods: {

    returnToHome() {
      this.$router.push({path: '/home'});
    },

    clickMore(val) {
      if(val == 'logout'){
        this.logoutClick();
      } else if (val == 'addBlog'){
        this.addBlog();
      } else if(val == 'erogeMaker'){

      }
    },

    // 登出
    logoutClick() {
      localStorage.removeItem('Authorization');
      localStorage.removeItem('userInfo');
      this.$router.push({path: 'login'});
    },
    
    addBlog() {
      this.addBlogFlag = true;
    },

    closeDialog() {
      if(this.addBlogFlag){
        this.$confirm('内容还没保存, 你要奏了么')
          .then(_ => {
            this.addBlogFlag = false;
          })
          .catch(_ => {});
      }
    },

    handleClose(done) {
      if(this.addBlogFlag){
        this.$confirm('内容还没保存, 你要奏了么')
          .then(_ => {done();})
          .catch(_ => {});
      }
    },

    putawayHandle() {
      this.isShowAll = !this.isShowAll;
    },
  },
}
</script>

<style scoped>
  header{
    height: 50px;
    width: 100%;
    line-height: 25px;
    position:absolute;
    top:0;
    left:0;
    z-index:10;
    /* box-sizing: border-box; */
  }

  .text-logo {
    display: inline-block;
    vertical-align: middle;
    border-style: none;
    position: relative;
    top: 10px;
    right: -20px;
    font-size: 25px;
    color: #00adb5;
  }

  .text-icon {
    display: inline-block;
    text-align: center;
    vertical-align: middle;
    border-style: none;
    /* position: relative; */
    /* top: 15px; */
    /* left: 80px; */
    font-size: 25px;
    color: white;
  }

  .put-away{
    cursor: pointer;
    font-size: 26px;
    color: rgb(0, 173, 181);

  }

  .meta {
    color: #7e95c5;
    width: 350px;
    display: block;
    margin: -5px 0 0 225px;
    font-weight: 700;
    font-size: 0.3rem;
  }

  .classRadius {
    text-align: center;
    border: 10 solid #000000;
    padding: 0;
    background: rgba(255, 255, 255, 0.3);
    border-radius: 20px 0 0 20px;
    -moz-border-radius: 20px 0 0 20px;
    /* 老的 Firefox */
  }

  .el-row {
    margin-bottom: 20px;
    display: flex;
    flex-wrap: wrap
  }

  .el-col {
    border-radius: 20px;
    align-items: stretch;
    margin-bottom: 40px;
  }

  .novBgClass{
    width:100%;
    background:url(../../static/image/nov_bg.png);
    animation: novBgClassIn .5s ;
  }

  .novBgClassMin{
    width:7%;
    border-left:1px solid rgba(252,222,192,0.8);
    background:url(../../static/image/nov_bg.png);
    position:absolute;
    top:0;
    right:0;
    animation: novBgClassMinIn 1s ;
  }

  @keyframes novBgClassIn
  {
    0%   {opacity:0;}
    40%  {opacity:0.4;}
    100% {opacity:1;}
  }
  @-webkit-keyframes novBgClassIn /* Safari and Chrome */
  {
    0%   {opacity:0;}
    40%  {opacity:0.4;}
    100% {opacity:1;}
  }

  @keyframes novBgClassMinIn
  {
    0%   {opacity:0;}
    40%  {opacity:0.4;}
    100% {opacity:1;}
  }
  @-webkit-keyframes novBgClassMinIn /* Safari and Chrome */
  {
    0%   {opacity:0;}
    40%  {opacity:0.4;}
    100% {opacity:1;}
  }

</style>
