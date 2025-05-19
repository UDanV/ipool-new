<template>
  <div class="slider-wrapper">
    <div
        class="slider-container"
        @pointerdown="onPointerDown"
        @pointermove="onPointerMove"
        @pointerup="onPointerUp"
        @pointerleave="onPointerUp"
    >
      <div
          class="slider-track"
          :style="{ transform: `translateX(${currentTranslate}px)` }"
          ref="trackRef"
      >
        <div
            v-for="(image, index) in images"
            :key="index"
            class="slide"
        >
          <img :src="image" alt="photo" @dragstart.prevent />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, onBeforeUnmount } from 'vue'

const images = ref<string[]>([
  '/src/assets/spabox1.jpg',
  '/src/assets/spabox2.jpg',
  '/src/assets/spabox3.jpg',
  '/src/assets/spabox4.jpg',
])

const currentIndex = ref(0)
const gap = 26
const trackRef = ref<HTMLElement | null>(null)

const slideWidth = ref(400)

function checkScreenSize() {
  slideWidth.value = window.innerWidth <= 475 ? 200 : 400
}

const currentTranslate = ref(0)
let startX = 0
let isDragging = false

const updateTranslate = () => {
  currentTranslate.value = -(currentIndex.value * (slideWidth.value + gap))
}

watch(currentIndex, updateTranslate)

onMounted(() => {
  checkScreenSize()
  window.addEventListener('resize', checkScreenSize)
  updateTranslate()
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', checkScreenSize)
})

function onPointerDown(e: PointerEvent) {
  isDragging = true
  startX = e.clientX
}

function onPointerMove(e: PointerEvent) {
  if (!isDragging) return
  const deltaX = e.clientX - startX
  currentTranslate.value = -(currentIndex.value * (slideWidth.value + gap)) + deltaX
}

function onPointerUp(e: PointerEvent) {
  if (!isDragging) return
  isDragging = false
  const deltaX = e.clientX - startX

  if (deltaX > 50 && currentIndex.value > 0) {
    currentIndex.value--
  } else if (deltaX < -50 && currentIndex.value < images.value.length - 1) {
    currentIndex.value++
  } else {
    updateTranslate()
  }
}
</script>

<style scoped>
.slider-wrapper {
  width: 100%;
  overflow: hidden;
}

.slider-container {
  width: 100vw;
  overflow-x: visible;
  overflow-y: hidden;
  touch-action: pan-x;
  margin: 76px auto;
  user-select: none;
  cursor: grab;
  position: relative;
  left: calc(50% - 50vw);
}

.slider-track {
  display: flex;
  height: 474px;
  width: max-content;
  transition: transform 0.3s ease;
  will-change: transform;
  margin-left: 660px;
}

.slide {
  flex: 0 0 370px;
  margin-right: 26px;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media (max-width: 1365px) {
  .slider-track {
    margin: 10px;
  }
}

@media (max-width: 475px) {
  .slider-track {
    height: 250px;
  }

  .slide {
    flex: 0 0 200px;
  }
}
</style>