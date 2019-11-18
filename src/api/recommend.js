/**
 * File: recommend.js
 * Project: chicken-music
 * File Created: Wednesday, 16th October 2019 3:47:57 pm
 * Author: Lenovo
 * Description: 推荐页面接口定义
 * -----
 * Last Modified: Friday, 8th November 2019 4:51:33 pm
 * Modified By: Fan
 * -----
 * Copyright 2017 - 2019 Your Company, Your Company
 */
import { get } from '../shared/utils/http';
import { jsonp, commonParams, options } from '../shared/utils/jsonp';
export const getBannerList = () => jsonp('/api/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg', {
    ...commonParams,
    platform: 'h5',
    uin: 0,
    needNewCode: 1
}, options);
export const getDiscList = () => {
    const data = Object.assign({}, commonParams, {
        platform: 'yqq',
        hostUin: 0,
        sin: 0,
        ein: 29,
        sortId: 5,
        needNewCode: 0,
        categoryId: 10000000,
        rnd: Math.random(),
        format: 'json'
    });
    return get('/api/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg', data);
};
export const getSongList = disstid => jsonp('/api/qzone/fcg-bin/fcg_ucc_getcdinfo_byids_cp.fcg', {
    ...commonParams,
    disstid,
    type: 1,
    json: 1,
    utf8: 1,
    onlysong: 0,
    platform: 'yqq',
    hostUin: 0,
    needNewCode: 0
}, options);
