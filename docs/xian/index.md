---
title: 西安
sidebar: false
lastUpdated: false
contributors: false
prev:
  text: 深圳
  link: /shenzhen/
next:
  text: 北京
  link: /beijing/
---

::: tabs

@tab 未央宫

<div class="grid-container">
  <div
    v-for="(item, index) in weiYangGongItems"
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

// 未央宫
const getWeiYangGongItems = () => {
  const prefix = 'https://memories.obs.cn-south-1.myhuaweicloud.com/xian/weiyanggong/';
  const arr = [];

  Array.from({ length: 5 }).forEach((ele, idx) => {
    const imgName = getImgName('weiyanggong', idx);
    arr.push({
      imageUrl: `${prefix}${imgName}.jpg`,
      altText: imgName
    })
  });

  return arr;
}

const weiYangGongItems = ref(getWeiYangGongItems());

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