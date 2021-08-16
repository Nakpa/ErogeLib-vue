<template>
  <div class="about">
    <label for="input1">
      <input type="text" id="input1" />
      <span>用户名 / 密码</span>
    </label>
  </div>
</template>
<script>
export default {
  data() {
    return {
      text: "hello",
    };
  },
  mounted() {
    this.timer = 0;
    console.log(this);
  },
};
</script>
<style lang='less'>
label {
  width: 250px;
  height: 41px;
  position: relative;
  input {
    padding: 0 10px;
    height: 35px;
    &:focus + span {
      top: -23px;
      font-size: 14px;
    }
  }
  span {
    position: absolute;
    padding: 0 3px;
    left: 10px;
    font-size: 16px;
    top: 0px;
    transition: 0.25s all;
    background: white;
    color: #919191;
  }
}
</style>