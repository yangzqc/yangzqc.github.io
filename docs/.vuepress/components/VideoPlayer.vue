<template>
  <div class="video-container">
    <!-- 加载状态提示 -->
    <div v-show="isLoading" class="loading-container">
      <div class="loading-spinner">正在加载中，请稍等...</div>
    </div>

    <!-- 视频加载失败提示 -->
    <div v-show="errorVideos.length" class="error-overlay">
      <div class="error-title">以下视频加载失败：</div>
      <ul class="error-list">
        <li v-for="(errorVideo, index) in errorVideos" :key="index">
          {{ errorVideo }}
        </li>
      </ul>
    </div>

    <div class="video-grid">
      <div
        v-for="(column, columnIndex) in columns"
        :key="columnIndex"
        class="video-column"
        :style="{ width: `${columnWidth}px` }"
      >
        <div
          v-for="(video, itemIndex) in column"
          :key="itemIndex"
          class="video-item"
        >
          <video
            :src="video.url"
            controls
            @loadedmetadata="(event) => handleVideoLoad(event, video)"
            @error="(event) => handleVideoError(event, video)"
          >
            您的浏览器不支持 HTML5 视频播放。
          </video>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed, onUnmounted, onBeforeMount } from "vue";
import { isClient } from "@vueuse/core";

const props = defineProps({
  videoList: {
    type: Array,
    default: () => [],
  },
});

const maxColumns = 3;
const gap = 15;
const baseColumnWidth = 260;

// 防抖函数
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// 响应式状态
const columnCount = ref(3);
const columnWidth = ref(baseColumnWidth);
const containerWidth = ref(isClient ? window.innerWidth : 900);
const isLoading = ref(true);
const errorVideos = ref([]);
const loadedVideosCount = ref(0);

const videos = ref(props.videoList);

// 计算列数和列宽的函数
const calculateColumns = () => {
  if (!isClient) return;

  const width = window.innerWidth;
  containerWidth.value = width;

  // 根据屏幕宽度动态调整列数，最大3列
  if (width >= 1800) {
    columnCount.value = 3;
  } else if (width >= 900) {
    columnCount.value = 2;
  } else {
    columnCount.value = 1;
  }

  // 计算列宽，使用100%的屏幕宽度
  const availableWidth = width;
  columnWidth.value =
    (availableWidth - (columnCount.value - 1) * gap) / columnCount.value;
};

// 计算列数据
const columns = computed(() => {
  const result = Array.from({ length: columnCount.value }, () => []);

  videos.value.forEach((videoItem, index) => {
    const columnIndex = index % columnCount.value;
    result[columnIndex].push(videoItem);
  });

  return result;
});

const handleVideoLoad = (event, video) => {
  const videoEl = event.target;
  videoEl.style.width = "100%";
  videoEl.style.height = "auto";
  videoEl.volume = 0.1; // 设置初始音量为10%

  loadedVideosCount.value++;

  // 所有视频加载完成
  if (loadedVideosCount.value === videos.value.length) {
    isLoading.value = false;
  }
};

const handleVideoError = (event, video) => {
  const videoEl = event.target;

  // 如果错误视频列表中没有包含当前视频的 URL
  if (!errorVideos.value.includes(video.url)) {
    errorVideos.value.push(video.url);
  }

  loadedVideosCount.value++;

  // 所有视频处理完成
  if (loadedVideosCount.value === videos.value.length) {
    isLoading.value = false;
  }
};

// 使用防抖处理窗口大小改变事件
const handleResize = debounce(() => {
  calculateColumns();
}, 200);

onBeforeMount(() => {
  // 初始计算列数
  calculateColumns();
});

onMounted(() => {
  if (isClient) {
    // 添加窗口大小变化监听
    window.addEventListener("resize", handleResize);
  }
});

// 组件卸载时移除事件监听
onUnmounted(() => {
  if (isClient) {
    window.removeEventListener("resize", handleResize);
  }
});
</script>

<style scoped>
/* 样式保持不变 */
.video-container {
  width: 100%;
}

.loading-container {
  display: flex;
  width: 100%;
  height: 40px;
  background: var(--tab-c-bg);
}

.loading-spinner {
  font-size: 16px;
  color: var(--vp-c-text-mute);
}

.error-overlay {
  background-color: #f8d7da;
  color: #721c24;
  padding: 15px;
  margin-bottom: 20px;
  border-radius: 5px;
}

.error-title {
  font-weight: bold;
  margin-bottom: 10px;
}

.error-list {
  list-style-type: disc;
  padding-left: 20px;
}

.video-grid {
  display: flex;
  gap: 15px;
}

.video-column {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.video-item {
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
}

.video-item video {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
}
</style>
