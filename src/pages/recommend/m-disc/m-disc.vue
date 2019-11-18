<!--
 * File: m-disc.vue
 * Project: chicken-music
 * File Created: Wednesday, 16th October 2019 10:19:55 am
 * Author: Lenovo
 * Description: 专辑列表
 * -----
 * Last Modified: Monday, 11th November 2019 2:46:55 pm
 * Modified By: Fan
 * -----
 * Copyright 2017 - 2019 Your Company, Your Company
 -->
<template>
    <m-list :title="title" :imgUrl="imgUrl" :list="songList"></m-list>
</template>

<script>
import MList from "../../../shared/components/m-list/m-list";
import { mapGetters } from "vuex";
import { getSongList } from "../../../api/recommend";
export default {
    components: {
        MList
    },
    data() {
        return {
            songList: []
        };
    },
    created() {
        this._getSongList();
    },
    computed: {
        title() {
            return this.disc.dissname;
        },
        imgUrl() {
            return this.disc.imgurl;
        },
        ...mapGetters({
            disc: "GET_DISC"
        })
    },
    methods: {
        _getSongList() {
            if (!this.disc.dissid) {
                return this.$router.push("/recommend");
            }
            getSongList(this.disc.dissid).then(res => {
                this.songList = res.cdlist[0].songlist;
            });
        }
    }
};
</script>