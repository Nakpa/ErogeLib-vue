import router from '@/router';

import NProgress from 'nprogress'; // Progress 进度条
import 'nprogress/nprogress.css'; // Progress 进度条样式

// 访问白名单
const whiteList = ['/login', '/blog/ergblog'];

router.beforeEach((to, from, next) => {
  NProgress.start()
  //鉴权拦截操作
  let token = localStorage.getItem('Authorization')
  console.log(' access route');
  changeDocTitle(to);
  if (token) {
    if (to.path === '/login') {
      next({ path: '/' })
      NProgress.done()
    } else {
      next();
      NProgress.done()
    }
    console.log( token , ' >>>>  access route >> permission');
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next(`/login?redirect=${to.path}`)
      NProgress.done()
    }
    console.log( ' access route false >> permission');
  }
})

// 修改页面标题
export function changeDocTitle(to) {
  console.log(to.meta.title)
  if(to && to.meta && to.meta.title){
    document.title = to.meta.title;
    console.log(document.title)
  }
}
  
//全局后置守卫
router.afterEach(() => {
  NProgress.done()
})