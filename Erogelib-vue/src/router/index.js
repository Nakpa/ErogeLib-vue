import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Login = resolve =>(require(["@p/login"], resolve));
const mainContent = () => import("@p/pageContent");
const BasicLayout = () => import('@/layout/BasicLayout');
const RouterView = () => import('@/layout/RouterView');

// 基础路由
const basicRouterMap = [
  {
    path: '/',
    redirect: '/home',
    meta: { title: '首页' },
    component: BasicLayout,
    children: [
      {
        path: '/home',
        name: 'home',
        meta: { title: '我的主页', bgColor: true, keepAlive: true },
        component: mainContent,
      },
      {
        path: '/blog',
        redirect: '/ergblog',
        component: RouterView,
        children: [
          {
            path: '/blog/ergblog',
            name: '我的blog',
            meta: { title: '我的blog', bgColor: true, keepAlive: true },
            component: mainContent,
          }
        ]
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    meta: { title: '用户登录' },
    component: Login
  },
];

export default new Router({
  mode: 'history',
  routes: basicRouterMap,
  scrollBehavior: () => ({ y: 0 }),
});
