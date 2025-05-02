---
title: 广州
sidebar: false
lastUpdated: false
contributors: false
prev:
  text: 西安
  link: /picture/xian/
next:
  text: 北京
  link: /picture/beijing/
---

::: tabs

@tab 白云山

<ImageMasonry :images="baiYunShanImages" />

:::

<script setup>
import { ref } from 'vue';
import ImageMasonry from '/.vuepress/components/ImageMasonry.vue';

// 获取图片名称
const getImgName = (imgNamePrefix, idx) => {
  return `${imgNamePrefix}-${idx < 9 ? 0 : ''}${idx + 1}`;
}

// 白云山
const getBaiYunShanImages = () => {
  const prefix = 'https://memories.obs.cn-south-1.myhuaweicloud.com/guangzhou/baiyunshan/';
  const arr = [];

  Array.from({ length: 6 }).forEach((ele, idx) => {
    const imgName = getImgName('baiyunshan', idx);
    arr.push({
      imageSrc: `${prefix}${imgName}.jpg`,
      imageAlt: imgName
    })
  });

  return arr;
}

const baiYunShanImages = ref(getBaiYunShanImages());

</script>

<style scoped>
</style>