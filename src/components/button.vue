<script setup lang="ts">
withDefaults(defineProps<{
  theme?: 'blue' | 'black' | 'white',
  title: string
}>(), {
  theme: 'blue',
  title: 'Каво'
})
</script>

<template>
  <button
      :class="[theme === 'black' ? 'black-theme' :
        theme === 'white' ? 'white-theme' : 'blue-theme']"
      class="custom-button"
  >
    <slot>{{ title }}</slot>
    <img src="../assets/line-to-right-white.svg" alt="">
  </button>
</template>

<style scoped lang="scss">
.custom-button {
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 39%;
  padding: 30px;
  border-radius: 40px;
  transition: all 0.3s ease;
}

.blue-theme {
  color: #ffffff;
  background-color: #5594FF;
}

.black-theme {
  color: #ffffff;
  background-color: #000000;
}

.white-theme {
  color: #000;
  background-color: #ffffff;
  border-radius: 0;
  margin: 39px 25px;

  img {
    filter: brightness(0);
  }
}

@media (max-width: 1365px) {
  .custom-button {
    width: 100%;
    border-radius: 20px;
  }
}

@media (max-width: 767px) {
  
}

@media (max-width: 480px) {
  .custom-button {
    padding: 10px;
    font-size: 10px;
  }
}
</style>