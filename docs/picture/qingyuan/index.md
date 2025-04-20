---
title: 清远
sidebar: false
lastUpdated: false
contributors: false
prev:
  text: 深圳
  link: /picture/shenzhen/
next:
  text: 西安
  link: /picture/xian/
---

::: tabs

@tab 浈阳峡风景区

<ImageMasonry :images="zhenYangXiaImages" />

:::

<script setup>
import { ref } from 'vue';
import ImageMasonry from '/.vuepress/components/ImageMasonry.vue';

// 获取图片名称
const getImgName = (imgNamePrefix, idx) => {
  return `${imgNamePrefix}-${idx < 9 ? 0 : ''}${idx + 1}`;
}

// 浈阳峡
const getZhenYangXiaImages = () => {
  const prefix = 'https://memories.obs.cn-south-1.myhuaweicloud.com/qingyuan/zhenyangxia/';
  const arr = [];

  Array.from({ length: 2 }).forEach((ele, idx) => {
    const imgName = getImgName('zhenyangxia', idx);
    arr.push({
      imageSrc: `${prefix}${imgName}.jpg`,
      imageAlt: imgName
    })
  });

  return arr;
}

const zhenYangXiaImages = ref(getZhenYangXiaImages());

</script>

<style scoped>
</style>