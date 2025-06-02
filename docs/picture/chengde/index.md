---
title: 承德
sidebar: false
lastUpdated: false
contributors: false
prev:
  text: 北京
  link: /picture/beijing/
---

::: tabs

@tab 坝上草原

<ImageMasonry :images="baShangCaoYuanImages" />

:::

<script setup>
import { ref } from 'vue';
import ImageMasonry from '/.vuepress/components/ImageMasonry.vue';

// 获取图片名称
const getImgName = (imgNamePrefix, idx) => {
  return `${imgNamePrefix}-${idx < 9 ? 0 : ''}${idx + 1}`;
}

// 获取图片后缀

const getImgSuffix = (idx) => {
  if (idx <= 85) {
    return '.jpg';
  }
  return '.JPG';
}

// 坝上草原
const getBaShangCaoYuanImages = () => {
  const prefix = 'https://memories.obs.cn-south-1.myhuaweicloud.com/chengde/bashangcaoyuan/';
  const arr = [];

  Array.from({ length: 89 }).forEach((ele, idx) => {
    const imgName = getImgName('bashangcaoyuan', idx);
    arr.push({
      imageSrc: `${prefix}${imgName}${getImgSuffix(idx)}`,
      imageAlt: imgName
    });
  });

  return arr;
}


const baShangCaoYuanImages = ref(getBaShangCaoYuanImages());

</script>

<style scoped>
</style>