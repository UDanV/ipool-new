<script lang="ts">
import { defineComponent, ref } from 'vue';
import type {TextDrop} from "../types/TextDrop.ts";
import sauna from '../assets/img_1.png';
import baths from '../assets/img.png';

export default defineComponent({
  name: 'TextDropMenu',
  setup() {
    const activeIndex = ref<number | null>(null);

    const items = ref<TextDrop[]>([
      {
        title: 'Сауна',
        content: 'Повышение жизненных стандартов, суммируя приведенные примеры, наиболее полно индуцирует анализ рыночных цен, признавая определенные рыночные тенденции.',
        icon: sauna,
        background: sauna,
      },
      {
        title: 'Вассейн',
        content: 'Повышение жизненных стандартов, суммируя приведенные примеры, наиболее полно индуцирует анализ рыночных цен, признавая определенные рыночные тенденции.',
        icon: baths,
        background: sauna,
      },
      {
        title: 'Душ впечатлений',
        content: 'Повышение жизненных стандартов, суммируя приведенные примеры, наиболее полно индуцирует анализ рыночных цен, признавая определенные рыночные тенденции.',
        icon: sauna,
        background: sauna,
      },
      {
        title: 'Травяная сауна',
        content: 'Повышение жизненных стандартов, суммируя приведенные примеры, наиболее полно индуцирует анализ рыночных цен, признавая определенные рыночные тенденции.',
        icon: baths,
        background: sauna,
      },
      {
        title: 'Соляная комната',
        content: 'Повышение жизненных стандартов, суммируя приведенные примеры, наиболее полно индуцирует анализ рыночных цен, признавая определенные рыночные тенденции.',
        icon: sauna,
        background: sauna,
      },
      {
        title: 'Дорожка Кнейпа',
        content: 'Повышение жизненных стандартов, суммируя приведенные примеры, наиболее полно индуцирует анализ рыночных цен, признавая определенные рыночные тенденции.',
        icon: baths,
        background: sauna,
      },
      {
        title: 'Экстремальное охлаждение',
        content: 'Повышение жизненных стандартов, суммируя приведенные примеры, наиболее полно индуцирует анализ рыночных цен, признавая определенные рыночные тенденции.',
        icon: sauna,
        background: sauna,
      }
    ]);

    const toggleItem = (index: number): void => {
      activeIndex.value = activeIndex.value === index ? null : index;
    };

    const formatNumber = (num: number): string => {
      return num.toString().padStart(2, '0');
    };

    return {
      items,
      activeIndex,
      toggleItem,
      formatNumber,
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
      >
        <div>
          <span class="item-number">{{ formatNumber(index + 1) }}</span>
          <span>{{ item.title }}</span>
        </div>
      </div>

      <div
          v-if="activeIndex === index"
          class="item-content"
          :style="{ backgroundImage: `url(${item.background})` }"
      >
        <img
            :src="item.icon"
            :alt="item.title"
            class="content-icon">
        <p>{{ item.content }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
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
  padding: 15px;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  border: none;
  border-bottom: 1px solid #ffffff;
  transition: all 0.3s ease;
}

.menu-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.menu-item.active {
  background-color: rgba(255, 255, 255, 0.2);
}

.item-number {
  font-weight: bold;
  color: #ffffff;
  opacity: 40%;
  margin: 0 200px 0 100px;
  min-width: 30px;
}

.item-content {
  color: white;
  margin: 0;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  display: flex;
  border-bottom: 1px solid #ffffff;
  align-items: center;
  justify-content: flex-start;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  max-width: 100%;
}

.item-content::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
}

.item-content p {
  margin: 0;
  max-width: 650px;
  text-align: left;
  padding-left: 140px;
  position: relative;
  z-index: 1;
}

.item-content img {
  max-width: 100%;
  height: auto;
  padding-left: 35px;
  position: relative;
  z-index: 1;
}
</style>