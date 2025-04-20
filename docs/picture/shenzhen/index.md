---
title: 深圳
sidebar: false
lastUpdated: false
contributors: false
prev:
  text: 首页
  link: /
next:
  text: 清远
  link: /picture/qingyuan/
---

::: tabs

@tab 公园

<ImageMasonry :images="gongYuanImages" />

@tab 凤凰山

<ImageMasonry :images="fengHuangShanImages" />

@tab 梧桐山

<ImageMasonry :images="wuTongShanImages" />

@tab 羊台山

<ImageMasonry :images="yangTaiShanImages" />

:::

<script setup>
import { ref } from 'vue';
import ImageMasonry from '/.vuepress/components/ImageMasonry.vue';

// 获取图片名称
const getImgName = (imgNamePrefix, idx) => {
  return `${imgNamePrefix}-${idx < 9 ? 0 : ''}${idx + 1}`;
}

// 获取公园图片后缀
const getGongYuanImgSuffix = (idx) => {
  if (idx === 0) {
    return '.webp';
  }
  if (idx === 1) {
    return '.png';
  }
  return '.jpg';
}

// 公园
const getGongYuanImages = () => {
  const prefix = 'https://memories.obs.cn-south-1.myhuaweicloud.com/shenzhen/gongyuan/';
  const arr = [];

  Array.from({ length: 11 }).forEach((ele, idx) => {
    const imgName = getImgName('gongyuan', idx);
    const imgNameSuffix = idx > 0 ? '.jpg' : '.webp';
    arr.push({
      imageSrc: `${prefix}${imgName}${getGongYuanImgSuffix(idx)}`,
      imageAlt: imgName
    })
  });

  return arr;
}

// 凤凰山
const getFengHuangShanImages = () => {
  const prefix = 'https://memories.obs.cn-south-1.myhuaweicloud.com/shenzhen/fenghuangshan/';
  const arr = [];

  Array.from({ length: 10 }).forEach((ele, idx) => {
    const imgName = getImgName('fenghuangshan', idx);
    arr.push({
      imageSrc: `${prefix}${imgName}.jpg`,
      imageAlt: imgName
    })
  });

  return arr;
}

// 梧桐山
const getWuTongShanImages = () => {
  const prefix = 'https://memories.obs.cn-south-1.myhuaweicloud.com/shenzhen/wutongshan/';
  const arr = [];

  Array.from({ length: 7 }).forEach((ele, idx) => {
    const imgName = getImgName('wutongshan', idx);
    arr.push({
      imageSrc: `${prefix}${imgName}.jpg`,
      imageAlt: imgName
    })
  });

  return arr;
}

// 羊台山
const getYangTaiShanImages = () => {
  const prefix = 'https://memories.obs.cn-south-1.myhuaweicloud.com/shenzhen/yangtaishan/';
  const arr = [];

  Array.from({ length: 4 }).forEach((ele, idx) => {
    const imgName = getImgName('yangtaishan', idx);
    arr.push({
      imageSrc: `${prefix}${imgName}.jpeg`,
      imageAlt: imgName
    })
  });

  return arr;
}

const gongYuanImages = ref(getGongYuanImages());
const fengHuangShanImages = ref(getFengHuangShanImages());
const wuTongShanImages = ref(getWuTongShanImages());
const yangTaiShanImages = ref(getYangTaiShanImages());

</script>

<style scoped>
</style>