<script setup lang="ts">
const redirect = () => {
  window.open('https://yandex.ru/maps/39/rostov-na-donu/house/zelyonaya_ulitsa_8a/Z0AYcQ5oTUUEQFptfX50eXplZw==/?ll=39.799185%2C47.258420&z=17.45', '_blank');
}
</script>

<template>
  <section class="footer">
    <div class="footer__header">
      <img src="../assets/logo-white.png" alt="logo">
    </div>
    <div class="footer__body">
      <div class="ellipse"></div>
      <div class="ellipse"></div>
    </div>
    <div class="footer__contacts">
      <p>
        Если у вас возникли вопросы,
        Вы можете связаться с нами
        по номерам и Email:
      </p>
      <div class="footer__links">
        <a href="tel:79185538734">+7 918 553 87 34</a>
        <a href="tel:78632838281">+7 863 283 82 81</a>
        <a href="mailto:info@ipool.ru"><span><b>Email:</b></span> info@ipool.ru</a>
      </div>
    </div>
    <div class="footer__map">
      <img class="map" src="../assets/map.jpg" alt="map">
      <button @click="redirect"><img src="../assets/arrow-up-right.svg" alt="arrow"></button>
    </div>
  </section>
</template>