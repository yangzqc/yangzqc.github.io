---
title: 深圳
sidebar: false
lastUpdated: false
contributors: false
prev:
  text: 首页
  link: /
next:
  text: 西安
  link: /xian/
---

::: tabs

@tab 公园

<div class="grid-container">
  <div
    v-for="(item, index) in gongYuanItems"
    :key="index"
    class="grid-item"
  >
    <img :src="item.imageUrl" :alt="item.altText" />
  </div>
</div>

@tab 凤凰山

<div class="grid-container">
  <div
    v-for="(item, index) in fengHuangShanItems"
    :key="index"
    class="grid-item"
  >
    <img :src="item.imageUrl" :alt="item.altText" />
  </div>
</div>

@tab 梧桐山

<div class="grid-container">
  <div
    v-for="(item, index) in wuTongShanItems"
    :key="index"
    class="grid-item"
  >
    <img :src="item.imageUrl" :alt="item.altText" />
  </div>
</div>

@tab 羊台山

<div class="grid-container">
  <div
    v-for="(item, index) in yangTaiShanItems"
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
const getGongYuanItems = () => {
  const prefix = 'https://memories.obs.cn-south-1.myhuaweicloud.com/shenzhen/gongyuan/';
  const arr = [];

  Array.from({ length: 10 }).forEach((ele, idx) => {
    const imgName = getImgName('gongyuan', idx);
    const imgNameSuffix = idx > 0 ? '.jpg' : '.webp';
    arr.push({
      imageUrl: `${prefix}${imgName}${getGongYuanImgSuffix(idx)}`,
      altText: imgName
    })
  });

  return arr;
}

// 凤凰山
const getFengHuangShanItems = () => {
  const prefix = 'https://memories.obs.cn-south-1.myhuaweicloud.com/shenzhen/fenghuangshan/';
  const arr = [];

  Array.from({ length: 10 }).forEach((ele, idx) => {
    const imgName = getImgName('fenghuangshan', idx);
    arr.push({
      imageUrl: `${prefix}${imgName}.jpg`,
      altText: imgName
    })
  });

  return arr;
}

// 梧桐山
const getWuTongShanItems = () => {
  const prefix = 'https://memories.obs.cn-south-1.myhuaweicloud.com/shenzhen/wutongshan/';
  const arr = [];

  Array.from({ length: 7 }).forEach((ele, idx) => {
    const imgName = getImgName('wutongshan', idx);
    arr.push({
      imageUrl: `${prefix}${imgName}.jpg`,
      altText: imgName
    })
  });

  return arr;
}

// 羊台山
const getYangTaiShanItems = () => {
  const prefix = 'https://memories.obs.cn-south-1.myhuaweicloud.com/shenzhen/yangtaishan/';
  const arr = [];

  Array.from({ length: 4 }).forEach((ele, idx) => {
    const imgName = getImgName('yangtaishan', idx);
    arr.push({
      imageUrl: `${prefix}${imgName}.jpeg`,
      altText: imgName
    })
  });

  return arr;
}

const gongYuanItems = ref(getGongYuanItems());
const fengHuangShanItems = ref(getFengHuangShanItems());
const wuTongShanItems = ref(getWuTongShanItems());
const yangTaiShanItems = ref(getYangTaiShanItems());

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