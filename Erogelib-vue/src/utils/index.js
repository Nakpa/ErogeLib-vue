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

export function formatdate(date, t) {
  try {
    if (typeof date == 'undefined' || !date) {
      return '';
    } else if (typeof date == 'string') {
      date = new Date(date);
    }
    var d = date;
    var year = d.getFullYear();
    var months = d.getMonth() + 1;
    var month = months < 10 ? '0' + months : '' + months;
    var day = d.getDate() < 10 ? '0' + d.getDate() : '' + d.getDate();
    var hh = d.getHours();
    var mm = d.getMinutes();
    const ss = d.getSeconds();
    var h = d.getHours() < 10 ? '0' + d.getHours() : '' + d.getHours();
    var m = d.getMinutes() < 10 ? '0' + d.getMinutes() : '' + d.getMinutes();
    var s = d.getSeconds() < 10 ? '0' + d.getSeconds() : '' + d.getSeconds();

    if (t == 1) {
      return year + '-' + month + '-' + day;
    } else if (t == 2) {
      return year + '-' + month + '-' + day + ' ' + h + ':' + m;
    } else if (t == 3) {
      return hh + ':' + mm + ':' + ss;
    } else if (t == 4) {
      return year + '-' + month + '-' + day + ' ' + h + ':' + m + ':' + s;
    } else if (t == 5) {
      return year + '年' + month + '月' + day + '日';
    } else if (t == 6) {
      //Wen , Jun 16 , 2021
      let week = getWeekDate(date);
      let monthEng = getMonthDate(date);
      return week + ' ' + monthEng + ' ' + day + ', ' + year;
    } else {
      return year + '-' + month + '-' + day + ' ' + hh + ':' + mm + ':' + ss;
    }
  } catch (e) {
    console.error(e, 'formatdate exception');
  }
}

export function getWeekDate(date) {
  var now = new Date(date);
  var day = now.getDay();
  var weeks = new Array("Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat");
  var week = weeks[day];
  return week;
}

export function getMonthDate(date) {
  var now = new Date(date);
  var day = now.getMonth() + 1;
  var months = new Array("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug" , "Sep", "Oct" , "Nov", "Dec");
  var monthEng = months[day];
  return monthEng;
}