import {Notification } from 'element-ui';
import Cookies from 'js-cookie';

import store from '@/store';
import config from '@/config';


// Notification 通知提示
export const notifyAction = async (msg = '暂无...', type = 'success', title = '提示信息') => {
    Notification({ title, message: msg, type, duration: config.notifyDuration, dangerouslyUseHTMLString: true });
};

// 清空所有 cookie
export const clearAllCookie = () => {
    const keys = document.cookie.match(/[^ =;]+(?==)/g) || [];
    keys.forEach(x => {
      Cookies.remove(x);
    });
};