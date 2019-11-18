/**
 * File: rank.js
 * Project: chicken-music
 * File Created: Thursday, 17th October 2019 12:13:09 pm
 * Author: Lenovo
 * Description: 排行页面接口定义
 * -----
 * Last Modified: Friday, 18th October 2019 2:41:33 pm
 * Modified By: Lenovo
 * -----
 * Copyright 2017 - 2019 Your Company, Your Company
 */
import { jsonp, commonParams, options } from '../shared/utils/jsonp';
export const getRankList = () => jsonp('/api/v8/fcg-bin/fcg_myqq_toplist.fcg', {
    ...commonParams,
    platform: 'h5',
    uin: 0,
    needNewCode: 1
}, options);
export const getRankDetail = topid => jsonp('/api/v8/fcg-bin/fcg_v8_toplist_cp.fcg', {
    ...commonParams,
    topid,
    platform: 'h5',
    uin: 0,
    needNewCode: 1
}, options);
