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
import permission from "@/router/permission.js";


Vue.config.productionTip = false

Object.defineProperty(Vue.prototype, '$moment', { value: moment });
Object.defineProperty(Vue.prototype, '$curvejs', { value: curvejs });

Vue.use(Vuex) ;
Vue.use(ElementUI, {lang});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store: store,
  components: { App },
  template: '<App/>'
})
