<template>
  <div class="about">
    <label for="text">
      <input type="text" id="text" :style="'width:'+ inputwidth + 'px'" v-model="inputvalTemp" :input="this.checkInputValue()"/>
      <span :style="isTop?'top: -14px;font-size: 14px;':''">{{inputlabel}}</span>
    </label>
    <div v-if="inputtype == 'tag'" class="tagsClass">
      <span style="margin-right: 10px;font-size:12px;">常用标签:</span>
      <el-tag v-for="(tag , index) in historyTagsTemp" :key="index" @click="pushTags(tag)">{{tag.tagName}}</el-tag>
    </div>
  </div>
</template>
<script>

export default {

  name: 'PositionInput',

  data() {
    return {
      text: "hello",
      isTop: false,
      historyTags: [],
      historyTagsTemp: [],
      tagIdList: [],
      inputvalTemp: '',
    };
  },

  props: {
    inputlabel: {
      type: String,
      default: '请输入'
    },
    inputwidth: {
      type: Number,
      default: 180
    },
    inputtype: {
      type: String,
      default: 'text',
    },
    inputval: {
      type: String,
      default: '',
    }
  },

  mounted() {
    let userId = 'null';
    let user = JSON.parse(localStorage.getItem('userInfo')) || {};
    if(user && user.userId){
      userId = user.userId;
    }
    this.historyTags = JSON.parse(localStorage.getItem('tagState'+userId));
    this.historyTagsTemp = this.historyTags.splice(0,8);
  },

  methods: {
    checkInputValue() {
      if(this.inputvalTemp){
        this.isTop = true;
      } else {
        this.isTop = false;
      }
      if(this.inputtype == 'tag'){
        let tagTemp = this.inputvalTemp.trim();
        if(tagTemp){
          let tagTempList = tagTemp.split(" ");
          let tagTempList2 = [];
          for(let i = 0; i < tagTempList.length ; i++){
            if(tagTempList.indexOf(tagTempList[i]) == i){  
              tagTempList2.push(tagTempList[i]);
            }
          }
          if(this.inputvalTemp.substring(this.inputvalTemp.length - 1) == ' '){
            this.inputvalTemp = tagTempList2.join(" ") + ' ';
          } else {
            this.inputvalTemp = tagTempList2.join(" ");
          }
          this.tagIdList = tagTempList2;
        } else {
          this.tagIdList = [];
        }
      }
      this.$emit('update:inputval', this.inputvalTemp);
    },
    pushTags(tag){
      console.log(this.tagIdList.indexOf(tag.tagName));
      if(this.tagIdList.indexOf(tag.tagName) == -1) {
        console.log(this.tagIdList);
        this.tagIdList.push(tag.tagName);
        this.$nextTick(() => {
          this.inputvalTemp = this.inputvalTemp + ' ' + tag.tagName;
        })
      }
    }
  }

};
</script>
<style lang='less'>
label {
  width: 300px;
  height: 41px;
  position: relative;
  input {
    padding: 0 10px;
    height: 25px;
    border: 1px solid #00FFFF;
    border-radius: 6px;
    color: lightslategrey;
    &:focus + span {
      top: -14px;
      font-size: 14px;
    }
  }
  input:focus{
    border: 1px solid #0066FF !important;
    border-radius: 6px !important;
    outline: none;
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
.about{
  margin-bottom: 10px;
}
.tagsClass{
  margin-top: 5px;
}
.el-tag{
  margin-right: 7px;
  cursor: pointer;
  height: 25px !important;
  line-height: 23px !important;
  color: teal !important;
}
</style>