<template>
  <div class="masonry-container">
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
            :src="item.src"
            :alt="`图片 ${itemIndex + 1}`"
            @load="handleImageLoad"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed, onUnmounted } from "vue";

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
const containerWidth = ref(window.innerWidth);

const images = ref([
  "https://picsum.photos/id/1/800/600",
  "https://picsum.photos/id/2/800/1000",
  "https://picsum.photos/id/3/800/500",
  "https://picsum.photos/id/4/800/700",
  "https://picsum.photos/id/5/800/900",
  "https://picsum.photos/id/6/800/400",
  "https://picsum.photos/id/7/800/600",
  "https://picsum.photos/id/8/800/1100",
  "https://picsum.photos/id/9/800/450",
  "https://picsum.photos/id/10/800/800",
]);

// 计算列数和列宽的函数
const calculateColumns = () => {
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
  const availableWidth = width; // 使用100%的屏幕宽度
  columnWidth.value =
    (availableWidth - (columnCount.value - 1) * gap) / columnCount.value;
};

// 计算列数据
const columns = computed(() => {
  const result = Array.from({ length: columnCount.value }, () => []);

  images.value.forEach((src, index) => {
    const columnIndex = index % columnCount.value;
    result[columnIndex].push({ src });
  });

  return result;
});

const handleImageLoad = (event) => {
  const img = event.target;
  img.style.width = "100%";
  img.style.height = "auto";
};

// 使用防抖处理窗口大小改变事件
const handleResize = debounce(() => {
  calculateColumns();
}, 200); // 200毫秒防抖时间

onMounted(() => {
  // 初始计算列数
  calculateColumns();

  // 添加窗口大小变化监听
  window.addEventListener("resize", handleResize);
});

// 组件卸载时移除事件监听
onUnmounted(() => {
  window.removeEventListener("resize", handleResize);
});
</script>

<style scoped>
.masonry-container {
  width: 100%;
  margin: 0 auto;
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
