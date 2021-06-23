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
        Authorization: sessionStorage.getItem('Authorization') ? sessionStorage.getItem('Authorization') : '',
        userInfo: sessionStorage.getItem('userInfo') ? sessionStorage.getItem('userInfo') : user,
    },
    mutations: {
        // 修改token，并将token存入localStorage
        changeLogin (state, user) {
            state.Authorization = user.Authorization;
            sessionStorage.setItem('Authorization', user.Authorization);
        },
        // 将用户信息存入sessionStorage中
        setUserInfo(state , user) {
            state.userInfo = user;
            const userObj = JSON.stringify(user);
            sessionStorage.setItem('userInfo', userObj);
        }
    }
});

export default store;