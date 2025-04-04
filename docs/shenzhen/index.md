---
title: 深圳
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

:::

<script setup>
import { ref } from 'vue';

const gongYuanItems = ref([
  { imageUrl: "https://memories.obs.cn-south-1.myhuaweicloud.com/shenzhen/gongyuan/gongyuan-01.webp", altText: "图片1" },
  { imageUrl: "https://memories.obs.cn-south-1.myhuaweicloud.com/shenzhen/gongyuan/gongyuan-02.png", altText: "图片2" },
  { imageUrl: "https://memories.obs.cn-south-1.myhuaweicloud.com/shenzhen/gongyuan/gongyuan-03.jpg", altText: "图片3" },
  { imageUrl: "https://memories.obs.cn-south-1.myhuaweicloud.com/shenzhen/gongyuan/gognyuan-04.jpg", altText: "图片4" },
  { imageUrl: "https://memories.obs.cn-south-1.myhuaweicloud.com/shenzhen/gongyuan/gongyuan-05.jpg", altText: "图片5" },
  { imageUrl: "https://memories.obs.cn-south-1.myhuaweicloud.com/shenzhen/gongyuan/gongyuan-06.jpg", altText: "图片6" },
  { imageUrl: "https://memories.obs.cn-south-1.myhuaweicloud.com/shenzhen/gongyuan/gongyuan-07.jpg", altText: "图片7" },
  { imageUrl: "https://memories.obs.cn-south-1.myhuaweicloud.com/shenzhen/gongyuan/gongyuan-08.jpg", altText: "图片8" },
  { imageUrl: "https://memories.obs.cn-south-1.myhuaweicloud.com/shenzhen/gongyuan/gongyuan-09.jpg", altText: "图片9" },
  { imageUrl: "https://memories.obs.cn-south-1.myhuaweicloud.com/shenzhen/gongyuan/gongyuan-10.jpg", altText: "图片10" },
]);

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