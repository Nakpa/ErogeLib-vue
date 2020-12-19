<template>
  <header style="background-color: rgb(152,172,248);">
    <el-row :gutter="20">
      <el-col :span="2">
      </el-col>
      <el-col :span="3">
        <div class="text-logo">{{msg}}</div>
      </el-col>
      <el-col :span="6">
        <div class="classRadius">
          <!-- <el-menu default-active="1" style="background-color: rgba(152,172,248,0);" background-color="#98ACF8"
            text-color="#FFF" active-text-color="#98ACF8" :unique-opened="uniqueOpenedFlag" mode="horizontal"
            @open="handleOpen" @close="handleClose">
            <el-menu-item index="1">
              <span slot="title">导航一</span>
            </el-menu-item>
            <el-menu-item index="2">
              <span slot="title">导航二</span>
            </el-menu-item>
          </el-menu> -->
          <el-menu :default-active="activeIndex" style="background-color: rgba(152,172,248,0);border-radius: 20px 0 0 20px;"
            class="menuConfig" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1">导航一</el-menu-item>
          </el-menu>
        </div>
      </el-col>
      <el-col :span="4">
        <div class="text-logo">otherNov</div>
      </el-col>
      <el-col :span="4">
        <div class="text-logo">search</div>
      </el-col>
      <el-col :span="2">
        <div class="text-icon">
          圆形ICON
        </div>
      </el-col>
      <el-col :span="3">
        <div class="text-logo"></div>
      </el-col>
    </el-row>
  </header>
</template>

<script>
  export default {
    name: 'db-header',
    data() {
      return {
        msg: 'Eroge-Lib',
        uniqueOpenedFlag: true,
        activeIndex: "1",
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
      },
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
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

  .meta {
    color: #7e95c5;
    width: 350px;
    display: block;
    margin: -5px 0 0 225px;
    font-weight: 700;
    font-size: 0.3rem;
  }

  .menuConfig>>>.el-menu {
    border-radius: 20px 0 0 20px;
    border-bottom: none;
    height: 50px;
    line-height: 50px;
    text-align: center;
  }

  .menuConfig>>>.el-menu>.el-menu--horizontal {
    border-radius: 20px 0 0 20px;
    border-bottom: none;
    height: 50px;
    line-height: 50px;
    text-align: center;
  }

  .el-menu-item>>>.el-submenu__title {
    border-radius: 20px 0 0 20px;
    height: 50px;
    line-height: 50px;
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    padding: 0 0;
    margin-left: 30px;
  }

  .el-menu--horizontal>.el-menu-item {
    border-bottom: none;
    height: 50px;
    line-height: 50px;
    text-align: center;
  }

  .el-menu--horizontal>.el-menu-item.is-active {
    border-radius: 20px 0 0 20px;
    border-bottom: none;
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

</style>
