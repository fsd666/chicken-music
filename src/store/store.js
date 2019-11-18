/**
 * File: store.js
 * Project: chicken-music
 * File Created: Sunday, 25th August 2019 1:05:19 pm
 * Author: Lenovo
 * Description: 全局状态管理
 * -----
 * Last Modified: Tuesday, 12th November 2019 4:19:43 pm
 * Modified By: Fan
 * -----
 * Copyright 2017 - 2019 Your Company, Your Company
 */

import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import actions from './actions';
import getters from './getters';
import { querySearchHistory, queryFavoriteList, queryPlayHistory } from '../shared/utils/cache';
Vue.use(Vuex);
const state = {
    fullScreen: true,
    disc: {},
    singer: {},
    musicIndex: null,
    musicList: [],
    playMode: 0,
    playHistory: queryPlayHistory(),
    searchHistory: querySearchHistory(),
    favoriteList: queryFavoriteList()
};

export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions
});