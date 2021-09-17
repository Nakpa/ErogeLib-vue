<template>
  <div class="mainBgClass">
    <el-row>
      <el-col :span="4" class="side">&nbsp;</el-col>
      <el-col :span="16" class="content">
        <el-card shadow="hover" :body-style="{ padding: '0'}" class="tagInfoCard" style="margin-top:25px">
        </el-card>
        <el-card shadow="hover" :body-style="{ padding: '0'}" class="tagInfoCard" style="margin-top:25px">
        </el-card>
        <el-card shadow="hover" :body-style="{ padding: '10px', 'padding-bottom': '0'}" class="mainInfoCard">
          <el-row v-for="(preList , perIndex) in afterItemList" :key="perIndex" :gutter="10">
            <el-col v-for="(handlerItem , handlerIndex) in preList" :key="handlerIndex" :span="12" class="itemColClass">
              <el-card shadow="hover" :body-style="{ padding: '0' }" class="itemCardClass" @click.native="openDetailDialog(handlerItem)">
                <el-image
                  style="width: 100%; height: 120px"
                  :src="handlerItem.imgUrl"
                  fit="cover" />
                  <el-row :gutter="20">
                    <el-col :span="8" style="font-size:12px;">
                      <el-row style="padding-top:7px;line-height: 16px;">
                        <el-col :span="4"><i class="iconfont erg-icon-title" style="font-size: 20px;color: green;" /></el-col>
                        <el-col :span="20" style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">{{handlerItem.blogTitle}}</el-col>
                      </el-row>
                      <el-row style="padding-top:7px;line-height: 16px;">
                        <el-col :span="4"><i class="iconfont erg-icon-Clockin" style="font-weight: bold;color: green;padding-left: 1px;" /></el-col>
                        <el-col :span="20" 
                          style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;font-size:12px;">
                          {{dateFormat(handlerItem.createDate)}}
                        </el-col>
                      </el-row>
                    </el-col>
                    <el-col :span="16" style="padding-top:7px">
                      <div class="mainContxt">
                        {{ReplaceHtmltoText(handlerItem.blogContent)}}
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
    <el-dialog title="" :visible.sync="blogPreviewFlag" 
      :append-to-body="true" :close-on-press-escape="false" 
      :modal="false" width="65%" @close="closeDialog" destroy-on-close>
      <blogDialog ref="blogDialog" :blogData="blogData" editType="detail" />
    </el-dialog>
  </div>
</template>

<script>
import {
  formatdate, ReplaceHtmltoText
} from '@/utils/index.js';
import {
  queryUserTags , queryBlogList
} from '@a/erogelib/userinfo/index.js';

import {mapMutations} from "vuex";

import blogDialog from './comps/blogDialog.vue';

export default {

  name: 'mainDashboard',

  components: {
    blogDialog
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
      preItemList: [],
      afterItemList: [],
      blogData: {},
      blogPreviewFlag: false,
    }
  },

  watch: {
  },

  mounted() {
    let userId = 'null';
    let user = JSON.parse(localStorage.getItem('userInfo')) || {};
    if(user && user.userId){
      userId = user.userId;
    }
    //监听缓存中指定key的值变化
    window.addEventListener('storage',  (e) => {
      if(e.key && e.key == ('blogState'+userId) && e.newValue){
        this.preItemList = JSON.parse(e.newValue) //获取到最新的blogState
        this.homeItemHandler();
      }
    })
    window.addEventListener("setItemEvent", (e) => {
      if(e.key && e.key == ('blogState'+userId) && e.newValue){
        this.preItemList = JSON.parse(e.newValue) //获取到最新的blogState
        this.homeItemHandler();
      }
    });
    this.init();
  },

  methods: {
    ...mapMutations(['setBlogState','setTagState']),

    async init(){
      this.getUserBaseState();
    },

    async getUserBaseState() {
      queryUserTags().then(res => {
        console.log(res.result , '- --- tag');
        this.setTagState(res.result);
      });
      queryBlogList().then(res => {
        console.log(res.result , '- --- blog');
        this.setBlogState(res.result);
        let userId = 'null';
        let user = JSON.parse(localStorage.getItem('userInfo')) || {};
        if(user && user.userId){
          userId = user.userId;
        }
        this.preItemList = JSON.parse(localStorage.getItem('blogState'+userId));
        this.homeItemHandler();
      })
    },

    homeItemHandler() {
      this.afterItemList = [];
      let count = 0;
      let itemMap = [];
      let itemList = [];
      if(this.preItemList && this.preItemList.length > 0){
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
      }
      if(count > 0){
        itemList.push(itemMap);
      }
      this.afterItemList = itemList;
      console.log(this.afterItemList , 'this.afterItemList');
    },

    openDetailDialog(val) {
      console.log(val , ' ------------------- openDetailDialog');
      this.blogData = JSON.parse(JSON.stringify(val));
      this.blogPreviewFlag = true;
    },

    closeDialog() {
      this.blogPreviewFlag = false;
    },

    dateFormat(date){
      return formatdate(date, 6);
    },

    ReplaceHtmltoText(str) {
      return ReplaceHtmltoText(str);
    }
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

/deep/ .el-card.is-always-shadow, .el-card.is-hover-shadow:focus, .el-card.is-hover-shadow:hover {
  box-shadow: 0 2px 7px 0 rgb(0 51 255 / 10%) !important;
  background-color: rgba(72, 175, 235, 0.233) !important;
}
.mainInfoCard{
  margin: auto;
  width: 100%;
  height: 415px;
  min-width: 700px;
  margin-top: 10px;
  background: none;
  border: none;
  overflow-y: auto;
  .el-card.is-always-shadow, .el-card.is-hover-shadow:focus, .el-card.is-hover-shadow:hover {
    box-shadow: 0 15px 17px 0 rgb(0 51 25.5%) !important;
    background-color: rgba(255,255,255, 1) !important;
  }
}
.tagInfoCard{
  margin: auto;
  width: 100%;
  height: 75px;
  min-width: 700px;
  min-height: 75px;
  background: none;
  border: none;
  overflow-y: auto;
  .el-card.is-always-shadow, .el-card.is-hover-shadow:focus, .el-card.is-hover-shadow:hover {
    box-shadow: 0 2px 12px 0 rgb(0 51 25.5%);
    // background-color: rgba(0,204,255, 0.3);
  }
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
  .itemCardClass:hover{
    cursor:pointer;
    width: 85%;
    min-width: 260px;
    height: 180px;
    margin: auto;
    transform:scale(1.05, 1.05);
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
