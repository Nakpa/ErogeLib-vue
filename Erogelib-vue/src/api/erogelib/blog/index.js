import axios from '@a/index';
import SERVER from '@a/server';

// 保存blog
export const saveBlog = params => axios.post(`${SERVER.EROGE_LIB}/blog/saveBlog`,  params);
