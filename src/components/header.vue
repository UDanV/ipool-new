<script setup lang="ts">

</script>

<template>
  <div class="header">
    <div class="header__logo">
      <img src="../assets/logo-white.png" alt="Лого">
    </div>
    <div class="header__links">
      <ul>
        <li><router-link class="header__links--blue" to="Main">Проекты</router-link></li>
        <li><router-link class="header__links--blue" to="Main">Бани и сауны</router-link></li>
        <li><router-link class="header__links--blue" to="Main">Wellness и SPA</router-link></li>
        <li><router-link class="header__links--blue" to="Main">Бассейны</router-link></li>
        <li><router-link class="header__links--white" to="Main">О компании</router-link></li>
        <li><router-link class="header__links--white" to="Main">Как мы работаем</router-link></li>
        <li><router-link class="header__links--white" to="Main">Контакты</router-link></li>
      </ul>
    </div>
    <div class="header__phone">
      <p>+7 863 283-82-81</p>
    </div>
  </div>
</template>