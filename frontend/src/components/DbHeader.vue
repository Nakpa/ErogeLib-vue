<template>
  <header style="background-color: rgb(152,172,248);">
    <el-col :span="4">
      <div class="text-logo">{{msg}}</div>
    </el-col>
    <!-- <ul class="header-operations">
        </ul> -->
    <el-col :span="20">
      <div class="classRadius">
      <el-menu default-active="1" style="background-color: rgba(152,172,248,0);" background-color="#98ACF8"
        text-color="#FFF" active-text-color="#98ACF8" :unique-opened="uniqueOpenedFlag" mode="horizontal"
        @open="handleOpen" @close="handleClose">
        <el-menu-item index="1">
          <span slot="title">导航一</span>
        </el-menu-item>
        <el-menu-item index="2">
          <span slot="title">导航二</span>
        </el-menu-item>
      </el-menu>
      </div>
      <!-- <el-slider v-model="value2" :step="4" @input="changeActiveSpan"></el-slider> -->
    </el-col>
  </header>
</template>

<script>
  export default {
    name: 'db-header',
    data() {
      return {
        msg: 'Eroge-Lib',
        uniqueOpenedFlag: true,
      }
    },
    methods: {

      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      changeActiveSpan(val) {
        console.log(val, 'change')
        this.activeSpan = val;
      }
    },
  }

</script>

<style scoped>
  header {
    height: 50px;
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    padding: 0 0;
    z-index: 1;
    line-height: 25px;
    box-sizing: border-box;
  }

  .text-logo {
    display: inline-block;
    vertical-align: middle;
    border-style: none;
    position: relative;
    top: 15px;
    right: -20px;
    font-size: 25px;
    color: white;

  }

  .meta {
    color: #7e95c5;
    width: 350px;
    display: block;
    margin: -5px 0 0 225px;
    font-weight: 700;
    font-size: 0.3rem;
  }

  .el-menu-item>>>.el-submenu__title {
    height: 50px;
    line-height: 50px;
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    padding: 0 0;
  }

  .el-menu--horizontal>.el-menu-item {
    border-bottom: none;
    height: 50px;
    line-height: 50px;
    text-align: center;
  }

  .el-menu--horizontal>.el-menu-item.is-active {
    border-bottom: none;
  }


  .classRadius {
    text-align: center;
    border: 0 solid #a1a1a1;
    padding: 0;
    background: rgba(255, 255, 255, 0.3);
    border-radius: 20px 0 0 20px;
    -moz-border-radius: 20px 0 0 20px;
    /* 老的 Firefox */
  }

</style>
