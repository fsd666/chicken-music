<!--
 * File: singer.vue
 * Project: chicken-music
 * File Created: Thursday, 15th August 2019 10:44:50 pm
 * Author: xdf2508 (you@you.you)
 * -----
 * Last Modified: Friday, 8th November 2019 4:47:34 pm
 * Modified By: Fan
 * -----
 * Copyright 2017 - 2019 Your Company, Your Company
 -->

<template>
    <div id="singer">
        <m-index-list :list="singer" @selectSinger="_selectSinger" v-if="singer.length>0"></m-index-list>
        <div class="singer-loading-wrapper" v-else>
            <m-loading></m-loading>
        </div>
        <transition name="slide">
            <router-view></router-view>
        </transition>
    </div>
</template>
<script>
import { mapMutations } from 'vuex';
import { getSinger } from "../../api/singer";
import MIndexList from '../../shared/components/m-index-list/m-index-list';
const HOT_LENGTH = 10;
const HOT_NAME = '热门';
export default {
    components: {
        MIndexList
    },
    data () {
        return {
            singer: []
        };
    },
    created () {
        this._getSinger();
    },
    methods: {
        _getSinger () {
            getSinger().then(res => {
                const hot = {
                    letter: HOT_NAME,
                    list: []
                };
                res.data.list.map((item, index) => {
                    if (index < HOT_LENGTH) {
                        hot.list.push(item);
                    }
                });
                const data = res.data.list.reduce((acc, curr, index) => {
                    if (curr.Findex.match(/[A-Za-z]/)) {
                        if (!acc.hasOwnProperty(curr.Findex)) {
                            acc[curr.Findex] = {};
                            acc[curr.Findex].letter = curr.Findex;
                            acc[curr.Findex].list = [];
                        }
                        acc[curr.Findex].list.push(curr);
                    }
                    return acc;
                }, {});
                this.singer = Object.values(data).sort((a, b) => {
                    return a.letter.charCodeAt(0) - b.letter.charCodeAt(0);
                });
                this.singer.unshift(hot);
            });
        },
        _selectSinger (singer) {
            this.setSinger(singer);
            this.$router.push(`/singer/${singer.Fsinger_mid}`);
        },
        ...mapMutations([
            'setSinger'
        ])
    }
};
</script>
<style lang="scss">
#singer {
    .singer-loading-wrapper {
        position: absolute;
        top: 50%;
        width: 100%;
    }
}
</style>