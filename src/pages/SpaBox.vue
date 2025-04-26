<script setup lang="ts">
import '../sass/components/_spabox.scss'
import TextDropMenu from "../components/textdrop.vue";
import Header from "../components/header.vue";
import Footer from "../components/footer.vue";
import {onMounted, ref} from "vue";

const activeImage = ref(1)
onMounted(() => {
  setInterval(() => {
    activeImage.value = activeImage.value % 3 + 1
  }, 1111)
})
</script>

<template>
  <Header />
  <div class="container">
    <div class="spa-box">
    <section class="section">
      <div class="spa-box__title">
        <h1 class="title">
          Spa
        </h1>
        <div class="spa-box__images">
          <img class="image image-1" src="../assets/spabox1.jpg" alt=""
               :class="{ active: activeImage === 1 }">
          <img class="image image-2" src="../assets/spabox2.jpg" alt=""
               :class="{ active: activeImage === 2 }">
          <img class="image image-3" src="../assets/spabox3.jpg" alt=""
               :class="{ active: activeImage === 3 }">
        </div>
        <h1 class="title">
          Box
        </h1>
      </div>
      <h2 class="spa-box__subtitle">
        Именно то &nbsp; &nbsp; &nbsp; &nbsp; место, где надо &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; отдыхать!
      </h2>
      <div class="spa-box__footer">
        <img src="../assets/logo-white.png" alt="">
        <p class="spa-box__comment">Проектирование, монтаж и сервисное обслуживание.
          Ростов-на-Дону и Юг Росcии.</p>
      </div>
    </section>

    <section class="section">
      <div class="spa-box__works">
        <div class="spa-box__works--title">
          <p class="spa-box__name">Spa-Box</p>
          <h2>Что же есть <br>в SPA-BOX?</h2>
          <div class="square"></div>
        </div>
        <div class="spa-box__works--body">
          <ul class="spa-box__works--list">
            <li>Сауны</li>
            <li>Бассейны</li>
            <li>Бани</li>
            <li>Ванны</li>
          </ul>
          <p>Мы располагаем огромным ассортиментов комнат для вашего лучшего отдыха.</p>
          <p>Всё что угодно Вашей душе. Именно Spa-Box и его ассортимент - Ваш выбор.</p>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="spa-box__cards">
        <div class="spa-box__cards--info">
          <svg xmlns="http://www.w3.org/2000/svg" width="210" height="210" viewBox="0 0 221 210" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M204.384 99.5623C207.765 120.81 226.938 141.479 218.721 161.374C210.713 180.764 184.866 184.896 165.627 193.405C148.091 201.161 130.335 210.689 111.23 208.917C92.6735 207.196 78.9152 192.4 62.3839 183.829C45.0033 174.817 21.8024 173.499 11.2283 157.068C0.647684 140.627 9.32707 119.056 8.1537 99.5623C6.8952 78.6549 -6.57088 56.0061 4.05713 37.933C14.6943 19.8444 40.2268 18.3002 60.0624 11.2911C76.8075 5.37401 93.4782 -0.682475 111.23 0.0623626C128.556 0.789329 144.704 7.28521 159.968 15.4829C175.57 23.8624 192.446 32.489 200.699 48.1135C208.877 63.5928 201.635 82.2867 204.384 99.5623Z" fill="white"/>
            <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="black" font-size="55" font-style="italic" font-family="gothampro">
              Сауны
            </text>
          </svg>
          <p>Описание бассейна, зона бассейнокоомбинации и так далее </p>
        </div>
        <div class="spa-box__cards--image">
          <img src="../assets/spabox1.jpg" alt="">
        </div>
        <div class="spa-box__cards--attribute">
          <p>Характеристики</p>
          <div class="spa-box__cards--list">
            <p class="name">Объем бассейна.</p>
            <div class="parameters">
              <span style="font-size: 48px">-</span>
              <p class="attribute">150м3</p>
            </div>
            <p class="name">Ширина.</p>
            <div class="parameters">
              <span style="font-size: 48px">-</span>
              <p class="attribute">15 метров</p>
            </div>
            <p class="name">Глубина.</p>
            <div class="parameters">
              <span style="font-size: 48px">-</span>
              <p class="attribute">N метров</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="spa-box__textdrop">
        <div class="spa-box__textdrop--title">
          <p class="spa-box__name">Вы не пожалеете</p>
          <h2>Что мы можем  предложить</h2>
          <p class="spa-box__comment">качественное исполнение</p>
          <div class="spa-box__textdrop--description">
            <p>Вы можете выбрать лучший вариант вашего отдыха в Нашем SPA-BOX’е.</p>
          </div>
        </div>
        <div class="spa-box__container">
          <TextDropMenu />
        </div>
      </div>
    </section>
    <section class="section">
      <div class="merch-box">
        <img src="../assets/merchbox.png" alt="Основной товар" class="main" />
        <div class="merch-box__floating">
          <img src="../assets/77696c19355de7d5998981b7664e4e4c.png" alt="Левый товар" class="float float-top-left" />
          <img src="../assets/ac2bcc88c008213a39f6dc6867418cf5.png" alt="Правый товар" class="float float-bottom-right" />
        </div>
        <div class="merch-box__text">
          <h2>МЕРЧ БОХ</h2>
          <p>На входе стойки с мерчом, которые порадуют вас</p>
        </div>
        <div class="merch-box__floating">
          <img src="../assets/38c97741fd47288c1f998c5750cad0d6.png" alt="Левый товар" class="float float-left" />
          <img src="../assets/ac2bcc88c008213a39f6dc6867418cf5.png" alt="Правый товар" class="float float-right" />
        </div>
        <div class="merch-box__stand">
          <img src="../assets/stand.jpg" alt="Стойка с мерчем" />
        </div>
        <div class="merch-box__floating">
          <img src="../assets/77696c19355de7d5998981b7664e4e4c.png" alt="Левый товар" class="float float-left-under" />
          <img src="../assets/38c97741fd47288c1f998c5750cad0d6.png" alt="Правый товар" class="float float-right-under" />
        </div>
      </div>
    </section>
    </div>
  </div>
  <Footer />
</template>