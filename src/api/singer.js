/**
 * File: singer.js
 * Project: chicken-music
 * File Created: Thursday, 17th October 2019 12:12:30 pm
 * Author: Lenovo
 * Description: 歌手页面接口定义
 * -----
 * Last Modified: Friday, 25th October 2019 2:04:38 pm
 * Modified By: Lenovo
 * -----
 * Copyright 2017 - 2019 Your Company, Your Company
 */
import { jsonp, commonParams, options } from '../shared/utils/jsonp';
export const getSinger = () => {
    const data = Object.assign({}, commonParams, {
        channel: 'singer',
        page: 'list',
        key: 'all_all_all',
        pagesize: 100,
        pagenum: 1,
        hostUin: 0,
        needNewCode: 0,
        platform: 'yqq'
    });
    return jsonp('/api/v8/fcg-bin/v8.fcg', data, options);
};
export const getSingerDetail = (singermid, num) => {
    const data = Object.assign({}, commonParams, {
        singermid,
        num,
        begin: 0,
        hostUin: 0,
        needNewCode: 0,
        platform: 'yqq'
    });
    return jsonp('/api/v8/fcg-bin/fcg_v8_singer_track_cp.fcg', data, options);
};
