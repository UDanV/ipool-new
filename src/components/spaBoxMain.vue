<script setup lang="ts">
import { onMounted, ref, defineProps, withDefaults } from "vue";
import type {ImageItem} from "../types/spaBox.ts";

const props = withDefaults(defineProps<{
  images: ImageItem[];
  interval?: number;
}>(), {
  interval: 3000
});

const activeIndex = ref(0);

const startAnimation = () => {
  setInterval(() => {
    activeIndex.value = (activeIndex.value + 1) % props.images.length;
  }, props.interval);
};

onMounted(() => {
  if (props.images.length > 1) {
    startAnimation();
  }
});

</script>

<template>
  <section class="section" id="main">
    <div class="spa-box__title">
      <h1 class="title">
        Spa
      </h1>
      <div class="spa-box__images">
        <div
            class="image"
            :class="{
                  left: activeIndex === 1,
                  center: activeIndex === 0,
                  right: activeIndex === 2
                }"
            :style="{ backgroundImage: 'url(' + images[0].src + ')' }"
        ></div>

        <div
            class="image"
            :class="{
                  left: activeIndex === 2,
                  center: activeIndex === 1,
                  right: activeIndex === 0
                }"
            :style="{ backgroundImage: 'url(' + images[1].src + ')' }"
        ></div>

        <div
            class="image"
            :class="{
                  left: activeIndex === 0,
                  center: activeIndex === 2,
                  right: activeIndex === 1
                }"
            :style="{ backgroundImage: 'url(' + images[2].src + ')' }"
        ></div>
      </div>
      <h1 class="title">
        Box
      </h1>
    </div>
    <h2 class="spa-box__subtitle">
      Именно то &nbsp; &nbsp; &nbsp; &nbsp; место, где надо &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; отдыхать!
    </h2>
  </section>
</template>

<style lang="scss">
.spa-box {

  &__title {
    display: flex;
    align-items: center;
    justify-content: center;

    .title {
      font-size: 250px;
      color: #A4C2F5;
      text-transform: uppercase;
      margin-bottom: 0;
      margin-top: 10px;
    }
  }

  &__subtitle {
    position: relative;
    font-size: 96px;
    font-weight: 500;
    text-transform: uppercase;
    margin-top: 0;
    z-index: 11;
    line-height: 100%;
    margin-bottom: 100px;
  }

  &__footer {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__images {
    position: relative;
    height: 416px;
    width: 234px;

    .image {
      position: absolute;
      width: 100%;
      height: 100%;
      background-size: cover;
      background-position: center;
      transition: transform 1s ease, opacity 1s ease;

      &.left {
        transform: rotate(-15deg);
        z-index: 2;
        opacity: 1;
      }

      &.center {
        transform: rotate(0deg);
        z-index: 3;
        opacity: 1;
      }

      &.right {
        transform: rotate(15deg);
        z-index: 1;
        opacity: 1;
      }
    }
  }
}
</style>