<template>
  <div class="masonry-container">
    <!-- 加载状态提示 -->
    <div v-show="isLoading" class="loading-container">
      <div class="loading-mask"></div>
      <div class="loading-spinner">正在加载中，请稍等...</div>
    </div>

    <!-- 图片加载失败提示 -->
    <div v-show="errorImages.length" class="error-overlay">
      <div class="error-title">以下图片加载失败：</div>
      <ul class="error-list">
        <li v-for="(errorImg, index) in errorImages" :key="index">
          {{ errorImg }}
        </li>
      </ul>
    </div>

    <div class="masonry-grid">
      <div
        v-for="(column, columnIndex) in columns"
        :key="columnIndex"
        class="masonry-column"
        :style="{ width: `${columnWidth}px` }"
      >
        <div
          v-for="(item, itemIndex) in column"
          :key="itemIndex"
          class="masonry-item"
        >
          <img
            :src="item.imageSrc"
            :alt="item.imageAlt"
            @load="handleImageLoad"
            @error="handleImageError"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed, onUnmounted, onBeforeMount } from "vue";
import { isClient } from "@vueuse/core";

/**
 * images Array<{ imageSrc: string, imageAlt: string }>
 */
const props = defineProps({
  images: {
    type: Array,
    default: () => [], // 默认为空数组
  },
});

const maxColumns = 4;
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
const columnCount = ref(4);
const columnWidth = ref(baseColumnWidth);
const containerWidth = ref(isClient ? window.innerWidth : 1200);
const isLoading = ref(true);
const errorImages = ref([]);
const loadedImagesCount = ref(0);

const images = ref(props.images);

// 计算列数和列宽的函数
const calculateColumns = () => {
  if (!isClient) return;

  const width = window.innerWidth;
  containerWidth.value = width;

  if (width >= 1200) {
    columnCount.value = 4;
  } else if (width >= 900) {
    columnCount.value = 3;
  } else if (width >= 600) {
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

  images.value.forEach((imageItem, index) => {
    const columnIndex = index % columnCount.value;
    result[columnIndex].push(imageItem);
  });

  return result;
});

const handleImageLoad = (event) => {
  const img = event.target;
  img.style.width = "100%";
  img.style.height = "auto";

  loadedImagesCount.value++;

  // 所有图片加载完成
  if (loadedImagesCount.value === images.value.length) {
    isLoading.value = false;
  }
};

const handleImageError = (event) => {
  const img = event.target;

  // 如果错误图片列表中没有包含当前图片的alt属性
  if (!errorImages.value.includes(img.alt)) {
    errorImages.value.push(img.alt);
  }

  loadedImagesCount.value++;

  // 所有图片处理完成
  // 如果已加载图片的数量等于总图片数量
  if (loadedImagesCount.value === images.value.length) {
    isLoading.value = false;
  }
};

const handleImageComplete = () => {
  const images = document.querySelectorAll(".masonry-item img");
  let loadedCount = 0;

  images.forEach((img) => {
    if (img.complete) {
      loadedCount++;
      img.style.width = "100%";
      img.style.height = "auto";
    }
  });

  if (loadedCount === images.length && images.length > 0) {
    isLoading.value = false;
  }
};

// 使用防抖处理窗口大小改变事件
const handleResize = debounce(() => {
  calculateColumns();
}, 200);

onMounted(() => {
  calculateColumns();

  if (isClient) {
    // 添加窗口大小变化监听
    window.addEventListener("resize", handleResize);

    // 检查图片是否已经加载完成（处理缓存情况）
    handleImageComplete();
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
.masonry-container {
  position: relative;
  width: 100%;
}

.loading-container {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

.loading-mask {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: var(--tab-c-bg);
  opacity: 0.6;
}

.loading-spinner {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  --hint-c-accent: var(--tip-c-accent);
  --hint-c-title: var(--tip-c-text);
  --hint-c-soft: var(--tip-c-soft);
  color: var(--hint-c-title);
  background-color: var(--hint-c-soft);
  line-height: 2;
}

.loading-spinner::before {
  background-color: currentColor;
  mask-image: url("/images/favicon.svg");
  mask-size: 1em;
  mask-repeat: no-repeat;
  content: " ";
  inset-inline-start: 0;
  top: calc(50% - 0.6125em);
  width: 1.25em;
  height: 1.25em;
  font-size: 1.25em;
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

.masonry-grid {
  display: flex;
  gap: 15px;
}

.masonry-column {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.masonry-item {
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s ease;
}

.masonry-item:hover {
  transform: scale(1.05);
}

.masonry-item img {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
}
</style>
