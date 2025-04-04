---
title: 北京
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
    v-for="(item, index) in yuanMingYuanItem"
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

const yiHeYuanItems = ref([
  { imageUrl: "https://memories.obs.cn-south-1.myhuaweicloud.com/beijing/yiheyuan/yiheyuan-01.jpg", altText: "图片1" },
  { imageUrl: "https://memories.obs.cn-south-1.myhuaweicloud.com/beijing/yiheyuan/yiheyuan-02.jpg", altText: "图片2" },
  { imageUrl: "https://memories.obs.cn-south-1.myhuaweicloud.com/beijing/yiheyuan/yiheyuan-03.jpg", altText: "图片3" },
  { imageUrl: "https://memories.obs.cn-south-1.myhuaweicloud.com/beijing/yiheyuan/yiheyuan-04.jpg", altText: "图片4" },
  { imageUrl: "https://memories.obs.cn-south-1.myhuaweicloud.com/beijing/yiheyuan/yiheyuan-05.jpg", altText: "图片5" },
  { imageUrl: "https://memories.obs.cn-south-1.myhuaweicloud.com/beijing/yiheyuan/yiheyuan-06.jpg", altText: "图片6" },
]);

const yuanMingYuanItem = ref([
  { imageUrl: 'https://memories.obs.cn-south-1.myhuaweicloud.com/beijing/yuanmingyuan/yuanmingyuan-01.jpg', altText: '图片1' },
  { imageUrl: 'https://memories.obs.cn-south-1.myhuaweicloud.com/beijing/yuanmingyuan/yuanmingyuan-02.jpg', altText: '图片2' },
  { imageUrl: 'https://memories.obs.cn-south-1.myhuaweicloud.com/beijing/yuanmingyuan/yuanmingyuan-03.jpg', altText: '图片3' },
  { imageUrl: 'https://memories.obs.cn-south-1.myhuaweicloud.com/beijing/yuanmingyuan/yuanmingyuan-04.jpg', altText: '图片4' },
])

const miaoFengShanItems = ref([
  { imageUrl: "https://memories.obs.cn-south-1.myhuaweicloud.com/beijing/miaofengshan/miaofengshan-01.jpg", altText: "图片1" },
  { imageUrl: "https://memories.obs.cn-south-1.myhuaweicloud.com/beijing/miaofengshan/miaofengshan-02.jpg", altText: "图片2" },
  { imageUrl: "https://memories.obs.cn-south-1.myhuaweicloud.com/beijing/miaofengshan/miaofengshan-03.jpg", altText: "图片3" },
  { imageUrl: "https://memories.obs.cn-south-1.myhuaweicloud.com/beijing/miaofengshan/miaofengshan-04.jpg", altText: "图片4" },
  { imageUrl: "https://memories.obs.cn-south-1.myhuaweicloud.com/beijing/miaofengshan/miaofengshan-05.jpg", altText: "图片5" },
  { imageUrl: "https://memories.obs.cn-south-1.myhuaweicloud.com/beijing/miaofengshan/miaofengshan-06.jpg", altText: "图片6" },
  { imageUrl: "https://memories.obs.cn-south-1.myhuaweicloud.com/beijing/miaofengshan/miaofengshan-07.jpg", altText: "图片7" },
]);

</script>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  padding: 20px;
}

.grid-item {
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.grid-item img {
  width: 100%;
  height: 250px;
  object-fit: cover;
  display: block;
}

.caption {
  padding: 10px;
  text-align: center;
  font-family: Arial, sans-serif;
}
</style>