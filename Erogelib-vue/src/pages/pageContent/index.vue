<template>
  <div class="mainBgClass">
    <el-row>
      <el-col :span="4" class="side">&nbsp;</el-col>
      <el-col :span="16" class="content">
        <el-card shadow="never" :body-style="{ padding: '10px'}" class="mainInfoCard">
          <el-row v-for="(preList , perIndex) in afterItemList" :key="perIndex" :gutter="10">
            <el-col v-for="(handlerItem , handlerIndex) in preList" :key="handlerIndex" :span="12" class="itemColClass">
              <el-card shadow="never" :body-style="{ padding: '0' }" class="itemCardClass" @click="openDetailDialog(handlerItem)">
                <el-image
                  style="width: 100%; height: 120px"
                  :src="handlerItem.imgUrl"
                  fit="cover" />
                  <el-row :gutter="20">
                    <el-col :span="8" style="font-size:12px;">
                      <el-row style="padding-top:7px;line-height: 16px;">
                        <el-col :span="4"><i class="iconfont erg-icon-title" style="font-size: 20px;color: green;" /></el-col>
                        <el-col :span="20" style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">{{handlerItem.title}}</el-col>
                      </el-row>
                      <el-row style="padding-top:7px;line-height: 16px;">
                        <el-col :span="4"><i class="iconfont erg-icon-Clockin" style="font-weight: bold;color: green;padding-left: 1px;" /></el-col>
                        <el-col :span="20" 
                          style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;font-size:12px;">
                          {{dateFormat(handlerItem.date)}}
                        </el-col>
                      </el-row>
                    </el-col>
                    <el-col :span="16" style="padding-top:7px">
                      <div class="mainContxt">
                        {{handlerItem.mainContxt}}
                      </div>
                    </el-col>
                  </el-row>
              </el-card>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
      <el-col :span="4" class="side">&nbsp;</el-col>
    </el-row>
  </div>
</template>

<script>
import {
  formatdate
} from '@/utils/index.js';

import {mapMutations} from "vuex";

export default {

  name: 'mainDashboard',

  components: {
  },

  props: {
  },

  data: function () {
    // const mockUrl = 'https://i.loli.net/2021/06/16/64jso9wd8XWuUFP.png';
    const mockUrl = '';
    const txt = "……こんな風に改まって手紙を書こうとすると、君と幼い頃に遊んだことを思い出すよ。君は覚えているかどうかわからないけれど。夏に一緒に龍岩峠へ出掛けて一緒に泳いだこと、山イチゴを摘みに歩き回ったこと、冬には雪の積もった丘でソリ遊びをしたこと……。君が転がって泣いているのを、僕が慰めたこともあったな。他にも、祭りの時に一緒に花火見物をしたこともあったな。大人たちの担いだ神輿を追いかけたことも思い出されるよ。あの時に買ったお面は、今も僕の大切な宝物の一つだ。";
    const title = '明日菜へ 元気か？'
    const date = '2020-3-18 17:06';
    return {
      preItemList: [
        {itemId: 1,imgUrl: mockUrl, title: title,mainContxt: txt,date : date},
        {itemId: 2,imgUrl: mockUrl, title: title,mainContxt: txt,date : date},
        {itemId: 3,imgUrl: mockUrl, title: title,mainContxt: txt,date : date},
        {itemId: 4,imgUrl: mockUrl, title: title,mainContxt: txt,date : date},
        {itemId: 5,imgUrl: mockUrl, title: title,mainContxt: txt,date : date},
        {itemId: 6,imgUrl: mockUrl, title: title,mainContxt: txt,date : date},
        {itemId: 7,imgUrl: mockUrl, title: title,mainContxt: txt,date : date}
      ],
      afterItemList: [],
    }
  },

  watch: {
  },

  mounted() {
    this.init();
  },

  methods: {
    init(){
      this.homeItemHandler();
    },

    homeItemHandler() {
      this.afterItemList = [];
      let count = 0;
      let itemMap = [];
      let itemList = [];
      this.preItemList.splice(0,4).forEach(el => {
        if(count < 2) {
          count ++;
        } else {
          itemList.push(itemMap);
          itemMap = [];
          count = 1;
        }
        itemMap.push(el);
      })
      if(count > 0){
        itemList.push(itemMap);
      }
      this.afterItemList = itemList;
      console.log(this.afterItemList , 'this.afterItemList');
    },

    openDetailDialog(val) {
      console.log(val , ' ------------------- openDetailDialog');
    },

    dateFormat(date){
      return formatdate(date, 6);
    },
  }

}

</script>
<style lang="less" scoped>
.mainBgClass{
  width:100%;
}
.content {
  padding-top: 25px;
}
.side{
  padding-top: 25px;
  height: calc(90vh - 75px);
  min-height: 350px;
  margin-top: 40px;
}
.mainInfoCard{
  margin: auto;
  width: 100%;
  height: calc(90vh - 75px);
  min-width: 700px;
  min-height: 350px; 
  margin-top: 50px;
  background: none;
  border: none;
  overflow-y: auto;

  /* 滚动条设置 */
}
.itemColClass{
  padding-bottom: 20px;

  .itemCardClass{
    cursor:pointer;
    width: 85%;
    min-width: 260px;
    height: 180px;
    margin: auto;
    .mainContxt{
      color: #999999;
      font-size: 12px;
      display: -webkit-box;
      -webkit-line-clamp: 3;/* 行数 */
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}
</style>
