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
        }
    }
});

export default store;
