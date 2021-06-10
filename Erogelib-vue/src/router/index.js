import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Login = resolve =>(require(["@p/login"], resolve));
const mainContent = resolve =>(require(["@p/index"], resolve));

// 基础路由
const basicRouterMap = [
  {
    path: '/home',
    name: 'home',
    component: mainContent
  },
  {
    path: '/login',
    name: 'login',
    meta: { title: '用户登录' },
    component: Login
  },
  {
    path: '/',
    redirect: '/home',
  },
];

export default new Router({
  mode: 'history',
  routes: basicRouterMap,
  scrollBehavior: () => ({ y: 0 }), 
});

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'index',
//     }
//   ]
// })
