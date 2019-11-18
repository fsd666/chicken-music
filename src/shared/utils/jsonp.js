/**
 * File: jsonp.js
 * Project: chicken-music
 * File Created: Thursday, 29th August 2019 10:22:11 pm
 * Author: Lenovo
 * Description:
 * -----
 * Last Modified: Friday, 18th October 2019 3:14:16 pm
 * Modified By: Lenovo
 * -----
 * Copyright 2017 - 2019 Your Company, Your Company
 */
import originJSONP from 'jsonp';
import qs from 'qs';
export const commonParams = {
    g_tk: 1928093487,
    inCharset: 'utf-8',
    outCharset: 'utf-8',
    notice: 0,
    format: 'jsonp'
};
export const options = {
    param: 'jsonpCallback',
    prefix: 'jp'
};
export const ERR_OK = 0;
/** 封装jsonp
 *  @param {*} url 原始的jsonp第一个参数是url，第二个参数是option，这里为了比较好写参数做了下封装
 *  @param {obj} data 参数
 *  @param {*} option jsonp的option
 */
export function jsonp (url, data, option) {
    // 查询字符串的对象序列化
    const params = qs.stringify(data, {
        arrayFormat: 'brackets'
    });
    // 如果url没有？就加一个？进行拼接
    url += (url.indexOf('?') < 0 ? '?' : '&') + params;
    return new Promise((resolve, reject) => {
        // 原始jsonp的三个参数，url、option、回调函数
        originJSONP(url, option, (err, res) => {
            if (!err) {
                if (res.code === ERR_OK) {
                    resolve(res);
                } else {
                    reject(err);
                }
            } else {
                reject(err);
            }
        });
    });
}