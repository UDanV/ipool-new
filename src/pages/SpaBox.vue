<script setup lang="ts">
import { onMounted, onUnmounted, ref} from 'vue';
import TextDropMenu from "../components/textDrop.vue";
import Header from "../components/header.vue";
import Footer from "../components/footer.vue";
import ScrollCards from "../components/scrollableCard.vue";
import {setupScrollAnimations} from "../plugins/setupScrollAnimations.ts";
import SpaBoxMain from "../components/spaBoxMain.vue";
import Slider from "../components/slider.vue";

const images = [
  { id: 1, src: new URL('../assets/spabox1.jpg', import.meta.url).href },
  { id: 2, src: new URL('../assets/spabox2.jpg', import.meta.url).href },
  { id: 3, src: new URL('../assets/spabox3.jpg', import.meta.url).href }
];

const activeIndex = ref(0);

const startAnimation = () => {
  setInterval(() => {
    activeIndex.value = (activeIndex.value + 1) % images.length;
  }, 3000);
};

onMounted(() => {
  startAnimation();
  document.documentElement.classList.add("dark")
});

const cards = [
  {
    title: 'Сауны',
    description: 'Премиальные сауны с натуральной древесиной и оптимальным микроклиматом',
    image: new URL('/src/assets/spabox1.jpg', import.meta.url).href,
    attributes: [
      { name: 'Температура', value: '80-110°C' },
      { name: 'Вместимость', value: '4-8 человек' },
      { name: 'Материалы', value: 'Карельская береза' }
    ]
  },
  {
    title: 'Бассейны',
    description: 'Просторные бассейны с системой очистки и подогрева воды',
    image: new URL('/src/assets/spabox2.jpg', import.meta.url).href,
    attributes: [
      { name: 'Объем', value: '150м3' },
      { name: 'Ширина', value: '15 метров' },
      { name: 'Глубина', value: '1.2-2.5м' }
    ]
  },
  {
    title: 'SPA-зоны',
    description: 'Комплекс релаксационных процедур с профессиональным уходом',
    image: new URL('/src/assets/spabox3.jpg', import.meta.url).href,
    attributes: [
      { name: 'Процедуры', value: '15+ видов' },
      { name: 'Длительность', value: '30-180 мин' },
      { name: 'Рекомендации', value: 'Для релаксации' }
    ]
  },
]

onMounted(() => {
  setupScrollAnimations();
  setupFloatingParallax();

  const cards = document.querySelectorAll<HTMLElement>('.tilt-card');

  cards.forEach(card => {
    const shine = document.createElement('div');
    shine.className = 'shine';
    card.appendChild(shine);

    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * 30;
      const rotateY = ((x - centerX) / centerX) * -25;

      card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;

      const percentX = (x / rect.width) * 100;
      const percentY = (y / rect.height) * 100;
      shine.style.background = `radial-gradient(circle at ${percentX}% ${percentY}%, rgba(255,255,255,0.4), transparent 40%)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
    });
  });
});

const floatingElements = ref<HTMLElement[]>([]);

onMounted(() => {
  floatingElements.value = Array.from(document.querySelectorAll('.float'));

  const handleScroll = () => {
    const scrollY = window.scrollY;
    floatingElements.value.forEach((element) => {
      const speed = parseFloat(element.dataset.speed || '0.5');
      const offset = scrollY * speed;
      element.style.transform = `translateY(${offset}px)`;
    });
  };

  window.addEventListener('scroll', handleScroll);

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
    document.documentElement.classList.remove("dark")
  });
});

const setupFloatingParallax = () => {
  const merch = document.getElementById('merch');
  if (!merch) return;

  const floats = merch.querySelectorAll<HTMLElement>('.float');

  const handleScroll = () => {
    const rect = merch.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    const start = windowHeight;
    const end = -rect.height;

    const rawProgress = (start - rect.top) / (start - end);
    const progress = Math.min(Math.max(rawProgress, 0), 1);

    floats.forEach(float => {
      const speed = parseFloat(float.getAttribute('data-speed') || '0.3');
      const offset = progress * 200 * speed;
      float.style.transform = `translateY(${-offset}px)`;
    });
  };

  window.addEventListener('scroll', handleScroll);
  handleScroll();

  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
};
</script>

<template>
  <Header/>
  <div class="container">
    <div class="spa-box">

      <section class="section">
        <SpaBoxMain :images="images" :interval="3000"/>
        <div class="spa-box__footer">
          <img src="../assets/logo-white.png" alt="">
          <p class="spa-box__comment">Проектирование, монтаж и сервисное обслуживание.
            Ростов-на-Дону и Юг Росcии.</p>
        </div>
      </section>

      <section class="section" id="features">
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

      <section class="section" id="cards">
        <ScrollCards :cards-data="cards" direction="vertical"/>
        <Slider></Slider>
      </section>

      <section class="section" id="textdrop">
        <div class="spa-box__textdrop">
          <div class="spa-box__textdrop--title">
            <p class="spa-box__name">Вы не пожалеете</p>
            <h2>Что мы можем предложить</h2>
            <p class="spa-box__comment">качественное исполнение</p>
            <div class="spa-box__textdrop--description">
              <p>Вы можете выбрать лучший вариант вашего отдыха в Нашем SPA-BOX’е.</p>
            </div>
          </div>
          <div class="spa-box__container">
            <TextDropMenu/>
          </div>
        </div>
      </section>

      <section class="section" id="merch">
        <div class="merch-box">
          <img src="../assets/merchbox.png" alt="Основной товар" class="main"/>
          <div class="merch-box__floating">
            <img src="../assets/77696c19355de7d5998981b7664e4e4c.png" alt="Левый товар" class="float float-top-left" data-speed="0.2"/>
            <img src="../assets/ac2bcc88c008213a39f6dc6867418cf5.png" alt="Правый товар" data-speed="0.2"
                 class="float float-bottom-right"/>
          </div>
          <div class="merch-box__text">
            <h2>МЕРЧ БОХ</h2>
            <p>На входе стойки с мерчом, которые порадуют вас</p>
          </div>
          <div class="merch-box__floating">
            <img src="../assets/38c97741fd47288c1f998c5750cad0d6.png" alt="Левый товар" class="float float-left" data-speed="0.2" />
            <img src="../assets/ac2bcc88c008213a39f6dc6867418cf5.png" alt="Правый товар" class="float float-right" data-speed="0.2"/>
          </div>
          <div class="merch-box__stand">
            <img src="../assets/stand.jpg" alt="Стойка с мерчем"/>
          </div>
          <div class="merch-box__floating">
            <img src="../assets/77696c19355de7d5998981b7664e4e4c.png" alt="Левый товар" class="float float-left-under" data-speed="0.2"/>
            <img src="../assets/38c97741fd47288c1f998c5750cad0d6.png" alt="Правый товар" data-speed="0.2"
                 class="float float-right-under"/>
          </div>
        </div>
      </section>

    </div>
  </div>
  <Footer/>
</template>