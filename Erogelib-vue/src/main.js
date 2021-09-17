// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import App from './App'
import router from './router'
import 'element-ui/lib/theme-chalk/index.css'
import lang from 'element-ui/lib/locale/lang/zh-CN'

import moment from 'moment'
import curvejs from 'curvejs'

import Vuex from 'vuex' //引入状态管理
import store from "@/store";
import SlideVerify from 'vue-monoplasty-slide-verify';
import permission from "@/router/permission.js";
import '@/config/index';


Vue.config.productionTip = false

Object.defineProperty(Vue.prototype, '$moment', { value: moment });
Object.defineProperty(Vue.prototype, '$curvejs', { value: curvejs });

Vue.use(Vuex) ;
Vue.use(ElementUI, {lang});
Vue.use(SlideVerify);

if (!String.prototype.trim) {
  String.prototype.trim = function () {
    return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
  };
}


let orignalSetItem = window.localStorage.setItem;   // 原生localStorage.setItem方法
localStorage.setItem = function(key,newValue){
  let setItemEvent = new Event("setItemEvent");  // 重写注册setItem
  setItemEvent.key = key;                        
  setItemEvent.newValue = newValue;              
  window.dispatchEvent(setItemEvent);            // 派发setItem
  orignalSetItem.apply(this, arguments);         // 设置值
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store: store,
  components: { App },
  template: '<App/>'
})
