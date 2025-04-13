---
home: true
title: 首页
heroImage: https://vuejs.press/images/hero.png
heroText: yangzqc
tagline: 123
---

<div class="home-container">
  <div
    v-for="(item, index) in cityItems"
    :key="index"
    class="home-item"
  >
    <div class="city-desc">
      <span class="city-name">{{item.name}}</span>
      <span class="city-date">{{item.date}}</span>
    </div>
    <div class="city-img" :style="getItemBackgroundImg(item.imageUrl)" @click="goToPage(item.nav)"></div>
  </div>
</div>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const getItemBackgroundImg = (imageUrl) => {
  return {
    backgroundImage: `url(${imageUrl})`, // 使用模板字符串
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  }
}

const goToPage = (nav) => {
  router.push(nav);
}

const cityItems = ref([
  {
    name: '深圳',
    imageUrl: 'https://memories.obs.cn-south-1.myhuaweicloud.com/shenzhen/gongyuan/gongyuan-06.jpg',
    date: '2018.12.13',
    nav: '/shenzhen/'
  },
  {
    name: '北京',
    imageUrl: 'https://memories.obs.cn-south-1.myhuaweicloud.com/beijing/miaofengshan/miaofengshan-03.jpg',
    date: '2024.12.24',
    nav: '/beijing/'
  }
]);

</script>

<style scoped>
.home-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: .75rem;
}

.home-item {
  padding: .5rem;
  border-radius: .5rem;
  overflow: hidden;
  background-color: var(--tab-c-bg-nav);
  cursor: pointer;
}

.home-item .city-desc {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: var(--tab-c-nav);
  margin-bottom: .2rem;
  font-size: .875em;
}

.home-item .city-desc .city-date {
  font-weight: 600;
}

.home-item .city-img {
  width: 100%;
  height: 12rem;
}
</style>
