/**
 * File: music.js
 * Project: chicken-music
 * File Created: Friday, 18th October 2019 2:41:12 pm
 * Author: Lenovo
 * Description: 播放页面接口定义
 * -----
 * Last Modified: Friday, 8th November 2019 4:51:26 pm
 * Modified By: Fan
 * -----
 * Copyright 2017 - 2019 Your Company, Your Company
 */
import { get } from '../shared/utils/http';
export const getVKey = songmid => {
    const url = '/api/base/fcgi-bin/fcg_music_express_mobile3.fcg';
    const data = Object.assign({}, {
        songmid,
        filename: `C400${songmid}.m4a`,
        platform: 'h5',
        uin: 0,
        needNewCode: 0,
        guid: 3655047200,
        cid: 205361747
    });
    return get(url, data);
};
export const getLyric = songmid => {
    const url = '/api/lyric/fcgi-bin/fcg_query_lyric.fcg';
    const data = Object.assign({}, {
        platform: 'h5',
        guid: 3655047200,
        songmid
    });
    return get(url, data);
};