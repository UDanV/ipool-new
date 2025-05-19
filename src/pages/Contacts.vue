<script lang="ts" setup>
import Header from '../components/header.vue'
import {setupScrollAnimations} from "../plugins/setupScrollAnimations.ts";
import {onMounted} from "vue";
import backgroundImage from '../assets/map.png'

onMounted(() => {
  setupScrollAnimations()
})

</script>

<template>
  <Header />
    <div class="contacts">

      <section class="section">
        <div class="contacts__text" :style="{backgroundImage: `url(${backgroundImage})`}">
          <div class="contacts__info">
            <h2>Контакты</h2>
            <p>Мы работаем по югу страны. Наш офис находится
              в Ростове-на-Дону по улице - <b><a href="https://yandex.ru/maps/39/rostov-na-donu/house/zelyonaya_ulitsa_8a/Z0AYcQ5oTUUEQFptfX50eXplZw==/?ll=39.798403%2C47.258663&z=16.59">Зеленая 8а</a></b></p>
            <p>Если у вас возникли вопросы, Вы можете связаться с нами по номерам и Email:</p>
            <a href="tel:79185538734">+7 918 553-87-34</a>
            <div class="email">
              <a href="tel:78632838281">+7 863 283-82-81</a>
              <p>Email: <a href="mailto:info@ipool.ru">info@ipool.ru</a></p>
            </div>
            <p class="time">10:00 — 19:00, без выходных</p>
          </div>
        </div>
      </section>

    </div>
</template>