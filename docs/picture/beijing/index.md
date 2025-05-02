---
title: 北京
sidebar: false
lastUpdated: false
contributors: false
prev:
  text: 广州
  link: /picture/guangzhou/
---

::: tabs

@tab 长安街

<ImageMasonry :images="changAnJieImages" />

@tab 颐和园

<ImageMasonry :images="yiHeYuanImages" />

@tab 圆明园

<ImageMasonry :images="yuanMingYuanImages" />

@tab 妙峰山

<ImageMasonry :images="miaoFengShanImages" />

@tab 八达岭长城

<ImageMasonry :images="baDaLingChangChenImages" />

:::

<script setup>
import { ref } from 'vue';
import ImageMasonry from '/.vuepress/components/ImageMasonry.vue';

// 获取图片名称
const getImgName = (imgNamePrefix, idx) => {
  return `${imgNamePrefix}-${idx < 9 ? 0 : ''}${idx + 1}`;
}

// 长安街
const getChangAnJieImages = () => {
  const prefix = 'https://memories.obs.cn-south-1.myhuaweicloud.com/beijing/changanjie/';
  const arr = [];

  Array.from({ length: 5 }).forEach((ele, idx) => {
    const imgName = getImgName('changanjie', idx);
    arr.push({
      imageSrc: `${prefix}${imgName}.jpg`,
      imageAlt: imgName
    });
  });

  return arr;
}

// 颐和园
const getYiHeYuanImages = () => {
  const prefix = 'https://memories.obs.cn-south-1.myhuaweicloud.com/beijing/yiheyuan/';
  const arr = [];

  Array.from({ length: 22 }).forEach((ele, idx) => {
    const imgName = getImgName('yiheyuan', idx);
    arr.push({
      imageSrc: `${prefix}${imgName}.jpg`,
      imageAlt: imgName
    });
  });

  return arr;
}

// 圆明园
const getYuanMingYuanImages = () => {
  const prefix = 'https://memories.obs.cn-south-1.myhuaweicloud.com/beijing/yuanmingyuan/';
  const arr = [];

  Array.from({ length: 4 }).forEach((ele, idx) => {
    const imgName = getImgName('yuanmingyuan', idx);
    arr.push({
      imageSrc: `${prefix}${imgName}.jpg`,
      imageAlt: imgName
    });
  });

  return arr;
}

// 妙峰山
const getMiaoFengShanImages = () => {
  const prefix = 'https://memories.obs.cn-south-1.myhuaweicloud.com/beijing/miaofengshan/';
  const arr = [];

  Array.from({ length: 7 }).forEach((ele, idx) => {
    const imgName = getImgName('miaofengshan', idx);
    arr.push({
      imageSrc: `${prefix}${imgName}.jpg`,
      imageAlt: imgName
    });
  });

  return arr;
}

// 八达岭长城
const getBaDaLingChangChenImages = () => {
  const prefix = 'https://memories.obs.cn-south-1.myhuaweicloud.com/beijing/badalingchangcheng/';
  const arr = [];

  Array.from({ length: 15 }).forEach((ele, idx) => {
    const imgName = getImgName('badalingchangcheng', idx);
    arr.push({
      imageSrc: `${prefix}${imgName}.jpg`,
      imageAlt: imgName
    });
  });

  return arr;
}

const changAnJieImages = ref(getChangAnJieImages());
const yiHeYuanImages = ref(getYiHeYuanImages());
const yuanMingYuanImages = ref(getYuanMingYuanImages());
const miaoFengShanImages = ref(getMiaoFengShanImages());
const baDaLingChangChenImages = ref(getBaDaLingChangChenImages());

</script>

<style scoped>
</style>
