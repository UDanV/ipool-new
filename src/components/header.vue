<template>
  <div class="header" id="header">
    <div class="header__logo">
      <router-link to="/">
        <img src="../assets/logo-white.png" alt="Лого">
      </router-link>
    </div>
    <div class="header__links">
      <ul class="menu">
        <li><router-link class="header__links--blue" to="/">Проекты</router-link></li>
        <li><router-link class="header__links--blue" to="/">Бани и сауны</router-link></li>
        <li><router-link class="header__links--blue" to="/">Wellness и SPA</router-link></li>
        <li><router-link class="header__links--blue" to="/">Бассейны</router-link></li>
        <li><router-link class="header__links--white" to="/">О компании</router-link></li>
        <li><router-link class="header__links--white" to="/work">Как мы работаем</router-link></li>
        <li><router-link class="header__links--white" to="/">Контакты</router-link></li>
      </ul>
    </div>
    <div class="header__phone">
      <p>+7 863 283-82-81</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { gsap } from "gsap";
import { onMounted } from "vue";

function redirect() {
  window.scrollTo(0, 0)
  window.location.href = '/work'
}

onMounted(() => {
  const tl = gsap.timeline()

  .fromTo('.header__logo', {
    y: -50,
    opacity: 0
  }, {
    y: 0,
    opacity: 1,
    duration: 0.5,
  })
  tl.fromTo('.menu li', {
    y: -50,
    opacity: 0
  }, {
    y: 0,
    opacity: 1,
    duration: 0.5,
    stagger: 0.10,
  })
  .fromTo('.header__phone', {
    y: -50,
    opacity: 0
  }, {
    y: 0,
    opacity: 1,
    duration: 0.5,
  })
})

</script>