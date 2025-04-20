---
title: 西安
sidebar: false
lastUpdated: false
contributors: false
prev:
  text: 清远
  link: /picture/qingyuan/
next:
  text: 北京
  link: /picture/beijing/
---

::: tabs

@tab 未央宫

<ImageMasonry :images="weiYangGongImages" />

:::

<script setup>
import { ref } from 'vue';
import ImageMasonry from '/.vuepress/components/ImageMasonry.vue';

// 获取图片名称
const getImgName = (imgNamePrefix, idx) => {
  return `${imgNamePrefix}-${idx < 9 ? 0 : ''}${idx + 1}`;
}

// 未央宫
const getWeiYangGongImages = () => {
  const prefix = 'https://memories.obs.cn-south-1.myhuaweicloud.com/xian/weiyanggong/';
  const arr = [];

  Array.from({ length: 5 }).forEach((ele, idx) => {
    const imgName = getImgName('weiyanggong', idx);
    arr.push({
      imageSrc: `${prefix}${imgName}.jpg`,
      imageAlt: imgName
    })
  });

  return arr;
}

const weiYangGongImages = ref(getWeiYangGongImages());

</script>

<style scoped>
</style>