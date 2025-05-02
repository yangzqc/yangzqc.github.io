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

@tab 机场东

<ImageMasonry :images="jiChangDongImages" />

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

// 获取羊台山图片后缀
const getYangTaiShanImgSuffix = (idx) => {
  if (idx < 4) {
    return '.jpeg';
  }
  return '.jpg';
}

// 获取梧桐山图片后缀
const getWuTongShanImgSuffix = (idx) => {
  if (idx === 7) {
    return '.jpeg';
  }
  return '.jpg';
}

// 公园
const getGongYuanImages = () => {
  const prefix = 'https://memories.obs.cn-south-1.myhuaweicloud.com/shenzhen/gongyuan/';
  const arr = [];

  Array.from({ length: 13 }).forEach((ele, idx) => {
    const imgName = getImgName('gongyuan', idx);
    arr.push({
      imageSrc: `${prefix}${imgName}${getGongYuanImgSuffix(idx)}`,
      imageAlt: imgName
    })
  });

  return arr;
}

// 机场东
const getJiChangDongImages = () => {
  const prefix = 'https://memories.obs.cn-south-1.myhuaweicloud.com/shenzhen/jichangdong/';
  const arr = [];

  Array.from({ length: 1 }).forEach((ele, idx) => {
    const imgName = getImgName('jichangdong', idx);
    arr.push({
      imageSrc: `${prefix}${imgName}.jpg`,
      imageAlt: imgName
    })
  });

  return arr;
}

// 凤凰山
const getFengHuangShanImages = () => {
  const prefix = 'https://memories.obs.cn-south-1.myhuaweicloud.com/shenzhen/fenghuangshan/';
  const arr = [];

  Array.from({ length: 15 }).forEach((ele, idx) => {
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

  Array.from({ length: 22 }).forEach((ele, idx) => {
    const imgName = getImgName('wutongshan', idx);
    arr.push({
      imageSrc: `${prefix}${imgName}${getWuTongShanImgSuffix(idx)}`,
      imageAlt: imgName
    })
  });

  return arr;
}

// 羊台山
const getYangTaiShanImages = () => {
  const prefix = 'https://memories.obs.cn-south-1.myhuaweicloud.com/shenzhen/yangtaishan/';
  const arr = [];

  Array.from({ length: 7 }).forEach((ele, idx) => {
    const imgName = getImgName('yangtaishan', idx);
    arr.push({
      imageSrc: `${prefix}${imgName}${getYangTaiShanImgSuffix(idx)}`,
      imageAlt: imgName
    })
  });

  return arr;
}

const gongYuanImages = ref(getGongYuanImages());
const jiChangDongImages = ref(getJiChangDongImages());
const fengHuangShanImages = ref(getFengHuangShanImages());
const wuTongShanImages = ref(getWuTongShanImages());
const yangTaiShanImages = ref(getYangTaiShanImages());

</script>

<style scoped>
</style>