---
title: 北京
sidebar: false
---

::: tabs

@tab 颐和园

<div class="grid-container">
  <div
    v-for="(item, index) in yiHeYuanItems"
    :key="index"
    class="grid-item"
  >
    <img :src="item.imageUrl" :alt="item.altText" />
  </div>
</div>

@tab 圆明园

<div class="grid-container">
  <div
    v-for="(item, index) in yuanMingYuanItems"
    :key="index"
    class="grid-item"
  >
    <img :src="item.imageUrl" :alt="item.altText" />
  </div>
</div>

@tab 妙峰山

<div class="grid-container">
  <div
    v-for="(item, index) in miaoFengShanItems"
    :key="index"
    class="grid-item"
  >
    <img :src="item.imageUrl" :alt="item.altText" />
  </div>
</div>

:::

<script setup>
import { ref } from 'vue';

// 获取图片名称
const getImgName = (imgNamePrefix, idx) => {
  return `${imgNamePrefix}-${idx < 9 ? 0 : ''}${idx + 1}`;
}

// 颐和园
const getYiHeYuanItems = () => {
  const prefix = 'https://memories.obs.cn-south-1.myhuaweicloud.com/beijing/yiheyuan/';
  const arr = [];

  Array.from({ length: 6 }).forEach((ele, idx) => {
    const imgName = getImgName('yiheyuan', idx);
    arr.push({
      imageUrl: `${prefix}${imgName}.jpg`,
      altText: imgName
    });
  });

  return arr;
}

// 圆明园
const getYuanMingYuanItems = () => {
  const prefix = 'https://memories.obs.cn-south-1.myhuaweicloud.com/beijing/yuanmingyuan/';
  const arr = [];

  Array.from({ length: 4 }).forEach((ele, idx) => {
    const imgName = getImgName('yuanmingyuan', idx);
    arr.push({
      imageUrl: `${prefix}${imgName}.jpg`,
      altText: imgName
    });
  });

  return arr;
}

// 妙峰山
const getMiaoFengShanItems = () => {
  const prefix = 'https://memories.obs.cn-south-1.myhuaweicloud.com/beijing/miaofengshan/';
  const arr = [];

  Array.from({ length: 7 }).forEach((ele, idx) => {
    const imgName = getImgName('miaofengshan', idx);
    arr.push({
      imageUrl: `${prefix}${imgName}.jpg`,
      altText: imgName
    });
  });

  return arr;
}

const yiHeYuanItems = ref(getYiHeYuanItems());
const yuanMingYuanItems = ref(getYuanMingYuanItems());
const miaoFengShanItems = ref(getMiaoFengShanItems());

</script>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: .75rem;
  /* padding: 20px; */
}

.grid-item {
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.grid-item img {
  width: 100%;
  object-fit: cover;
  display: block;
}

.caption {
  padding: 10px;
  text-align: center;
  font-family: Arial, sans-serif;
}
</style>