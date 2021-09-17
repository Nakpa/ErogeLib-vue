import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const user = {
    userName: '',
    userAccount: '',
    userId: '',
    email: '',
    remark: '',
}

const store = new Vuex.Store({
    state: {
        // 存储token
        Authorization: localStorage.getItem('Authorization') ? localStorage.getItem('Authorization') : '',
        userInfo: localStorage.getItem('userInfo') ? localStorage.getItem('userInfo') : user,
        blogState: localStorage.getItem('blogState') ? localStorage.getItem('blogState') : [],
        tagState: localStorage.getItem('tagState') ? localStorage.getItem('tagState') : [],
    },
    mutations: {
        // 修改token，并将token存入localStorage
        changeLogin (state, user) {
            state.Authorization = user.Authorization;
            localStorage.setItem('Authorization', user.Authorization);
        },
        // 将用户信息存入localStorage中
        setUserInfo(state , user) {
            state.userInfo = user;
            const userObj = JSON.stringify(user);
            localStorage.setItem('userInfo', userObj);
        },
        // 将博文信息存入localStorage中
        setBlogState(state , blog) {
            let userId = 'null';
            let user = JSON.parse(localStorage.getItem('userInfo')) || {};
            if(user && user.userId){
              userId = user.userId;
            }
            state.blogState = blog;
            const blogsObj = JSON.stringify(blog);
            localStorage.setItem(('blogState'+userId), blogsObj);
        },
        // 将标签信息存入localStorage中
        setTagState(state , tags) {
            let userId = 'null';
            let user = JSON.parse(localStorage.getItem('userInfo')) || {};
            if(user && user.userId){
              userId = user.userId;
            }
            state.tagState = tags;
            const tagsObj = JSON.stringify(tags);
            localStorage.setItem(('tagState'+userId), tagsObj);
        }
    }
});

export default store;
