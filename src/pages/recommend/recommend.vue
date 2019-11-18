<!--
 * File: recommend.vue
 * Project: chicken-music
 * File Created: Thursday, 15th August 2019 10:44:50 pm
 * Author: xdf2508 (you@you.you)
 * -----
 * Last Modified: Monday, 11th November 2019 2:44:03 pm
 * Modified By: Fan
 * -----
 * Copyright 2017 - 2019 Your Company, Your Company
 -->

<template>
    <div id="recommend">
        <m-scroll class="recommend-scroll-wrap" :data="disc">
            <div>
                <!-- 轮播图 -->
                <m-swiper :swiperSlides="slider"></m-swiper>
                <div class="hot-song-sheet">
                    <h1 class="title">热门歌单推荐</h1>
                    <ul v-if="disc.length>0">
                        <li
                            class="item"
                            v-for="(item, key) in disc"
                            :key="key"
                            @click="toDisc(item)"
                        >
                            <div class="item-sheet-cover">
                                <img class="lazy-img" alt="pic" v-lazy="item.imgurl" />
                            </div>
                            <div class="item-sheet-content">
                                <h2>{{item.creator.name}}</h2>
                                <p>{{item.dissname}}</p>
                            </div>
                        </li>
                    </ul>
                    <m-loading v-else></m-loading>
                </div>
            </div>
        </m-scroll>
        <transition name="slide">
            <router-view></router-view>
        </transition>
    </div>
</template>
<script>
import { mapMutations } from "vuex";
import { getBannerList, getDiscList } from "../../api/recommend";
import MSwiper from "../../shared/components/m-swiper/m-swiper";
export default {
    components: {
        MSwiper
    },
    data () {
        return {
            slider: [],
            disc: []
        };
    },
    created () {
        this.pageInit();
    },
    methods: {
        pageInit () {
            // 获取轮播图
            getBannerList().then(res => {
                this.slider = res.data.slider;
            });
            // 获取推荐列表
            getDiscList().then(res => {
                this.disc = res.data.list;
            });
        },
        toDisc (item) {
            this.setDisc(item);
            this.$router.push({ path: `/recommend/${item.dissid}` });
        },
        ...mapMutations(["setDisc"])
    }
};
</script>
<style lang="scss">
#recommend {
    position: fixed;
    top: 176px;
    bottom: 0;
    width: 100%;
    .recommend-scroll-wrap {
        height: 100%;
        overflow: hidden;
    }
    .hot-song-sheet {
        font-size: $font-size-medium;
        .title {
            height: 130px;
            line-height: 130px;
            text-align: center;
            color: #ffcd32;
        }
        .item {
            padding: 20px 32px;
            display: flex;
            justify-content: space-between;
            .item-sheet-cover {
                width: 120px;
                min-width: 120px;
                height: 120px;
                margin-right: 40px;
                & > img {
                    width: 100%;
                    height: 100%;
                }
            }
            .item-sheet-content {
                flex: 1;
                display: flex;
                flex-direction: column;
                justify-content: center;
                overflow: hidden;
                h2 {
                    @extend %fn-text-overflow;
                    margin-bottom: 20px;
                    color: $text-color;
                }
                p {
                    @extend %fn-text-overflow;
                    color: $transparent-color;
                }
            }
        }
    }
}
</style>