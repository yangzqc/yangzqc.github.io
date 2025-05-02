---
home: true
title: 首页
heroText:
tagline:
---

<div class="home-head" :style="getImageBackgroundImg(headBgUrl)"></div>

<div class="home-tip">平常心</div>

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
    <div class="city-img" :style="getImageBackgroundImg(item.imageUrl)" @click="goToPage(item.nav)"></div>
  </div>
</div>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const getImageBackgroundImg = (imageUrl) => {
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

const headBgUrl = 'https://memories.obs.cn-south-1.myhuaweicloud.com/tianshui/xiwancun/xiwancun-01.jpg';

const cityItems = ref([
  {
    name: '深圳',
    imageUrl: 'https://memories.obs.cn-south-1.myhuaweicloud.com/shenzhen/dameisha/dameisha-01.jpg',
    date: '2018-12-13',
    nav: '/picture/shenzhen/'
  },
  {
    name: '清远',
    imageUrl: 'https://memories.obs.cn-south-1.myhuaweicloud.com/qingyuan/zhenyangxia/zhenyangxia-01.jpg',
    date: '2021-09-20',
    nav: '/picture/qingyuan/'
  },
  {
    name: '西安',
    imageUrl: 'https://memories.obs.cn-south-1.myhuaweicloud.com:443/xian/weiyanggong/weiyanggong-01.jpg',
    date: '2023-09-25',
    nav: '/picture/xian/'
  },
  {
    name: '广州',
    imageUrl: 'https://memories.obs.cn-south-1.myhuaweicloud.com/guangzhou/baiyunshan/baiyunshan-02.jpg',
    date: '2024-07-31',
    nav: '/picture/guangzhou/'
  },
  {
    name: '北京',
    imageUrl: 'https://memories.obs.cn-south-1.myhuaweicloud.com/beijing/miaofengshan/miaofengshan-03.jpg',
    date: '2024-12-24',
    nav: '/picture/beijing/'
  }
]);

</script>

<style scoped>
.home-head {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 8rem auto 4rem;
  width: 90px;
  height: 90px;
  border-radius: 50%;
  overflow: hidden;
}

.home-tip {
  margin: 1.8rem auto;
  text-align: center;
  color: var(--vp-c-text-mute);
  font-size: 1.4rem;
  line-height: 1.3;
}

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
  height: 11rem;
}
</style>
