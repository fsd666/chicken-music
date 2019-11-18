<!--
 * File: m-top-list.vue
 * Project: chicken-music
 * File Created: Friday, 18th October 2019 10:05:09 am
 * Author: Lenovo
 * Description: 排行详情
 * -----
 * Last Modified: Tuesday, 12th November 2019 11:50:02 am
 * Modified By: Fan
 * -----
 * Copyright 2017 - 2019 Your Company, Your Company
 -->
<template>
    <m-list :title="topInfo.ListName" :imgUrl="topInfo.pic_album" :list="songList" :isShow="true"></m-list>
</template>

<script>
import MList from '../../../shared/components/m-list/m-list';
import { getRankDetail } from '../../../api/rank';
export default {
    components: {
        MList
    },
    data () {
        return {
            songList: [],
            topInfo: {}
        };
    },
    created () {
        this._getRankDetail();
    },
    methods: {
        _getRankDetail () {
            let { id } = this.$route.params;
            getRankDetail(id).then(res => {
                this.topInfo = res.topinfo;
                this.songList = res.songlist.map(item => item.data);
            });
        }
    }
};
</script>
