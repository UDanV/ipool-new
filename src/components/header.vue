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
      <a href="tel:78632838281">+7 863 283-82-81</a>
    </div>
    <div @click="toggleMenu" class="header__burger">
      <img class="burger" src="../assets/burger.svg" alt="Burger menu">
    </div>
    <div class="header__menu" :class="{ 'active': isMenuOpen }" @click="isMenuOpen = false">
      <img src="../assets/logo-white.png" alt="">
      <nav class="header__menu--links">
        <a><router-link class="header__links--blue" to="/">Проекты</router-link></a>
        <a><router-link class="header__links--blue" to="/">Бани и сауны</router-link></a>
        <a><router-link class="header__links--blue" to="/">Wellness и SPA</router-link></a>
        <a><router-link class="header__links--blue" to="/">Бассейны</router-link></a>
        <a><router-link class="header__links--white" to="/">О компании</router-link></a>
        <a><router-link class="header__links--white" to="/work">Как мы работаем</router-link></a>
        <a><router-link class="header__links--white" to="/">Контакты</router-link></a>
      </nav>
      <p>+7 863 283-82-81</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { gsap } from "gsap";
import {onMounted, ref, watch} from "vue";

const isMenuOpen = ref(false);
let menuAnimation: gsap.timeline;

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}

watch(isMenuOpen, (newVal) => {
  if (newVal) {
    menuAnimation = gsap.timeline()
        .to('.header__menu', {
          left: 0,
          duration: 0.3,
          ease: "power2.out"
        })
        .from('.header__menu--links a', {
          y: 20,
          opacity: 0,
          duration: 0.3,
          stagger: 0.05,
          ease: "power2.out"
        }, 0.2)
        .from('.header__menu p', {
          y: 20,
          opacity: 0,
          duration: 0.3,
          ease: "power2.out"
        }, 0.5);
  } else {
    gsap.to('.header__menu', {
      left: '-100%',
      duration: 0.3,
      ease: "power2.in"
    });
  }
});


onMounted(() => {
  const tl = gsap.timeline()

  .fromTo('.header__burger', {
    y: -50,
    opacity: 0
  }, {
    y: 0,
    opacity: 1,
    duration: 0.5,
  })
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