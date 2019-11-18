/**
 * File: search.js
 * Project: chicken-music
 * File Created: Thursday, 17th October 2019 12:04:21 pm
 * Author: Lenovo
 * Description: 搜索页面接口定义
 * -----
 * Last Modified: Thursday, 17th October 2019 12:07:28 pm
 * Modified By: Lenovo
 * -----
 * Copyright 2017 - 2019 Your Company, Your Company
 */
import { get } from '../shared/utils/http';
import { jsonp, commonParams, options } from '../shared/utils/jsonp';
export const getHotKey = () => jsonp('/api/splcloud/fcgi-bin/gethotkey.fcg', {
    ...commonParams,
    platform: 'h5',
    uin: 0,
    needNewCode: 1
}, options);
export function getSearchResult (query, page, zhida, perpage) {
    const data = Object.assign({}, commonParams, {
        w: query,
        p: page,
        perpage,
        n: perpage,
        catZhida: zhida ? 1 : 0,
        zhidaqu: 1,
        t: 0,
        flag: 1,
        ie: 'utf-8',
        sem: 1,
        aggr: 0,
        remoteplace: 'txt.mqq.all',
        uin: 0,
        needNewCode: 1,
        platform: 'h5',
        format: 'json'
    });
    return get('/api/soso/fcgi-bin/search_for_qq_cp', data);
}
