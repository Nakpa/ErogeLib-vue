<template>
  <div class="wrapper">
    <router-view></router-view>
  </div>
</template>

<script>
import '@/assets/css/iconfont.css';

export default {
  name: 'app',

  provide() {
    return {
      reload: this.reload
    };
  },

  components: {
  },

  mounted() {
  },

  methods: {
    reload() {
      this.$nextTick(() => {
        console.log(' page is reload ');
      });
    }
  }

}

</script>

<style>
  element.style {
    background-color: rgb(10, 47, 88);
  }

  body {
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    margin: 0;
    padding: 0;
    display: flex;
    min-height: 100vh;
    flex-direction: column;
    overflow-y: auto;
    /* scrollbar-width: none; */
  }

  footer,
  div {
    display: block;
  }

  .el-footer, .el-main {
    height: 120px;
    background-color: #324057;
    color: #a4aebd;
    margin-top: -120px;
    line-height: 1;
    font-size: 22px;
  }


  /* div::-webkit-scrollbar {
    width: 0px;
  } */
  ::-webkit-scrollbar {
    width: 7px;
    height: 5px;
  }
  ::-webkit-scrollbar-track {
    background-color: rgba(255, 255, 255, 0);
  }
  ::-webkit-scrollbar-thumb {
    background-color: #d6e6d346;
    border-radius: 7px;
    border: 1px solid #f1f1f1;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }
  ::-webkit-scrollbar-thumb:hover {
    background-color: #c6d2fc;
  }
  ::-webkit-scrollbar-thumb:active {
    background-color: #424d6d;
  }
  ::-webkit-scrollbar-corner {
    background-color: rgba(255, 255, 255, 0);
  }

</style>
