<script lang="ts">
import { defineComponent, ref } from 'vue';
import type {TextDrop} from "../types/textDrop.ts";
import baths from '../assets/img.png';
import bathimg from '../assets/spabox2.jpg'
import bathimg2 from '../assets/spabox1.jpg'
import bathimg3 from '../assets/spabox3.jpg'

export default defineComponent({
  name: 'TextDropMenu',
  setup() {
    const activeIndex = ref<number | null>(1);

    const items = ref<TextDrop[]>([
      {
        title: 'Сауна',
        content: 'Повышение жизненных стандартов, суммируя приведенные примеры, наиболее полно индуцирует анализ рыночных цен, признавая определенные рыночные тенденции.',
        icon: baths,
        background: bathimg,
        image: bathimg2,
      },
      {
        title: 'Бассейн',
        content: 'Повышение жизненных стандартов, суммируя приведенные примеры, наиболее полно индуцирует анализ рыночных цен, признавая определенные рыночные тенденции.',
        icon: baths,
        background: bathimg2,
        image: bathimg2,
        imageUnder: bathimg3,
      },
      {
        title: 'Душ впечатлений',
        content: 'Повышение жизненных стандартов, суммируя приведенные примеры, наиболее полно индуцирует анализ рыночных цен, признавая определенные рыночные тенденции.',
        icon: baths,
        background: bathimg,
        image: bathimg2,
      },
      {
        title: 'Травяная сауна',
        content: 'Повышение жизненных стандартов, суммируя приведенные примеры, наиболее полно индуцирует анализ рыночных цен, признавая определенные рыночные тенденции.',
        icon: baths,
        background: bathimg,
        image: bathimg2,
      },
      {
        title: 'Соляная комната',
        content: 'Повышение жизненных стандартов, суммируя приведенные примеры, наиболее полно индуцирует анализ рыночных цен, признавая определенные рыночные тенденции.',
        icon: baths,
        background: bathimg,
        image: bathimg2,
      },
      {
        title: 'Дорожка Кнейпа',
        content: 'Повышение жизненных стандартов, суммируя приведенные примеры, наиболее полно индуцирует анализ рыночных цен, признавая определенные рыночные тенденции.',
        icon: baths,
        background: bathimg,
        image: bathimg2,
      },
      {
        title: 'Экстремальное охлаждение',
        content: 'Повышение жизненных стандартов, суммируя приведенные примеры, наиболее полно индуцирует анализ рыночных цен, признавая определенные рыночные тенденции.',
        icon: baths,
        background: bathimg,
        image: bathimg2,
      }
    ]);

    const toggleItem = (index: number): void => {
      activeIndex.value = activeIndex.value === index ? null : index;
    };

    const formatNumber = (num: number): string => {
      return num.toString().padStart(2, '0');
    };

    const enter = (el: HTMLElement) => {
      el.style.maxHeight = '0';
      el.style.opacity = '0';
      el.offsetHeight;
      el.style.maxHeight = el.scrollHeight + 'px';
      el.style.opacity = '1';
    };

    const afterEnter = (el: HTMLElement) => {
      el.style.maxHeight = 'none';
    };

    const leave = (el: HTMLElement) => {
      el.style.maxHeight = el.scrollHeight + 'px';
      el.style.opacity = '1';
      el.offsetHeight;
      el.style.maxHeight = '0';
      el.style.opacity = '0';
    };

    return {
      items,
      activeIndex,
      toggleItem,
      formatNumber,
      enter,
      afterEnter,
      leave
    };
  }
});
</script>

<template>
  <div class="menu-container">
    <div v-for="(item, index) in items" :key="index">
      <div
          class="menu-item"
          :class="{ active: activeIndex === index }"
          @click="toggleItem(index)"
          :style="activeIndex === index ? { backgroundImage: `url(${item.background})` } : {}"
      >
        <div class="menu-item__content">
          <span class="item-number">{{ formatNumber(index + 1) }}</span>
          <span>{{ item.title }}</span>
        </div>
        <div v-if="activeIndex === index" class="menu-item__background-overlay"></div>
      </div>

      <transition
          name="expand"
          enter="enter"
          after-enter="afterEnter"
          leave="leave"
      >
        <div
            v-if="activeIndex === index"
            class="item-content"
            :style="{ backgroundImage: `url(${item.background})` }"
        >
          <div class="item-container">
            <img
                :src="item.icon"
                :alt="item.title"
                class="content-icon"
            />
            <p>{{ item.content }}</p>
          </div>
          <img
              :src="item.imageUnder"
              alt="side"
              class="content-image-right under"
          />
          <img
              :src="item.image"
              alt="side"
              class="content-image-right"
          />
          <img class="image-link" src="../assets/btnTextDrop.svg" alt="">
        </div>
      </transition>
    </div>
  </div>
</template>

<style scoped lang="scss">
*,
*::before,
*::after {
  box-sizing: border-box;
}

.menu-container {
  border: 1px solid #ffffff;
  border-radius: 18px;
  position: relative;
  margin: 100px auto 0;
  width: 100%;
}

.menu-item {
  position: relative;
  padding: 15px;
  background-image: none !important;
  cursor: pointer;
  display: flex;
  align-items: center;
  border: none;
  border-bottom: 1px solid #ffffff;
  border-radius: 15px;
  transition: all 0.3s ease;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;

  &.active {
    border-radius: 15px 15px 0 0;
  }
}

.menu-item__content {
  display: flex;
  align-items: center;
  position: relative;
  z-index: 2;
  transition: transform 0.3s ease;

  .menu-item.active & {
    transform: translateX(10px);
  }
}

.menu-item__background-overlay {
  content: '';
  position: absolute;
  inset: 0;
  z-index: 1;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.image-link {
  align-content: end;
  z-index: 2;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
}

.item-number {
  font-weight: bold;
  color: #ffffff;
  opacity: 40%;
  margin: 0 200px 0 100px;
  min-width: 30px;
  transition: all 0.3s ease;

  .menu-item.active & {
    opacity: 1;
    color: #fff;
  }
}

.item-container {
  display: flex;
  align-items: center;
  padding: 20px;
}

.item-content {
  color: white;
  margin: 0;
  display: flex;
  justify-content: space-between;
  align-items: end;
  position: relative;
  max-width: 100%;
  overflow: hidden;
  padding: 20px;
  background-size: cover;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    z-index: 0;
  }

  p {
    max-width: 450px;
    margin: 0 0 0 155px;
    text-align: left;
    position: relative;
    z-index: 1;
    color: #fff;
  }
}

.menu-container > div:last-child .item-content {
  border-radius: 0 0 15px 15px;
}

.content-icon {
  max-width: 160px;
  height: auto;
  position: relative;
  z-index: 1;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
}

.content-image-right {
  max-width: 240px;
  height: auto;
  position: relative;
  z-index: 0;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
}

.under {
  z-index: 0;
  left: 200px;
  top: -30px;
  rotate: -15deg;
  transition: all 0.5s ease;

  .item-content:hover & {
    rotate: -10deg;
  }
}

.expand-enter-active,
.expand-leave-active {
  transition: all 0.5s ease;
  overflow: hidden;
}

.expand-enter-from,
.expand-leave-to {
  opacity: 0;
  max-height: 0;
}

.expand-enter-to,
.expand-leave-from {
  opacity: 1;
  max-height: 500px;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>