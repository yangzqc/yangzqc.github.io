---
title: 视频
sidebar: false
lastUpdated: false
contributors: false
---

::: tabs

@tab 天水老家

<VideoPlayer :videoList="videoList" />

:::

<script setup>
import { ref } from 'vue';
import VideoPlayer from '/.vuepress/components/VideoPlayer.vue';

const videoList = ref([
    {
        url: 'https://memories.obs.cn-south-1.myhuaweicloud.com/tianshui/xiwancun/xiwancun-video-01.MP4',
    },
    {
        url: 'https://memories.obs.cn-south-1.myhuaweicloud.com/tianshui/xiwancun/xiwancun-video-02.MP4',
    },
    {
        url: 'https://memories.obs.cn-south-1.myhuaweicloud.com/tianshui/xiwancun/xiwancun-video-03.MOV',
    },
    {
        url: 'https://memories.obs.cn-south-1.myhuaweicloud.com/tianshui/xiwancun/xiwancun-video-04.MOV',
    },
    {
        url: 'https://memories.obs.cn-south-1.myhuaweicloud.com/tianshui/xiwancun/xiwancun-video-05.MOV',
    },
    {
        url: 'https://memories.obs.cn-south-1.myhuaweicloud.com/tianshui/xiwancun/xiwancun-video-06.MOV',
    },
    {
        url: 'https://memories.obs.cn-south-1.myhuaweicloud.com/tianshui/xiwancun/xiwancun-video-07.MOV',
    },
    {
        url: 'https://memories.obs.cn-south-1.myhuaweicloud.com/tianshui/xiwancun/xiwancun-video-09.MP4',
    },
    {
        url: 'https://memories.obs.cn-south-1.myhuaweicloud.com/tianshui/xiwancun/xiwancun-video-09.MP4',
    },
    {
        url: 'https://memories.obs.cn-south-1.myhuaweicloud.com/tianshui/xiwancun/xiwancun-video-10.MP4',
    },
])

</script>

<style scoped>
</style>
