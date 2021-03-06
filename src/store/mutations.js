/**
 * File: mutations.js
 * Project: chicken-music
 * File Created: Sunday, 25th August 2019 1:18:26 pm
 * Author: Lenovo
 * Description: mutation
 * -----
 * Last Modified: Wednesday, 13th November 2019 9:48:11 am
 * Modified By: Fan
 * -----
 * Copyright 2017 - 2019 Your Company, Your Company
 */
import { saveSearchHistory, deleteSearchHistory, cleanSearchHistory, addFavorite, removeFavorite, addPlayHistory } from '../shared/utils/cache';
export default {
    addFavorite (state, value) {
        state.favoriteList = addFavorite(value);
    },
    removeFavorite (state, value) {
        state.favoriteList = removeFavorite(value);
    },
    saveSearchHistory (state, value) {
        state.searchHistory = saveSearchHistory(value);
    },
    deleteSearchHistory (state, value) {
        state.searchHistory = deleteSearchHistory(value);
    },
    cleanSearchHistory (state) {
        state.searchHistory = cleanSearchHistory();
    },
    setDisc (state, value) {
        state.disc = value;
    },
    setSinger (state, value) {
        state.singer = value;
    },
    setMusicIndex (state, value) {
        state.musicIndex = value;
    },
    setMusicList (state, value) {
        state.musicList = value;
    },
    addPlayHistory (state, value) {
        state.playHistory = addPlayHistory(value);
    },
    setPlayMode (state, value) {
        state.playMode = value;
    },
    setFullScreen (state, value) {
        state.fullScreen = value;
    }
};