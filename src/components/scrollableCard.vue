<template>
  <section class="section" ref="cardsContainer" id="scrollable">
    <div class="cards-wrapper">
      <div
          v-for="(card, index) in cardsData"
          :key="index"
          class="spa-box__cards"
          :ref="el => { if (el) cardRefs[index] = el }"
      >
        <div class="spa-box__cards--info">
          <svg xmlns="http://www.w3.org/2000/svg" width="210" height="310" viewBox="0 0 221 210" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M204.384 99.5623C207.765 120.81 226.938 141.479 218.721 161.374C210.713 180.764 184.866 184.896 165.627 193.405C148.091 201.161 130.335 210.689 111.23 208.917C92.6735 207.196 78.9152 192.4 62.3839 183.829C45.0033 174.817 21.8024 173.499 11.2283 157.068C0.647684 140.627 9.32707 119.056 8.1537 99.5623C6.8952 78.6549 -6.57088 56.0061 4.05713 37.933C14.6943 19.8444 40.2268 18.3002 60.0624 11.2911C76.8075 5.37401 93.4782 -0.682475 111.23 0.0623626C128.556 0.789329 144.704 7.28521 159.968 15.4829C175.57 23.8624 192.446 32.489 200.699 48.1135C208.877 63.5928 201.635 82.2867 204.384 99.5623Z"
                  fill="white"/>
            <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="black" font-size="38"
                  font-style="italic" font-family="gothampro">
              {{ card.title }}
            </text>
          </svg>
          <p>{{ card.description }}</p>
        </div>
        <div class="spa-box__cards--image tilt-card">
          <img :src="card.image" :alt="card.title">
        </div>
        <div class="spa-box__cards--attribute">
          <p>Характеристики</p>
          <div class="spa-box__cards--list">
            <div v-for="(attr, i) in card.attributes" :key="i">
              <p class="name">{{ attr.name }}</p>
              <div class="parameters">
                <span style="font-size: 48px">-</span>
                <p class="attribute">{{ attr.value }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import {ref, onMounted, onBeforeUnmount} from 'vue'

export default {
  name: 'ScrollableCards',
  props: {
    cardsData: {
      type: Array,
      required: true
    },
    direction: {
      type: String,
      default: 'vertical'
    }
  },
  setup(props) {
    const cardsContainer = ref(null)
    const cardRefs = ref([])

    const initScrollAnimation = () => {
      gsap.registerPlugin(ScrollTrigger);

      setTimeout(() => {
        gsap.set(cardRefs.value, {
          yPercent: (i) => i === 0 ? 0 : 100,
          opacity: 1,
        });

        cardRefs.value.forEach((_, index) => {
          if (index === 0) return;

          const firstCard = cardRefs.value[0];
          const secondCard = cardRefs.value[1];
          const thirdCard = cardRefs.value[2];

          ScrollTrigger.create({
            trigger: cardsContainer.value,
            start: `top+=${(index - 1)}vh 20%`,
            end: `top+=${index + 50}vh bottom`,

            onEnter: () => {
              gsap.to(firstCard, {
                yPercent: -150,
                duration: 0.8,
                ease: 'power2.inOut'
              });
              gsap.to(secondCard, {
                yPercent: -150,
                duration: 0.8,
                ease: 'power2.inOut'
              });
              gsap.to(thirdCard, {
                yPercent: -150,
                duration: 0.8,
                ease: 'power2.inOut'
              });
            },

            onEnterBack: () => {
              gsap.to(firstCard, {
                yPercent: 0,
                duration: 0.8,
                ease: 'power2.inOut'
              });
              gsap.to(secondCard, {
                yPercent: 0,
                duration: 0.8,
                ease: 'power2.inOut'
              });
              gsap.to(thirdCard, {
                yPercent: 150,
                duration: 0.8,
                ease: 'power2.inOut'
              });
              }
          });

          ScrollTrigger.create({
            trigger: cardsContainer.value,
            start: `top+=${(index + 100)}vh 20%`,
            end: `top+=${index + 150}vh bottom`,

            onEnter: () => {
              gsap.to(secondCard, {
                yPercent: -280,
                duration: 0.8,
                ease: 'power2.inOut'
              });
              gsap.to(thirdCard, {
                yPercent: -280,
                duration: 0.8,
                ease: 'power2.inOut'
              });
            },

            onEnterBack: () => {
              gsap.to(secondCard, {
                yPercent: -150,
                duration: 0.8,
                ease: 'power2.inOut'
              });
              gsap.to(thirdCard, {
                yPercent: 300,
                duration: 0.8,
                ease: 'power2.inOut'
              });
            },
          });
        });

        gsap.set(cardsContainer.value, {
          height: `${30 * cardRefs.value.length}vh`
        });

      }, 100);
    };

    onMounted(() => {
      initScrollAnimation()
    })

    onBeforeUnmount(() => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    })

    return {
      cardsContainer,
      cardRefs
    }
  }
}
</script>

<style scoped lang="scss">
.section {
  height: 100vh;
  position: relative;
}

.cards-wrapper {
  position: relative;
  height: auto;
}

.spa-box__cards {
  display: flex;
  justify-content: space-between;
  margin-top: 300px;

  p {
    font-size: 36px;
    margin: 0;
    text-align: left;
  }

  &--info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: left;

    p {
      font-size: 36px;
      max-width: 500px;
    }

    svg {

    }
  }

  &--image {
    position: relative;
    overflow: hidden;
    cursor: pointer;
    margin-left: 35px;
    margin-right: 80px;

    img {
      display: block;
      width: 100%;
      height: 100%;
      transition: transform 0.5s ease;
      min-width: 400px;
      max-width: 480px;
      max-height: 650px;
    }

    .tilt-card {
      perspective: 1200px;
      transform-style: preserve-3d;
      transition: transform 0.1s ease;
      border-radius: 20px;
      overflow: hidden;
      position: relative;

      img {
        display: block;
        width: 100%;
        border-radius: 20px;
        transition: transform 0.2s ease;
        will-change: transform;
      }

      &::after {
        content: '';
        position: absolute;
        top: 0;
        left: -50%;
        width: 200%;
        height: 100%;
        background: linear-gradient(
                120deg,
                rgba(255, 255, 255, 0),
                rgba(255, 255, 255, 0.4),
                rgba(255, 255, 255, 0)
        );
        transform: rotateZ(0deg);
        opacity: 0;
        transition: opacity 0.3s;
        pointer-events: none;
      }

      &:hover::after {
        opacity: 1;
        animation: shimmer-light 1.2s ease-in-out;
      }
    }

    &:hover img {
      transform: scale(1.05);
    }

    &:hover .spa-box__cards--image {
      min-width: 650px;
    }

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: -150%;
      width: 150%;
      height: 100%;
      background: linear-gradient(
              120deg,
              transparent 0%,
              transparent 100%
      );
      transform: skewX(-20deg);
      transition: none;
      pointer-events: none;
    }

    &:hover::before {
      animation: shimmer 1.5s ease-in-out;
    }
  }

  &--attribute {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  &--list {
    p {
      font-size: 48px;
    }

    .name {
      max-width: 150px;
    }

    .attribute {
      font-weight: bold;
      text-align: center;
    }

    .parameters {
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid rgba(255, 255, 255, 0.4);
      width: 100%;
    }
  }
}

@media (max-width: 1350px) {
  .spa-box__cards {
    &--info {
      p {
        font-size: 25px;
      }
    }
  }
}
</style>