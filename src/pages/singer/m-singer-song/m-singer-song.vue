<!--
 * File: m-singer-song.vue
 * Project: chicken-music
 * File Created: Wednesday, 23rd October 2019 4:20:52 pm
 * Author: Lenovo
 * Description: 歌手音乐列表
 * -----
 * Last Modified: Monday, 11th November 2019 2:46:56 pm
 * Modified By: Fan
 * -----
 * Copyright 2017 - 2019 Your Company, Your Company
 -->
<template>
    <m-list :title="title" :imgUrl="imgUrl" :list="list" :isShow="true"></m-list>
</template>

<script>
import { mapGetters } from 'vuex';
import { getSingerDetail } from '../../../api/singer';
import MList from '../../../shared/components/m-list/m-list';
const SONG_LENGTH = 80;
export default {
    components: {
        MList
    },
    data () {
        return {
            list: []
        };
    },
    created () {
        this._getSingerDetail();
    },
    methods: {
        _getSingerDetail () {
            if (!this.singer.Fsinger_mid) {
                return this.$router.push('/singer');
            }
            getSingerDetail(this.singer.Fsinger_mid, SONG_LENGTH).then(res => {
                this.list = res.data.list.map(item => item.musicData);
            });
        }
    },
    computed: {
        imgUrl () {
            return `https://y.gtimg.cn/music/photo_new/T001R300x300M000${this.singer.Fsinger_mid}.jpg?max_age=2592000`;
        },
        title () {
            return this.singer.Fsinger_name;
        },
        ...mapGetters({
            singer: 'GET_SINGER'
        })
    }
};
</script>
