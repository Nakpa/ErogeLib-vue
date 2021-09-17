import axios from '@a/index';
import SERVER from '@a/server';
// 查询
export const queryTmUser = params => axios.get(`${SERVER.EROGE_LIB}/tmUser/queryTmUser`,  {params});

// 查询
export const userLogin = params => axios.post(`${SERVER.EROGE_LIB}/access/userLogin`,  params);

// 查询用户所有tag
export const queryUserTags = () => axios.get(`${SERVER.EROGE_LIB}/blog/queryUserTags`);

// 查询用户所有blog
export const queryBlogList = () => axios.get(`${SERVER.EROGE_LIB}/blog/queryBlogList`);
