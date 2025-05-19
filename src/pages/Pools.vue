<script lang="ts" setup>
import Header from "../components/header.vue";
import {setupScrollAnimations} from "../plugins/setupScrollAnimations";
import {onMounted} from "vue";
import compositePool from '../assets/composite.png';
import monolitePool from '../assets/monolite.png';
import Button from "../components/button.vue";

onMounted(() => {
  setupScrollAnimations()
})
</script>

<template>
  <Header />

    <div class="pools">

      <section class="section">
        <div class="pools__wrapper">
          <div class="pools__choice" :style="{backgroundImage: `url(${compositePool})`}">
            <h2>Композитные бассейны</h2>
            <Button title="Перейти" theme="white"/>
          </div>
          <div class="pools__choice" :style="{backgroundImage: `url(${monolitePool})`}">
            <h2>Монолитные бассейны</h2>
            <Button title="Перейти" theme="white"/>
          </div>
        </div>
      </section>
    </div>
</template>

<style lang="scss">
.pools {
  &__wrapper {
    width: 100%;
    display: flex;
    align-items: normal;
    justify-content: space-between;
  }

  &__choice {
    border: 1px solid #000000;
    background-size: cover;
    display: flex;
    justify-content: end;
    align-items: end;
    text-align: left;
    height: 93vh;
    width: 100%;
    transition: all 0.3s;

    h2 {
      color: #ffffff;
      font-size: 64px;
      line-height: 100%;
      margin: 32px 50px;
    }
  }
}
</style>