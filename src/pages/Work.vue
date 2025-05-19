<script lang="ts" setup>
import {ref, computed, onMounted, nextTick} from 'vue'
import Header from "../components/header.vue";
import Footer from "../components/footer.vue";
import {setupScrollAnimations} from "../plugins/setupScrollAnimations.ts";

const tabs = ['Дизайн', 'Проектирование', 'Стройка', 'Монтаж оборудования', "Сервисное обслуживание"]

const activeTab = ref('Дизайн')
const progress = computed(() => {
  const currentIndex = tabs.indexOf(activeTab.value);
  return (currentIndex / (tabs.length - 1)) * 100
})

function goToNextTab() {
  const currentIndex = tabs.indexOf(activeTab.value)
  if (currentIndex < tabs.length - 1) {
    activeTab.value = tabs[currentIndex + 1]
    nextTick(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    })
  }
}

onMounted(() => {
  setupScrollAnimations()
})
</script>

<template>
  <Header />
  <div class="content__switcher">
    <section class="section">
      <div class="tabs-container">
        <div class="button-group">
          <button
              v-for="tab in tabs"
              :key="tab"
              :class="{ active: activeTab === tab }"
              @click="activeTab = tab"
          >
            {{ tab }}
          </button>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="content__area">
        <div class="content__image">
          <div class="content__info">
            <p v-if="activeTab === 'Дизайн'" class="num">( 1 )</p>
            <p v-if="activeTab === 'Проектирование'" class="num">( 2 )</p>
            <p v-if="activeTab === 'Стройка'" class="num">( 3 )</p>
            <p v-if="activeTab === 'Монтаж оборудования'" class="num">( 4 )</p>
            <p v-if="activeTab === 'Сервисное обслуживание'" class="num">( 5 )</p>
            <img class="next-slide" src="../assets/lineSlide.svg" alt="nextSlide">
          </div>
          <img v-if="activeTab === 'Дизайн'" src="../assets/design.gif" alt="Фото процесса" />
          <img v-if="activeTab === 'Проектирование'" src="../assets/engineering.gif" alt="Фото процесса" />
          <img v-if="activeTab === 'Стройка'" src="../assets/building.gif" alt="Фото процесса" />
          <img v-if="activeTab === 'Монтаж оборудования'" src="../assets/spabox4.jpg" alt="Фото процесса" />
          <img v-if="activeTab === 'Сервисное обслуживание'" src="../assets/kuznetsov-cruiser.jpg" alt="Фото процесса" />
          <p>Как мы работаем</p>
        </div>

        <div class="progress-container" v-if="activeTab">
          <div class="water-progress" :style="{ height: progress + '%' }">
            <div class="water-wave"></div>
          </div>
        </div>

        <div class="content__text-block">
          <div class="content__text" v-if="activeTab === 'Дизайн'">
            <h2>Процесс создания дизайна</h2>
            <p>Дизайн – это творческая часть работы, направленная на создание визуальной концепции, которая соответствует эстетическим и функциональным требованиям клиента.</p>
            <p>Выявление потребностей клиента: обсуждение пожеланий, стиля, функций и особенностей будущего пространства. Изучение особенностей объекта: замеры, анализ текущего состояния помещения или участка. Исследование референсов: определение визуального направления (цветовые палитры, текстуры, стилистика).</p>
            <h3>2.Создание концепции</h3>
            <div class="two-sized">
              <p>Разработка нескольких концептуальных идей с учетом пожеланий клиента.</p>
              <p>Создание эскизов или коллажей для демонстрации общего стиля и настроения проекта.</p>
            </div>
            <h3>3.Планирование решения</h3>
            <p>Создание вариантов компоновки пространства (зонирование, расстановка мебели и оборудования).</p>
            <p>Утверждение оптимального варианта планировки после согласования с клиентом.</p>
            <h3>4.3D-визуализация</h3>
            <p>Разработка фотореалистичных изображений пространства.</p>
            <p>Демонстрация клиенту будущего вида объекта с учетом всех материалов, освещения и декора.</p>
            <h3>5.Финализация дизайна</h3>
            <p>Утверждение финальной концепции дизайна.</p>
            <p>Подготовка перечня используемых материалов, мебели и декоративных элементов.</p>
            <div class="next-button-container" v-if="activeTab !== tabs[tabs.length - 1]">
              <button @click="goToNextTab" class="next-button">Далее →</button>
            </div>
          </div>
          <div class="content__text" v-else-if="activeTab === 'Проектирование'">
            <h2>Процесс проектирования</h2>
            <p>Проектирование – это техническая часть работы, направленная на создание детализированной документации для реализации утвержденного дизайна.</p>
            <h3>Техническое задание (ТЗ)</h3>
            <p>Важно учесть не только эстетические предпочтения,
              но и функциональные задачи, которые должны быть решены в рамках будущего пространства. </p>
            <p>Техническое задание служит основой для дальнейшей работы и определяет ключевые параметры, такие как размеры, материалы и инженерные системы.</p>
            <p>После утверждения технического задания начинается разработка чертежей. Этот этап включает создание обмерного плана, на котором фиксируются точные размеры помещений, расположение окон, дверей и коммуникаций.</p>
            <p>На основе этих данных создаются рабочие чертежи, которые детализируют каждый элемент проекта. Чертежи могут включать планы зонирования, схемы размещения оборудования и детализированные планы отделки.</p>
            <p>“ Важным аспектом является также разработка инженерных решений, которые обеспечивают надежную работу всех систем – от водоснабжения до электрики. “</p>
            <h2>Следующий шаг – это расчет необходимых материалов.</h2>
            <p>На основе разработанных чертежей составляется спецификация, в которой указываются все используемые материалы и их объемы.
              Это позволяет не только оценить стоимость проекта, но и обеспечить правильность закупок на этапе реализации.</p>
            <p>Смета включает в себя все затраты на материалы, работу специалистов и дополнительные расходы,
              что помогает избежать непредвиденных ситуаций
              в процессе строительства.</p>
            <p>Важной частью проектирования являются инженерные расчеты. Специалисты оценивают нагрузки на конструкции, проверяют соответствие проекта строительным нормам и правилам (СНиП).</p>
            <p>Это гарантирует безопасность и долговечность построенного объекта. Инженерные решения должны быть согласованы с дизайнерскими концепциями, чтобы обеспечить гармоничное сочетание функциональности и эстетики.</p>
            <h2>Что же в итоге?</h2>
            <p>Когда все чертежи и расчеты готовы, происходит подготовка итогового проектного пакета.</p>
            <p>В него входят все необходимые документы: чертежи, спецификации, сметы и расчеты. Этот пакет передается строителям для реализации проекта. Важно отметить, что успешное проектирование требует тесного взаимодействия между дизайнерами и инженерами на всех этапах работы.</p>
            <p>Это сотрудничество позволяет создать гармоничное пространство, которое будет не только красивым, но и функциональным.</p>
            <div class="next-button-container" v-if="activeTab !== tabs[tabs.length - 1]">
              <button @click="goToNextTab" class="next-button">Далее →</button>
            </div>
          </div>
          <div class="content__text" v-else-if="activeTab === 'Стройка'">
            <h2>Процесс Строительства</h2>
            <p>Процесс строительства включает в себя несколько ключевых этапов, которые обеспечивают успешную реализацию проекта от начальной идеи до окончательной эксплуатации объекта.</p>
            <h3>Подготовительный этап</h3>
            <p>Строительство начинается с подготовительного этапа, который включает в себя принятие решения о строительстве, выбор земельного участка и его покупку или аренду.</p>
            <p>На этом этапе также осуществляется разработка градостроительного плана, который определяет,
              как будет размещен объект на территории.
              Важным шагом является проведение публичных слушаний, на которых обсуждаются планы застройки
              с местными жителями и заинтересованными сторонами.</p>
            <p>После этого проводятся инженерные изыскания, включая геологические и экологические исследования, что позволяет оценить условия для строительства.</p>
            <h2>Следующий этап – это разработка проектной документации.</h2>
            <p>На этом этапе создаются все необходимые чертежи и схемы, которые детализируют проект.</p>
            <p>Проект проходит экспертизу и утверждение соответствующими органами власти. Получение разрешения на строительство является критически важным шагом, так как без него нельзя начинать строительные работы.</p>
            <p>После получения всех необходимых разрешений начинается непосредственное строительство. Этот этап включает в себя земляные работы, такие как выемка грунта и подготовка фундамента.</p>
            <p>Фундамент является основой здания, поэтому его проектирование и выполнение требуют особого внимания. Далее происходит возведение конструкций здания: стен, перекрытий и крыши.</p>
            <p>Важно также установить инженерные системы – водоснабжение, электрику и вентиляцию – на этом этапе.</p>
            <p>В процессе строительства осуществляется <b>контроль качества работ.</b> Специальные инспекторы проверяют соответствие выполненных работ проектной документации и строительным нормам. Это помогает избежать ошибок и недочетов, которые могут повлиять на безопасность объекта в будущем.</p>
            <h2>Этап внутренней отделки и благоустройства территории.</h2>
            <p>На этом этапе проводятся работы по отделке внутренних помещений, установке окон и дверей,
              а также прокладке коммуникаций.
              Благоустройство включает в себя создание ландшафта вокруг здания: озеленение, укладка дорожек и установка освещения.</p>
            <p class="italic">Завершением строительного процесса является ввод объекта в эксплуатацию. Для этого необходимо получить заключение о соответствии выполненных работ проекту от государственных органов. После этого объект регистрируется в государственных учреждениях, что подтверждает его законность и готовность к эксплуатации.</p>
            <div class="next-button-container" v-if="activeTab !== tabs[tabs.length - 1]">
              <button @click="goToNextTab" class="next-button">Далее →</button>
            </div>
          </div>
          <div v-else-if="activeTab === 'Монтаж оборудования'">
            <h2>Блок 3</h2>
            <p>Это контент третьего блока.</p>
            <div class="next-button-container" v-if="activeTab !== tabs[tabs.length - 1]">
              <button @click="goToNextTab" class="next-button">Далее →</button>
            </div>
          </div>
          <div v-else-if="activeTab === 'Сервисное обслуживание'">
            <h2>Блок 3</h2>
            <p>Это контент третьего блока.</p>
            <div class="next-button-container" v-if="activeTab !== tabs[tabs.length - 1]">
              <button @click="goToNextTab" class="next-button">Далее →</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  <Footer />
</template>

<style scoped lang="scss">
.tabs-container {
  position: relative;
}

.button-group {
  display: flex;
  justify-content: end;
  border-top: 1px solid #000000;

  button {
    padding: 25px;
    border-right: 1px solid #000000;
    border-left: 1px solid #000000;
    border-bottom: 1px solid #000000;
    border-radius: 0;
    cursor: pointer;
    background-color: transparent;
    position: relative;
    z-index: 2;

    &.active {
      border: none;
      border-radius: 0;
      background-color: #000000;
      color: white;
    }
  }
}

.progress-container {
  width: 109px;
  min-width: 60px;
  height: 500px;
  background-color: transparent;
  border-right: 1px solid #000;
  border-left: 1px solid #000;
  border-bottom: 1px solid #000;
  position: sticky;
  margin-right: 38px;
  margin-left: auto;
  overflow: hidden;

  @media (max-width: 1600px) {
    display: none;
  }
}

.water-progress {
  width: 100%;
  background-color: #5594FF;
  transition: height 0.5s cubic-bezier(0.65, 0, 0.35, 1);
  position: absolute;
  bottom: 0;
  left: 0;
  height: 0%;
}

.water-wave {
  position: absolute;
  top: 0;
  left: 0;
  width: 200%;
  height: 200%;
  background: url('data:image/svg+xml;utf8,<svg viewBox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"><path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="%235594FF" opacity=".25"/><path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" fill="%235594FF" opacity=".5"/><path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="%235594FF"/></svg>');
  animation: wov 8s linear infinite;
  transform: translate3d(0, 0, 0);
  opacity: 0.8;
}

.water-progress::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background: url('data:image/svg+xml;utf8,<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="30" r="2" fill="white" opacity="0.6"/><circle cx="50" cy="20" r="1.5" fill="white" opacity="0.4"/><circle cx="80" cy="40" r="1" fill="white" opacity="0.2"/><circle cx="30" cy="70" r="1.2" fill="white" opacity="0.3"/><circle cx="70" cy="60" r="1.7" fill="white" opacity="0.5"/></svg>');
  animation: bubbles 15s linear infinite;
}

.next-button-container {
  margin-top: 40px;
  text-align: right;
  width: 100%;

  .next-button {
    width: 100%;
    font-weight: 400;
    padding: 12px 24px;
    background-color: #000;
    color: white;
    border: none;
    cursor: pointer;
    font-size: 20px;
    border-radius: 0;

    &:hover {
      background-color: #333;
    }
  }
}

.content__area {
  display: flex;
  justify-content: space-between;

  .content__image {
    position: sticky;
    top: 100px;
    align-self: flex-start;
    flex: 0 0 40%;
    max-width: 500px;
    margin-left: 190px;

    img {
      width: 100%;
      object-fit: cover;
    }
  }

  .content__text-block {
    display: flex;
    flex: 1;
    padding: 20px;
    overflow-y: auto;
    max-width: 700px;
    margin-right: 50px;

    .two-sized {
      display: flex;
    }

    .italic {
      font-style: italic;
    }

    h2 {
      font-size: 48px;
      margin: 0;
    }

    h3 {
      font-size: 40px;
    }

    p {
      font-size: 24px;
    }
  }
}


@keyframes wov {
  0% {
    transform: translateX(0) translateZ(0) scaleY(1);
  }
  50% {
    transform: translateX(-25%) translateZ(0) scaleY(0.9);
  }
  100% {
    transform: translateX(-50%) translateZ(0) scaleY(1);
  }
}

@keyframes bubbles {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 0 -1000px;
  }
}

@media (max-width: 100vw) {
  .content__image {
    p {
      display: none;
    }

    .next-slide {
      display: none;
    }
  }
}

@media (max-width: 1600px) {
  .content__area {
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .content__image {
      position: static;
      margin: 0;
      align-self: auto;
    }

    .content__text-block {
      max-width: 100%;

      .two-sized {
        display: block;
      }
    }
  }

  .button-group {
    justify-content: space-between;

    button {
      width: 100%;
      padding: 0.6em 1.2em;
      margin-bottom: 50px;
    }
  }
}

@media (max-width: 714px) {
  .tabs-container {
    display: none;
  }

  .next-button-container {
    .next-button {
      width: 100%;
    }
  }

  .content__area {

    .content__text-block {
      max-width: 100%;
      margin: 11px;
      padding: 0;
    }

    .content__image {
      display: flex;
      justify-content: space-around;
      margin-top: 88px;
      max-width: 100%;
      width: 100%;
      background: #000000;
      align-items: center;

      .content__info {
        display: flex;
        flex-direction: column;
        height: 100%;
        gap: 200px;
      }

      img {
        width: 250px;
        height: 250px;
      }

      p {
        display: block;
        font-size: 13px;
        color: #ffffff;
        font-style: italic;
        margin: 0;
        align-self: end;
      }

      .num {
        opacity: 0.4;
        font-size: 32px;
        align-self: auto;
      }

      .next-slide {
        display: block;
        width: auto;
        height: 10%;
      }
    }
  }

  .content__text-block {
    .content__text {
      h2 {
        font-size: 24px;
      }

      h3 {
        font-size: 15px;
      }

      p {
        font-size: 15px;
      }
    }
  }
}

@media (max-width: 480px) {
  .content__area {
    .content__image {
      img {
        width: 200px;
        height: 200px;
      }
    }
  }
}
</style>