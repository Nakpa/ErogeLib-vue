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

  /*定义滚动条的高宽*/
	/* ::-webkit-scrollbar {
    width: 16px;
    height: 16px;
	} */
  /*CSS的坐标系，左上角为(0,0),往右往下为增加，往上往左为减少*/
	/*显示滚动条上方的渐增按钮*/
	/* ::-webkit-scrollbar-button:start:decrement, */
	/*显示滚动条上方的渐减按钮*/
	/* ::-webkit-scrollbar-button:end:increment {
	    display: block;
	} */
  /*隐藏滚动条上方的渐增按钮*/
	/* ::-webkit-scrollbar-button:vertical:start:increment,
	::-webkit-scrollbar-button:vertical:end:decrement {
    display: none;
	} */
  /* 垂直滚动条的第三层轨道的上段 */
	/* ::-webkit-scrollbar-track-piece:vertical:start {
	    background-repeat: no-repeat, repeat-y;
	} */
	/* 垂直滚动条的第三层轨道的下段 */
	/* ::-webkit-scrollbar-track-piece:vertical:end {
	    background-repeat: no-repeat, repeat-y;
	    background-position: bottom left, 0 0;
	} */
	/* 垂直滚动条的滑动块 */
	/* ::-webkit-scrollbar-thumb:vertical {
	    height: 36px;
	    border-width: 8 0 8 0;
	} */



</style>
