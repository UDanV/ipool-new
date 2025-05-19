<template>
  <div class="not-found">
    <a class="bear-link" href="https://t.me/UDan_V" target="_blank" rel="noreferrer noopener">
      <img src="../assets/logo.svg" alt="logo">
    </a>

    <h1>
      404
      <span aria-hidden="true">404</span>
    </h1>

    <div class="cloak__wrapper">
      <div class="cloak__container">
        <div class="cloak"></div>
      </div>
    </div>

    <div class="info">
      <p>
        Нам кажется, что вы перешли на несуществующую страницу...
        Давайте вернемся на главную
      </p>
      <a class="follow" href="/" rel="noreferrer noopener">На главную</a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount } from 'vue'

const handleMouseMove = (e: MouseEvent) => {
  const { innerWidth, innerHeight } = window
  const x = (e.clientX / innerWidth - 0.5) * 200
  const y = (e.clientY / innerHeight - 0.5) * 200

  document.documentElement.style.setProperty('--swing-x', x.toFixed(0))
  document.documentElement.style.setProperty('--swing-y', y.toFixed(0))
}

onMounted(() => {
  window.addEventListener('mousemove', handleMouseMove)
})

onBeforeUnmount(() => {
  window.removeEventListener('mousemove', handleMouseMove)
})
</script>

<style scoped>
:root {
  --swing-x: 0;
  --swing-y: 0;
  --bg: hsl(0 0% 70%);
  --header: hsl(0 0% 65%);
  --lit-header: hsl(0 0% 100%);
  color-scheme: dark only;
}

.not-found {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: var(--bg);
  position: relative;
  overflow: hidden;
}

h1 {
  font-size: clamp(5rem, 40vmin, 20rem);
  font-family: 'Open Sans', sans-serif;
  margin: 0;
  letter-spacing: 1rem;
  background: radial-gradient(var(--lit-header), var(--header) 45%) calc(50% + var(--swing-x) * 0.5%) 100% / 200% 200%;
  -webkit-background-clip: text;
  color: transparent;
  transition: --swing-x 0.3s ease, --swing-y 0.3s ease;
  position: relative;
}

h1 span {
  position: absolute;
  top: 0;
  left: 0;
  color: hsl(0 0% 0% / 0.9);
  filter: blur(0.2vmin);
  transform: scale(1.05) translate3d(0, 12%, -10vmin)
  translate(calc(var(--swing-x) * 0.05%), calc(var(--swing-y) * -0.025%));
  pointer-events: none;
  transition: transform 0.3s ease;
}

.cloak__wrapper {
  position: fixed;
  inset: 0;
  pointer-events: none;
}

.cloak__container {
  height: 250vmax;
  width: 250vmax;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.cloak {
  height: 100%;
  width: 100%;
  transform-origin: 50% 25%;
  background: radial-gradient(
      40% 40% at 50% calc(42% + var(--swing-y) * 0.01%),
      transparent,
      hsl(0 0% 2% / 0.94) 38vmax
  );
  transform: rotate(calc(var(--swing-x) * -0.25deg));
  transition: transform 0.3s ease;
}

.info {
  color: hsl(0 0% 15%);
  text-align: center;
  max-width: 44ch;
  margin-top: 2rem;
}

.info p {
  font-weight: 400;
  transition: color 0.3s ease;
}

.follow {
  display: inline-block;
  margin-top: 1rem;
  border: 1px solid currentColor;
  padding: 0.75rem 2rem;
  border-radius: 6px;
  text-decoration: none;
  color: currentColor;
  transition: background 0.3s ease;
}

.follow:hover {
  background: hsl(0 0% 90%);
}

.bear-link {
  color: black;
  position: fixed;
  top: 1rem;
  left: 1rem;
  width: 48px;
  display: grid;
  place-items: center;
  opacity: 0.8;
  z-index: 10;
}

.bear-link:hover {
  opacity: 1;
}
</style>