<script setup lang="ts">
import Header from "../components/header.vue";
import {setupScrollAnimations} from "../plugins/setupScrollAnimations.ts";
import {onMounted} from "vue";
import TextDropMenu from "../components/textDrop.vue";
import Footer from "../components/footer.vue";
import Slider from "../components/slider.vue";
import spabox1 from '../assets/spabox1.jpg';
import spabox2 from '../assets/spabox2.jpg';
import spabox3 from '../assets/spabox3.jpg';
import SpaBoxMain from "../components/spaBoxMain.vue";
import Button from '../components/button.vue'

function redirectSpa() {
  window.scrollTo(0, 0)
  window.location.href = '/spa-box'
}

function redirectWork() {
  window.scrollTo(0, 0)
  window.location.href = '/work'
}

const images = [
  { id: 1, src: spabox1 },
  { id: 2, src: spabox2 },
  { id: 3, src: spabox3 }
];

onMounted(() =>{
  setupScrollAnimations();
})
</script>

<template>
  <Header/>
  <div class="container">
    <div class="main">
      <section class="section">
        <div class="main__title">
          <img src="../assets/main-image.png" alt="">
          <div class="main__content">
            <div class="main__text">
              <h2>Бассейны и Спа
                <span class="main__text--small">Проектирование, монтаж и сервисное обслуживание. Ростов-на-Дону и Юг Росcии.</span>
              </h2>
            </div>
            <div class="main__card" @click="redirectWork">
              <h2>Сделаем предварительную оценку и замер бесплатно</h2>
              <p>Как мы работаем<img src="../assets/line-to-right.svg" alt=""></p>
            </div>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="main__about">
          <h2>Основной принцип работы компании <br>— индивидуальный подход <img src="../assets/arrow-right-up.svg"><br> к каждому <img class="mask" src="../assets/about-text.png"> клиенту</h2>
          <button>О компании <img src="../assets/line-to-right.svg" alt=""></button>
          <div class="main__info">
            <p>Бассейны и спа</p>
            <p class="info">Эксклюзивные проекты зоны SPA,
              а также широкий ассортимент различных
              аксессуаров и SPA-оборудования.
              Мы создаем неповторимый аквамир в Вашем доме,
              а качественное сервисное обслуживание поможет сохранить его на долгие годы.
              <br>
              <br>
              <br>
              Результат нашей работы сделают Ваш отдых более комфортным, а здоровье — крепким.
            </p>
            <p class="transparent">Бассейны и спа</p>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="main__team">
          <div class="main__team--text">
            <img src="../assets/lifebuoy.png" alt="">
            <p>Что делает наша команда? <br><span> — индивидуальный подход к каждому клиенту</span></p>
          </div>
          <TextDropMenu />
        </div>
      </section>

      <section class="section">
        <div class="main__works">
          <div class="main__works--text">
            <p>Кейсы</p>
            <h2>Наши работы</h2>
            <p>Просматривайте наши проекты, вдохновляйтесь решениями, воплощайте их в жизнь!</p>
          </div>
          <Slider />
          <Button title="К проектам" theme="blue"/>
        </div>
      </section>

      <section class="section">
        <div class="main__fact">
          <div class="main__fact--text">
            <p>Интересный факт</p>
            <div class="main__fact--card">
              <p class="title">43 000 <span>тонн</span>*</p>
              <p class="subtitle">Объём всех бассейнов построенных компанией <br>"iPool"</p>
              <img src="../assets/kuznetsov-cruiser.jpg" alt="">
              <p class="fact">Эту цифру можно сравнить
                с водоизмещением тяжёлого авианесущего крейсера “Адмирал Флота Советского Союза Кузнецов” — <b>47 тыс. тонн.</b></p>
            </div>
            <p>IPOOL</p>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="main__spabox">
          <SpaBoxMain :images="images" :interval="3000"/>
          <Button title="К Spa-Box" theme="black" @click="redirectSpa"/>
        </div>
      </section>
    </div>
  </div>
  <Footer />
</template>