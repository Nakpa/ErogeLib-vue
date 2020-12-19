import axios from '@a/index';
import SERVER from '@a/server';
// 查询
export const queryTmUser = params => axios.get(`${SERVER.EROGE_LIB}/tmUser/queryTmUser`,  {params});
